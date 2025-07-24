import { OverviewData } from "@/types/projects";

export const overviewData: OverviewData[] = [
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
      "Next.js Page Router 기반으로 구축된 CSR 워크플로우 관리 서비스입니다. React Query를 통해 데이터 캐싱 및 실시간 화면 반영 구조를 도입하고, 사용자 편의성을 고려한 대시보드 및 마이페이지 기능을 제공합니다.",
      "총 5인의 팀 프로젝트로 참여했으며, 초기에는 대시보드 편집 기능을 담당해 이름 및 색상 수정, 구성원 및 초대 내역 조회, 구성원 삭제, 초대 생성 및 취소, 대시보드 삭제, 리스트 페이지네이션 기능을 구현했습니다. 이후 마이페이지의 프로필 수정 기능 오류를 해결하고, 관련 기능을 보완하는 작업을 전담했습니다.",
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
    diveInLink: "https://taskify-vert-rho.vercel.app/",
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
    diveInLink: "https://rolling-three.vercel.app/",
  },
];
