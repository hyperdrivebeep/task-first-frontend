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
guardrail_topics: buttons, keyboards, payment
existing_ui: yes
scope: implement
client_review: changes
client_review_reason: 저장 요청과 응답 처리 방식을 변경한다.
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
| `client_review` | `existing` / `changes` / `none` | 기존 동작 조사면 S5에서 최종 판정. 동작 변경이면 S5에서 계획하고 S6에서 최종 판정. 설계만 수행하는 계약에는 `changes`를 쓸 수 없다. |
| `client_review_reason` | 적용 또는 생략 이유 | 요청과 실제 코드 범위를 근거로 작성한다. 문구만 바꿀 때는 `none`과 그 이유를 쓴다. |
| `guardrail_topics` | 이번 작업의 기능·입력에 해당하는 규칙 주제, 쉼표 구분 | 규칙집 출처 URL의 마지막 경로 이름. 예: `buttons, keyboards, payment`. 일반 결제의 `payment`는 T-16·T-17의 `apple-pay` 주제에 대응한다. |
| `selected_alt` | 선택한 시안 파일의 ID | `implement`의 S5부터 필요하다. `alt-b-390.png`를 선택했다면 `b`를 쓴다. |
| `alternatives` | 정수, 기본 3 | 3 미만이면 `alternatives_reason:` 필수 (사용자 지정 수) |
| `alt_source` | `html` (기본) / `imagegen` | imagegen이면 html/css 검사를 건너뛰고 WARN |

ref_tags 어휘: `screens`(실제 제품 화면), `flows`(과업 흐름 녹화), `paywall`, `landing`, `web-visual`, `motion-visual`, `nav-footer`, `microinteraction`, `motion-code`, `a11y`, `react-primitives`, `public-forms`, `enterprise`, `platform`, `ecommerce`, `cro`, `fintech`, `email`, `portfolio`, `history`, `typography`, `identity`, `design-kit`, `marketing-build`, `korean`, `principles`. 대부분의 앱 화면 작업은 최소 `screens, flows, principles`를 고른다.

### 가드레일 적용 범위

저장소 루트에서 다음 명령을 실행하면 원본 규칙집을 읽어 **현재 주제 키와 190개 ID**를 담은 Markdown 초안을 출력한다. 기존 계약의 본문에 표를 추가하고 실제 코드·작업 범위에 맞춰 행과 이유를 편집한다.

```sh
node skills/task-first-frontend/scripts/guardrails.mjs
```

| rule_id | applicability | reason |
| --- | --- | --- |
| T-16 | design | 주문 검토 화면에서 결제 버튼을 누르기 전에 총액을 확인한다. |
| T-17 | runtime | 승인·거절·응답 유실 후 주문 상태와 화면의 일치를 확인한다. |
| T-18, T-19 | no | 이 결제 화면은 구독이나 앱 내 구매 권한을 제공하지 않는다. |

위는 세 행의 예시다. 실제 계약은 원본의 모든 ID를 한 번씩 포함한다. `design`은 시안에서 확인할 사항, `runtime`은 실행이 필요한 사항이다. `no`는 범위 밖인 이유가 같을 때 묶을 수 있다. 선언한 주제의 특정 규칙만 예외라면 그 ID를 단독 행에 `exception`으로 쓰고 제품 근거를 기록한다. 조사 중인 항목은 `unknown`과 남은 질문으로 기록한다. 구현 완료 전에는 그 질문을 해소하고 적용 여부를 갱신한다. 자동 검사는 선언된 기능과 표를 대조한다. 실제 제품의 기능 목록은 코드와 화면에서 확인한다.

기존 작업을 재개할 때는 기존 산출물을 유지한 채 계약에 이 표와 `guardrail_topics`, 두 클라이언트 리뷰 키를 추가한다. 현재 단계까지의 적용 문서와 바뀐 지침을 읽고 원장을 갱신한다. 기존 시안 결정·판정 행에는 아래의 연결 열을 채우고 같은 단계의 게이트를 다시 실행한다.

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
- `boards/board.md`: 아래 출처·자가 점검 표와 규칙별 설계 결정표를 둔다.

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

S4를 수행했다면 같은 파일에 아래 결정표도 둔다. 모든 적용 ID에 대해 실제 시안마다 결정이 있어야 한다. `alt`에는 실제 ID(여러 개는 쉼표 구분) 또는 공통 결정인 `all`을 쓴다.

| rule_id | alt | decision |
| --- | --- | --- |
| T-16 | a | 주문 요약과 총액을 승인 버튼 바로 위에 둔다. |
| T-16 | b | 고정 요약 영역에 총액과 승인 버튼을 함께 둔다. |
| T-17 | all | 같은 주문 영역에서 처리 중·거절·완료 상태를 구분하고 거절 시 재시도를 제공한다. |

## 04-verdicts.md (S5, 동작 변경은 S6에서 갱신)

