# UI 검증 묶음 (원본 그대로)

`ui-verification` 패키지를 글자 하나 바꾸지 않고 옮긴 사본이다(원본 패키지(사용자 제공 ui-ux-guardrails / ui-verification), 2026-11-23). 이 README만 이 스킬에서 덧붙였다.

## 단계 라우터가 여는 파일

| 단계 | 여는 파일 | 쓰는 곳 |
| --- | --- | --- |
| S1 계약의 "상태" 절 | [references/state-design.md](references/state-design.md) (시나리오를 고를 때 [state-design-cases.md](references/state-design-cases.md)) | 상태별 설명·다음 행동·요청 표 |
| S5 판정 (항상) | [SKILL.source.md](SKILL.source.md) | 판정 4종(PASS/FAIL/UNVERIFIED/N/A), 증거 규칙, 기본 폭 1440×900·390×844 |
| S5, 코드 리뷰가 필요할 때 | [references/client-runtime-review.md](references/client-runtime-review.md) | `UI-01`~`UI-08`을 `04-verdicts.md`의 rule_id로 쓴다 |
| S5, 이어지거나 중단·재시도되는 흐름 | [references/behavior-flow-tests.md](references/behavior-flow-tests.md) | 시나리오와 탐지력 확인 |
| S5, 상태 전이 중 유지 | [references/transition-stability.md](references/transition-stability.md), 방법은 [transition-stability-tests.md](references/transition-stability-tests.md) | 배치·선택·입력·포커스·스크롤·글자 |
| S5, 화면 사용성 | [references/usability-review.md](references/usability-review.md) (사람 시험이 필요할 때만 [usability-user-testing.md](references/usability-user-testing.md)) | 네 가지 질문, 발견 형식 |
| S6 애프터·구현 검증 (항상) | [references/browser-evidence.md](references/browser-evidence.md) | 처리 중·실패·복구 증거, 선택 시안 보존, 이미지 비교 조건 |
| 넓은 탐색 QA 요청 | [references/exploratory-qa.md](references/exploratory-qa.md) | HAR와 화면 증거 보고 |
| 기준이 충돌할 때만 | [references/sources.md](references/sources.md) | 근거 문헌의 적용 범위 |

## 이 스킬과의 관계

- 판정 4종과 "증거는 마지막 수정 뒤의 것만"이라는 규칙은 `04-verdicts.md`에 그대로 적용한다. 게이트는 판정 값과 N/A 이유, PASS 증거 파일의 존재를 검사하고, 내용의 정확성은 검사하지 않는다.
- 패키지의 안전 경계(외부 영향 조작 금지, 민감정보 가리기)는 이 스킬의 모든 단계에 적용한다.
