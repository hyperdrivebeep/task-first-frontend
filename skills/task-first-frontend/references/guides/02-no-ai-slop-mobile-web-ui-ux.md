> 원본: Google Drive "2026-09-30_AI-slop 없는 모바일 웹 UI·UX_최종 가이드.md" (https://drive.google.com/file/d/1VRYj-gVEBVrBNgMg_JQfeBjJEDfXksoi/view). 2026-11-23 사용자 로그인 Chrome의 Drive 미리보기 텍스트를 그대로 옮김. Drive 화면 메뉴 문구가 앞뒤에 섞일 수 있음.

ULW-Research Synthesis: AI-slop 없는 모바일 웹 UI/UX
Executive summary

좋은 모바일 웹은 “세련된 컴포넌트를 많이 쓰는 것”이 아니라 좁은 화면에서 사용자가 가장 중요한 일을 가장 적은 혼란으로 끝내게 만드는 것이다. 디자인은 콘텐츠 우선순위와 실제 과업에서 시작하고, 반응형 레이아웃·터치·상태·접근성·성능을 같은 품질 문제로 다뤄야 한다.

AI-slop은 특정 폰트, 보라색 그라디언트, 둥근 카드 자체가 아니다. 그런 요소가 실제 콘텐츠·과업·브랜드·상태에 대한 결정을 대신할 때 slop이 된다. 반대로 익숙한 카드나 버튼도 정보 관계와 과업에 맞고, 완전한 상태와 접근성을 갖추면 좋은 선택이다.

실전 순서는 다음이다:

사용자와 핵심 과업을 한 문장으로 고정한다.
실제 콘텐츠와 상태를 먼저 만든다.
3~5개 동종 플로우를 비교해 불변 규칙과 변형점을 추출한다.
토큰과 컴포넌트 상태를 DESIGN.md 같은 계약으로 고정한다.
primitive를 먼저 검증한 뒤 화면을 조립한다.
320/375/768/1280px, 200% 확대, 키보드, reduced motion, 느린 네트워크에서 실제 흐름을 실행한다.
1. 좋은 모바일 웹의 기반
1.1 화면이 아니라 과업부터 정한다

첫 질문은 “히어로를 어떻게 꾸밀까?”가 아니라 다음이어야 한다.

누가 이 페이지를 쓰는가?
이 사람이 가장 먼저 끝내야 하는 일은 무엇인가?
성공 직전까지 반드시 알아야 할 정보는 무엇인가?
실패·빈 상태·로딩·권한 거부·오프라인 때 다음 행동은 무엇인가?

예를 들어 Airbnb의 관찰된 모바일 흐름은 검색 입력을 데스크톱처럼 한 줄에 압축하지 않았다. 위치는 전체 화면 편집기로 열고, 날짜와 인원은 요약 행으로 유지했다. 예약 직전에는 날짜·인원·가격·취소·결제 시점을 다시 편집할 수 있게 했다. 이는 “모바일에서는 필드를 줄여라”가 아니라 한 번에 해결할 결정의 수를 줄이고 맥락은 보존하라는 사례다. [S009-S012]

1.2 반응형은 축소가 아니라 재구성이다

좋은 모바일 레이아웃은 데스크톱을 390px 안에 축소하지 않는다.

Linear: 글로벌 내비게이션을 접고 로그인·가입·메뉴만 남겼다. [S001-S003]
Notion: 장식 이미지를 제목 위로 재배치하고 기능 그리드를 세로 카드로 바꿨다. [S005-S007]
Stripe: 텍스트와 CTA를 제품 이미지보다 먼저 배치하고, CTA 배열을 라벨 길이에 따라 바꿨다. [S013-S015]

단, WCAG Reflow는 “무조건 1열”을 요구하지 않는다. 비예외 콘텐츠가 320 CSS px 상당 폭에서 정보와 기능을 잃지 않아야 한다. 개별 패널이 폭 안에 들어가는 carousel이나 본질적으로 2차원인 표는 조건부로 가능하다. [S017-S018]

실무 규칙:

문서 전체의 우발적 가로 스크롤은 실패다.
carousel·chip row·표처럼 경계가 분명한 로컬 가로 영역은 별도로 평가한다.
“다음 카드가 조금 보임”은 affordance가 될 수 있지만, 중요한 제어나 텍스트가 잘리는 것은 아니다.
1.3 터치 크기는 규범과 권장을 구분한다

정확한 구분:

WCAG 2.2 AA SC 2.5.8: 24×24 CSS px, 예외 포함.
WCAG 2.2 AAA SC 2.5.5: 44×44 CSS px, 예외 포함.
Android: 48×48dp 권장.
Apple: 현재 HIG 데이터에서 iOS/iPadOS 기본 44×44pt, 최소 28×28pt.

CSS px, dp, pt는 같은 단위가 아니다. 따라서 “접근성은 무조건 44px”이라는 말은 부정확하다. 실무적으로는 AA 충족을 별도로 확인하고, 독립된 주요 터치 컨트롤은 44~48 CSS px hit area를 프로젝트 기본값으로 권장하는 편이 안전하다. 아이콘은 작아도 padding으로 hit area를 키울 수 있다. [S017, S019-S021]

1.4 타이포 수치는 출발점이지 인증서가 아니다

WCAG에는 “본문 최소 16px” 규정이 없다. 또한 1.5 line-height는 모든 페이지의 작성 기본값이 아니라, 사용자가 그 수준까지 spacing을 조정해도 콘텐츠와 기능이 사라지지 않아야 한다는 적응성 조건이다. [S017, S022]

권장 출발점:

본문 1rem
본문 line-height 약 1.5~1.7
긴 본문은 모바일 약 3560자, 데스크톱 약 6075자 안팎에서 실제 폰트로 검증
한국어는 고정 높이를 피하고 word-break, overflow-wrap, 혼합 한영 줄바꿈을 실제 문장으로 확인

검증:

200% text resize
320 CSS px reflow
WCAG text-spacing override 동시 적용
긴 이름·금액·날짜·한국어+영문 혼합 문자열
1.5 상태가 없는 컴포넌트는 미완성이다

버튼 하나도 최소한 다음을 검토한다.

default / pressed / focus-visible / disabled
loading / success / error
긴 라벨 / 아이콘 유무
키보드와 스크린리더 이름

화면 단위로는:

initial loading
populated
empty
validation error
request error
offline with cache / without cache
permission denied
destructive confirmation and undo

“예쁜 정상 상태”만 있는 UI는 실제 서비스가 아니다.

1.6 모션은 의미와 비용을 함께 설명해야 한다

좋은 모션은 원인과 결과를 연결한다.

sheet가 어디서 나왔는지 알려준다.
선택 상태가 어디로 이동했는지 보여준다.
제출·성공·실패 상태를 설명한다.

다음은 slop에 가깝다.

비상호작용 요소가 이유 없이 떠다닌다.
모든 카드가 hover 때 scale된다.
동일한 fade-up이 섹션마다 반복된다.
중요한 입력보다 장식 animation이 먼저 주의를 가져간다.

prefers-reduced-motion만 추가했다고 끝나는 것도 아니다. 자동 movement/updating, flashing, interaction-triggered animation은 서로 다른 조건을 확인해야 한다. [S017, S027]

2. 단계별 제작 워크플로
Step 1 — 제품 문장을 만든다

다음 형식으로 한 줄을 쓴다.

[사용자]가 [상황]에서 [핵심 과업]을 [성공 기준]으로 끝내는 모바일 웹.

예:

취업 준비생이 이동 중 공고를 저장하고, 2분 안에 지원 여부를 판단하는 모바일 웹.

이 문장을 설명하지 못하는 섹션과 컴포넌트는 일단 제거 후보로 둔다.

Step 2 — 콘텐츠 블록에 역할을 부여한다

각 블록은 하나의 역할을 가진다.

Hook: 왜 지금 봐야 하는가
Explain: 무엇을 제공하는가
Prove: 왜 믿어야 하는가
Compare: 무엇을 선택해야 하는가
Act: 다음 행동은 무엇인가
Recover: 실패 후 어떻게 돌아오는가

“균형 잡힌 3카드”라서 넣지 말고, 정보 관계 때문에 넣는다.

Step 3 — 레퍼런스를 과업 단위로 모은다

좋지 않은 검색:

“예쁜 SaaS 모바일”
“트렌디한 앱”

좋은 검색:

모바일 여행 검색 날짜 선택
결제 전 주문 검토
비밀번호 없는 로그인 오류
긴 설정 폼 progressive disclosure
mobile empty state retry

같은 과업의 3~5개 제품을 비교한다. 한 제품을 통째로 복제하지 않는다.

Step 4 — 레퍼런스에서 6가지만 추출한다

각 레퍼런스에서 다음을 기록한다.

정보 우선순위: 첫 화면에 무엇이 있고 무엇이 뒤로 밀렸는가
레이아웃 문법: stack, cluster, split, sheet, rail 등
토큰: 색 역할, 타입 역할, spacing, radius, elevation
컴포넌트 anatomy: label, icon, helper, metadata, action
상태와 상호작용: focus, pressed, loading, error, success, motion
반응형 변화: 숨김, 재배치, 축약, scroll ownership

그리고 “왜 우리 제품에서는 달라야 하는가”를 한 줄 쓴다.

Step 5 — 작은 디자인 시스템을 먼저 만든다

최소 계약:

Color: canvas, surface, text, muted, primary, danger, success, focus
Type: display, heading, body, label, caption, mono
Space: 4, 8, 12, 16, 24, 32, 48
Radius: control, card, sheet
Elevation: base, raised, overlay
Motion: fast, normal, enter, exit, reduced
Primitives: Button, Field, Card, ListRow, Sheet, Dialog, Tabs, Toast


컴포넌트에서 임의 hex나 magic px를 만들지 않는다. 새 값이 필요하면 시스템에 추가한 이유를 기록한다.

Step 6 — primitive showcase를 먼저 검증한다

제품 화면 전에 버튼·필드·카드·sheet·dialog의 상태를 한 페이지에 렌더링한다.

320 / 375 / 768 / 1280px
light / dark
한국어 짧은/긴 라벨
keyboard focus
loading / error / disabled
reduced motion

primitive가 깨지면 제품 화면에서도 반복해서 깨진다.

Step 7 — 실제 화면을 조립하고 task flow로 검증한다

최소 3개 흐름:

happy path
잘못된 입력 또는 네트워크 실패
뒤로 가기·취소·재시도·undo

스크린샷 QA만 하지 말고 실제로 눌러 본다.

3. AI-slop 징후와 대안
정보구조

Slop

제품과 무관하게 hero → 3 features → testimonials → pricing → CTA
내부 도구인데 랜딩 페이지 문법을 사용
모든 화면의 첫 버튼이 “Get started”

대안

핵심 과업 순서로 섹션을 배치한다.
사용자의 질문을 제목으로 쓴다.
대표 사용자가 실제 라벨로 과업을 찾을 수 있는지 확인한다.
타이포

Slop

브랜드나 언어와 무관하게 같은 sans font
거대한 display와 지나치게 작은 body
실제 한국어 문장에서 줄바꿈이 무너짐

대안

display/body/label 역할을 분리한다.
실제 콘텐츠와 200% 확대에서 검증한다.
폰트 이름보다 hierarchy와 읽기 결과를 본다.
간격과 카드

Slop

모든 정보를 같은 둥근 카드 안에 넣음
모든 화면에 넓은 padding을 적용
표와 비교 항목까지 카드로 바꿔 정렬 관계를 잃음

대안

독립적으로 재배열 가능한 주제만 카드로 묶는다. [S026]
순차 문장은 section으로, 비교는 table/list로 유지한다.
정보 밀도는 과업별로 선택한다.
색과 재질

Slop

accent가 모든 곳에 있어 우선순위가 사라짐
glass/gradient가 역할 없이 반복됨
error/selected가 색만으로 구분됨

대안

canvas→surface→raised→overlay의 재질 계층을 만든다.
accent는 1차 행동과 핵심 상태에 제한한다.
gradient는 브랜드 분위기나 연속 데이터처럼 역할을 설명할 수 있을 때 사용한다.
색 외에 텍스트·아이콘·위치로 의미를 중복한다.
컴포넌트와 상태

Slop

정상 상태만 구현
클릭되지 않는 카드
placeholder-only form
error가 페이지 위 toast에만 나타남

대안

상태 매트릭스를 먼저 작성한다.
오류는 관련 field 근처에 원인과 해결법을 쓴다.
제출 실패 후 입력을 보존하고 첫 오류로 focus를 이동한다.
모션

Slop

모든 섹션 fade-up
카드 hover scale 반복
사용자가 기다리는 동안 장식 animation만 재생

대안

각 motion 옆에 전달할 의미를 기록한다.
의미를 설명하지 못하면 제거한다.
transform/opacity 중심으로 구현하고 실제 INP/프레임을 측정한다.
4. 레퍼런스 출처와 사용법
실제 제품 화면·플로우
Mobbin: mobile/web 화면, pattern, 다단계 flow, 일부 video/prototype. 과업별 검색에 강함.
Page Flows: 실제 화면 녹화 중심. onboarding, login, checkout 같은 연속 흐름 분석에 좋음.
Refero: web·iOS 화면 탐색에 유용. 최신성과 플랫폼 범위를 직접 확인할 것.
Pttrns: 모바일 패턴 탐색용. 캡처 날짜와 현재 제품을 재검증할 것.

사용법:

플랫폼을 섞지 않는다.
같은 과업 3~5개를 나란히 본다.
공통점보다 “왜 달라졌는가”를 기록한다.
최종 후보는 live site에서 다시 확인한다.
웹 비주얼·브랜드 방향
Awwwards: 표현력·크리에이티브 탐색에 좋음. 평가 가중치는 design 40%, usability 30%, creativity 20%, content 10%이며 WCAG 인증이 아니다.
Lapa Ninja: landing section 구조 수집에 유용.
One Page Love: one-page 구조와 CTA 반복 패턴 탐색.
SiteInspire: 스타일·타입·주제별 큐레이션.
Minimal Gallery: 절제된 편집·타이포 방향 탐색.

사용법:

분위기와 composition만 추출한다.
mobile task flow와 접근성은 별도로 검증한다.
수상 여부를 conversion이나 usability 증거로 쓰지 않는다.
인터랙션과 구현
Design Spells: 작은 상호작용 아이디어.
Motion examples: 코드 기반 motion mechanism.
Radix Primitives: overlay·menu·accordion의 behavior/ARIA 참고.
Headless UI: unstyled accessible behavior 참고.
WAI-ARIA APG: keyboard와 semantic interaction 기준.
shadcn/ui: 소유 가능한 component code 참고. 시각 방향 그 자체로 사용하지 말 것.
디자인 시스템·규범
WCAG 2.2
GOV.UK Design System
USWDS
Material Design 3
Apple HIG
web.dev
5. 레퍼런스를 복사하지 않는 방법

좋은 추출:

“이 검색 화면은 입력 3개를 동시에 보여주지 않고, 현재 결정만 확장한다. 선택한 값은 접힌 요약으로 남긴다.”

나쁜 추출:

“Airbnb처럼 흰색 카드와 분홍 버튼을 쓴다.”

다음 형식으로 기록한다.

Reference:
Observed task:
Invariant:
Variable:
Token/mechanism:
What we will change:
Why it fits our user:
How we will verify:


로고·문구·브랜드 자산·고유 일러스트를 복사하지 않는다. 단일 사이트의 표면을 복제하지 말고 여러 레퍼런스에서 기능 규칙을 합성한다.

6. Binary QA checklist
Fit
이 화면의 1차 과업을 한 문장으로 설명할 수 있다.
각 섹션과 컴포넌트가 실제 콘텐츠 관계 또는 과업에 근거한다.
브랜드 선택은 구체적인 분위기·재질·색 역할로 설명된다.
Meaning
1차 행동은 하나이며 secondary action과 구분된다.
아이콘만 있는 버튼에는 accessible name이 있다.
색만으로 상태를 구분하지 않는다.
카드·표·리스트 선택이 정보 관계와 맞는다.
Execution
320 CSS px에서 비예외 콘텐츠가 정보·기능 손실 없이 reflow한다.
프로젝트의 44~48 CSS px comfort target과 WCAG AA 검사를 별도로 통과한다.
200% text resize와 text-spacing override에서 clipping이 없다.
loading·empty·error·success·disabled·offline 상태가 있다.
모든 핵심 흐름을 tap과 keyboard로 완료할 수 있다.
sticky UI가 focus, 콘텐츠, virtual keyboard를 가리지 않는다.
reduced motion 외에도 autoplay, updating, flash를 따로 검사한다.
mobile field data에서 LCP·INP·CLS 목표를 확인한다. [S024]
Evidence
레퍼런스의 URL·날짜·플랫폼·viewport·로그인 상태를 기록했다.
screenshot과 live interaction evidence를 구분했다.
normative requirement와 product recommendation을 구분했다.
유명 제품·수상·gallery를 효과 증거로 사용하지 않았다.
실제 사용자 과업 또는 대표 콘텐츠로 최종 선택을 검증했다. [S028]

네 묶음 중 하나라도 아니면 REWORK다.

Sources

핵심 출처는 sources-ledger.md의 S001-S034와 연결된다. 주요 외부 링크:

WCAG 2.2
W3C Understanding Reflow
Apple accessibility HIG data
Android accessibility touch guidance
WebAIM Fonts
web.dev Responsive Design
web.dev Web Vitals
GOV.UK Design Principles
USWDS Card
W3C Involving Users
Mobbin
Page Flows
Awwwards Evaluation
Design Spells
Radix Accessibility
Method and limitations
64-node opening DAG: 60 completed, 4 route failures.
4 route failures were independently recovered with mobile browser rendering of Linear, Stripe, Notion, and Airbnb.
Wave 1 actual artifacts read: 60 files, 254,873 characters.
Wave 2 counter-search DAG: 16 completed, 0 failed.
Wave 2 actual artifacts read: 16 files, 74,263 characters.
Two independent high-reasoning lanes attacked evidence quality and conventional-pattern framing.
Product rendering used one emulated 390×844 Chromium viewport per recovery lane; it does not replace physical iOS/Android testing.
Authenticated Linear/Notion product workflows and completed Airbnb/Stripe payment were not tested.
Gallery availability, pricing, and capture freshness may change.
“AI-slop” has no validated visual authorship detector in the reviewed evidence. This report uses it as a product-quality critique: defaults replacing decisions.