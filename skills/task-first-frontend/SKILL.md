---
name: task-first-frontend
description: "Design or substantially redesign a frontend from actual code, user tasks, current UI evidence, and researched interaction patterns; produce comparable visual directions and carry a selected direction through authorized implementation and verification. Stage-gated: every stage writes a fixed artifact and must pass scripts/gate.mjs before the next. Use for 프론트엔드 설계, 코드 보고 사용자 과업부터, 레퍼런스 조사해서 UI 개선, or comparing whether a new UI is better. Not for unrelated backend work."
---

# 과업 중심 프론트엔드 (단계 게이트)

사용자가 하려는 일을 코드와 실제 화면에서 찾아내고, 그 일을 더 쉽게 하는 UI를 설계·구현·검증한다. 이 문서는 단계 라우터다. 각 단계는 정해진 산출물 파일을 만들고 게이트를 통과해야 끝난다.

## 절대 규칙

- **게이트를 통과하지 못한 단계는 완료가 아니다.** 단계마다 `node <skill>/scripts/gate.mjs <work> --stage N`을 실행한다. FAIL이 하나라도 있으면 다음 단계로 가지 않고, 그 단계를 "완료"라고 보고하지 않는다. 막힌 항목과 게이트 출력 원문을 그대로 보고한다.
- 게이트는 누적이다. `--stage 4`는 S0~S4를 다시 검사한다. 앞 단계 파일을 고치면 다시 통과해야 한다.
- WARN은 고치거나, `03-alts/boards/board.md`나 보고서에 이유를 적는다. 말없이 넘기지 않는다.
- 작업 폴더 `<work>`의 구조와 각 파일 형식은 [work-folder.md](references/work-folder.md)에 있다. 그 형식이 게이트의 입력이다.
- 게이트 통과는 형식과 존재의 증명이다. 내용이 맞는지는 별도 판단이며, 게이트 PASS를 사용성 증명으로 쓰지 않는다.

## 단계

