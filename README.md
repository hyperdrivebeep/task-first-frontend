# Task First Frontend

**코드와 사용자 과업에서 출발하는 프론트엔드 설계 스킬.**

기존 화면의 색만 바꾸거나 다른 제품의 배치를 옮기는 대신, 실제 코드와 화면에서 사용자가 하려는 일을 정의하고 레퍼런스를 조사합니다. 그 근거로 구조가 다른 UI를 비교하고, 선택한 방향을 구현과 검증으로 이어갑니다.

A Codex skill for task-driven frontend design: inspect real code and UI, define user tasks, research interaction patterns, compare visual directions, and verify an authorized implementation. Every stage writes a fixed artifact and must pass `scripts/gate.mjs` before the next. Instructions are primarily in Korean, with reusable English image prompts.

## 작업 흐름 (단계 게이트)

각 단계는 작업 폴더 `<work>`에 정해진 산출물을 쓰고, 게이트를 통과해야 끝납니다. FAIL이 하나라도 있으면 다음 단계로 가지 않고 그 단계를 완료로 보고하지 않습니다.

```sh
node skills/task-first-frontend/scripts/gate.mjs <work> --stage N
```

게이트는 누적입니다. `--stage 4`는 S0~S4를 다시 검사합니다. 출력 끝의 `RESULT:` 줄을 보고에 붙입니다.

| 단계 | 할 일 | 산출물 (`<work>/`) |
| --- | --- | --- |
| S0 | 읽기 원장 — 필수 문서를 끝 줄까지 읽고 줄 수를 기록 (게이트가 다시 셈) | `reading-ledger.md` |
| S1 | 계약 — 사람·여정·이상 상태·고정 케이스(1440/390)·상태, 과업 정의 | `00-contract.md` |
| S2 | 비포 캡처 — 바꾸기 전 실제 화면 | `01-before/` |
| S3 | 레퍼런스 — 관련 사이트 방문·캡처, 건너뛰면 허용된 이유만 | `02-refs/INDEX.md`, `02-refs/ref-*` |
| S4 | 시안(기본 3개) + 시안별 출처 보드 + 안티슬롭 검사 | `03-alts/`, `03-alts/boards/` |
| S5 | 가드레일·검증 판정표 (rule ID별 PASS/FAIL/UNVERIFIED/N/A) | `04-verdicts.md` |
| S6 | 구현 + 같은 크기·상태의 애프터 캡처 | `05-after/` |
| S7 | 보고 — 출처 보드와 비포·애프터를 이미지로 넣고 PR 링크 | `06-report.md` |

이미 선택된 UI의 작은 수정(`scope: small-fix`)에는 전체 조사와 시안 선택을 다시 강제하지 않습니다(S3·S4 N/A). 설계만 요청하면 설계까지 수행하며, 스킬 자체가 배포·공개·유료 실행 권한을 부여하지 않습니다. 게이트 PASS는 형식과 존재의 증명이며 사용성 증명이 아닙니다.

## 설치와 사용

이 저장소를 복제한 뒤 `skills/task-first-frontend` 폴더 전체를 개인 Codex 스킬 디렉터리 `~/.codex/skills/`에 복사합니다. `CODEX_HOME`을 사용하는 환경은 그 아래 `skills/`를 사용합니다. 같은 이름의 스킬이 있다면 기존 변경을 확인한 후 갱신하세요. 게이트 실행에는 Node.js가 필요합니다.

```sh
git clone https://github.com/hyperdrivebeep/task-first-frontend.git
```

호출 예시:

```text
$task-first-frontend 현재 프로젝트의 코드와 실제 화면에서 사용자 과업을 정의하고,
레퍼런스를 조사해 더 나은 UI를 설계해줘. 제품 코드는 시안 선택 후에 수정해.
```

```text
$task-first-frontend 선택한 시안을 현재 코드에 구현하고,
기존 기능과 데이터 계약을 유지하는지 실제 사용 흐름으로 검증해줘.
```

## 포함된 자료

- [스킬 진입점 (단계 라우터)](skills/task-first-frontend/SKILL.md)
- [단계 게이트 스크립트](skills/task-first-frontend/scripts/gate.mjs)와 [작업 폴더 형식](skills/task-first-frontend/references/work-folder.md)
- [읽기 원장과 위임](skills/task-first-frontend/references/reading-and-delegation.md)
- [코드와 사용자 과업 조사](skills/task-first-frontend/references/discovery-and-tasks.md)
- [화면 감사와 레퍼런스 조사](skills/task-first-frontend/references/audit-and-research.md)와 [방문 대상 사이트 목록](skills/task-first-frontend/references/site-list.json)
- [설계·시안 비교·재사용 프롬프트](skills/task-first-frontend/references/design-and-ideation.md)와 [안티슬롭 점검](skills/task-first-frontend/references/anti-slop.md)
- [구현과 검증](skills/task-first-frontend/references/implementation-and-validation.md)
- [시작과 범위, 도구, 인계](skills/task-first-frontend/references/tools-and-scope.md)
- [35단계 사례와 누락 점검](skills/task-first-frontend/references/case-study-and-coverage.md)
- [세 이미지 생성 프롬프트 공개 예시](skills/task-first-frontend/references/example-image-prompts.md)
- [설계 문서 양식](skills/task-first-frontend/assets/design-brief-template.md)

번들한 외부 자료:

- [UI·UX 가드레일](skills/task-first-frontend/references/guardrails/README.md) — `ui-ux-guardrails` 패키지 사본(영어 본문, rule ID F/P/C/I/T와 근거 카탈로그). S1 계약과 S5 판정에 씁니다.
- [UI 검증](skills/task-first-frontend/references/verification/README.md) — `ui-verification` 패키지 사본(상태 설계, 클라이언트 실행 리뷰, 행동 흐름·전이 테스트, 브라우저 증거, 사용성 리뷰). S5·S6에 씁니다.
- 레퍼런스 가이드 두 편 — [좋은 UI·UX 레퍼런스를 찾는 법](skills/task-first-frontend/references/guides/01-good-ui-ux-reference-guide.md), [AI-slop 없는 모바일 웹 UI·UX](skills/task-first-frontend/references/guides/02-no-ai-slop-mobile-web-ui-ux.md). S3에서 먼저 읽습니다.

## 도구와 검증 범위

사용 가능한 파일/검색 도구, 브라우저, 이미지 생성 도구를 현재 환경의 지침에 따라 사용합니다. Product Design·ImageGen·Figma 등은 해당 단계와 도구가 실제로 있을 때 연결하며 이 저장소에 번들하지 않습니다. 도구가 없으면 가능한 분석과 미수행 단계를 구분하고, 그 단계의 게이트는 FAIL로 남깁니다.

사례는 실제 설계 작업에서 제품명·개인 경로·세션 식별자·커밋을 일반화했습니다. 흐름과 합성 데이터는 유지했지만 개인 스크린샷, 계정 정보, 프로젝트 원문과 실행 로그는 포함하지 않습니다. 예시 프롬프트를 사용할 때는 자신의 현재 화면을 직접 확인하고 첨부해야 합니다.

패키지 구조와 내부 링크는 검증했습니다. 사례는 정적 시안까지 수행한 기록이며, 후속 제품 구현이나 실제 사람의 사용성 향상을 입증하는 결과는 아닙니다.
