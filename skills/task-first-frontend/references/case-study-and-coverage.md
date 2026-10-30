# Research Workbench 사례와 절차 누락 점검

제품명, 개인 경로, 채팅 식별자와 커밋은 공개용으로 일반화했다. 절차와 합성 사례의 의미는 유지했다.

이 문서는 2026-10-13 대화에서 실제 수행한 프론트엔드 설계 과정을 보존한다. 스킬로 정리한 날은 2026-10-30이다. 당시 SHA·서버·수치·경로는 역사적 사례이며 새 작업의 현재 상태로 사용하지 않는다. 이 예시를 읽기 위해 Research Workbench 저장소가 반드시 있어야 하는 것은 아니다.

## 사용자의 의도와 교정

사용자는 Research Workbench 현재 main의 코드를 읽고 사용자 과업을 정의한 다음, 그 과업에 맞는 레퍼런스를 조사해 더 나은 UI를 설계해 보라고 요청했다. 첨부물은 제품 화면이 아니라 Lecture App 대화 속 문서 링크를 가리키는 캡처였다.

처음에는 이미지 자체를 UI 레퍼런스로 보았고, 이어 Lecture App의 설계 방식을 옮기는 설명에 치우쳤다. 사용자는 '그대로 옮기라는 게 아님'이라고 바로잡았다. 최종 범위는 **Research Workbench 자체의 코드와 과업에서 출발하는 재설계**였다. 이 의도 교정이 이 스킬의 출발점이다.

## 당시 읽은 선행 문서

Lecture App `AGENTS.md`, `docs/REVIEW_UI_DESIGN.md`, `docs/PROJECT_LEARNING_UI_BRIEF.md`, `docs/PROJECT_PRACTICE.md`를 찾고 읽었다. 위치는 `lecture-app/`였다. 원래 참고 대화을 읽어 실제 링크를 확인했다. 다른 채팅에 메시지는 보내지 않았다.

가져온 방법은 과업 정의→레퍼런스→구조가 다른 시안→선택→구현→실제 흐름 검증이었다. Lecture App의 파랑/흰색, 학습자 페르소나, 코드 위·문제 아래, 단계형 GitHub 연결은 Research Workbench 요구사항으로 가져오지 않았다. Lecture App는 Blueprint 의존성이 없었고 Research Workbench에는 실제로 있었다.

## 실제 수행 절차 대조표

