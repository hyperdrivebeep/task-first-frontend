# 안티슬롭 점검 (S4)

관찰된 실패: 실제 에이전트가 만든 시안에 카드마다 장식용 왼쪽 강조 막대가 붙고, 모든 항목이 테두리+둥근 카드에 들어간 채 다시 패널 안에 중첩되고, 항목마다 색 pill 배지가 반복되고, accent 색이 사방에 쓰였다. [가이드 02](guides/02-no-ai-slop-mobile-web-ui-ux.md) 3절의 말로 하면 "기본값이 결정을 대신한" 상태다. 카드나 색 자체가 잘못은 아니다. 정보 관계와 과업으로 설명할 수 없을 때 slop이 된다.

## 자가 점검 AS-1~AS-5

시안마다 `03-alts/boards/board.md`의 자가 점검 표에 다섯 행을 적는다. 하나라도 FAIL이면 시안을 고친 뒤 다시 점검한다.

| ID | 점검 | PASS 조건 | 대안 |
| --- | --- | --- | --- |
| AS-1 | 장식용 왼쪽 강조 막대 | 카드·항목·인용·알림에 왼쪽(또는 inline-start) 색 막대가 없다. box-shadow inset이나 `::before`로 흉내 낸 막대도 없다 | 상태는 텍스트·아이콘·위치로 나타낸다. 선택은 배경 톤이나 굵기로 표시한다 |
| AS-2 | 카드 중첩 | 테두리+둥근 모서리 상자가 다른 테두리+둥근 상자 안에 들어가지 않는다. 모든 항목을 카드로 감싸지 않는다 | 순차 문장은 section, 비교는 표·목록으로 둔다. 독립적으로 재배열하는 주제만 카드로 묶는다 ([C-24](guardrails/references/rules-components.md)) |
| AS-3 | 반복 pill 배지 | 목록의 모든 항목에 색 pill 배지를 달지 않는다. 배지는 예외 상태에만 쓴다 | 평범한 텍스트 메타데이터, 열 정렬, 예외에만 표시 |
| AS-4 | accent 남용 | accent 색은 1차 행동과 핵심 상태에만 쓴다. accent 배경 색 종류가 적다 | canvas→surface→raised 재질 계층, 중립 색 위주 ([F-19](guardrails/references/rules-foundations.md)) |
| AS-5 | 역할 없는 장식 | 그라디언트·글래스·장식 모션·같은 fade-up 반복이 없다. 있으면 역할을 note에 적는다 | 의미를 설명할 수 없는 장식은 지운다 ([F-28](guardrails/references/rules-foundations.md)) |

## 게이트의 자동 검사

`gate.mjs --stage 4`는 `03-alts/` 아래 모든 `.html`(`<style>` 블록과 `style=""` 속성 포함)과 `.css`를 읽는다. CSS 변수(`var(--x)`)는 같은 파일 묶음에 선언된 값으로 바꿔 판단한다.

### FAIL: 장식용 왼쪽 막대

| 대상 | FAIL 조건 |
| --- | --- |
| `border-left`, `border-inline-start` (단축형) | 보이는 테두리이고 폭이 2px 이상이거나, 폭이 1px이라도 색이 accent |
| `border-left-width`, `border-inline-start-width` | 같은 기준 |
| `border-width: 0 0 0 Npx` (왼쪽만 있는 4값) | 같은 기준 |
| `box-shadow: inset Npx 0 0 …` (x 오프셋만 있는 inset 그림자) | 같은 기준 |
| `::before`/`::after` + `position: absolute` + `left: 0` + 높이 100%(또는 top·bottom) + 폭 8px 이하 | 같은 기준 (색은 background) |

**INFO: 1px 중립 구분선.** 폭 1px이고 색이 중립이면 두 레이아웃 영역 사이의 구분선으로 보고 INFO만 낸다. 색을 알 수 없으면(currentColor 등) 1px은 중립으로 본다.

**중립과 accent 기준.** 색을 HSL로 바꿔 채도 0.25 이상, 명도 0.12~0.94, 불투명도 0.15 이상이면 accent다. 나머지(회색, 거의 흰색·검은색, 아주 옅은 투명색)는 중립이다. 기준값은 `gate.mjs`의 `ACCENT_MIN_SAT`, `ACCENT_MIN_L`, `ACCENT_MAX_L`, `ACCENT_MIN_ALPHA`에 있다.

### WARN

| 검사 | 조건 | 옵션 |
| --- | --- | --- |
| 카드 중첩 | 보이는 테두리와 `border-radius > 0`을 가진 규칙(카드형)에 걸리는 요소가 다른 카드형 요소 안에 있다. 선택자는 마지막 단순 선택자(클래스·태그)로 대조하는 근사치다 | - |
| 반복 pill | `border-radius ≥ 100px`(또는 9999px)이고 배경이나 테두리가 accent인 규칙에 걸리는 요소가 기준 횟수보다 많다 | `--max-pill-repeat`, 기본 4 |
| accent 배경 | `background`/`background-color`(그라디언트 색 포함)에 쓴 서로 다른 accent 색이 기준보다 많다 | `--max-accent-bg`, 기본 3 |

WARN은 FAIL이 아니지만 말없이 넘기지 않는다. 고치거나 board.md의 해당 시안 자가 점검 note에 이유(예: "상태 색 4종은 F-19 의미 색 체계")를 적는다.

### 검사가 못 보는 것

자동 검사는 정적 소스만 본다. 이미지로만 만든 시안(`alt_source: imagegen`), JS로 넣는 스타일, 복잡한 선택자 문맥은 검사하지 못한다. 그래서 자가 점검 표가 함께 필수다. 자동 검사 PASS를 "slop 없음"의 증명으로 쓰지 않는다.