판정표의 적용 가드레일에는 `expected`, `method`, `proof` 열을 쓴다. `method`는 [검증 묶음](verification/README.md)의 `references/` 안에 있는 해당 방법 문서의 파일명이며 S5 읽기 원장에도 기록한다. `proof`는 작업 폴더 기준 실제 파일 경로다. `evidence`에는 그 파일이 뒷받침하는 관찰을 적는다. S5에서 계획 중인 실행 항목은 UNVERIFIED와 시험 조건으로 두고, 구현 후 같은 행의 판정·관찰·근거를 갱신한다. S6 완료 시 적용 규칙의 PASS에는 `05-after/` 안의 근거가 필요하다. 예를 들어 T-16에는 화면 캡처를, T-17에는 응답과 저장 상태를 대조한 실행 기록을 연결한다.

```markdown
| rule_id | applies | expected | evidence | verdict | method | proof |
| --- | --- | --- | --- | --- | --- | --- |
| T-16 | required | 승인 전 총액이 보인다 | 주문 요약과 버튼이 같은 화면에 보임 | PASS | usability-review.md | 03-alts/alt-b-390.png |
| T-17 | required | 결제 거절 뒤 미결제 상태가 유지된다 | 거절 응답 후 주문을 다시 열어 확인할 예정 | UNVERIFIED | browser-evidence.md | |
| P-24, P-40 | no | | 오디오 기능 없음 | N/A | | |
| UI-02 | required | B 선택 뒤에도 화면에는 B가 남는다 | B 응답 뒤 A 응답이 도착하도록 시험 예정 | UNVERIFIED | | |
```

- `rule_id`: [guardrails](guardrails/README.md)의 `F-/P-/C-/I-/T-nn`, [verification](verification/README.md)의 `UI-01`~`UI-08`. 쉼표로 여러 ID를 묶을 수 있다. 모르는 ID는 WARN.
- `applies`: `required`(적용·필수) / `optional`(적용·권고) / `no`(해당 없음 → verdict는 N/A).
- `verdict`: `PASS` / `FAIL` / `UNVERIFIED` / `N/A`. N/A는 evidence에 이유가 필요하다. PASS evidence에 파일 경로를 쓰면 그 파일이 있어야 한다.
- 모든 `F-`·`P-` 규칙은 어떤 행에든 있어야 한다. 같은 ID에 서로 다른 판정을 주면 FAIL이다.
- 코드 리뷰를 적용하면 S5 읽기 원장에 [클라이언트 실행 결함 리뷰](verification/references/client-runtime-review.md)가 있어야 한다. UI-01~UI-08 전체를 판정표에 기록한다. 적용 행은 `required`, 무관한 행은 `no`와 사유 있는 `N/A`를 쓴다.
- `changes`의 적용 UI 행은 기존 표에 `expected` 열을 추가해 기대 동작을 남긴다. 예를 들어 UI-02의 기대값은 “B 선택 뒤 늦은 A 응답이 와도 화면에는 B가 남는다”이다. S5에서는 `evidence`에 확인할 시나리오, `verdict`에 `UNVERIFIED`를 적을 수 있다. S6에서는 같은 행의 기대값을 유지하고 마지막 변경 이후 관찰한 결과·근거 위치와 최종 판정을 적는다. 보류한 UI 행은 다른 종류의 규칙과 분리한다.
- 필수 행의 FAIL은 항상 차단한다. `existing`의 필수 UI 행은 S5에서 판정한다. `changes`의 필수 UI 행과 `runtime` 가드레일은 S5에서 계획하고 S6에서 판정할 수 있다. 그 밖의 필수 UNVERIFIED 행은 설계 전용에서 WARN, 구현 작업에서 FAIL이다.
- 판정의 의미(통과·실패·미검증·해당 없음)와 증거 규칙은 [verification/SKILL.source.md](verification/SKILL.source.md) 3절을 따른다. 증거는 마지막 수정 뒤에 만든 것이어야 한다.

## 06-report.md (S7)

보고서에 `[적용 범위](00-contract.md)`, `[판정과 검증 근거](04-verdicts.md)`를 넣는다. 시안을 비교한 작업은 `[시안별 결정](03-alts/boards/board.md)`도 연결한다.

- 출처 보드(`board-*.png`), 비포·시안 비교판(`compare-*.png`), 비포(`before-*`), 애프터(`after-*`)를 모두 `![설명](경로)`나 `<img src>`로 본문에 넣는다. 로컬 경로는 작업 폴더 기준이고, 실제로 있어야 한다. PR에 올린 뒤의 raw URL도 받는다(파일 이름으로 대조).
- GitHub PR 또는 브랜치 링크(`https://github.com/<owner>/<repo>/pull/<n>` 또는 `/tree/<branch>`)가 있어야 한다.
- 마지막 게이트 출력의 `RESULT:` 줄을 붙인다(없으면 WARN).
