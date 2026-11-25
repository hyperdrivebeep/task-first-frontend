> 원본: Google Drive "2026-10-01_좋은 UI·UX 레퍼런스를 찾는 법_최종 가이드.md" (https://drive.google.com/file/d/1uibapms5DExFUlvk-Hl6ffXtMsHwTv9V/view). 2026-11-23 사용자 로그인 Chrome의 Drive 미리보기 텍스트를 그대로 옮김. Drive 화면 메뉴 문구가 앞뒤에 섞일 수 있음.

ULW-Research Synthesis: 좋은 UI/UX 레퍼런스를 찾는 법
Executive summary

좋은 레퍼런스를 찾는 핵심은 사이트를 많이 아는 것이 아니라 현재 내 결정에 필요한 증거 유형을 먼저 정하는 것이다.

화면 구성이 궁금하면 screenshot/gallery
사용 흐름이 궁금하면 recorded flow
왜 그렇게 설계했는지 궁금하면 case study/research
어떻게 구현하는지 궁금하면 specification/code
효과가 있었는지 궁금하면 사용자 연구나 실험

하나의 사이트가 이 모든 것을 동일하게 잘 제공하지는 않는다. 또한 같은 사이트 안에도 shipped screenshot, AI-generated concept, vendor article, paid placement가 섞일 수 있다. 따라서 사이트가 아니라 개별 artifact와 그것이 지지하는 claim을 분류해야 한다.

소셜 미디어는 좋은 후보를 발견하는 데 유용하지만 검증 시스템은 아니다. Threads는 공개 profile/post를 상당 부분 읽을 수 있었지만 feed가 제한됐고, X는 API·browser 모두 403/429에 막혀 최근 post를 검증하지 못했다. 이 조사에서 X는 account-to-first-party-resource 관계만 확인했다.

1. 먼저 질문을 분류한다
내가 알고 싶은 것	필요한 artifact	추천 시작점	쓰면 안 되는 용도
실제 제품의 화면·상태	screenshot, captured flow	Mobbin, Refero, Pttrns, Nicelydone	usability·conversion 효과 증명
과업이 어떤 순서로 진행되는가	annotated recording, complete flow	Page Flows, Mobbin video/flow	모든 분기·에러 상태가 있다고 가정
구독·paywall 경쟁 사례	iOS sessions, onboarding/paywall flow	ScreensDesign	매출 수치가 특정 UI의 인과 효과라고 주장
랜딩·페이지 구성	page/section gallery	One Page Love, Land-book	앱 task flow나 conversion 증명
절제된 웹 art direction	curated gallery	SiteInspire, Minimal Gallery	current/mobile behavior 추론
실험적 motion·art direction	clip/gallery	Awwwards, Recent, Hoverstat.es	구현 비용·접근성·성능 추론
navbar/footer 비교	component captures	Navbar Gallery, Footer.design	전체 IA·keyboard behavior 평가
microinteraction 느낌	short real-product clip	Design Spells	easing·interrupt·reduced-motion 명세
motion 구현	runnable code	Motion examples, Codrops	프로젝트 통합·성능이 이미 검증됐다고 가정
접근 가능한 interaction contract	specification/example	WAI-ARIA APG	production-ready drop-in 코드
React primitives	library docs/source	Radix, React Aria, Base UI	통합 앱의 WCAG 인증
public-service forms	pattern + research notes	GOV.UK Design System, USWDS	모든 산업에 동일 적용
enterprise/data-heavy UI	system + pattern docs	Carbon, Primer	native-platform authority
Apple/Android conventions	platform guidance	Apple HIG, Material 3	web component implementation으로 그대로 복사
ecommerce usability evidence	research/methodology	Baymard	guaranteed conversion uplift
CRO hypothesis	individual experiment	GoodUI	조건·power를 보지 않고 winner 복사
fintech journeys	recorded journey + expert analysis	11:FS Pulse	한국 규제·사용자 적합성 보장
lifecycle email	actual artifact gallery	Really Good Emails	deliverability·open rate 증명
UX case-study 구조	portfolio builder/examples	UXfolio	research quality·채용 인과 증명
주니어·인턴 포트폴리오 발견	curated profiles	Cofolios	top-tech logo를 실력 증거로 사용
현업 profile/project 발견	network/marketplace	Contra, Layers	독립적·대표 표본이라고 간주
portfolio site execution	live site gallery	Framer Gallery, Awwwards Portfolio	case-study process가 좋다고 추론
역사적 웹 UI	dated archive	Web Design Museum, Wayback Machine	현재 best practice로 사용
실제 타이포 사용례	contextual type archive	Fonts In Use	font license나 효과 증명
identity history	editorial/manual archive	Brand New, BP&O, Standards Manual	현재 brand guideline이라고 간주
editable design system	Figma/code kit	Untitled UI, Flowbite	license·states·architecture 확인 없이 적용
marketing-site assembly	structure/template builder	Relume, Framer Templates	product-app architecture로 사용

이 표는 배타적 분류가 아니다. Mobbin은 screenshots뿐 아니라 flow video와 prototype도 제공하고, GOV.UK는 pattern·research criteria·code를 함께 제공한다. 최종 선택은 website가 아니라 artifact 단위다.

2. 한국어 레퍼런스 스택
빠른 스캔
Design Compass: 한국어 product/UI/brand/AI design editorial. 빠르고 폭넓지만 Plus·교육·컨설팅 ecosystem의 상업성을 기록한다.
GDWEB: 국내 web/mobile 시각 벤치마크. awards/agency bias가 크므로 credited agency나 실제 서비스로 이동한다.
Naver Design: 국내 디자인 뉴스·브랜드·전시 맥락. 협찬·홍보성 주제를 구분한다.
깊게 읽기
pxd story: 사용자 리서치, 서비스 디자인, 프로젝트 리뷰.
YozmIT: product/design/development가 넓지만 저자별 품질 차이가 있다.
DesignDB: 보고서·통계·공공서비스 디자인. 자료의 조사 기간과 표본을 확인한다.
시각 레퍼런스
DBCut: 국내외 최신 site scan.
GDWEB: 선정작을 발견한 뒤 실제 live site와 제작사 case study를 확인한다.

권장 루틴:

매일: Design Compass, GDWEB, Naver Design
매주: pxd story, YozmIT, DesignDB
visual lead: GDWEB/DBCut → 실제 제작사·서비스
국내 앱 UX 분석, 금융앱 UX, 디자인 시스템, UX 리서치 사례, 사용성 테스트, 앱 리디자인으로 과업 중심 검색
3. Threads·X·기타 소셜
Threads: 실제 logged-out render로 확인한 후보
역할	계정	이번 관찰	주의점
공식 제품·kit 업데이트	@figma	Figma Motion, Lottie, audio/text animation, UI kits	vendor announcement
디자인 리소스 발견	@uxui.heroes	tool lists, Figma/Framer/motion templates	self-promotion·license 재검증
AI 시대의 design process	@bridger.to	job-first improvement, iterative UI, browser evidence	개인 workflow/opinion
research/process 관점	@ines.ux	organizational research memory, Figma Make, UX career	newest exposed series가 매일 최신은 아님
interaction case study	@gavinmnelson	Linear tab-bar prototype와 arc transition	prototype이지 outcome study가 아님
실제 product build log	@dylandotolo	meal plan, shopping, voice/dark/card states	current activity는 검증되지 않음
proof workflow	@joenandez	screenshot/video proof와 adversarial planning	engineering 중심·self-reported

참고만 할 후보:

@alialithinks: AI visual experimentation, 그러나 reference-method focus는 약함.
@valeriofoddai: EtnaUI post는 유용하지만 공개 feed가 2023에 머물러 historical lead로만 취급.

Threads는 public profile/post가 보였지만 signup overlay와 bounded timeline이 있었다. “계정의 최신 전체 feed”를 봤다고 말하면 안 된다.

X: account/resource 관계만 검증

X API, syndication, logged-out Chrome가 모두 403/429였으므로 recent tweet은 검증하지 못했다. 다음 계정은 first-party site가 handle을 연결했고 resource도 확인했지만, post·engagement·posting frequency는 주장하지 않는다.

@figma → Figma Motion
@smashingmag → Smashing Magazine
@uxdesigncc → Sidebar
@nngroup → NN/g
@awwwards → Awwwards
@mobbin → Mobbin
@pageflows → Page Flows
@designspells_ → Design Spells
@raunofreiberg → History of Software Design
@framer → State of Sites 2026
@linear → Linear Changelog
다른 소셜·뉴스레터
Instagram: Figma는 craft, NN/g는 원칙, Baymard는 ecommerce pattern. 로그인 벽 때문에 원문 site로 이동한다.
Reddit: r/UI_Design, r/web_design, r/typography를 counterexample/critique 용도로 사용한다.
LinkedIn: NN/g, Mobbin, Figma page에서 article/practitioner lead를 찾고 원문으로 이동한다.
YouTube: NNgroup은 원칙, Figma는 craft, Juxtopposed는 redesign hypothesis.
Newsletter: Sidebar는 daily, Dense Discovery와 Smashing Newsletter는 weekly.
4. 그대로 복사해 쓸 수 있는 query recipes

기본 구조:

[user task] [screen/component] [state] [platform] [industry]


그다음 visual direction과 implementation constraint는 별도 검색으로 나눈다.

나쁜 검색:

beautiful dashboard UI
modern app inspiration
cool animations


좋은 검색:

mobile checkout guest order review payment confirmation
enterprise role permission edit confirmation desktop
search no results filters reset mobile ecommerce
bank transfer review recipient amount fee confirmation

과업과 흐름
site:mobbin.com onboarding account setup iOS
mobile checkout guest order review payment flow -template
site:design-system.service.gov.uk/patterns/ "check answers"
subscription paywall trial recurring price cancel flow

상태
site:carbondesignsystem.com "empty states" "first"
search "no results" filters reset UX -first-time
site:design-system.service.gov.uk/components/ "error summary"
permission denied dashboard recovery state

구현
site:w3.org/WAI/ARIA/apg/patterns/dialog-modal/ focus Escape
site:w3.org/WAI/ARIA/apg/patterns/combobox/ autocomplete
site:ui.shadcn.com/docs/components/data-table filtering row selection
site:developer.mozilla.org "Responsive web design" grid flexbox

visual direction
site:awwwards.com architecture typography minimal
site:awwwards.com e-commerce clean
site:onepagelove.com SaaS FAQ pricing
site:land-book.com pricing SaaS typography

한국어
"사용성 테스트" 사례 -학원 -국비
site:brunch.co.kr "프로덕트 디자이너" 회고
site:velog.io "디자인 시스템" -부트캠프
"UX 리서치" 사례
"국내 앱 UX 분석" 금융

검색 결과 PASS/FAIL

PASS

서로 다른 제품/출처에서 usable reference 2개 이상
또는 behavior guidance가 있는 authoritative source 1개
필요한 task/state/platform이 실제로 보임

FAIL

thumbnail·snippet만 있음
예쁜 정상 상태만 있고 필요한 flow/state가 없음
source URL/creator를 추적할 수 없음
unrelated result를 억지로 성공 처리

실패하면 한 번에 하나만 완화한다.

exact quote 제거
visual style 제거
industry 제거
task/state는 유지
account setup/registration, no results/zero results, drawer/side panel처럼 인접어를 따로 검색
5. 발견→선별→추출→검증 워크플로
5.1 Reference brief

먼저 한 페이지로 고정한다.

Decision:
Users and task:
Screens/journey/platform:
Constraints:
Unknowns:
Exclusions:
Validation signal:


“카드 레이아웃을 찾는다”가 아니라 “세 요금제를 맥락 손실 없이 비교하는 방법”처럼 문제로 쓴다.

5.2 세 discovery lane
Direct: 같은 과업·제품군
Adjacent: 다른 제품군의 같은 interaction 문제
Analogous: 다른 매체의 같은 cognitive problem

세 lane은 originality guarantee가 아니라 탐색 폭을 넓히는 장치다.

5.3 Provenance card
original_url:
creator/organization:
source_type:
publication/capture date:
platform/viewport/locale/account state:
task/state:
shipped | concept | generated | unknown:
artifact_type: screenshot | flow | recording | spec | code | editable file
commercial relationship:
license/terms:
claim supported:
claim not supported:


원본 URL을 못 찾으면 quarantine한다.

5.4 Shortlist

다음 hard gate 중 하나라도 실패하면 보류한다.

brief 질문과 무관
원본·creator 식별 불가
mechanism을 이해할 상태·맥락 부족
private/confidential 정보 포함
의도한 reuse에 맞는 license/permission 불명
distinctive brand/trademark confusion risk 미해결

점수는 우선순위 도구일 뿐 “original/safe” 판정기가 아니다.

5.5 Evidence card
Observation:
User problem:
Mechanism:
Conditions:
Evidence:
Hypothesis:
Limitation:
Transfer level:
Proposed adaptation:
Validation:
Provenance ID:


Observation과 interpretation을 분리한다.

5.6 Synthesis
source가 아니라 user problem/mechanism으로 묶는다.
contradiction을 평균 내서 없애지 않는다.
최소 3개의 구조적으로 다른 concept을 만든다.
각 concept은 여러 source의 원리를 합성하고, 무엇을 의도적으로 바꿨는지 기록한다.
5.7 세 개의 최종 결정
Evidence: 무엇을 어디서 언제 어떤 한계로 관찰했는가?
Reuse: 실제로 무엇을 재사용하며 어떤 근거·조건이 있는가?
Design: 결과가 task, accessibility, consistency, distinctiveness 요구를 충족하는가?

Provenance card, 여러 출처, similarity 점수, 두 명의 리뷰는 legal clearance나 originality 인증이 아니다.

6. 소셜 계정 관리 정책

영구 “좋은 계정” 대신 다음 상태를 쓴다.

CURRENT_LEAD: 최근·관련·공개 증거가 충분한 발견 채널
REFERENCE_ONLY: 유용한 특정 artifact는 있지만 current feed 추천은 약함
HOLD: identity/access/date/sample이 불충분
RETIRED: 공식 이동 또는 장기 public unavailability가 검증됨

필수 필드:

platform, profile URL, identity evidence, owner group,
observed_at, locale, auth/access class,
exact post URLs, published time,
topic, commercial role, sample coverage,
decision, reason, next review


이 조사에서 제안한 weekly access check, 30-day content audit, 90-day identity review는 보수적 editorial default이지 과학적 threshold가 아니다.

다음 표현을 지킨다.

“마지막 게시물” 대신 “공개 화면에 표시된 최신 게시물”
“삭제됨” 대신 “두 차례 30일 범위에서 public unavailable; 삭제 여부 미확인”
“독립적” 대신 affiliation unknown
vendor 계정은 announcement/tutorial signal
동일 owner의 cross-post는 하나의 source family
7. 비용·최신성·편향 감사

추천할 때 아래를 yes/no/unknown으로 기록한다.

affiliate, sponsorship, paid submission, subscription, ownership relation?
inclusion/order 기준 공개?
광고와 editorial 구분?
free browsing / free account / paid trial / subscription 중 무엇인가?
표시 가격의 currency, billing cycle, seat, tax, renewal?
item-level version/capture date?
original product와 여전히 일치?
여러 글이 하나의 artifact를 반복한 것은 아닌가?

현재 교정:

Page Flows trial은 free가 아니라 $2.95 paid trial.
Pttrns는 현재 account 필요, 완전 무료라고 광고.
UXfolio trial은 draft만 가능하고 publish 불가.
Contra “commission-free”는 zero fee 전체를 뜻하지 않음.
Relume은 build/export/hosting plan을 분리해야 함.
Tailwind Plus public 가격은 이번 조사에서 검증 불가.
Material Web은 maintenance mode.

가격은 2026-10-01 관찰값일 뿐이다. 구매 직전에 반드시 다시 확인한다.

8. Binary checklist
Discover
디자인 결정과 validation signal이 적혀 있다.
direct/adjacent/analogous lane을 모두 검색했다.
task/state/platform 용어를 사용했다.
social popularity와 gallery award를 품질 점수로 쓰지 않았다.
Source
original URL과 creator를 찾았다.
artifact origin이 shipped/concept/generated/unknown으로 표시됐다.
capture date, platform, locale, account state가 있다.
screenshot/flow/recording/spec/code의 차이를 기록했다.
commercial relationship과 access gate를 기록했다.
Extract
observation과 interpretation이 분리됐다.
transferable mechanism과 source-specific expression을 분리했다.
각 idea에 limitation과 validation method가 있다.
한 제품의 shell·copy·styling·motion을 통째로 가져오지 않았다.
Validate
live product와 item-level freshness를 확인했다.
task completion·error·recovery를 확인했다.
keyboard·screen reader·responsive behavior를 확인했다.
reusable asset/code의 exact license와 intended use를 확인했다.
Evidence / Reuse / Design 결정을 별도로 기록했다.
Social
account가 아니라 exact post URL을 저장했다.
repost를 독립 corroboration으로 세지 않았다.
vendor/creator/sponsor/affiliate/unknown을 표시했다.
public access와 recency를 날짜와 함께 기록했다.
feed claim을 original article/product로 재검증했다.

하나라도 아니면 HOLD 또는 REWORK다.

Sources

전체 ledger는 sources-ledger.md의 S001-S103과 social-ledger.md의 SO001-SO040에 있다. 핵심:

Mobbin
Page Flows
Refero
Baymard
GOV.UK Design System
WAI-ARIA APG
Awwwards Evaluation
Design Spells
Motion examples
Fonts In Use
Design Compass
pxd story
Instagram Ranking Explained
FTC Influencer Disclosures
W3C PROV
Copyright Office
Method and limitations
Opening wave: 18 lanes covering source families, methods, risk and social.
Expansion wave: pricing/freshness, source taxonomy, social reproducibility, reuse-risk review.
Two Threads lanes rendered 10 public profiles; lead manually inspected representative screenshots and JSON manifests.
X direct search was date-bounded but rate-limited three times; syndication returned 429 and browser returned 403.
Eleven X account/resource relationships were reconciled through first-party sites, but no recent tweet was verified.
Social and gallery recommendations are dated discovery leads, not effectiveness claims.
No authenticated paid library, checkout, purchase, account action or private feed was accessed.
Legal discussion is evidence-bound and not legal advice; current Korean law requires separate review for a release.