| 순서 | 수행한 일과 발견 | 스킬에서 재사용할 위치 |
| --- | --- | --- |
| 1 | 요청과 대화 캡처를 해석하고 사용자 교정을 반영 | SKILL 시작 / discovery 요청 해석 |
| 2 | 작업 공간 라우터와 Research Workbench AGENTS 전문, 로컬 NOW 확인 | discovery 기준 확인 |
| 3 | 관련 기억을 가볍게 검색하되 현재 코드/문서를 우선 | discovery 현재성 |
| 4 | 프로젝트/채팅 목록에서 Lecture App의 문서 위치 확인 | discovery 범위 좁히기 |
| 5 | 문서 네 개를 읽고 방법과 제품별 선택 분리 | discovery 요청 해석 |
| 6 | Git branch·HEAD·remote·worktree·dirty 읽기 | discovery 기준 확인 |
| 7 | main을 원격 조회. 처음 BASELINE_A, 이후 BASELINE_B로 변경되어 후자를 고정 | discovery 기준 고정 |
| 8 | BASELINE_B checkout이 일치하고 clean임을 확인, 작업 중인 구현 작업본의 dirty 보존 | discovery 동시 작업 |
| 9 | Research Workbench package에서 Blueprint core 6.18.0/icons 6.13.0 확인 | discovery manifest |
| 10 | App/main, workspace 조립, result, side panel, composer, hypothesis/action, trace/history, HOLD 처리 읽기 | discovery 호출/소비 경로 |
| 11 | CSS import 순서 확인. styles.css의 보라색을 workstation.css의 파랑이 덮음 | discovery 토큰 |
| 12 | 7개 사용자 과업·완료 조건·코드 근거를 작성 | discovery 과업표 |
| 13 | Product Design index/user-context/get-context/audit/ideate와 관련 규칙, ImageGen 지침 확인 | SKILL 도구 라우팅 |
| 14 | 저장된 Product Design 사용자 맥락 없음 확인 후 현재 맥락으로 진행 | SKILL 이미 있는 맥락 사용 |
| 15 | in-app browser로 기존 로컬 미리보기 읽기. 사라진 탭 핸들은 목록 확인 후 복구 | audit 도구 복구 |
| 16 | 합성 LAB-42 저장 대화 진입 캡처 | audit 진입 |
| 17 | 가설 비교 열기. 약 420px 상세 패널과 긴 세로 설명 관찰 | audit 비교 |
| 18 | 원문 열기. 초기 로딩 캡처를 제외하고 다시 캡처 | audit 캡처 수락 |
| 19 | 자료 준비 화면에서 웹 설정과 자료 목록 우선순위 관찰 | audit 정보 위계 |
| 20 | 이력에서 큰 재검토 카드와 실제 회차 탐색 위치 관찰 | audit 이력/복귀 |
| 21 | 실제 화면은 1280×720. 보기 좋게 넓히지 않고 같은 비율로 설계 | audit 뷰포트 |
| 22 | NotebookLM 공식 인용 안내 본문, Elicit 단계별 작업 안내, Palantir Object Table, Blueprint 공식 저장소 조사 | audit 레퍼런스 |
| 23 | Google 웹 도구 재조회가 막혔을 때 허용된 브라우저로 공식 본문 읽기. CAPTCHA 해결/인증 우회 없음 | audit 접근 한계 |
| 24 | Palantir 공식 문서의 실제 표 이미지를 보고 캡처. 쿠키 배너를 닫고 예시 확인 | audit 시각 레퍼런스 |
| 25 | 출처·원리·적용 가설·가져오지 않을 것·확인 수준 구분 | audit 적용표 |
| 26 | 과업에 맞는 IA, 상태/언어/권한/근거/현재성 계약 작성 | design 상태 계약 |
| 27 | 같은 LAB-42 사실과 상태로 세 구조 정의 | design 공정한 비교 |
| 28 | 방향별 독립 built-in ImageGen 호출. 현행 캡처를 실제 입력 | design 이미지 생성 |
| 29 | 실제 표시 순서를 1·2·3으로 고정 | design 번호 연결 |
| 30 | 한글, 수치, 미확정, 미대조, 준비/승인 차이를 육안 검사 | design 내용 QA |
| 31 | 생성기의 가짜 메타데이터/메뉴를 발견하고 구현 전 보정 목록에 기록 | design 생성 오류 |
| 32 | 생성 원본을 남기고 작업 공간에 concept-1/2/3 사본 보존 | design 보존 |
| 33 | 전체 설계 문서에 근거, 캡처, 시안, 비교 과업, 후속 코드 연결을 기록 | 설계 양식 |
| 34 | 파일 열기 도구가 queued를 반환. 열린 것으로 단정하지 않고 파일 링크 전달 | implementation 인계 정확성 |
| 35 | 정적 시안의 한계를 말하고 사용자에게 구현 방향 선택 요청 | SKILL 설계 완료 |

## 일반화한 기준과 코드 지도

- SHA: 실제 값을 공개하지 않고 `BASELINE_SHA`로 표시한다. 실행 시에는 검증된 커밋을 기록한다.
- 읽은 checkout: `research-workbench-checkout/`.
- 기존 실행 화면: `LOCAL_PREVIEW_URL`. 실행 서버 전체 코드 지문과 SHA 일치는 별도 증명하지 않았다.
- 정상 소비 경로: `LiveProjectWorkspace → ConversationTimeline → ResearchResultCard → ResearchDetailPane → ResultEvidencePanel / HypothesisCompareLive / ActionCompareLive`.
- 질문과 언어/모델 선택: `ResearchComposer`와 `useResearchSession`.
- 자료: `project/source/list`, `FileConnectionPanel`, `SourceCitationGate`.
- 가설: `HypothesisCompare`는 시험 순서→가설 상세→관계표 순서였다. 비교표가 있다고 곧바로 비교하기 편한 것은 아니었다.
- 권한/기록: `TestActionDraft`, `TracePage`, `ExecutionHoldNotice`, 이력/복원 컴포넌트.
- 스타일: main.tsx에서 Blueprint CSS→styles.css→workstation.css. 실제 후행 토큰은 #1c2127/#22272f/#4c90f0/#8abbff였다.

