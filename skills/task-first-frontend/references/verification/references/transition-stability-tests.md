# 전이 유지 검사 방법

이 문서는 [전이 중 유지 조건](transition-stability.md)에서 정한 조건을 검증할 방법과 예시 코드를 고를 때 쓴다. 테스트 종류는 사용 중인 프레임워크보다 입증할 동작에 맞춰 정한다.

## 1. 방법 선택: 이 질문에는 어떤 검사가 맞는가?

| 검증할 질문 | 우선 검토할 방법 | 확인할 근거 |
| --- | --- | --- |
| 특정 사건 뒤 어떤 상태가 허용되는가? | 상태 전이 단위·컴포넌트 테스트 | 상태, 출력, 허용·금지 전이 |
| 재조회 중 기존 선택과 입력이 유지되는가? | 컴포넌트 테스트와 브라우저 E2E | 선택한 항목, 입력값, 표시 내용 |
| 로딩 전후에 툴바나 핵심 영역이 이동하는가? | Playwright의 요소 위치·크기 측정 | `boundingBox()`와 상태별 비교 |
| 갱신 뒤 포커스와 스크롤 위치가 남는가? | 브라우저에서 활성 요소와 스크롤 값 측정 | `document.activeElement`, `scrollTop` |
| 화면이 중간에 이동했다가 제자리로 돌아오는가? | 전이 중 측정 또는 Layout Shift 관찰 | 시간대별 위치 변화와 이동 기록 |
| 완료 뒤 이전 안내가 사라졌는가? | 브라우저 E2E의 부재 검사 | 이전 로딩·오류·완료 안내의 숨김 |
| 화면 구성과 시각적 표현이 달라졌는가? | 필요한 영역의 스크린샷 회귀 검사 | 고정된 환경의 기준 이미지와 차이 |
| 좁은 화면에서 요소가 겹치거나 가로로 넘치거나 글자가 잘리는가? | 뷰포트별 E2E·배치 조건 검사와 캡처 확인 | 주요 요소의 경계, 접근 가능성, 캡처 |

한 유지 조건에 여러 테스트를 겹쳐 두기보다 빠르고 안정적인 층에서 먼저 검증하고, 실제 브라우저 렌더링이 필요한 조건만 브라우저 테스트로 남긴다.

## 2. 비동기 상태 재현: 대기 중인 순간을 어떻게 붙잡는가?

요청을 시작하기 전에 네트워크 응답을 제어할 준비를 마친다. 요청이 실제로 발생했는지 확인하고, 응답을 보류한 채 로딩 UI와 배치 조건을 검사한 뒤, 응답을 완료하거나 오류를 돌려주어 후속 상태를 검증한다. 상태를 드러내는 접근성 정보가 있으면 그것을 기준으로 기다리고, 필요하면 안정적인 테스트 식별자를 쓴다.

### 위치 유지 예시

아래 코드는 재조회 중 편집 툴바의 세로 위치가 유지되는지와 끝난 뒤 재조회 표시가 사라지는지 검사하는 구조다. 경로, 응답 형식, 접근성 이름, 허용 범위는 실제 프로젝트에서 확인해 바꾼다.

```ts
import { test, expect } from '@playwright/test';

test('재조회 중 편집 툴바 위치가 유지된다', async ({ page }) => {
  await page.goto('/posts');

  const toolbar = page.getByTestId('editor-toolbar');
  await expect(toolbar).toBeVisible();
  const before = await toolbar.boundingBox();
  expect(before).not.toBeNull();

  let release!: () => void;
  const pending = new Promise<void>((resolve) => {
    release = resolve;
  });

  let markIntercepted!: () => void;
  const intercepted = new Promise<void>((resolve) => {
    markIntercepted = resolve;
  });

  await page.route('**/api/posts**', async (route) => {
    markIntercepted();
    await pending;
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([{ id: 'post-1', title: '문서' }]),
    });
  });

  try {
    await page.getByRole('button', { name: '새로고침' }).click();
    await intercepted;
    await expect(page.getByTestId('posts-refreshing')).toBeVisible();

    const during = await toolbar.boundingBox();
    expect(during).not.toBeNull();

    // 2px은 예시값이다. 실제 허용 범위는 화면의 유지 조건에 따라 정한다.
    expect(Math.abs(during!.y - before!.y)).toBeLessThanOrEqual(2);
  } finally {
    release();
  }

  await expect(page.getByTestId('posts-refreshing')).toBeHidden();
  const after = await toolbar.boundingBox();
  expect(after).not.toBeNull();
  expect(Math.abs(after!.y - before!.y)).toBeLessThanOrEqual(2);
});
```

