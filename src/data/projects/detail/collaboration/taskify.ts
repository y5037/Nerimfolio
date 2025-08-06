import {
  ContributionData,
  GitData,
  MeetingData,
  TeamData,
  ToolData,
} from "@/types/projects";

export const teamData: TeamData[] = [
  {
    name: "nagyum",
    roles: ["기획 및 피드백 참여"],
  },
  {
    name: "윤혜림",
    roles: ["기획 및 피드백 참여"],
  },
  {
    name: "katej0320",
    roles: ["프로젝트 리딩", "기획 및 피드백 참여"],
  },
  {
    name: "rnquf59",
    roles: ["공통 컴포넌트 제작", "기획 및 피드백 참여"],
  },
  {
    name: "iadorora",
    roles: ["기획 및 피드백 참여"],
  },
];

export const contributionData: ContributionData[] = [
  {
    name: "nagyum (FE)",
    summary: "대시보드 · 대시보드 상세",
    details: [
      "네비게이션 및 사이드 메뉴 UI/UX 설계 및 구현",
      "대시보드 페이지 및 상세 페이지 전담",
    ],
  },
  {
    name: "윤혜림 (FE)",
    summary: "대시보드 수정 · 초대하기 모달 · 마이페이지",
    details: [
      "대시보드 수정 페이지 전담",
      "대시보드 초대하기 모달 및 기능 구현",
      "마이페이지 - 내 프로필 이미지 및 닉네임 변경 로직 개발",
    ],
  },
  {
    name: "katej0320 (FE)",
    summary: "로그인/회원가입 · 마이페이지",
    details: [
      "로그인/로그아웃/회원가입 페이지 전담",
      "랜딩 페이지 애니메이션 구현",
      "마이페이지 - 비밀번호 변경 로직 개발",
    ],
  },
  {
    name: "rnquf59 (FE)",
    summary: "공통 컴포넌트 · 카드 상세/수정 모달",
    details: ["공통 모달 컴포넌트 설계 및 구현", "카드 상세 및 수정 모달 구현"],
  },
  {
    name: "iadorora (FE)",
    summary: "마이페이지",
    details: ["마이페이지 - 내 프로필 이미지/비밀번호 변경 UIUX 초기 구현"],
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
        description: `모든 작업은 PR 기반으로 진행했으며, 각자의 작업 브랜치에서 PR을 생성하고 팀원 간 상호 확인 후 이상이 없을 경우 직접 merge하는 자율 리뷰 방식으로 협업했습니다.`,
      },
      {
        title: "Commit 규칙",
        description: `prefix를 사용해 커밋 목적을 명확히 기록하고 유지보수성을 높임`,
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
    title: "Core Time : Mon–Sat 13:00 ~ 19:00",
    list: [
      "업무 진행 상황을 상호 공유하고 질문에 신속히 응답",
      "필요 시 즉각적인 피드백과 지원 제공",
      "작업 집중을 위해 기본적으로 마이크는 음소거 상태 유지",
      "온라인 상태를 통해 개발 진행 여부를 시각적으로 확인",
    ],
  },
  {
    icon: "📌",
    title: "기록 & 협업 관리",
    description:
      "모든 회의 결과는 GitHub Projects 및 PR/커밋 단위로 추적 · 관리",
  },
];
