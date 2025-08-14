import { FrontendOverviewData, PublishingOverviewData } from "@/types/projects";

export const frontendOverviewData: FrontendOverviewData[] = [
  {
    id: 1,
    title: "알바폼 - albaform",
    description: [
      "이 프로젝트는 Next.js App Router 기반으로 구축된 긱워커 대상의 취업 매칭 플랫폼입니다.",
      "SSR과 CSR을 유연하게 통합하여 사용자 경험을 최적화하였으며, 페이지 라우팅 및 상태 관리를 고려한 구조적 설계를 통해 안정성과 확장성을 함께 확보하였습니다.",
    ],
    keyword: [
      "Team Project",
      "Next.js",
      "Typescript",
      "React Query",
      "Zustand",
    ],
    thumbnail: "/images/projects/frontendSection/thumbnail/albaform.png",
    period: "2025.04 - 2025.06",
    member: 4,
    stack: [
      { Frontend: ["React", "Next.js", "TypeScript"] },
      { "State Management": ["React Query", "Zustand"] },
      { Styling: ["TailwindCSS", "Styled Components"] },
      { Deployment: ["Vercel"] },
    ],
    progressbar: [
      {
        value: 85,
        text: "Frontend",
        pathColor: "#FFB3C1",
      },
      {
        value: 75,
        text: "Publishing",
        pathColor: "#10B981",
      },
    ],
    githubLink: "https://github.com/Albaform/main_repo",
    diveInLink: "https://albaform-one.vercel.app/",
  },
  {
    id: 2,
    title: "판다마켓 - Pandamarket",
    description: [
      "이 프로젝트는 Next.js Page Router 기반으로 구축한 중고거래 및 커뮤니티 통합 플랫폼입니다.",
      "클라이언트 사이드 렌더링(CSR)을 중심으로 구현되었으며, 부트캠프 기간 동안 개인 과제로 시작해 JavaScript 기반 React에서 TypeScript 기반 Next.js로 점차 전환하며 완성도를 높여왔습니다.",
      "현재는 포트폴리오 작업을 위해 잠시 중단된 상태이며, 약 90%가 완료된 단계입니다.",
    ],
    keyword: ["Personal Project", "Next.js", "Typescript", "React Query"],
    thumbnail: "/images/projects/frontendSection/thumbnail/pandamarket.png",
    period: "2024.10 - 2025.04 (임시 중단)",
    member: 1,
    stack: [
      { Frontend: ["React", "Next.js", "TypeScript"] },
      {
        "State Management": [
          "React Query",
          "React Context API",
          "Custom Provider",
        ],
      },
      { Styling: ["CSS Modules"] },
      { Deployment: ["Vercel"] },
    ],
    progressbar: [
      {
        value: 100,
        text: "Frontend",
        pathColor: "#89CFFD",
      },
      {
        value: 100,
        text: "Publishing",
        pathColor: "#FF9E9E",
      },
    ],
    githubLink: "https://github.com/y5037/PandaMarket",
    diveInLink: "https://panda-market-y5037.vercel.app/",
  },
  {
    id: 3,
    title: "글로벌 노마드 - Global Nomad",
    description: [
      "Next.js App Router와 CSR 기반으로 구축한 체험 예약 플랫폼입니다. 총 6인이 참여한 팀 프로젝트로, 예약 내역 페이지를 담당하여 사용자가 예약을 관리하고 후기를 작성할 수 있도록 구현했습니다.",
      "특히 모바일 사용성을 고려해 후기 별점 기능에 드래그 인터랙션을 적용하는 등 사용자 경험 향상에 집중했습니다.",
    ],
    keyword: ["Team Project", "Next.js", "Typescript", "React Query"],
    thumbnail: "/images/projects/frontendSection/thumbnail/globalnomad.png",
    period: "2025.03 - 2025.04",
    member: 6,
    stack: [
      { Frontend: ["React", "Next.js", "TypeScript"] },
      { "State Management": ["React Query", "Zustand"] },
      { Styling: ["Styled Components", "CSS Modules"] },
      { Deployment: ["Vercel"] },
    ],
    progressbar: [
      {
        value: 30,
        text: "Frontend",
        pathColor: "#CAB8FF",
      },
      {
        value: 20,
        text: "Publishing",
        pathColor: "#FFB3C1",
      },
    ],
    githubLink: "https://github.com/T2-GlobalNomad/GlobalNomad",
    diveInLink: "https://globalnomad-t2.vercel.app/",
  },
  {
    id: 4,
    title: "테스키파이 - Taskify",
    description: [
      "Next.js Page Router 기반의 CSR 워크플로우 관리 서비스입니다. React Query로 데이터 캐싱과 실시간 반영을 구현했으며, 사용자 중심의 대시보드·마이페이지 기능을 제공합니다.",
      "총 5인 팀 프로젝트로 참여하여 대시보드 편집 기능 전반(이름/색상 수정, 구성원·초대 관리, 삭제, 페이지네이션 등)을 구현했고, 이후 마이페이지의 프로필 수정 기능 개선을 전담했습니다.",
    ],
    keyword: ["Team Project", "Next.js", "Typescript", "React Query"],
    thumbnail: "/images/projects/frontendSection/thumbnail/taskify.png",
    period: "2025.02",
    member: 5,
    stack: [
      { Frontend: ["React", "Next.js", "TypeScript"] },
      {
        "State Management": ["React Context API", "Custom Provider"],
      },
      { Styling: ["Styled Components", "SCSS"] },
      { Deployment: ["Vercel"] },
    ],
    progressbar: [
      {
        value: 30,
        text: "Frontend",
        pathColor: "#10B981",
      },
      {
        value: 20,
        text: "Publishing",
        pathColor: "#CAB8FF",
      },
    ],
    githubLink: "https://github.com/codeit-Taskify-12-1/taskify",
    diveInLink: "https://taskify-one-drab.vercel.app/",
  },
  {
    id: 5,
    title: "롤링 - Rolling",
    description: [
      "React 기반으로 개발한 익명 롤링페이퍼 서비스입니다. JavaScript로 구현했으며, 팀장으로서 프로젝트를 이끌며 전체 일정과 협업을 관리했습니다. 랜딩페이지의 반응형 CSS 작업을 마무리했고, 롤링페이퍼 목록 페이지와 상세 페이지에서 이모지 기반 감정 표현 기능을 개발했습니다. 또한, 카카오 공유 기능을 구현하여 사용자 편의성을 높였으며, 컴포넌트 단위로 역할을 분담해 효율적인 코드 관리를 도모했습니다.",
    ],
    keyword: ["Team Project", "React", "Javascript"],
    thumbnail: "/images/projects/frontendSection/thumbnail/rolling.png",
    period: "2024.12",
    member: 5,
    stack: [
      { Frontend: ["React", "Javascript"] },
      {
        "State Management": [],
      },
      { Styling: ["Styled Components", "CSS Modules"] },
      { Deployment: ["Vercel"] },
    ],
    progressbar: [
      {
        value: 30,
        text: "Frontend",
        pathColor: "#FFF6A2",
      },
      {
        value: 35,
        text: "Publishing",
        pathColor: "#89CFFD",
      },
    ],
    githubLink: "https://github.com/y5037/Rolling",
    diveInLink: "https://rolling-chi.vercel.app/",
  },
];