## 도출한 일곱 과업

자료 연결과 질문, 조사 재진입, 답변 가능 범위 판단, 주장과 원문 대조, 가설/시험 비교, 다음 행동 준비, 변경된 자료와 과거 판단 검토. 인터뷰 결과가 아니라 코드와 화면 기반 가설로 분류했다.

## 현행 화면 다섯 단계의 판단

1. 진입: 옛 실패가 먼저 보이고 긴 질문이 여러 위치에서 잘렸다. 모든 세션이 그렇다고 일반화하지 않았다.
2. 가설: 좁은 상세 패널에서 설명을 읽고 내려가야 비교표를 만났다. 비교를 주 영역으로 승격하는 가설을 세웠다.
3. 원문: 원문 앞에 선택 수·페이지 로딩 설명·필터가 있었다. 특정 인용의 직접 이동은 이미 있으므로 기능이 없다고 하지 않았다.
4. 자료: 웹 도메인 설정이 연결 자료보다 먼저 나왔다. 기존 자료를 먼저 파악하도록 제안했다.
5. 이력: 검토 카드가 화면을 차지했다. 기준 일치와 판단 완료를 구분하며 회차·변경 이유 중심 목록을 제안했다.

작은 글씨/중첩 스크롤은 접근성 위험 후보였다. 대비비·200% 확대·키보드 전체·실기기는 검사하지 않았다.

## 당시 레퍼런스와 적용