| 단계 | 할 일 | 필수 산출물 (`<work>/`) | 게이트 | 먼저 읽을 문서 |
| --- | --- | --- | --- | --- |
| S0 | 읽기 원장 | `reading-ledger.md` | `--stage 0` | [reading-and-delegation.md](references/reading-and-delegation.md), [work-folder.md](references/work-folder.md) |
| S1 | 계약: 사람·여정·이상 상태·고정 케이스·상태 | `00-contract.md` (```gate 블록 포함) | `--stage 1` | [guardrails/references/method.md](references/guardrails/references/method.md), [discovery-and-tasks.md](references/discovery-and-tasks.md), [상태별 안내와 다음 행동](references/verification/references/state-design.md) |
| S2 | 비포 캡처 | `01-before/before-<screen>-<width>.png\|webp` | `--stage 2` | [audit-and-research.md](references/audit-and-research.md) |
| S3 | 레퍼런스 방문·캡처 | `02-refs/INDEX.md`, `02-refs/ref-*.png` | `--stage 3` | [audit-and-research.md](references/audit-and-research.md), [guides/01](references/guides/01-good-ui-ux-reference-guide.md), [guides/02](references/guides/02-no-ai-slop-mobile-web-ui-ux.md), [site-list.json](references/site-list.json) |
| S4 | 시안(기본 3개) + 시안별 출처 보드 + 비포·시안 비교판 + 안티슬롭 | `03-alts/alt-<id>-<width>.*`, html/css 원본, `board.md`, `scripts/compose.mjs`로 만든 `03-alts/boards/board-<id>.png`와 `03-alts/compare/compare-<id>-<width>.png` | `--stage 4` | [design-and-ideation.md](references/design-and-ideation.md), [anti-slop.md](references/anti-slop.md) |
| S5 | 가드레일·검증 판정표 | `04-verdicts.md` | `--stage 5` | [guardrails/](references/guardrails/README.md), [verification/](references/verification/README.md) |
| S6 | 구현 + 애프터 캡처 (S2와 같은 크기·상태) | `05-after/after-<screen>-<width>.*` | `--stage 6` | [implementation-and-validation.md](references/implementation-and-validation.md), [verification/references/browser-evidence.md](references/verification/references/browser-evidence.md) |
| S7 | 보고 (이미지 본문 삽입, PR 링크) | `06-report.md` | `--stage 7` | [implementation-and-validation.md](references/implementation-and-validation.md) |

게이트는 단계마다 위 "먼저 읽을 문서"가 원장에 끝 줄까지 읽힌 것으로 기록됐는지도 검사한다.

### S0 읽기 원장

긴 문서를 제목만 보고 요약하지 않는다. 끝 줄까지 나눠 읽고 파일마다 원장에 `path | total_lines | last_line_read | method`를 적는다. 게이트가 줄 수를 다시 센다. 한 맥락에 다 안 들어가는 자료 묶음은 에이전트들에게 나눠 맡기고, 각자 커버리지 표를 돌려받은 뒤 리드가 게이트로 다시 센다. 자세한 규칙: [reading-and-delegation.md](references/reading-and-delegation.md).

### S1 계약

코드와 화면에서 실제로 다룰 기능·입력 방식을 찾아 `guardrail_topics`에 기록한다. [가드레일 규칙집](references/guardrails/README.md)에서 190개 ID를 한 번씩 검토해 `00-contract.md`에 적용 시점(설계 또는 실행), 제외 또는 미확인과 그 이유를 적는다. 기초·패턴 규칙집은 항상 읽고, 해당되는 컴포넌트·입력·도메인 규칙집도 이 단계에서 읽는다. 같은 조건으로 제외할 ID는 한 행에 묶는다. S2 관찰이나 구현으로 기능 범위가 달라지면 계약부터 갱신한다. [기능 키·표 양식·기존 작업 재개](references/work-folder.md#가드레일-적용-범위)

[상태별 안내와 다음 행동](references/verification/references/state-design.md)을 읽고 계약의 ‘상태’ 절에 변경과 관련된 상태, 화면에 보일 내용, 가능한 다음 행동, 나타나면 안 되는 표시나 요청을 적는다. 예를 들어 저장 실패 시 작성값을 보존하고 재시도를 제공하며 성공 안내는 표시하지 않는다.

요청과 코드 변경 범위에서 `client_review`와 `client_review_reason`을 정한다. 기존 동작을 조사하면 `existing`, 저장·요청·폼·상태 전환 등 동작을 구현하거나 바꾸면 `changes`, 문구·간격 조정처럼 실행 동작에 영향이 없으면 `none`이다. 조사와 구현을 함께 하면 `changes`를 쓰고 실제 변경 범위가 달라지면 계약을 갱신한다.

[method.md](references/guardrails/references/method.md)대로 사람과 상황, 진입부터 복귀까지의 여정, 단계별 이상 상태, 고정 케이스, 상태를 적는다. 고정 케이스에는 1440과 390 폭을 넣는다. 제품이 데스크톱 폭만 지원하면 그 폭과 `widths_reason`을 적는다. 과업 정의와 코드 근거는 [discovery-and-tasks.md](references/discovery-and-tasks.md)를 따른다. `scope`는 `design-only`, `implement`, `small-fix` 중 하나다. 작은 수정(`small-fix`)은 이미 고른 시안을 유지하므로 S3·S4가 N/A다.

### S2 비포 캡처

바꾸기 전에 선언한 화면 × 폭마다 실제 화면을 찍는다. 로딩 중이거나 잘못된 상태의 캡처는 버리고 다시 찍는다. 새 제품이라 기존 화면이 없으면 계약에 `existing_ui: no`와 이유를 적는다.

### S3 레퍼런스

- [site-list.json](references/site-list.json)에서 계약의 `ref_tags`에 해당하는 사이트는 **모두** 방문한다. 건너뛸 수 있는 곳은 유료라 들어갈 수 없는 곳뿐이고, 사이트마다 이유를 적는다. "못 봄"만 적으면 게이트가 FAIL을 낸다.
- `visited`로 적은 사이트는 그 사이트 URL의 캡처가 차용표에 하나 이상 있어야 한다.
- 과업마다 비교할 화면 3~5개를 사이트 2곳 이상에서 모은다.
- 로그인된 사용자 브라우저를 쓰기 **전에 사용자에게 묻는다.** 허락이 없거나 열리지 않으면 대화창에서 바로 알린다.

### S4 시안·출처 보드·안티슬롭

- `board.md`에 적용 규칙 ID, 시안 ID, 해당 규칙을 반영한 구체적인 설계 결정을 연결한다. 실행 검증이 필요한 규칙도 이때 필요한 처리 중·실패·복구 상태를 설계한다. 여러 시안이 공유하는 결정은 한 번 기록한다. 기존 시안의 작은 수정은 S4를 건너뛰고 계약과 판정표를 사용한다.
- 같은 사례·데이터·상태·폭으로 구조가 다른 시안을 기본 3개 만든다(사용자가 정한 수가 우선). 색만 바꾼 것은 다른 시안이 아니다.
- 출처 보드는 손으로 그리지 않는다. `board.md`의 요소마다 레퍼런스에서 가져온 부분의 좌표(`ref_crop`)와 시안에서 그 요소의 좌표(`alt_crop`)를 `x,y,w,h` 픽셀로 적고, `node <skill>/scripts/compose.mjs <work> all`로 보드 이미지(왼쪽 레퍼런스 부분, 오른쪽 시안 요소)를 만든다. "가져온 것 / 바꾼 것"은 `board.md`와 보고서에 적는다. 게이트는 좌표가 이미지 안에 있는지, 보드가 지금의 `board.md`·레퍼런스·시안 파일로 만들어졌는지(생성 기록의 해시)를 검사한다. `board.md`나 원본을 고친 뒤 다시 만들지 않으면 FAIL이다.
- 기존 화면이 있으면(`existing_ui: yes`) 같은 스크립트가 시안 × 폭마다 비포·시안 비교판(`03-alts/compare/compare-<id>-<width>.png`, 왼쪽 비포·오른쪽 시안)을 만든다. 비교할 화면은 계약의 `compare_screen`(기본은 `screens`의 첫 화면)이다. 없거나 원본과 맞지 않으면 FAIL이다.
- 게이트가 확인하는 것은 "선언한 좌표를 그대로 잘라 보였다"까지다. 그 좌표가 정말 가져온 부분인지는 보고서의 보드 이미지를 보고 사람이 판단한다.
- [anti-slop.md](references/anti-slop.md)의 AS-1~AS-5를 시안마다 자가 점검한다. 카드의 장식용 왼쪽 강조 막대, 모든 항목의 테두리+둥근 카드를 패널 안에 다시 중첩한 구조, 항목마다 반복되는 색 pill 배지, 사방에 쓴 accent 색이 대상이다. 게이트가 html/css를 검사한다.

### S5 판정

구현 요청이면 사용자가 선택한 시안 ID를 계약의 `selected_alt`로 기록한다. 적용한 가드레일마다 판정표에 기대 동작과 이를 확인할 검증 문서(`method`)를 적고 해당 문서를 읽는다. 설계로 확인한 PASS에는 실제 근거 파일(`proof`)을 연결한다. 실행해야 알 수 있는 규칙은 S5에서 시나리오와 UNVERIFIED로 두고 S6에서 확인한다. 설계만 전달하면 남은 실행 검사를 보고한다.

코드 리뷰가 적용되면 [클라이언트 실행 결함 리뷰](references/verification/references/client-runtime-review.md)를 읽고 `UI-01`~`UI-08` 각각을 판정표에 기록한다. 적용되는 규칙은 필수이고, 무관한 규칙은 이유와 함께 N/A로 묶을 수 있다. `existing`은 이 단계에서 판정한다. `changes`는 적용 행에 기대 동작(`expected`)을 쓰고 구현 후 확인할 항목을 UNVERIFIED로 둔다. 이 UI 행은 S5에서 계획으로 인정하고 S6에서 최종 판정한다.

[guardrails](references/guardrails/README.md)의 rule ID(F/P/C/I/T)와 [verification](references/verification/README.md)의 검사를 행 하나씩 `PASS / FAIL / UNVERIFIED / N/A`로 판정한다. N/A에는 이유를 쓴다. foundations·patterns의 규칙은 모두 행이 있어야 한다(묶은 행 허용). 필수 행의 FAIL은 단계를 차단한다. 설계 전용 작업에서는 기존 코드 리뷰 대상으로 정한 UI 행을 S5에서 판정하고, 그 밖의 필수 UNVERIFIED 행은 WARN으로 남겨 보고서에 "UI 미검증"이라고 쓴다.

### S6 구현·애프터

실제 변경 후 S1의 적용 규칙을 같은 조건에서 확인한다. 시안에서 이미 확인한 항목도 구현 화면과 대조한다. 판정표에는 실제 관찰과 `05-after/` 아래의 근거 파일을 남긴다. 저장 성공이나 재시도처럼 화면만으로 알 수 없는 결과는 요청·저장 기록으로 확인한다.

클라이언트 동작을 변경했다면 S5에서 정한 기대 동작을 기준으로 변경 후 코드와 실행 결과를 확인한다. 같은 판정표의 해당 UI 행에 실제 근거와 최종 판정을 기록한다. 코드로 추적한 범위와 실제 실행한 범위를 구분한다.

선택된 시안을 정상 진입 경로에 연결한다. 비포마다 같은 폭·내용·상태의 애프터를 찍는다. 게이트가 픽셀 크기가 같은지 확인한다.

### S7 보고

보고서에서 계약·판정표와 시안 결정표(시안 비교를 수행한 경우)를 상대 링크로 연결한다. 남은 미확인 범위, 기대한 결과와 실제 관찰을 구분해 보고한다.

`06-report.md`와 대화창 보고에 출처 보드, 비포·시안 비교판, 비포·애프터 쌍을 **이미지로** 본문에 넣는다. 파일 경로만 주고 끝내지 않는다. 산출물은 저장소 브랜치·PR로 올리고 링크를 준다. 게이트 출력의 `RESULT:` 줄을 붙인다.

## 위임

단계를 자식 에이전트에게 맡길 때는 그 단계 절의 본문과 [work-folder.md](references/work-folder.md)의 해당 형식을 그대로 주고, 자식이 그 단계 게이트를 실행해 출력 원문을 돌려주게 한다. 리드는 같은 게이트를 다시 실행해 확인한다. 자식의 "완료" 보고만으로 단계를 넘기지 않는다. 자세한 규칙: [reading-and-delegation.md](references/reading-and-delegation.md).

## 다른 참고 자료

- 시작과 범위, 도구, 다른 스킬, 보존할 구분, 완료와 인계: [tools-and-scope.md](references/tools-and-scope.md)
- 전체 설계 문서 양식: [assets/design-brief-template.md](assets/design-brief-template.md)
- 재현/누락 점검: [case-study-and-coverage.md](references/case-study-and-coverage.md). 2026-10-13에 실제 수행한 단계와 미수행 단계를 구분한 사례다.
- 사례의 이미지 생성 입력: [example-image-prompts.md](references/example-image-prompts.md). 역사적 예시이며 새 제품의 요구사항이 아니다.
