import { OverviewData } from "@/types/projects";

export const overviewData: OverviewData[] = [
  {
    id: 1,
    title: "알바폼 - albaform",
    description:
      "본 프로젝트는 React 기반의 Next.js 프레임워크로 개발되었으며, 상태 관리는 React Query와 Zustand를 병행하여 구성하였습니다. 스타일링은 TailwindCSS를 중심으로 구성하고, 일부 컴포넌트 커스터마이징에는 Styled Components를 병행 활용하였습니다. 프로젝트는 Vercel을 통해 배포하였습니다.",
    keyword: [
      "Team_Project",
      "Next.js",
      "Typescript",
      "React-Query",
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
        value: 80,
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
];
