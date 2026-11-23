# 작업 폴더 계약

게이트(`scripts/gate.mjs`)는 이 구조와 표 형식을 읽는다. 파일 이름, 표의 열 이름, ```gate 블록의 키를 바꾸면 검사가 FAIL을 낸다. 열 순서는 자유이고, 표 앞뒤에 설명을 더해도 된다.

```text
<work>/
  reading-ledger.md                         S0
  00-contract.md                            S1
  01-before/before-<screen>-<width>.png|webp S2
  02-refs/INDEX.md, ref-*.png|webp           S3
  03-alts/alt-<id>-<width>.png|webp          S4  + 원본 *.html / *.css (03-alts 아래 아무 위치)
  03-alts/boards/board-<id>.png + .json      S4  (scripts/compose.mjs가 만든다)
  03-alts/compare/compare-<id>-<width>.png + .json  S4  (existing_ui: yes, compose.mjs)
  03-alts/boards/board.md                    S4
  04-verdicts.md                             S5
  05-after/after-<screen>-<width>.png|webp   S6  (01-before와 같은 이름 뒷부분, 같은 픽셀 크기)
  06-report.md                               S7
```

`<screen>`과 `<id>`는 영문 소문자·숫자·`-`만 쓴다. `<width>`는 CSS px 폭이다. 이미지는 PNG나 WebP만 받는다. 고해상도 캡처는 픽셀 폭이 선언 폭의 1, 1.25, 1.5, 2, 3배면 된다(아니면 WARN).

실행: `node <skill>/scripts/gate.mjs <work> --stage <0-7> [--max-accent-bg 3] [--max-pill-repeat 4]`. 검사는 누적이다. 결과는 `PASS / FAIL / WARN / INFO / N/A` 줄과 마지막 `RESULT:` 줄로 나온다. FAIL이 하나라도 있으면 종료 코드 1이다.

## reading-ledger.md (S0)

```markdown
| path | total_lines | last_line_read | method |
| --- | --- | --- | --- |
| C:/Users/me/.codex/skills/task-first-frontend/SKILL.md | 96 | 96 | Read 1-96 |
| C:/Users/me/.codex/skills/task-first-frontend/references/guides/02-no-ai-slop-mobile-web-ui-ux.md | 406 | 406 | Read 1-200, 201-406 |
```

검사: 파일 존재, `total_lines`가 실제 줄 수와 같음, `last_line_read == total_lines`, method가 비어 있지 않고 요약·skim이 아님, 단계별 필수 문서가 기록됨. 규칙은 [reading-and-delegation.md](reading-and-delegation.md).

## 00-contract.md (S1)

다섯 절(사람 / 여정 / 이상 상태 / 고정 케이스 / 상태)이 제목으로 있고 내용이 있어야 한다. 쓰는 방법은 [guardrails/references/method.md](guardrails/references/method.md)의 표를 따른다. `{{…}}` 자리표시자가 남으면 FAIL이다. 기계가 읽는 값은 ```gate 블록에 둔다.

````markdown
```gate
widths: 1440, 390
screens: home, detail
tasks: T1, T2
ref_tags: screens, flows, principles
existing_ui: yes
scope: implement
alternatives: 3
alt_source: html
```
````

| 키 | 값 | 검사 |
| --- | --- | --- |
| `widths` | 정수 목록 | 1440과 390이 없으면 `widths_reason:` 필수 (예: 데스크톱 전용, 1280·1536 지원) |
| `screens` | 화면 id 목록 | S2·S6 파일 이름에 쓰인다 |
| `tasks` | 과업 id 목록 | S3에서 과업마다 캡처 3개 이상, 사이트 2곳 이상 |
| `ref_tags` | [site-list.json](site-list.json)의 `tasks` 태그 | 해당 태그를 가진 사이트가 모두 방문 대상 |
| `existing_ui` | `yes` / `no` | `no`면 `existing_ui_reason:` 필수, S2 N/A |
| `scope` | `design-only` / `implement` / `small-fix` | design-only: S6 N/A, S5 UNVERIFIED는 WARN. small-fix: S3·S4 N/A |
| `alternatives` | 정수, 기본 3 | 3 미만이면 `alternatives_reason:` 필수 (사용자 지정 수) |
| `alt_source` | `html` (기본) / `imagegen` | imagegen이면 html/css 검사를 건너뛰고 WARN |