- [NotebookLM 공식 도움말](https://support.google.com/notebooklm/answer/16179559): 인용 선택→원문 맥락. 이 문서는 당시 확인한 출처이며 현재 내용은 재확인해야 한다.
- [Palantir Object Table](https://www.palantir.com/docs/foundry/workshop/widgets-object-table): 같은 열로 비교, 선택 항목 상세. 표 예시를 직접 봤으나 로그인 제품을 전체 사용한 것은 아니다.
- [Elicit workflow](https://support.elicit.com/en/articles/14757543-getting-started-with-elicit-which-workflow-should-i-use): 자유 조사와 단계별 검토. 특정 문헌 선별 절차를 강제하지 않았다.
- [Blueprint](https://github.com/palantir/blueprint): 기존 컴포넌트 체계를 유지. 라이브러리 교체를 UX 개선으로 간주하지 않았다.

## 동일 사례와 세 시안

합성 LAB-42: A 품질 0.80, 목표 0.95 이상, 차이 0.15, 20°C, 반복 3회. B 미측정. 온도·재료 원인 가설 모두 미확정, 근거 8개 각각 미대조, 반증 검색 안 함. 조사 종료와 판단 보류는 별도다.

| 실제 표시 순서 | 방향 | 입력 캡처 | 생성 원본 basename |
| --- | --- | --- | --- |
| 1 | 결과를 읽는 작업 공간 | 01-entry, 03-evidence | generated-reading.png |
| 2 | 가설을 비교하는 작업 공간 | 02-hypotheses, reference-palantir | generated-comparison.png |
| 3 | 확인할 일을 따라가는 작업 공간 | 02-hypotheses, 05-history | generated-guided.png |

호출은 각각 `transparent_background=false`, 참조는 `referenced_image_paths`로 첨부했다. 목표 비율 1280×720을 프롬프트에 넣었으며 실제 출력 픽셀을 CSS 명세로 삼지 않았다. 내장 도구로 생성했고 CLI fallback은 사용하지 않았다.

## 생성 오류와 보정 대상

- 1번의 `3–7행`, 수집 시각, 원문 제목/유형과 일부 세션 이름은 이미지 모델이 추가한 예시였다. 실제 A 행 위치는 `line 1 · /html/body/article/table/tr[2]`였다. 구현 시 제거/교체할 항목으로 기록했다.
- 2번의 사람 아이콘은 실제 협업 기능의 증거가 아니었다. 지원되지 않는 메뉴로 구현하면 안 된다.
- 3번의 질문 입력으로 넘어갈 때 실제 모델/답변 언어 선택을 복원해야 한다.
- 두 가설이 한 화면에 보이는 배치 차이는 확인했다. 사람의 시간 절약/이해 개선을 확인한 것은 아니다.

## 비교를 위해 정의한 다섯 과업

1. A와 목표 차이, B의 상태, 원인 확정 여부 설명.
2. A의 값을 뒷받침하는 원문을 열고 원래 위치로 복귀.
3. 두 가설의 차이와 각각 고정할 시험 조건 찾기.
4. 시험 요청 준비와 실제 승인/실행을 구분.
5. 자료 변경 뒤 과거 답변과 현재 답변을 구분.

시간·클릭·스크롤·오류·맥락 상실을 같은 조건에서 비교하도록 정의했지만 측정은 하지 않았다. 2번을 우선 검증 후보로 제안한 것은 설계자의 가설이지 사용자 선택이나 검증 결과가 아니다.

## 수행하지 않은 것

제품 코드 수정, 새 UI 서버 실행, 시안 선택 후 구현, API/저장 통합, 새 UI 자동 시험/브라우저 동작 검증, 실제 사람 과업 시험, 운영 배포, commit/push. 제품의 실제 연구 모델도 호출하지 않았다. ImageGen 호출은 정적 디자인 생성으로 별개다.

## 산출물 구성 예시

개인 경로 대신 아래처럼 일반화한 구성을 제시한다. 원본 캡처와 제품 자료는 이 공개 패키지에 포함하지 않는다.

`outputs/ui-design-example/`

`UI-DESIGN.md`, `01-entry.png`, `02-hypotheses.png`, `03-evidence.png`, `04-sources.png`, `05-history.png`, `reference-palantir.png`, `concept-1.png`, `concept-2.png`, `concept-3.png`.

생성 원본 폴더: `generated-images/example-session/`.

이 절의 경로와 생성 파일명은 비식별 예시다. 이 스킬을 다른 컴퓨터에서 쓸 때 필수 입력이 아니다. 계정 정보·원문 도구 로그·인증 자료는 패키지에 복사하지 않는다.

## 새 작업의 누락 점검

다음 각 항목을 완료/부분/미실행/N/A와 이유로 판정한다. 숫자 점수를 더해 완성률로 쓰지 않는다.

- 요청의 대상과 결과, 문서/시각 참고의 역할을 이해했는가.
- 적용 지침/작업서/현재 branch·SHA·dirty·실행 화면의 출처를 구분했는가.
- 정상 진입과 실제 소비자, state/API/권한을 읽었는가.
- 최종 CSS/token과 기존 컴포넌트를 확인했는가.
- 기능에서 사용자 상황·주 행동·완료 조건을 도출했는가.
- 현재 화면을 캡처하고 로딩/잘못된 상태를 제외했는가.
- 장점·문제·사용자 영향·접근성 위험·한계를 함께 적었는가.
- 공식 레퍼런스 원문과 시각 자료를 확인했는가.
- 출처의 원리와 현재 제품에서의 효과 가설을 구분했는가.
- IA/상태/언어/권한/원문/이력/복귀 계약을 보존했는가.
- 같은 사례로 구조가 다른 시안을 만들었는가.
- 실제 이미지를 첨부하고 표시 순서와 파일을 연결했는가.
- 생성 결과의 가짜 메타데이터·기능·상태를 점검했는가.
- 개선 확인 과업과 실측 기준, 미실행 범위를 적었는가.
- 설계 근거와 원본/사본을 보존하고 접근 가능한 링크로 전달했는가.
- 구현 요청이 있으면 선택을 보존해 실제 경로로 통합하고 관련 검증을 했는가.
- 시안/구현/통합/사람 검증/배포를 혼동하지 않고 완료를 보고했는가.
