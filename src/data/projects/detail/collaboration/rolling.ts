import {
  ContributionData,
  GitData,
  MeetingData,
  TeamData,
  ToolData,
} from "@/types/projects";

export const teamData: TeamData[] = [
  {
    name: "ghkjiop92",
    roles: ["공통 컴포넌트 설계"],
  },
  {
    name: "pss7",
    roles: ["공통 컴포넌트 제작", "기획 및 피드백 참여"],
  },
  {
    name: "parkingun",
    roles: ["기획 및 피드백 참여"],
  },
  {
    name: "윤혜림",
    roles: ["프로젝트 리딩", "공통 컴포넌트 제작"],
  },
  {
    name: "yeon0036",
    roles: ["기획 및 피드백 참여", "공통 컴포넌트 제작"],
  },
];

export const contributionData: ContributionData[] = [
  {
    name: "ghkjiop92 (FE)",
    summary: "공통 컴포넌트 · 랜딩",
    details: ["토스트 공통 컴포넌트 UI 설계", "랜딩 페이지 전담"],
  },
  {
    name: "pss7 (FE)",
    summary: "공통 컴포넌트 · 롤링페이퍼 상세(content)",
    details: [
      "input 공통 컴포넌트 설계 및 구현",
      "롤링페이퍼 상세 페이지 내부 콘텐츠 전담",
    ],
  },
  {
    name: "parkingun (FE)",
    summary: "롤링페이퍼 등록",
    details: ["롤링페이퍼 등록 페이지 전담"],
  },
  {
    name: "윤혜림 (FE)",
    summary: "공통 컴포넌트 · 롤링페이퍼 목록 및 상세(header)",
    details: [
      "토스트 UX 개선 및 공통 컴포넌트 최적화",
      "랜딩 페이지 반응형 레이아웃 마무리 작업",
      "롤링페이퍼 목록과 롤링페이퍼 상세 페이지 헤더 전담",
    ],
  },
  {
    name: "yeon0036 (FE)",
    summary: "공통 컴포넌트 · 메시지 등록",
    details: [
      "버튼 공통 컴포넌트 설계 및 구현",
      "롤링페이퍼 메시지 등록 페이지 전담",
    ],
  },
];

export const toolData: ToolData[] = [
  {
    name: "Figma",
    icon: "/images/projects/detail/frontend/tool/figma.svg",
    desc: "UI/UX 디자인",
  },
  {
    name: "GitHub",
    icon: "/images/projects/detail/frontend/tool/github.svg",
    desc: "협업 및 프로젝트 이슈 관리",
  },
  {
    name: "Discord",
    icon: "/images/projects/detail/frontend/tool/discord.svg",
    desc: "실시간 커뮤니케이션 및 화상 회의",
  },
  {
    name: "Zoom",
    icon: "/images/projects/detail/frontend/tool/zoom.svg",
    desc: "화상 회의 및 화면 공유",
  },
  {
    name: "Notion",
    icon: "/images/projects/detail/frontend/tool/notion.svg",
    desc: "문서 정리 및 협업 관리",
  },
  {
    name: "Prettier",
    icon: "/images/projects/detail/frontend/tool/prettier.svg",
    desc: "코드 포맷팅",
  },
];

export const gitData: GitData[] = [
  {
    imgUrl: "/images/projects/detail/frontend/gitflow/defaultGit.svg",
    contents: [
      {
        title: "Branch 전략",
        description: `main → features → feature/* → 작업 브랜치 구조로 운영되었습니다.
공통 컴포넌트(feature/component)와 페이지별(feature/{page}) 브랜치를 기준으로 각자의 작업 브랜치를 파생해 기능을 개발한 뒤,
해당 feature 브랜치에 PR → 검토 후 features에 통합 → 배포 시점에 main으로 머지하는 전략을 사용했습니다.`,
      },
      {
        title: "협업 & 리뷰",
        description: `모든 작업은 PR 기반으로 진행하며,
2인 1조 코드리뷰 체계를 통해 품질 검수 후 dev 브랜치에 병합했습니다.`,
      },
      {
        title: "Commit 규칙",
        description: `prefix를 사용해 커밋 목적을 명확히 기록하고 유지보수성을 높였습니다.`,
      },
    ],
  },
];

export const meetingData: MeetingData[] = [
  {
    icon: "💬",
    title: "실시간 커뮤니케이션",
    description:
      "Discord 채널을 활용해 작업 상황과 이슈를 실시간으로 공유하며 수시로 피드백을 주고받음",
  },
  {
    icon: "📅",
    title: "Meeting : Mon–Sat 10:00 ~ 11:00",
    list: [
      "전일 작업 진행 상황 및 당일 계획 공유",
      "발생한 이슈에 대한 상호 피드백 및 논의",
      "작업 중 변경이 필요한 UI 사항 협의",
      "팀원 간 원활한 커뮤니케이션과 협업 강화",
    ],
  },
  {
    icon: "📌",
    title: "기록 & 협업 관리",
    description:
      "모든 회의 결과는 GitHub Projects 및 PR/커밋 단위로 추적 · 관리",
  },
];