ref_tags 어휘: `screens`(실제 제품 화면), `flows`(과업 흐름 녹화), `paywall`, `landing`, `web-visual`, `motion-visual`, `nav-footer`, `microinteraction`, `motion-code`, `a11y`, `react-primitives`, `public-forms`, `enterprise`, `platform`, `ecommerce`, `cro`, `fintech`, `email`, `portfolio`, `history`, `typography`, `identity`, `design-kit`, `marketing-build`, `korean`, `principles`. 대부분의 앱 화면 작업은 최소 `screens, flows, principles`를 고른다.

## 01-before/ (S2), 05-after/ (S6)

`before-<screen>-<width>.png` ↔ `after-<screen>-<width>.png`. 상태를 더 나누려면 `before-<screen>-<width>-<state>.png`처럼 뒤에 붙인다. 게이트는 01-before의 모든 파일에 05-after의 같은 이름 뒷부분 파일이 있는지, 픽셀 크기가 같은지 확인한다. 바이트가 같은 쌍이나 애프터가 비포보다 오래된 파일은 WARN이다.

## 02-refs/INDEX.md (S3)

두 표가 있어야 한다.

```markdown
## 차용표
| file | url | captured_at | platform | product | task | part | principle | not_borrowed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ref-mobbin-vimeo-player-controls.png | https://mobbin.com/screens/… | 2026-11-23 | web 1440 | Vimeo | T1 | 하단 컨트롤 한 줄 | 재생 컨트롤을 한 줄로 모아 영상 가림을 줄임 | 파란 브랜드 색, 로고 |

## 방문한 사이트
| site | status | reason |
| --- | --- | --- |
| Mobbin | visited | 사용자 허락 후 로그인 브라우저 |
| Page Flows | skipped | 유료 체험만 가능($2.95), 사용자 계정 없음 |
```

- 차용표: 모든 열을 채운다. `file`은 02-refs 안의 PNG/WebP, `url`은 http(s), `captured_at`은 YYYY-MM-DD로 시작, `task`는 계약의 과업 id(여러 개면 쉼표).
- 방문표: `site`는 site-list.json의 `name`과 같게 적는다. `ref_tags`에 해당하는 사이트는 빠짐없이 행이 있어야 한다. `status`는 `visited` 또는 `skipped`다. `skipped` 이유는 **허용 목록**만 통과한다: (1) 유료·구독·유료 체험, (2) 로그인·가입·계정 생성이 필요("로그인 필요", "계정 생성 필요", "login required"처럼 '필요'까지 적는다), (3) 차단·403·캡차·지역 제한, (4) 과업과 무관 + 그 과업 ID(예: "T2와 무관"). 그 밖의 이유("방문하지 않음", "시간이 없어 안 봄", "보기 안 좋음")는 모두 FAIL이다. `visited` 사이트는 그 사이트 URL로 시작하는 차용표 행이 하나 이상 있어야 한다.
- 목록에 없는 사이트(제품이 쓰는 컴포넌트 라이브러리 문서 등)는 두 표에 자유롭게 더한다.

## 03-alts/ (S4)

- `alt-<id>-<width>.png|webp`: 시안 id마다 계약의 모든 폭.
- html/css 원본: 03-alts 아래 어디든 둔다. 게이트가 안티슬롭 검사를 한다([anti-slop.md](anti-slop.md)).
- `boards/board-<id>.png`: 시안마다 출처 보드 한 장. `node <skill>/scripts/compose.mjs <work> boards`가 `board.md`의 좌표로 레퍼런스 부분(왼쪽)과 시안 요소(오른쪽)를 잘라 요소마다 한 줄씩 쌓고, 옆에 생성 기록 `board-<id>.json`(입력 파일, sha256, 좌표, 출력 sha256)을 쓴다. ffmpeg가 필요하다.
- `compare/compare-<id>-<width>.png`: `existing_ui: yes`면 시안 × 폭마다 필요하다. `compose.mjs <work> compare`가 `01-before/before-<compare_screen>-<width>`(왼쪽)와 `alt-<id>-<width>`(오른쪽)를 나란히 붙이고 생성 기록을 쓴다. `compare_screen`은 ```gate 블록의 선택 키이며 기본값은 `screens`의 첫 화면이다.
- 게이트는 생성 기록으로 검사한다: 출력 이미지가 기록과 같은지, 입력 파일이 그 뒤에 바뀌지 않았는지, 보드의 행이 지금의 `board.md` 행(파일·좌표)과 같은지. 하나라도 어긋나면 FAIL이고, 다시 만들면 된다.
- `boards/board.md`: 두 표.

```markdown
## 출처
| alt | element | ref_file | ref_crop | alt_crop | 가져온 것 | 바꾼 것 |
| --- | --- | --- | --- | --- | --- | --- |
| a | 자막 두 줄 | ref-languagereactor-netflix-dual-subtitles.png | 180,610,900,140 | 120,560,980,120 | 영어 위·한국어 아래 두 줄 배치 | 글자 크기 18→20px, 배경 막대 대신 그림자. 학습용 가독성 |
| a | 오른쪽 패널 폭 | 자체 설계 | - | 1136,0,400,864 | 근거: 기존 토큰 --panel-w 360px, 과업 T2 | 360→400px |

