import {
  ContributionData,
  GitData,
  MeetingData,
  TeamData,
  ToolData,
} from "@/types/projects";

export const teamData: TeamData[] = [
  {
    name: "윤혜림",
    roles: ["프로젝트 리딩", "핵심 로직 구현", "UI 개발 전담"],
  },
  {
    name: "yeon0036",
    roles: [
      "공통 컴포넌트 제작",
      "기획 및 피드백 참여",
      "카카오 로그인 로직 개발",
    ],
  },
  {
    name: "mynameishwan",
    roles: ["초기 UIUX 구현", "기획 및 피드백 참여"],
  },
  {
    name: "katej0320",
    roles: ["초기 UI 설계", "공통 컴포넌트 일부 제작"],
  },
];

export const contributionData: ContributionData[] = [
  {
    name: "윤혜림 (FE)",
    summary:
      "전체 구조 설계 · 핵심 로직 개발 · 알바폼 목록, 상세 / 지원자 상세 / 지원하기 / 마이페이지 / 알바토크 / 내 알바폼 전담",
    details: [
      "전체 구조 설계 및 프로젝트 리딩",
      "무한스크롤, 페이지네이션, 카카오맵 등 주요 로직 개발",
      "알바폼 목록, 상세 / 지원자 상세 / 지원하기 / 마이페이지 / 알바토크 / 내 알바폼 페이지 UIUX 및 개발 전담",
    ],
  },
  {
    name: "yeon0036 (FE)",
    summary: "공통 컴포넌트 · 로그인/회원가입 · 알바폼 생성",
    details: [
      "초기 기획 및 회의 참여",
      "Toast, Tooltip 등 공통 컴포넌트 제작",
      "로그인/회원가입, 알바폼 만들기 페이지 UIUX 및 개발 전담",
    ],
  },
  {
    name: "mynameishwan (FE)",
    summary: "초기 기획 참여 · 랜딩/알바폼 생성 UI 설계 및 초기 구현",
    details: [
      "초기 기획 및 회의 참여",
      "랜딩 페이지 UIUX 설계 및 구현",
      "알바폼 만들기 페이지 UI 일부 구현",
    ],
  },
  {
    name: "katej0320 (FE)",
    summary: "초기 기획 참여 · 알바폼 목록 및 상세 UI 일부 구현",
    details: [
      "초기 기획 및 회의 참여",
      "네비게이션 초기 UIUX 설계",
      "알바폼 목록 및 상세 페이지 UI 일부 구현",
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
    desc: "실시간 커뮤니케이션 및 회의",
  },
  {
    name: "Prettier",
    icon: "/images/projects/detail/frontend/tool/prettier.svg",
    desc: "코드 포맷팅",
  },
];

export const gitData: GitData[] = [
  {
    imgUrl: "/images/projects/detail/frontend/gitflow/albaformGit.svg",
    contents: [
      {
        title: "Branch 전략",
        description: `main → dev → feature/* or fix/* → 작업 브랜치 구조로 운영되었습니다.
dev를 기준으로 기능(feature/) 및 수정(fix/) 작업 브랜치를 파생하고, 완료된 작업은 dev로 PR 및 리뷰 후 통합 → 최종 배포 시점에 main으로 merge하는 전략을 사용했습니다.`,
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
    title: "Weekly Meeting : Every Fri 16:00",
    list: [
      "한 주간 작업 내용 및 진행 상황 공유",
      "문제점, 기술 이슈 논의 및 해결 방향 결정",
      "새롭게 배운 점 공유 및 다음주 할 일 정리",
    ],
  },
  {
    icon: "📌",
    title: "기록 & 협업 관리",
    description:
      "모든 회의 결과는 GitHub Projects 및 PR/커밋 단위로 추적 · 관리",
  },
];