이 예시는 세 시점의 위치를 비교한다. 두 측정 사이의 짧은 이동까지 검증하려면 프레임 단위 관찰이나 아래의 Layout Shift 기록을 더한다. `page.route()`는 서비스 워커 같은 요청 방식 때문에 요청을 가로채지 못할 수 있으므로 실제로 가로챘는지 확인한다.

### 포커스와 스크롤 유지 예시

아래 코드는 위 예시와 같은 응답 보류 장치를 쓴다는 전제에서, 갱신 전후로 입력 포커스와 목록 내부 스크롤 위치가 유지되는지 측정하는 부분만 보여 준다. 선택자와 허용 범위는 실제 프로젝트에 맞춰 바꾼다.

```ts
const list = page.getByTestId('post-list');
const titleInput = page.getByRole('textbox', { name: '제목' });

await list.evaluate((el) => { el.scrollTop = 600; });
await titleInput.focus();
const scrollBefore = await list.evaluate((el) => el.scrollTop);

// 응답을 보류한 상태에서 갱신을 일으키고, 보류를 해제한 뒤 측정한다.
await expect(page.getByTestId('posts-refreshing')).toBeHidden();

await expect(titleInput).toBeFocused();
const scrollAfter = await list.evaluate((el) => el.scrollTop);
expect(Math.abs(scrollAfter - scrollBefore)).toBeLessThanOrEqual(1);
```

### Layout Shift 기록 예시

브라우저의 `PerformanceObserver`로 `layout-shift` 항목을 모으면 렌더링 중 생긴 이동의 시점과 영향을 받은 요소를 볼 수 있다. 지원 여부를 확인한 뒤 전이가 시작되기 전에 관찰을 등록한다. CLS 계산에서는 최근 사용자 입력 직후의 이동이 빠지지만, 클릭 직후의 뜻밖의 이동도 찾아야 하는 UI 테스트에서는 `hadRecentInput`이 참인 기록까지 모으고 테스트가 정한 허용 조건으로 판단한다.

```ts
await page.evaluate(() => {
  (window as any).__shifts = [];
  if (!PerformanceObserver.supportedEntryTypes.includes('layout-shift')) return;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as any[]) {
      (window as any).__shifts.push({
        value: entry.value,
        hadRecentInput: entry.hadRecentInput,
        nodes: (entry.sources ?? []).map((s: any) => s.node?.nodeName ?? null),
      });
    }
  }).observe({ type: 'layout-shift', buffered: false });
});

// 전이를 일으키고 끝날 때까지 기다린 뒤 기록을 읽는다.
const shifts = await page.evaluate(() => (window as any).__shifts);
```

이 API의 지원 범위는 브라우저마다 다르고, 크기만 바뀌고 다른 요소를 움직이지 않는 변화나 시각적 변환처럼 기록되지 않는 변화도 있다. `layout-shift`는 원인을 찾는 보조 증거로 쓰고, 핵심 요소의 크기·위치·상태 검증을 대신하지 않는다. 지원하지 않는 브라우저에서 빈 기록이 나왔다면 이동이 없다는 뜻으로 읽지 않는다.

## 3. 실패 기록: 무엇을 남기는가?

테스트가 실패하면 상태 전이, 재현 입력, 기대한 유지 조건, 관찰된 차이를 남긴다. 관찰할 수 없었던 중간 상태는 검증 완료로 기록하지 않는다.

## 참고 문서

- [Playwright 네트워크 가로채기](https://playwright.dev/docs/network)
- [Playwright 스크린샷 비교](https://playwright.dev/docs/test-snapshots)
- [MDN LayoutShift](https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift)
- [web.dev CLS](https://web.dev/articles/cls)