## 안티슬롭 자가 점검
| alt | check | result | note |
| --- | --- | --- | --- |
| a | AS-1 | PASS | 왼쪽 강조 막대 없음 |
```

출처 표의 `ref_file`은 02-refs에 있는 파일이거나 `자체 설계`다. `ref_crop`은 그 레퍼런스 이미지의 픽셀 좌표 `x,y,w,h`로, 가져온 부분만 감싼다(`자체 설계`면 `-`). `alt_crop`은 가장 넓은 폭의 시안 이미지(`alt-<id>-<최대 폭>`)에서 그 요소의 좌표다. 시안의 다른 화면(지도, 문제 화면 등)에 있는 요소는 선택 열 `alt_image`에 03-alts 안의 그 화면 이미지 파일 이름을 적고, `alt_crop`은 그 이미지의 좌표로 적는다. 좌표가 이미지 밖이거나 형식이 틀리면 FAIL이다. 자가 점검 표는 시안마다 AS-1~AS-5 다섯 행이 있어야 하고, `result`는 PASS/FAIL이다. FAIL이 있으면 게이트도 FAIL이다. 시안을 고친 뒤 다시 점검한다.

## 04-verdicts.md (S5)

```markdown
| rule_id | applies | evidence | verdict |
| --- | --- | --- | --- |
| F-01 | required | 01-before/before-home-1440.png: 첫 화면에 과업 T1 시작 행동 보임 | PASS |
| F-04, F-18 | required | 200% 확대 미실행 | UNVERIFIED |
| P-24, P-40 | no | 오디오 기능 없음 | N/A |
| UI-02 | required | 대상 전환 중 늦은 응답 시험: 05-after/race.har | PASS |
```

- `rule_id`: [guardrails](guardrails/README.md)의 `F-/P-/C-/I-/T-nn`, [verification](verification/README.md)의 `UI-01`~`UI-08`. 쉼표로 여러 ID를 묶을 수 있다. 모르는 ID는 WARN.
- `applies`: `required`(적용·필수) / `optional`(적용·권고) / `no`(해당 없음 → verdict는 N/A).
- `verdict`: `PASS` / `FAIL` / `UNVERIFIED` / `N/A`. N/A는 evidence에 이유가 필요하다. PASS evidence에 파일 경로를 쓰면 그 파일이 있어야 한다.
- 모든 `F-`·`P-` 규칙은 어떤 행에든 있어야 한다. 같은 ID에 서로 다른 판정을 주면 FAIL이다.
- 필수 행의 FAIL은 항상, UNVERIFIED는 `design-only`가 아니면 게이트 FAIL이다.
- 판정의 의미(통과·실패·미검증·해당 없음)와 증거 규칙은 [verification/SKILL.source.md](verification/SKILL.source.md) 3절을 따른다. 증거는 마지막 수정 뒤에 만든 것이어야 한다.

## 06-report.md (S7)

- 출처 보드(`board-*.png`), 비포·시안 비교판(`compare-*.png`), 비포(`before-*`), 애프터(`after-*`)를 모두 `![설명](경로)`나 `<img src>`로 본문에 넣는다. 로컬 경로는 작업 폴더 기준이고, 실제로 있어야 한다. PR에 올린 뒤의 raw URL도 받는다(파일 이름으로 대조).
- GitHub PR 또는 브랜치 링크(`https://github.com/<owner>/<repo>/pull/<n>` 또는 `/tree/<branch>`)가 있어야 한다.
- 마지막 게이트 출력의 `RESULT:` 줄을 붙인다(없으면 WARN).
