# UI/UX 가드레일 (원본 그대로)

`ui-ux-guardrails` 패키지를 글자 하나 바꾸지 않고 옮긴 사본이다(원본 패키지(사용자 제공 ui-ux-guardrails / ui-verification), 2026-11-23). 본문은 영어다. 이 README만 이 스킬에서 덧붙였다.

## 단계 라우터가 여는 파일

| 단계 | 여는 파일 | 쓰는 곳 |
| --- | --- | --- |
| S1 계약 | [SKILL.source.md](SKILL.source.md), [references/method.md](references/method.md) | 사람·여정·이상 상태·고정 케이스(1440/390)·상태 표를 `00-contract.md`에 쓴다 |
| S4 시안 | [references/rules-components.md](references/rules-components.md)의 C-24(상자 중첩), [rules-foundations.md](references/rules-foundations.md)의 F-19·F-28 | 안티슬롭 AS-2·AS-4·AS-5의 근거 |
| S5 판정 | [rules-foundations.md](references/rules-foundations.md), [rules-patterns.md](references/rules-patterns.md)는 항상. [rules-components.md](references/rules-components.md), [rules-inputs.md](references/rules-inputs.md), [rules-technologies.md](references/rules-technologies.md)는 화면에 그 요소가 있을 때. [standards-and-scope.md](references/standards-and-scope.md)는 단위·WCAG·N/A 판단 | `04-verdicts.md`에 rule ID별 PASS/FAIL/UNVERIFIED/N/A |
| 근거 확인이 필요할 때만 | [references/coverage.md](references/coverage.md), [references/catalog/](references/catalog/) | 카탈로그는 증거 자료이며 규칙이 아니다. 통째로 읽어야 하면 S0의 분할 읽기 규칙을 따른다 |
| 참고 사례 | [references/paper-check-gounmaeum.md](references/paper-check-gounmaeum.md), [paper-source-evidence.md](references/paper-source-evidence.md) | 소스만 읽은 점검이 UNVERIFIED로 남는 방식의 예 |

## 이 스킬과의 관계

- 패키지 SKILL.source.md가 말하는 `design-taste`, `frontend`, `generative-ui`, `visual-qa` 스킬이 없으면 이 스킬의 S3·S4(레퍼런스·아트 디렉션), S2·S6과 [../verification/](../verification/README.md)(캡처·판정)가 그 역할을 맡는다.
- 패키지의 "UI가 끝나려면 필수 케이스가 FAIL·UNVERIFIED가 아니어야 한다"는 규칙은 `gate.mjs --stage 5`가 그대로 검사한다.
- `SKILL.source.md`는 원본 패키지의 SKILL.md를 이름만 바꿔 보존한 것이다(스킬 로더가 별도 스킬로 등록하지 않게). 단독 스킬로 쓰려면 원본 패키지를 설치한다.
