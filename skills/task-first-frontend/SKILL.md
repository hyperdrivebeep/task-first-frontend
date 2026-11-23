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
| S1 | 계약: 사람·여정·이상 상태·고정 케이스·상태 | `00-contract.md` (```gate 블록 포함) | `--stage 1` | [guardrails/references/method.md](references/guardrails/references/method.md), [discovery-and-tasks.md](references/discovery-and-tasks.md) |
| S2 | 비포 캡처 | `01-before/before-<screen>-<width>.png\|webp` | `--stage 2` | [audit-and-research.md](references/audit-and-research.md) |
| S3 | 레퍼런스 방문·캡처 | `02-refs/INDEX.md`, `02-refs/ref-*.png` | `--stage 3` | [audit-and-research.md](references/audit-and-research.md), [guides/01](references/guides/01-good-ui-ux-reference-guide.md), [guides/02](references/guides/02-no-ai-slop-mobile-web-ui-ux.md), [site-list.json](references/site-list.json) |
| S4 | 시안(기본 3개) + 시안별 출처 보드 + 안티슬롭 | `03-alts/alt-<id>-<width>.*`, html/css 원본, `03-alts/boards/board-<id>.*`, `board.md` | `--stage 4` | [design-and-ideation.md](references/design-and-ideation.md), [anti-slop.md](references/anti-slop.md) |
| S5 | 가드레일·검증 판정표 | `04-verdicts.md` | `--stage 5` | [guardrails/](references/guardrails/README.md), [verification/](references/verification/README.md) |
| S6 | 구현 + 애프터 캡처 (S2와 같은 크기·상태) | `05-after/after-<screen>-<width>.*` | `--stage 6` | [implementation-and-validation.md](references/implementation-and-validation.md), [verification/references/browser-evidence.md](references/verification/references/browser-evidence.md) |
| S7 | 보고 (이미지 본문 삽입, PR 링크) | `06-report.md` | `--stage 7` | [implementation-and-validation.md](references/implementation-and-validation.md) |

게이트는 단계마다 위 "먼저 읽을 문서"가 원장에 끝 줄까지 읽힌 것으로 기록됐는지도 검사한다.

### S0 읽기 원장

긴 문서를 제목만 보고 요약하지 않는다. 끝 줄까지 나눠 읽고 파일마다 원장에 `path | total_lines | last_line_read | method`를 적는다. 게이트가 줄 수를 다시 센다. 한 맥락에 다 안 들어가는 자료 묶음은 에이전트들에게 나눠 맡기고, 각자 커버리지 표를 돌려받은 뒤 리드가 게이트로 다시 센다. 자세한 규칙: [reading-and-delegation.md](references/reading-and-delegation.md).

### S1 계약

[method.md](references/guardrails/references/method.md)대로 사람과 상황, 진입부터 복귀까지의 여정, 단계별 이상 상태, 고정 케이스, 상태를 적는다. 고정 케이스에는 1440과 390 폭을 넣는다. 제품이 데스크톱 폭만 지원하면 그 폭과 `widths_reason`을 적는다. 과업 정의와 코드 근거는 [discovery-and-tasks.md](references/discovery-and-tasks.md)를 따른다. `scope`는 `design-only`, `implement`, `small-fix` 중 하나다. 작은 수정(`small-fix`)은 이미 고른 시안을 유지하므로 S3·S4가 N/A다.

### S2 비포 캡처

바꾸기 전에 선언한 화면 × 폭마다 실제 화면을 찍는다. 로딩 중이거나 잘못된 상태의 캡처는 버리고 다시 찍는다. 새 제품이라 기존 화면이 없으면 계약에 `existing_ui: no`와 이유를 적는다.

### S3 레퍼런스

- [site-list.json](references/site-list.json)에서 계약의 `ref_tags`에 해당하는 사이트는 **모두** 방문한다. 건너뛸 수 있는 곳은 유료라 들어갈 수 없는 곳뿐이고, 사이트마다 이유를 적는다. "못 봄"만 적으면 게이트가 FAIL을 낸다.
- `visited`로 적은 사이트는 그 사이트 URL의 캡처가 차용표에 하나 이상 있어야 한다.
- 과업마다 비교할 화면 3~5개를 사이트 2곳 이상에서 모은다.
- 로그인된 사용자 브라우저를 쓰기 **전에 사용자에게 묻는다.** 허락이 없거나 열리지 않으면 대화창에서 바로 알린다.

### S4 시안·출처 보드·안티슬롭

- 같은 사례·데이터·상태·폭으로 구조가 다른 시안을 기본 3개 만든다(사용자가 정한 수가 우선). 색만 바꾼 것은 다른 시안이 아니다.
- 시안마다 출처 보드 이미지를 만든다. 왼쪽에 레퍼런스의 해당 부분, 오른쪽에 시안의 요소, 아래에 "가져온 것 / 바꾼 것"을 둔다. `board.md`에는 요소별로 같은 내용을 적는다.
- [anti-slop.md](references/anti-slop.md)의 AS-1~AS-5를 시안마다 자가 점검한다. 카드의 장식용 왼쪽 강조 막대, 모든 항목의 테두리+둥근 카드를 패널 안에 다시 중첩한 구조, 항목마다 반복되는 색 pill 배지, 사방에 쓴 accent 색이 대상이다. 게이트가 html/css를 검사한다.

### S5 판정

[guardrails](references/guardrails/README.md)의 rule ID(F/P/C/I/T)와 [verification](references/verification/README.md)의 검사를 행 하나씩 `PASS / FAIL / UNVERIFIED / N/A`로 판정한다. N/A에는 이유를 쓴다. foundations·patterns의 규칙은 모두 행이 있어야 한다(묶은 행 허용). 필수 행이 FAIL이나 UNVERIFIED이면 완료로 보고하지 않는다. 설계만 하는 작업(`design-only`)이면 UNVERIFIED가 WARN으로 내려가지만, 보고서에 "UI 미검증"이라고 분명히 쓴다.

### S6 구현·애프터

선택된 시안을 정상 진입 경로에 연결한다. 비포마다 같은 폭·내용·상태의 애프터를 찍는다. 게이트가 픽셀 크기가 같은지 확인한다.

### S7 보고

`06-report.md`와 대화창 보고에 출처 보드, 비포·애프터 쌍을 **이미지로** 본문에 넣는다. 파일 경로만 주고 끝내지 않는다. 산출물은 저장소 브랜치·PR로 올리고 링크를 준다. 게이트 출력의 `RESULT:` 줄을 붙인다.

## 위임

단계를 자식 에이전트에게 맡길 때는 그 단계 절의 본문과 [work-folder.md](references/work-folder.md)의 해당 형식을 그대로 주고, 자식이 그 단계 게이트를 실행해 출력 원문을 돌려주게 한다. 리드는 같은 게이트를 다시 실행해 확인한다. 자식의 "완료" 보고만으로 단계를 넘기지 않는다. 자세한 규칙: [reading-and-delegation.md](references/reading-and-delegation.md).

## 다른 참고 자료

- 시작과 범위, 도구, 다른 스킬, 보존할 구분, 완료와 인계: [tools-and-scope.md](references/tools-and-scope.md)
- 전체 설계 문서 양식: [assets/design-brief-template.md](assets/design-brief-template.md)
- 재현/누락 점검: [case-study-and-coverage.md](references/case-study-and-coverage.md). 2026-10-13에 실제 수행한 단계와 미수행 단계를 구분한 사례다.
- 사례의 이미지 생성 입력: [example-image-prompts.md](references/example-image-prompts.md). 역사적 예시이며 새 제품의 요구사항이 아니다.
