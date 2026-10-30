# Task First Frontend

**코드와 사용자 과업에서 출발하는 프론트엔드 설계 스킬.**

기존 화면의 색만 바꾸거나 다른 제품의 배치를 옮기는 대신, 실제 코드와 화면에서 사용자가 하려는 일을 정의하고 레퍼런스를 조사합니다. 그 근거로 구조가 다른 UI를 비교하고, 선택한 방향을 구현과 검증으로 이어갑니다.

A Codex skill for task-driven frontend design: inspect real code and UI, define user tasks, research interaction patterns, compare visual directions, and verify an authorized implementation. Instructions are primarily in Korean, with reusable English image prompts.

## 작업 흐름

1. **기준 확인** — 저장소 지침, branch/SHA, 기존 변경과 실행 화면의 출처.
2. **과업 정의** — 정상 진입, 행동, API/상태, 결과 소비자를 읽고 사용자 완료 조건을 정리.
3. **현재 화면 관찰** — 실제 캡처에 근거한 문제·장점·한계.
4. **레퍼런스 조사** — 공식 자료의 상호작용 원리를 현재 과업에 연결.
5. **UI 설계** — 정보 우선순위, 주 행동, 상세와 복귀, 오류·부분 결과·권한·저장.
6. **시안 비교** — 같은 데이터와 상태로 구조가 다른 대안 비교. 기본 세 시안이며 요청에 따라 조정.
7. **선택 후 구현** — 기존 기능과 데이터 계약을 실제 사용 경로에 연결.
8. **검증** — 시각 충실도, 동작, 상태, 접근성, 실제 과업 수행을 구분해 확인.

이미 선택된 UI의 작은 수정에는 전체 조사와 시안 선택을 다시 강제하지 않습니다. 설계만 요청하면 설계까지 수행하며, 스킬 자체가 배포·공개·유료 실행 권한을 부여하지 않습니다.

## 설치와 사용

이 저장소를 복제한 뒤 `skills/task-first-frontend` 폴더 전체를 개인 Codex 스킬 디렉터리 `~/.codex/skills/`에 복사합니다. `CODEX_HOME`을 사용하는 환경은 그 아래 `skills/`를 사용합니다. 같은 이름의 스킬이 있다면 기존 변경을 확인한 후 갱신하세요.

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

- [스킬 진입점](skills/task-first-frontend/SKILL.md)
- [코드와 사용자 과업 조사](skills/task-first-frontend/references/discovery-and-tasks.md)
- [화면 감사와 레퍼런스 조사](skills/task-first-frontend/references/audit-and-research.md)
- [설계·시안 비교·재사용 프롬프트](skills/task-first-frontend/references/design-and-ideation.md)
- [구현과 검증](skills/task-first-frontend/references/implementation-and-validation.md)
- [35단계 사례와 누락 점검](skills/task-first-frontend/references/case-study-and-coverage.md)
- [세 이미지 생성 프롬프트 공개 예시](skills/task-first-frontend/references/example-image-prompts.md)
- [설계 문서 양식](skills/task-first-frontend/assets/design-brief-template.md)

## 도구와 검증 범위

사용 가능한 파일/검색 도구, 브라우저, 이미지 생성 도구를 현재 환경의 지침에 따라 사용합니다. Product Design·ImageGen·Figma 등은 해당 단계와 도구가 실제로 있을 때 연결하며 이 저장소에 번들하지 않습니다. 도구가 없으면 가능한 분석과 미수행 단계를 구분합니다.

사례는 실제 설계 작업에서 제품명·개인 경로·세션 식별자·커밋을 일반화했습니다. 흐름과 합성 데이터는 유지했지만 개인 스크린샷, 계정 정보, 프로젝트 원문과 실행 로그는 포함하지 않습니다. 예시 프롬프트를 사용할 때는 자신의 현재 화면을 직접 확인하고 첨부해야 합니다.

패키지 구조와 내부 링크는 검증했습니다. 사례는 정적 시안까지 수행한 기록이며, 후속 제품 구현이나 실제 사람의 사용성 향상을 입증하는 결과는 아닙니다.
