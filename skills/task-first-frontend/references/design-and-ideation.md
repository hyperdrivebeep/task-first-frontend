# 정보 구조와 비교 시안

S1(상태 계약)과 S4(시안·출처 보드) 단계 문서다. 산출물은 `00-contract.md`의 상태 절, `03-alts/alt-<id>-<width>.png`, html/css 원본, `03-alts/boards/board-<id>.png`, `board.md`이고 형식은 [work-folder.md](work-folder.md)에 있다. 안티슬롭 점검은 [anti-slop.md](anti-slop.md). 게이트: `--stage 4`.

## 설계 브리프

제품, 대상 사용자 가설, 표면(웹/모바일/데스크톱), 중심 과업, 완료 조건, 불편, 유지할 계약, 산출물을 짧게 재생한다. 명확하면 별도 진행 승인을 기다리지 않는다.

구조부터 정한다: 진입과 계속할 대상; 첫 화면의 사실·한계·현재 상태; 주 행동 하나; 상세 정보의 열기/닫기와 초점 복원; 목록/비교/원문/입력/설정의 공간 배분; 상태별 행동과 저장 실패; 긴 내용과 작은 화면.

대표 화면만 깔끔하게 하려고 기능을 지우지 않는다. 접거나 옮길 때 새 진입점과 원래 맥락으로 돌아오는 경로를 명시한다.

## 상태와 의미 계약

제품에 존재하는 상태를 `트리거 → 표시 → 가능한 행동 → 보존 데이터 → 실제 소유자`로 정리한다. 정상/빈값/로딩/실패/권한 없음/부분/stale/재시도/중단 후 재진입 중 관련 상태를 포함한다.

- 기록된 값과 추정/제안/예측을 구분한다.
- 선택 수·인용 수·로드 수처럼 다른 카운트를 합치지 않는다.
- 미대조/미측정/미검색을 0이나 성공으로 채우지 않는다.
- 조회 범위·권한·revision이 바뀌면 이전 값을 현재 값처럼 표시하지 않는다.
- 화면 언어·다음 요청 언어·저장된 결과 언어가 별개면 유지한다.
- 요청 준비/승인/실행, 접수/처리/완료, 취소 요청/종료를 구분한다.
- 단계형 탐색을 강제 업무 절차나 완료율로 바꾸지 않는다.

## 공정한 시안 비교

새 구조 탐색은 기본 세 시안이지만 사용자 지정 수와 기존 선택이 우선이다. 선택된 시안 구현이나 작은 수정에는 선택을 다시 요구하지 않는다.

같은 사례·자료·상태·핵심 기능·뷰포트 조건을 공유한다. 구조, 탐색, 정보 우선순위, 상세 보기에서 차이를 만든다. 한 시안에만 가짜 결과를 추가하거나 오류를 지워 더 좋아 보이게 하지 않는다.

결과 읽기 중심, 동시 비교 중심, 다음 과업 안내 중심은 Research Workbench의 예시일 뿐 강제 방향이 아니다. 각 방향에 해결할 문제, 장점, 예상 불편, 비교 과업을 붙인다. 새 기능과 현재 기능 재배치를 구분한다.

테마 변경 요청이 없으면 실제 사용 중인 시각 언어를 바탕으로 한다. 색상·아이콘·둥근 카드만 바꾸는 것은 구조적 대안이 아니다.

## 출처·변형 보고 (시안마다 필수)

시안을 보여 줄 때 "어느 레퍼런스의 어느 부분을 가져왔고, 무엇을 바꿨는지"를 **캡처 이미지로** 함께 보인다. 글로만 "NotebookLM을 참고했다"고 쓰지 않는다.

1. 시안의 주요 요소(배치, 패널, 컨트롤, 자막·카드 등)마다 출처를 정한다: 레퍼런스 캡처 파일, 그 안의 위치(예: 오른쪽 위 자막 설정 메뉴), 가져온 원리.
2. 바꾼 것이 있으면 무엇을 어떻게 바꿨고 왜 바꿨는지 적는다(예: "자막 위 한 줄 → 영어·한국어 두 줄, 학습용이라").
3. **출처 보드 이미지**를 만든다: 왼쪽에 레퍼런스 캡처의 해당 부분(잘라내거나 표시), 오른쪽에 시안의 해당 요소, 아래에 "가져온 것 / 바꾼 것". 시안마다 한 장 이상, `03-alts/boards/board-<id>.png`로 저장하고 같은 내용을 `board.md` 출처 표에 요소별로 적는다.
4. 레퍼런스 없이 만든 요소는 "자체 설계"로 표시하고 근거(기존 토큰·과업 등)를 적는다. 출처를 지어내지 않는다.
5. 대화창 보고에 출처 보드를 함께 표시한다. 파일 경로만 주고 끝내지 않는다.

