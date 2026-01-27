import { ExperienceItem, ProjectItem, EducationItem, LicenseItem, GalleryItem } from './types';

import imgEverymomentPoster from './assets/img_everymoment_poster.png';
import imgPoscoBigdataPoster from './assets/img_posco_bigdate_poster.png';
import videoBigdata from './assets/video_bigdata.mp4';
import imgPoscoAiPoster from './assets/img_posco_ai_poster.png';
import videoAI from './assets/video_ai.mp4';
import imgPitchmatePoster from './assets/img_pitchmate_poster.png';
import videoIbm from './assets/video_ibm.mp4';
import imgDuriinternPoster from './assets/img_duriintern_poster.png';
import videoDuri from './assets/video_duriintern.mp4';
import videoKakao from './assets/video_kakao.mp4';

import imgIbmMain from './assets/img_ibm_main.jpeg';
import imgIbm1 from './assets/img_ibm1.jpeg';
import imgIbm2 from './assets/img_ibm2.jpeg';
import imgIbm3 from './assets/img_ibm3.jpeg';

import imgPoscoMain from './assets/img_posco_main.jpeg';
import imgPosco1 from './assets/img_posco1.jpeg';
import imgPosco2 from './assets/img_posco2.jpeg';
import imgPosco4 from './assets/img_posco4.jpeg';
import imgPosco5 from './assets/img_posco5.jpeg';
import imgPosco6 from './assets/img_posco6.jpeg';
import imgPosco7 from './assets/img_posco7.jpeg';

import imgSwftMain from './assets/img_swft_main.jpeg';
import imgSwft1 from './assets/img_swft1.png';
import imgSwft2 from './assets/img_swft2.jpeg';

import imgKakaoMain from './assets/img_kakao_main.jpeg';
import imgKakao1 from './assets/img_kakao1.png';
import imgKakao2 from './assets/img_kakao2.jpeg';

import imgEtcMain from './assets/img_etc_main.png';
import imgEtc1 from './assets/img_etc1.jpeg';
import imgEtc2 from './assets/img_etc2.jpeg';

import imgAppleMain from './assets/img_apple_main.jpeg';
import imgApple1 from './assets/img_apple1.jpeg';
import imgApple3 from './assets/img_apple3.jpeg';
import imgApple4 from './assets/img_apple4.png';

import imgBinbeanPoster from './assets/img_binbean_poster.png';
import reportBinbean from './assets/report_binbean.pdf';

import imgSurfingGangwonPoster from './assets/img_surfing_poster.png'

import imgProfile from './assets/img_profile.jpeg';

export const IMG_PROFILE = imgProfile;

export const PERSONAL_INFO = {
  name: "Arim Lee (이아림)",
  email: "lar713@naver.com",
  github: "https://github.com/arieum",
  phone: "010 - 8330 - 3273",
  address: "Chuncheon-si, Gangwon-do",
  birth: "2001.07.13 (26)",
};

export const SKILLS = [
  { category: "Language", items: ["Python", "Java", "Kotlin", "SQL"] },
  { category: "AI & Data", items: ["PyTorch", "TensorFlow", "Pandas", "LangChain", "RAG", "HuggingFace"] },
  { category: "Mobile & Web", items: ["Android Studio", "Swift", "React"] }];

export const EDUCATION: EducationItem[] = [
  { school: "Kangwon National University", major: "Computer Engineering", period: "2021.03.02 - 2026.02 (Graduation Expected)" },
  { school: "Yubong Girls' High School", major: "Academic", period: "2017.03 - 2020.02" },
];

export const LICENSES: LicenseItem[] = [
  { name: "Engineer Information Processing (정보처리기사)", date: "2025.12.24" }
];

