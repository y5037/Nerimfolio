import {
  ContributionData,
  GitData,
  MeetingData,
  TeamData,
  ToolData,
} from "@/types/projects";

export const teamData: TeamData[] = [
  {
    name: "Namgyeon",
    roles: [
      "공통 컴포넌트 제작",
      "기획 및 피드백 참여",
      "카카오 로그인 로직 개발",
    ],
  },
  {
    name: "park521",
    roles: ["공통 컴포넌트 제작", "카카오 지도 로직 개발"],
  },
  {
    name: "mynameishwan",
    roles: ["공통 컴포넌트 제작", "기획 및 피드백 참여"],
  },
  {
    name: "윤혜림",
    roles: ["기획 및 피드백 참여", "무한스크롤 로직 구현"],
  },
  {
    name: "katej0320",
    roles: ["기획 및 피드백 참여", "카카오 지도 로직 개발"],
  },
  {
    name: "yeon0036",
    roles: ["프로젝트 리딩", "기획 및 피드백 참여"],
  },
];

export const contributionData: ContributionData[] = [
  {
    name: "Namgyeon (FE)",
    summary: "공통 컴포넌트 · 로그인/회원가입",
    details: [
      "입력 폼 관련 공통 컴포넌트 설계 및 구현",
      "로그인/로그아웃/회원가입 페이지 전담 및 카카오 연동 로직 개발",
    ],
  },
  {
    name: "park521 (FE)",
    summary: "공통 컴포넌트 · 체험 상세",
    details: ["버튼 UI 컴포넌트 설계 및 구현", "체험 상세 페이지 전담"],
  },
  {
    name: "mynameishwan (FE)",
    summary: "공통 컴포넌트 · 메인",
    details: ["셀렉트박스 컴포넌트 설계 및 구현", "메인 페이지 전담"],
  },
  {
    name: "윤혜림 (FE)",
    summary: "공통 로직 개발 · 예약 체험 관리",
    details: [
      "네비게이션/푸터 UIUX 전담",
      "무한스크롤 로직 공용 컴포넌트화",
      "이미지 에러 처리 로직 구현",
      "내 프로필 - 예약 체험 관리 페이지 전담",
    ],
  },
  {
    name: "katej0320 (FE)",
    summary: "공통 컴포넌트 · 내가 등록한 체험 관리",
    details: [
      "숫자형 페이지네이션 공통 컴포넌트 제작",
      "내 프로필 - 내가 등록한 체험 관리 페이지 전담",
    ],
  },
  {
    name: "yeon0036 (FE)",
    summary: "마이페이지 · 예약 현황 관리",
    details: [
      "내 프로필 - 사용자 정보 및 예약 현황 관리 페이지 전담",
      "알림 모달 컴포넌트 설계 및 구현",
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
    title: "Core Time : Mon–Sat 13:00 ~ 18:00",
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