## 이미지 생성

ImageGen을 쓰면 해당 스킬과 현재 도구 지침을 따른다. Product Design ideate를 함께 쓰면 그 단계의 표시·선택 규칙도 따른다.

1. 원본/현행 화면/외부 레퍼런스를 직접 보고 이미지별 역할을 지정한다.
2. 대상 크기와 밀도를 정한다. 비교할 때 같은 비율을 사용하고 출력의 실제 픽셀 크기는 별도 기록한다.
3. 색·글꼴·간격·정보 계층과 중요한 상태 문구를 명시한다.
4. 방향마다 독립 호출한다. 한 이미지에 여러 시안을 넣거나 결과 순서를 가정하는 배치 호출을 하지 않는다.
5. 제출 순서가 아닌 실제 표시 순서로 번호를 붙인다. `표시 번호 ↔ 원본 생성 파일 ↔ 작업 공간 사본 ↔ 방향`을 기록한다.
6. 값·한글·미확정 상태·승인과 실행·잘림·가짜 기능을 직접 검사한다.
7. 중요한 의미 오류는 수정해 재확인한다. 부가 예시를 남기면 항목을 명시하고 구현 데이터로 사용하지 않는다.
8. 결과를 작업 공간에 보존하고 원본을 임의 삭제하지 않는다. 이미 표시된 이미지는 불필요하게 중복 표시하지 않는다.

타임스탬프·출처 행·점수·프로필·메뉴·성공 표시는 생성기가 덧붙이기 쉬우므로 특히 확인한다. '시안' 라벨만으로 주요 실제 수치를 바꿔도 되는 것은 아니다.

입력 경로를 사용할 수 없다면 첨부했다고 주장하지 않는다. CLI/API 대체는 현재 지침과 권한을 따른다. UI 디자인을 위해 제품의 실제 AI를 호출하거나 연구 기록을 만들 필요는 없다.

## 재사용 이미지 프롬프트

대괄호는 브리프 값으로 채운다. 당시 세 호출의 공개용 전문은 [example-image-prompts.md](example-image-prompts.md)에 있다.

```text
Create one realistic production-quality UI screen for [product/surface].
Direction: [descriptive nonnumeric name]. Target viewport: [width x height].
The image is the app viewport, not a presentation or collage.
User task: [trigger, decision, observable success].
Current problem: [observed friction].
Input images: [actual role of each current UI / selected target / reference].
Keep: [confirmed design system, tokens, fonts, identity].
Change: [hierarchy, layout, navigation, detail opening, primary action].
Shared case: [bounded data and states, same across concepts].
Verbatim important text: [uncertainty, source, approval boundaries].
Primary action: [one action and truthful consequence].
Supporting actions: [one or two; remaining functions accessible off-screen].
Layout: [area priorities, not a feature inventory].
Use readable typography, spacing and alignment before surface boxes.
Keep unknown values unknown. Do not invent results, scores, source metadata,
approval, functionality, or navigation implying unsupported capabilities.
Avoid nested cards, decorative dashboards, unnecessary gradients and clipped text.
No decorative left accent bars, no colored pill badge on every item,
accent color only for the primary action and key states.
Date anchor: [verified current date if displayed].
No planned option number in the image.
```

## 선택과 산출물

시안이 실제 표시된 뒤 번호로 선택을 요청하고 정확한 이미지에 연결한다. 혼합/수정 요청이면 반영된 기준을 먼저 보여준다. 명확히 선택한 경우 재확인하지 않는다.

설계 완료물에는 과업 정의, 현재 문제 근거, 레퍼런스 적용표, 상태 계약, 표시 순서, 생성 오류/한계, 전후 비교 과업도 포함한다. '두 대상을 한 화면에서 볼 수 있음'과 '작업 시간이 줄었음'은 다른 주장이다.