export const CAREER_HISTORY: ExperienceItem[] = [
  {
    id: "career-1",
    category: 'Career',
    company: "Robogram AI Robot Lab",
    role: "Tech Dev Team / Intern",
    period: "2024.12.26 ~ 2025.02.25",
    link: "https://robogram.net",
    tags: ["Android", "Hologram", "Async"],
    description: [
      "Android technology development",
      "Block Coding APP Hologram feature development",
      "Asynchronous Handler processing"
    ]
  },
  {
    id: "exp-5",
    category: 'Experience',
    company: "2026 IBM Hackathon",
    role: "IBM Korea / Learner & Hackathon",
    period: "2026.01.05 - 2026.01.16",
    link: "https://www.ibm.com/kr-ko",
    tags: ["AI Agent", "IBM watsonx"],
    description: [
      "[🏆 Award] Project Grand Prize (최우수상)",
      "IBM AI Agent Usage Education",
      "Pitchmate: AI-based Presentation Assistant Service"
    ]
  },
  {
    id: "exp-4",
    category: 'Experience',
    company: "2025 SW인재페스티벌",
    role: "소프트웨어중심대학협의회",
    period: "2025.11.27 - 2025.11.28",
    link: "https://www.swfestival2025.kr/",
    tags: ["AI Agent", "IBM watsonx"],
    description: [
      "[🏆 Award] Project Grand Prize (인기상)",
      "두리인턴: AI-based Interview Preparation Service"
    ]
  },
  {
    id: "exp-3",
    category: 'Experience',
    company: "AWS Solutions Architect Associate",
    role: "AWS / Learner & Hackathon",
    period: "2025.11.15 - 2025.11.23",
    link: "https://aws.amazon.com/ko/",
    tags: ["AWS", "SAA"],
    description: [
      "AWS Solutions Architect - Associate Learning",
      "Hackathon Participation - AI Dating Counseling & Community Service"
    ]
  },
  {
    id: "exp-2",
    category: 'Experience',
    company: "POSCO Big Data · AI Academy 30th",
    role: "POSCO & POSTECH / Big Data · AI",
    period: "2025.06.09 - 2025.08.29",
    link: "https://youth.posco.com/posco/edu/",
    tags: ["Data Analysis", "AI/ML"],
    description: [
      "[🏆 Award] Project Grand Prize (프로젝트 최우수상)",
      "[🏆 Award] Academic Excellence (성적우수상)",
      "[🏆 Award] Cooperation Award (협력상)",
      "[Big Data] Preprocessing, EDA, Oversampling, Modeling(Regression, DecisionTree, RandomForest, GradientBoosting, etc.)",
      "[AI] Algorithms, Machine Learning, AIoT, NLP, Computer Vision"
    ]
  },
  {
    id: "exp-1",
    category: 'Experience',
    company: "Kakao Tech Campus 2nd",
    role: "Kakao / Android Track",
    period: "2024.04.08 - 2024.11.20",
    link: "https://www.kakaotechcampus.com/",
    tags: ["Kotlin", "MVVM", "Coroutine"],
    description: [
      "Android Tech Stack Learning: Clean Architecture (MVVM Pattern), Asynchronous (Coroutine), SharedPreference / SQLite",
      "Kakao Tech Ideathon (2025.08.22 - 2025.08.23)"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "PITCHMATE",
    subtitle: "AI-based Presentation Assistant Service",
    period: "2026.01.05 - 2026.01.16",
    image: imgPitchmatePoster,
    techStack: ["React", "IBM-WatsonX", "Upstage", "Google Gemini", "RAG"],
    description:
      "PPT 하나만 올리는 순간, ‘요약 → 대본 → 리허설 → 모의평가’가 한 줄로 이어진다. 발표 준비가 늘 막막했던 이유를, PitchMate가 단계별로 해부한다.",
    detailedOverview:
      "PitchMate는 발표 준비에서 가장 시간이 새는 구간을 겨냥한다. 자료는 있는데 어디를 강조해야 할지, 대본은 썼는데 시간 배분이 불안하고, 연습을 해도 무엇이 부족한지 모르겠는 그 지점을 ‘워크플로우’로 고정했다. PDF를 서론–본론–결론 구조로 재구성해 핵심을 뽑고, 청중/스타일에 맞춘 대본을 생성하며, 실전 리허설에서는 음성 인식으로 키워드 트래킹과 타이밍을 잡아준다. 마지막으로 공고·평가기준 기반 모의 심사로 점수/등급/개선 포인트를 제공해, 발표를 ‘감’이 아니라 ‘근거’로 다듬게 한다.",
    features: [
      "PDF 발표자료 분석 및 구조화 요약",
      "청중/스타일 기반 발표 대본 생성(섹션별 시간·큐·예상질문 포함)",
      "음성 인식 리허설 모드(키워드 트래킹 + 타이머 + 프롬프터)",
      "공고/평가기준 기반 AI 모의심사(점수·등급·피드백 제공)"
    ],
    myRole: [
      "프론트엔드(React) 중심으로 서비스 플로우(Prep → Script → Live → Eval) UX를 설계·구현",
      "Tailwind 커스텀 애니메이션·글래스모피즘 기반으로 몰입형 인터랙션 구현",
      "Gemini API 연동(gemini-3-flash-preview) 및 프롬프트 설계로 요약/대본/평가 품질 튜닝",
    ],
    links: [
      { label: "Github Repo", url: "https://github.com/IBM2026-Team6/fronted", type: "github" },
      { label: "PPT", url: "https://www.canva.com/design/DAG-YFYljqE/kZmxoRisqGe9q0Xl0XRvbA/view", type: "ppt" },
      { label: "Demo", url: videoIbm, type: "demo" }
    ]
  },
  {
    id: "proj-2",
    title: "DURI INTERN",
    subtitle: "AI-based Interview Preparation Service",
    period: "2025.11.27 - 2025.11.28",
    image: imgDuriinternPoster,
    techStack: ["React", "FastAPI", "RAG", "LangChain", "Crawling"],
    description:
      "자소서·기업·직무를 넣으면, 면접관이 만들어지고 질문이 이어진다. 대답의 빈틈이 어디인지까지 기록하는, 기술면접 전용 리허설 엔진.",
    detailedOverview:
      "Duri-Intern은 면접 준비를 ‘문제은행 풀이’로 끝내지 않는다. 사용자가 입력한 자소서·기업·직무로 면접 환경을 먼저 세팅하고, 그 조건에 맞는 가상의 면접관 페르소나를 구성한다. 이후 기업/직무 맥락을 반영한 질문을 생성하고, 답변에 따라 꼬리질문을 이어가며 실제 면접처럼 흐름을 만든다. 핵심은 끝나고 나서다. 답변을 6개 항목으로 정량/정성 평가해 리포트로 남기고, PDF 다운로드 및 학습 이력 저장까지 연결해 ‘다음 연습에서 무엇을 바꿀지’가 남도록 설계했다. 질문 데이터는 채용공고/블로그 등 크롤링 기반으로 실전성을 강화했다.",
    features: [
      "지원 기업/직무/자소서 기반 면접 세팅 및 면접관 페르소나 생성",
      "채용공고·블로그 크롤링 데이터 기반 실전형 기술면접 질문 생성",
      "실시간 대화형 면접 시뮬레이션(답변 → 꼬리질문 → 다음 질문 흐름)",
      "6개 평가 항목 기반 답변 스코어링(정량 + 간단 피드백)",
      "결과 리포트 시각화 및 PDF 다운로드, 학습 이력 저장"
    ],
    myRole: [
      "프론트엔드(React)로 인터뷰 플로우(입력–진행–결과) 화면 및 사용자 인터랙션 구현",
      "면접 입력 폼/진행 UI/결과 리포트 화면 구성, 데이터 상태 관리 및 API 연동",
      "면접 경험을 ‘실제처럼’ 느끼게 하는 대화 흐름 UX 디테일(질문 전환, 결과 피드백 가독성 등) 개선", ],
    links: [
      { label: "Github Repo", url: "https://github.com/knupp7/react-ai-interview", type: "github" },
      { label: "PPT", url: "https://www.canva.com/design/DAGyYRUzyjw/-f6tImswtbieULJewkEuGQ/view?utm_content=DAGyYRUzyjw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8729947f87", type: "ppt" },
      { label: "Demo", url: videoDuri, type: "demo" }
    ]
  },
  {
    id: "proj-3",
    title: "POPIPOPI",
    subtitle: "실시간 보이스피싱 탐지·근거 제시·대응 가이드 플랫폼",
    period: "2025.07.28 - 2025.08.27",
    image: imgPoscoAiPoster,
    techStack: [
      "Swift",
      "Pytorch",
      "Fine-tuning",
      "RAG",
      "Reranking",
    ],
    description:
      "보이스피싱을 ‘탐지’만 하면 반쪽이다. POPIPOPI는 통화 흐름을 읽고 위험도를 매긴 뒤, 법령·기관 근거를 붙여 ‘왜 의심인지’를 설명하고, 다음 행동까지 안내한다.",
    detailedOverview:
      "POPIPOPI는 실시간 통화에서 발생하는 보이스피싱을 ‘확률’로만 끝내지 않고, 사용자가 즉시 판단하고 움직일 수 있도록 ‘탐지 → 근거 → 대응’의 완전한 보호 흐름을 구성한다. 음성을 STT로 텍스트화한 뒤 문장 단위로 정상/의심 분류와 위험도 점수를 산출하고, 동시에 헌법·형사소송법·금융기관 가이드 등 신뢰 문서에서 RAG로 근거를 검색한다. 검색 결과는 reranking으로 정렬해 핵심 근거만 남기고, LLM이 환각을 억제한 형태로 설명을 생성한다. 최종적으로는 통화 종료/대표번호 재확인/신고 등 상황별 행동 가이드를 제시하며, 위험도 타임라인과 의심 키워드 하이라이팅으로 사용자가 ‘지금 위험한 이유’를 한눈에 파악할 수 있게 했다. 또한 온디바이스·저지연을 목표로 분류기 경량화(KD/Pruning/Quant/QLoRA) 실험을 병행해 실사용 가능성을 검증했다.",
    features: [
      "실시간 STT 기반 텍스트 변환 및 문장 단위 보이스피싱 분류(정상/의심 + 위험도 점수)",
      "의심 키워드 하이라이팅과 위험도(0–100) 타임라인 시각화",
      "법령/기관 문서 기반 RAG로 근거 제시(헌법·형사소송법·금융기관 가이드 등)",
      "Reranker로 핵심 근거만 선별(Top-K) 후 LLM 설명 생성으로 환각 억제",
      "상황별 즉시 행동 가이드 제공(통화 종료/대표번호 재확인/신고 플로우)",
      "분류기 및 LLM 경량화 실험(KD/Pruning/Quant/QLoRA)로 저지연·저메모리 검증"
    ],
    myRole: [
      "보이스피싱 ‘탐지 이후’를 포함한 엔드투엔드 보호 플로우(탐지→근거→대응) 관점에서 기능 요구사항을 정리하고 구현 방향을 구체화",
      "RAG 파이프라인(문서 임베딩/검색→reranking→근거 기반 생성) 설계로 근거 중심 응답 품질과 안정성 강화",
      "LLM 설명을 ‘키워드 기반’에서 ‘analysis 기반’으로 전환하는 실험을 통해 문맥 대응과 근거 제시 성능을 개선",
      "저지연 환경을 고려한 경량화 옵션(KD/QLoRA 등) 비교 실험과 결과 정리로 실사용 가능성 검증에 기여"
    ],
    links: [
      { label: "Github Repo", url: "https://github.com/arieum/AIProject", type: "github" },
      { label: "PPT", url: "https://www.canva.com/design/DAGwT84bQpM/BJL5R8ba0e6PSUwtWgvFrw/view", type: "ppt" },
      { label: "Report", url: "https://complete-margin-475.notion.site/25b9761f2ffc802fb2c1d87135ffb1f8?source=copy_link", type: "doc" },
      { label: "Demo", url: videoAI, type: "demo" }
    ]
  },
  {
    id: "proj-4",
    title: "STS304 DEFECT ANALYSIS",
    subtitle: "STS 공정 M형 결함 원인 규명 및 불량 저감 데이터 프로젝트",
    period: "2025.07.21 - 2025.07.25",
    image: imgPoscoBigdataPoster,
    techStack: ["Pandas", "MatPlot", "Seaborn"],
    description:
    "불량은 ‘왜’가 아니라 ‘어디서부터’ 잡아야 한다. STS304 M형 결함을 공정·설비·조업조건 변수로 쪼개어, 원인을 통계로 입증하고 모델로 재현 가능한 개선안을 만든 프로젝트.",
    detailedOverview:
    "STS 공정 내 M형 결함을 단순 판별이 아닌 ‘원인-조건-재발방지’ 관점에서 다룬 분석 프로젝트다. 2.3만 건 규모 데이터(총 54개 변수)를 기반으로, 목표변수(양품/불량) 분포 및 주요 설명변수의 분포를 먼저 정리한 뒤 공정/설비 변수(예: 설비 구간, 공정 라인, 작업조 등)와 조업조건 변수(예: 온도/가스/시간/폭/두께 등)가 불량과 어떻게 연결되는지 단계적으로 검증했다. 단순 상관이 아니라 t-test, Mann–Whitney U, 카이제곱, Monte Carlo 테스트 등으로 ‘차이가 유의미한가’를 먼저 확인하고, 그 결과를 바탕으로 불량률을 낮추는 최적 조업조건 후보를 도출했다. 이후에는 불량이 고객에게 전달되면 안 된다는 전제하에, 재현율(Recall)을 핵심으로 두고 Decision Tree/Random Forest/XGBoost/NN 기반 분류 모델을 비교·선정했으며, 최종적으로는 도출된 vital few를 공정 관리(I-Chart) 관점으로 연결해 “분석에서 끝나지 않는” 개선 흐름을 구성했다.",
    features: [
      "대규모 공정 데이터(약 2.3만 행) 기반 목표변수/설명변수 분포 진단(Histogram/Boxplot)",
      "공정·설비 변수 vs 불량의 관계 검정(t-test, Mann–Whitney U, Chi-square, Monte Carlo)",
      "조업조건(온도/가스/시간/치수 등) 차이에 따른 불량 영향 요인 도출 및 최적 조건 후보 제시",
      "불량 분류 모델 개발 및 비교(Decision Tree, Random Forest, XGBoost, Neural Network)",
      "현업 적용을 고려한 Process Control(I-Chart) 관점으로 vital few 관리 항목 연결",
      "심각한 클래스 불균형(양품 다수/불량 소수) 대응 전략 적용(class_weight/오버샘플링 등)"
    ],
    myRole: [
      "데이터 통합 및 품질 점검(결측/이상치/타입 정리) 후, 목표변수(양품/불량) 불균형 특성에 맞춘 분석 설계",
      "EDA로 변수 분포와 후보 영향요인을 선별하고, 통계 검정으로 ‘유의미한 차이’ 중심의 근거를 확보",
      "불량 분류 모델 실험 파이프라인 구성(특성 선택/평가지표/불균형 대응 포함) 및 재현율 중심 모델 튜닝",
      "개선안이 현장에서 운영될 수 있도록, 도출된 핵심 인자를 공정 관리 지표(I-Chart)로 연결하는 방향 제안"
    ],
    links: [
      { label: "Github Repo", url: "https://github.com/posco-A2/BigDataProject", type: "github" },
      { label: "PPT", url: "https://www.canva.com/design/DAGtUfZvNLM/8U1SpcUKqk3tj5075vWcPA/view?utm_content=DAGtUfZvNLM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd53641c7a1", type: "ppt" },
      { label: "Demo", url: videoBigdata, type: "demo" }
    ]
  },
  {
    id: "proj-5",
    title: "EVERY MOMENT",
    subtitle: "Location-based Social Diary",
    period: "2024.09 - 2024.11",
    image: imgEverymomentPoster,
    techStack: [
      "Android (Kotlin)",
      "MVVM",
      "Hilt",
      "Firebase (FCM)",
      "Google Places API"
    ],
    description:
      "‘오늘 뭐 했더라?’를 묻기 전에, 앱이 먼저 하루를 정리해둔다. 15분 이상 머문 장소를 단서로 일기를 초안으로 만들고, 감정은 이모지로 가볍게 남기는 자동 기록 다이어리.",
    detailedOverview:
      "Every Moment는 ‘일기를 쓰는 습관’이 아니라 ‘기록이 남는 구조’를 목표로 설계됐다. 사용자의 위치 흐름을 바탕으로 15분 이상 체류한 장소를 감지하고, Google Places API로 장소명을 도출해 자동 일기 초안을 생성한다. 기록을 놓치지 않도록 FCM 알림으로 감정 이모지 입력을 유도하고, 수동 작성·편집·북마크·공유까지 연결해 ‘자동 생성 → 보정 → 공유’의 루프를 만든다. 소셜 피드에서는 친구의 일기에 좋아요/댓글로 반응하고, 검색 화면에서는 날짜·카테고리·이모지·북마크 등 다양한 필터로 원하는 기록을 빠르게 회수할 수 있다. GPS 오차로 인한 장소 매칭 실패는 후보 장소 리스트를 제공해 사용자가 직접 교정할 수 있게 하여, 자동화의 신뢰도를 UX로 보강했다.",
    features: [
      "15분 이상 체류 장소 자동 감지 → 일기 초안 자동 생성",
      "Google Places API 기반 장소명 도출 및 후보 장소 편집 기능",
      "FCM 기반 실시간 알림(새 장소 감지/친구 반응) + 감정 이모지 입력 유도",
      "수동 일기 작성/편집(사진·카테고리·상세 내용 추가), 북마크/공유/삭제",
      "피드 기반 소셜 다이어리(일기 공유, 좋아요/댓글, 친구 요청)",
      "다중 필터 검색(날짜/북마크/카테고리/이모지)으로 기록 회수 최적화"
    ],
    myRole: [
      "Android 파트로 MVVM 아키텍처 기반 화면/상태 흐름을 설계하고 기능 단위로 모듈화",
      "백그라운드 위치 추적을 위한 권한/업데이트 전략을 적용해 지연·오류를 줄이고 배터리 소모를 균형화",
      "GPS 오차로 인한 장소 매칭 실패를 UX로 보정(후보 장소 선택 팝업 제공)하여 자동 기록 신뢰도 개선",
      "새 장소 기록 및 소셜 상호작용 이벤트를 FCM 알림으로 연결해 ‘기록 상기 → 즉시 입력’ 루프 강화"
    ],
    links: [
      { label: "Github Repo", url: "https://github.com/kakao-tech-campus-2nd-step3/Team21_Android", type: "github" },
      { label: "PPT", url: "https://www.canva.com/design/DAGW5CJeEss/cljLEJs56ISAIzWTbax6LA/view?utm_content=DAGW5CJeEss&utm_campaign=designshare&utm_medium=link&utm_source=editor#4", type: "ppt" },
      { label: "Notion", url: "https://quickest-asterisk-75d.notion.site/48c303cfd8284f069e623c2985105c72", type: "doc"},
      { label: "Demo", url: videoKakao, type: "demo" }
    ]
  },
  {
    id: "proj-6",
    title: "BINBEAN",
    subtitle: "CCTV 기반 실시간 좌석 점유 시각화 서비스",
    period: "2025.02-2025.05",
    image: imgBinbeanPoster,
    techStack: [
      "Android (Kotlin)",
      "AWS Rekognition",
      "Gemini Flash 2.0",
    ],
    description:
      "카페 ‘빈자리’는 늘 애매하게 보인다. BinBean은 CCTV 이미지에서 사람 위치를 잡고, 좌석 도면에 ‘좌석 단위’로 매핑해 혼잡도를 숫자 대신 ‘지도처럼’ 보여준다.",
    detailedOverview:
      "BinBean은 실시간 좌석 현황을 단순 카운트가 아니라 ‘도면 위 좌석 상태’로 제공하는 데 초점을 맞춘 서비스다. CCTV 캡처 이미지를 Rekognition으로 분석해 사람 위치를 검출하고, Gemini Flash 2.0의 멀티모달 처리로 ‘CCTV 시점’과 ‘좌석 도면’ 사이를 매핑한다. 이 결과를 좌석 좌표 기반 JSON으로 구조화해 클라이언트에 전달하면, 앱에서는 카페 도면 위에 좌석 점유/빈자리 상태가 즉시 시각화된다. 사용자는 지도에서 카페를 선택하고 혼잡도를 직관적으로 확인할 수 있으며, 운영자는 좌석 점유 데이터를 기반으로 운영 전략(좌석 구성/혼잡 시간대 대응 등)을 고민할 수 있다. 핵심 난점인 ‘현실 좌표 → 도면 좌표’ 전환을 멀티모달 매핑으로 풀어, 설치 환경이 달라도 확장 가능한 구조를 지향했다.",
    features: [
      "CCTV 이미지 캡처 → 객체 탐지(AWS Rekognition)로 사람 위치 검출",
      "CCTV 이미지와 좌석 도면의 멀티모달 매핑(Gemini Flash 2.0 활용)",
      "좌석 좌표 JSON 구조화 및 클라이언트 실시간 시각화(도면 기반)",
      "사용자 플로우: 위치 기반 카페 지도 → 카페 선택 → 좌석 현황 조회",
      "카페 상세/리뷰 등 서비스 확장을 고려한 앱 화면 구성"
    ],
    myRole: [
      "좌석 점유 결과를 ‘좌석 단위 상태’로 전달하기 위한 JSON 스키마 및 클라이언트 표시 규칙 설계",
      "Rekognition 탐지 결과와 도면 좌표계를 연결하는 매핑 파이프라인(입력/출력 구조) 정리",
      "Android 앱에서 지도→카페 선택→좌석 현황 확인으로 이어지는 UX 플로우 구현 방향 수립",
      "실환경 변동(카메라 각도/좌석 배치)에 대응 가능한 구조를 고려해 전처리(OpenCV) 확장 포인트 정의"
    ],
    links: [
      { label: "Githug Repo", url: "https://github.com/capstone-BinBean/BinBean_Android", type: "github" },
      { label: "Report", url: reportBinbean, type: "doc"}
    ]
  },
  {
    id: "proj-7",
    title: "SurfingTheGangwon",
    subtitle: "강원도 지역 특화 서핑 정보 & 커뮤니티 플랫폼",
    period: "2025.09",
    image: imgSurfingGangwonPoster,
    techStack: [
      "Android (Kotlin)",
      "Kakao Map API",
      "KTO TourAPI",
    ],
    description:
      "서핑을 떠나기 직전, 가장 불안한 건 ‘현장 정보가 흩어져 있다’는 점이다. 서핑 더 강원은 강원 해안의 파고·풍향·수온부터 샵/스쿨/관광지, 그리고 ‘같이 타는 사람’까지 한 화면에 묶는다.",
    detailedOverview:
      "서핑 더 강원은 강원도 해안 지역을 중심으로, 서핑에 필요한 핵심 정보를 지도 기반으로 통합 제공하는 모바일 플랫폼이다. 해수욕장별 실시간 해양 정보(날씨, 파고, 수온, 풍향)를 카드형 UI로 제공해 ‘오늘 탈 수 있는지’를 빠르게 판단할 수 있고, 카카오맵 기반 탐색에서는 해변·서핑샵·서핑스쿨·관광지를 마커로 연결해 이동 동선을 자연스럽게 만든다. 여기에 지역/일자별 모집글을 올리고 참여·취소·모집완료를 관리하는 커뮤니티 기능을 결합해, 혼자 계획하던 서핑을 ‘같이 타는 경험’으로 확장한다. 안전/가이드라인 영역에서는 입수 전 루틴, 파도 용어집, 안전 수칙을 제공해 초보자 진입 장벽을 낮추고, 지역 상권(대여점/스쿨)과의 연결로 지역 경제 활성화까지 고려한 구조를 지향한다.",
    features: [
      "강원도 주요 해수욕장별 실시간 해양 정보 제공(날씨/파고/수온/풍향 카드 UI)",
      "카카오맵 기반 장소 탐색(해변/서핑샵/서핑스쿨/관광지 마커 + 상세 정보 제공)",
      "서핑 모임 커뮤니티(지역/일자별 모집글 작성·조회, 참여 신청/취소, 모집 완료 관리)",
      "안전/가이드라인(입수 전 루틴, 파도 용어집, 안전 수칙)으로 초보자 지원",
      "관광 데이터 연계로 주변 관광지 정보까지 한 흐름으로 제공"
    ],
    myRole: [
      "지도 기반 정보 탐색 UX를 중심으로 ‘해변→시설→관광지’가 한 화면에서 이어지도록 화면 구조와 플로우 설계",
      "공공 데이터(TourAPI)와 기상/해양 데이터(OpenAPI)를 결합해 ‘서핑 의사결정에 필요한 최소 정보’를 우선순위화",
      "커뮤니티(모집/참여/완료) 기능을 단순 게시판이 아니라 ‘동행 성사’ 관점에서 상태 흐름으로 설계",
      "안전 가이드/용어집 콘텐츠를 서비스 동선에 자연스럽게 배치해 초보자 이탈 지점 감소를 목표로 구성"
    ],
    links: [
      { label: "OneStore", url: "https://onesto.re/0001002145", type: "doc" },
      { label: "Github Repo", url: "https://github.com/Surfing-The-Gangwon/StG_Android", type: "github"}
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'IBM Hackathon Excellence Prize',
    description: 'Awarded Excellence Prize for 2026 IBM AI Hackathon',
    date: '2026.01',
    image: imgIbmMain,
    tag: 'AWARD',
    additionalImages: [imgIbm3, imgIbm2, imgIbm1]
  },
  {
    id: 'g-2',
    title: 'POSCO Academy 30th Grand Prize',
    description: 'Awarded Grand Prize for 30th POSCO Academy',
    date: '2025.08',
    image: imgPoscoMain,
    tag: 'AWARD',
    additionalImages: [imgPosco1, imgPosco2, imgPosco6, imgPosco4, imgPosco5, imgPosco7]
  },
  {
    id: 'g-3',
    title: 'SWfestival Team Award',
    description: 'Awarded 2025 SW인재페스티벌 Popularity Prize',
    date: '2025.11',
    image: imgSwftMain,
    tag: 'AWARD',
    additionalImages: [imgSwft1, imgSwft2]
  },
  {
    id: 'g-4',
    title: 'Kakao Tech Campus',
    description: 'Android Track Completion Ceremony & Hackathon',
    date: '2024.11',
    image: imgKakaoMain,
    tag: 'ACTIVITY',
    additionalImages: [imgKakao1, imgKakao2]
  },
  {
    id: 'g-5',
    title: 'Apple Academy Foundation',
    description: 'Apple Academy Foundation 1Day Program',
    date: '2025.08',
    image: imgAppleMain,
    tag: 'ACTIVITY',
    additionalImages: [imgApple1, imgApple4, imgApple3]
  },
  {
    id: 'g-6',
    title: 'etc',
    description: 'Various activities and events participated in.',
    date: '2024-2025',
    image: imgEtcMain,
    tag: 'ACTIVITY',
    additionalImages: [imgEtc1, imgEtc2]
  }
];

export const SELF_INTRO = [
  {
    question: "1. 지원 동기와 입사 후 포부 (Motivation & Aspirations)",
    answer: "프론트엔드는 사용자가 가장 먼저 마주하는 기술의 접점이자, 복잡한 데이터와 AI 모델을 직관적인 경험으로 치환하는 무대입니다. 저는 다양한 프로젝트를 통해 AI/ML 기술을 실제 서비스로 녹여내는 과정에서, 기술 그 자체보다 중요한 것은 ‘사용자에게 전달되는 가치의 명확성’임을 배웠습니다. 네이버 클라우드는 기술의 정점을 지향하면서도 HyperCLOVA X와 같은 혁신을 통해 일상의 변화를 이끌어내고 있습니다. 이러한 비전 위에서, 저는 사용자의 복잡한 요구사항을 단순하고 강력한 인터페이스로 해결하는 클라우드 전문 프론트엔드 엔지니어로 성장하고 싶습니다. 입사 후에는 클라우드 콘솔의 복잡성을 UX 기술로 개선하여 개발자와 기업 고객 모두에게 최적의 생산성을 제공하는 데 기여하겠습니다."
  },
  {
    question: "2. 본인의 가장 큰 경쟁력과 이를 위해 노력한 과정 (Competitiveness)",
    answer: "저의 핵심 경쟁력은 'AI와 프론트엔드의 가교 역할'을 수행할 수 있는 멀티모달 이해도입니다. 단순히 화면을 그리는 것을 넘어, RAG 파이프라인 설계, 데이터 전처리, 모델 서빙 과정을 직접 경험하며 백엔드/AI 엔지니어와 심도 있는 협업이 가능합니다. IBM Hackathon과 포스코 AI 아카데미 등에서 AI 모델의 출력을 사용자 친화적으로 시각화하는 프론트엔드 개발을 주도하며, 기술적 제약을 UX로 보완하는 설계를 체득했습니다. 또한 Swift와 Kotlin, React를 아우르는 크로스 플랫폼 개발 경험을 통해, 어떤 환경에서도 일관된 사용자 경험을 구현하는 적응력을 길렀습니다. 이는 네이버 클라우드의 다양한 기술 스택 위에서 유연하게 서비스를 확장하는 데 강력한 토대가 될 것입니다."
  }
];