export const publishingOverviewData: PublishingOverviewData[] = [
  {
    id: 1,
    title: "퍼블리셔 포트폴리오 - Publisher Portfolio",
    description: [
      "이 프로젝트는 웹 퍼블리셔로서의 역량을 정리한 이력용 포트폴리오 사이트로 HTML, CSS, jQuery를 활용해 반응형 레이아웃과 스크롤 기반 화면 전환 효과를 구현했습니다.",
      "퍼블리싱 작업 전반에 대한 경험을 정리하며 구조적인 마크업과 시맨틱 태그 활용, 브라우저 호환성 대응, 반응형 UI 설계에 대한 실전 감각을 키울 수 있었던 프로젝트입니다. 디자인과 마크업 모두 직접 작업했으며, 실무에서 진행했던 퍼블리싱 결과물들을 사례로 수록했습니다.",
    ],
    keyword: ["HTML/CSS", "jQuery", "Portfolio", "Publisher", "Responsive"],
    period: "2022.02 - 2022.04",
    progressbar: [
      {
        value: 100,
        text: "Planning & Design",
        pathColor: "#FBBF24",
      },
      {
        value: 100,
        text: "Publishing",
        pathColor: "#10B981",
      },
      {
        value: 100,
        text: "Function",
        pathColor: "#818CF8",
      },
    ],
    department: "개인",
    responsibilities: ["기획/디자인 및 퍼블리싱 전담"],
    designScreenshots: [
      "/images/projects/detail/publishing/screenshot/portfolio.png",
    ],
    diveInLink: "https://publisher-nerimy.netlify.app/",
  },
  {
    id: 2,
    title: "비셀로 - Becelo",
    description: [
      "외주 제작된 그누보드 기반 PHP 레거시 프로젝트의 구조를 유지한 채 사용자 웹앱, 관리자 페이지, 랜딩 페이지 등 전체 UI 퍼블리싱을 리뉴얼한 프로젝트입니다.",
      "기획/디자인은 전담 디자이너와 협업하되, 퍼블리싱 관점에서 아이디어를 제시하고 화면 흐름을 보완하는 방식으로 일부 관여했습니다.",
      "비효율적으로 구성된 HTML/CSS와 구조화되지 않은 마크업을 유지보수가 가능한 형태로 개선하고, 기존 코드의 제약을 고려하면서도 현대적인 UI 구조를 적용하는 데 중점을 두었습니다.",
    ],
    keyword: [
      "Publishing",
      "PHP",
      "Javascript",
      "jQuery",
      "Web&App",
      "Responsive",
    ],
    period: "2022.09 - 2023.06",
    progressbar: [
      {
        value: 10,
        text: "Planning & Design",
        pathColor: "#6EE7B7",
      },
      {
        value: 100,
        text: "Publishing",
        pathColor: "#60A5FA",
      },
      {
        value: 15,
        text: "Function",
        pathColor: "#F9A8D4",
      },
    ],
    department: "(주)비셀로 / 개발팀 - 퍼블리셔",
    responsibilities: [
      "UI 개선 기획 일부 참여",
      "퍼블리싱 전담",
      "PHP 기반 구조의 스크립트 수정 및 유지보수",
      "배포/운영 관리",
    ],
    designScreenshots: [
      "/images/projects/detail/publishing/screenshot/becelo1.png",
      "/images/projects/detail/publishing/screenshot/becelo2.png",
      "/images/projects/detail/publishing/screenshot/becelo3.png",
      "/images/projects/detail/publishing/screenshot/becelo4.png",
    ],
    diveInLink: "https://becelo.com/bbs/login.php",
  },
  {
    id: 3,
    title: "팬사인 - Fansign",
    description: [
      "Flutter(Dart) 기반 앱 개발에 퍼블리셔로 참여했습니다.",
      "작업량은 많지 않았지만, 개인 웹 페이지(HTML)를 제작하여 Flutter 퍼블리싱 과정과 당시 화면 구성 및 코드 작성 경험을 정리해두었습니다.",
    ],
    keyword: ["Publishing", "Flutter", "Dart"],
    period: "2021.04 - 2021.04",
    progressbar: [
      {
        value: 0,
        text: "Planning & Design",
        pathColor: "#FB923C",
      },
      {
        value: 10,
        text: "Publishing",
        pathColor: "#A3E635",
      },
      {
        value: 0,
        text: "Function",
        pathColor: "#C084FC",
      },
    ],
    department: "(주)트래블리맵 / 팬사인팀 - 퍼블리셔",
    responsibilities: [
      "Flutter 앱 화면 퍼블리싱 일부 참여",
      "개인 웹 페이지(HTML) 제작을 통한 작업 경험 정리 및 공유",
      "화면 구성 및 코드 구조 이해 및 문서화",
    ],
    designScreenshots: [
      "/images/projects/detail/publishing/screenshot/fansign.png",
    ],
    diveInLink: "https://publisher-nerimy.netlify.app/port/fansign_app/",
  },
  {
    id: 4,
    title: "트래블리맵 - Travely Map",
    description: [
      "React 기반 웹앱 프로젝트에 퍼블리싱으로 참여했습니다.",
      "디자인 시안을 바탕으로 UI를 구현하고, 퍼블리싱 코드를 작성하여 GitHub에서 관리 및 유지보수를 담당했습니다.",
      "UI 품질 개선과 레이아웃 대응에 집중하였으며, 프로젝트 내 퍼블리싱 일관성을 유지하는 데 기여했습니다.",
    ],
    keyword: ["Publishing", "React", "Web&App"],
    period: "2020.09 - 2021.01",
    progressbar: [
      {
        value: 0,
        text: "Planning & Design",
        pathColor: "#22D3EE",
      },
      {
        value: 100,
        text: "Publishing",
        pathColor: "#2DD4BF",
      },
      {
        value: 5,
        text: "Function",
        pathColor: "#F4F4F5",
      },
    ],
    department: "(주)트래블리맵 / 퍼블리셔",
    responsibilities: [
      "UI 퍼블리싱",
      "디자인 시안 기준 컴포넌트 구조 설계 및 스타일 작성",
      "개발자와 협업하여 마크업 오류, 스타일 충돌 이슈 개선",
      "GitHub를 통한 코드 관리 및 유지보수",
    ],
    designScreenshots: [
      "/images/projects/detail/publishing/screenshot/travelymap1.png",
      "/images/projects/detail/publishing/screenshot/travelymap2.png",
    ],
    diveInLink:
      "https://publisher-nerimy.netlify.app/port/travelymap_app/guidemagazine/guide_home",
  },
  {
    id: 5,
    title: "홈트스튜디오 - Homt Studio",
    description: [
      "정적인 HTML/CSS 기반 퍼블리싱 프로젝트에 참여했습니다.",
      "디자인 시안을 바탕으로 UI를 구현하고, 개발 연동용 퍼블리싱 코드를 작성하여 개발자에게 전달하는 방식으로 협업했습니다.",
    ],
    keyword: ["Publishing", "Web&App"],
    period: "2021.01 - 2021.08",
    progressbar: [
      {
        value: 0,
        text: "Planning & Design",
        pathColor: "#60A5FA",
      },
      {
        value: 100,
        text: "Publishing",
        pathColor: "#F9A8D4",
      },
      {
        value: 0,
        text: "Function",
        pathColor: "#94A3B8",
      },
    ],
    department: "(주)트래블리맵 / 홈트스튜디오팀 - 퍼블리셔",
    responsibilities: [
      "HTML/CSS 기반 UI 퍼블리싱",
      "디자인 시안 해석 및 정적 화면 구현",
      "개발 연동을 고려한 마크업 구조 설계 및 전달",
    ],
    designScreenshots: [
      "/images/projects/detail/publishing/screenshot/homtstudio1.png",
      "/images/projects/detail/publishing/screenshot/homtstudio2.png",
    ],
    diveInLink:
      "https://publisher-nerimy.netlify.app/port/homtstudio_app/login/login",
  },
  {
    id: 6,
    title: "키톡 - Ketock",
    description: [
      "디자인 시안을 바탕으로 정적인 HTML/CSS 화면을 퍼블리싱했습니다.",
      "완성된 UI 코드는 개발 연동을 위해 정리해 전달했으며, 이후 유지보수는 별도로 진행하지 않았습니다.",
    ],
    keyword: ["Publishing", "Web&App"],
    period: "2021.08 - 2022.02",
    progressbar: [
      {
        value: 0,
        text: "Planning & Design",
        pathColor: "#C084FC",
      },
      {
        value: 100,
        text: "Publishing",
        pathColor: "#38BDF8",
      },
      {
        value: 0,
        text: "Function",
        pathColor: "#FBBF24",
      },
    ],
    department: "(주)트래블리맵 / 키톡팀 - 퍼블리셔",
    responsibilities: [
      "HTML/CSS 기반 정적 UI 퍼블리싱",
      "디자인 시안 해석 및 마크업 구현",
      "개발 연동을 위한 코드 정리 및 전달",
    ],
    designScreenshots: [
      "/images/projects/detail/publishing/screenshot/ketock.png",
    ],
    diveInLink:
      "https://publisher-nerimy.netlify.app/port/ketock_app/login/login1",
  },
];
