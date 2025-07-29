import { Features } from "@/types/projects";

export const featuresData: Features[] = [
  {
    id: 1,
    projectName: "albaform",
    featureGroups: [
      {
        groupName: "공통 UI",
        features: [
          {
            title: "GNB",
            implementedByMe: true,
            contributionPercent: 85,
            contributionDetails: [
              "스크롤 위치에 따른 반응형 헤더 스타일링",
              "모바일 토글 메뉴 및 애니메이션 구현",
            ],
            contributionNote: true,
            description:
              "반응형 내비게이션 및 헤더 컴포넌트로 프로젝트 전반에 걸쳐 일관된 UI 경험 제공.",
            image: "/images/projects/detail/frontend/features/navigation.svg",
            tech: ["Framer Motion", "Zustand", "Tailwind CSS"],
            ux: [
              "스크롤 방향 감지에 따른 헤더 숨김/노출 애니메이션",
              "활성 메뉴 인디케이터 표시",
            ],
          },
          {
            title: "Modal",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description:
              "반응형 내비게이션 및 헤더 컴포넌트로 프로젝트 전반에 걸쳐 일관된 UI 경험 제공.",
            image: "/images/projects/detail/frontend/features/modal.png",
            tech: ["Framer Motion", "Zustand", "Tailwind CSS"],
            ux: [
              "스크롤 방향 감지에 따른 헤더 숨김/노출 애니메이션",
              "활성 메뉴 인디케이터 표시",
            ],
          },
          {
            title: "Tooltip",
            implementedByMe: false,
            contributionPercent: 5,
            contributionDetails: [
              "스크롤 위치에 따른 반응형 헤더 스타일링",
              "모바일 토글 메뉴 및 애니메이션 구현",
            ],
            contributionNote: false,
            description:
              "반응형 내비게이션 및 헤더 컴포넌트로 프로젝트 전반에 걸쳐 일관된 UI 경험 제공.",
            image: "/images/projects/detail/frontend/features/tooltip.svg",
            tech: ["Framer Motion", "Zustand", "Tailwind CSS"],
            ux: [
              "스크롤 방향 감지에 따른 헤더 숨김/노출 애니메이션",
              "활성 메뉴 인디케이터 표시",
            ],
          },
          {
            title: "FloatingButton",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description:
              "반응형 내비게이션 및 헤더 컴포넌트로 프로젝트 전반에 걸쳐 일관된 UI 경험 제공.",
            image: "/images/projects/detail/frontend/features/floating.svg",
            tech: ["Framer Motion", "Zustand", "Tailwind CSS"],
            ux: [
              "스크롤 방향 감지에 따른 헤더 숨김/노출 애니메이션",
              "활성 메뉴 인디케이터 표시",
            ],
          },
        ],
      },
      {
        groupName: "페이지별 기능",
        features: [
          {
            title: "랜딩페이지",
            implementedByMe: true,
            contributionPercent: 20,
            contributionDetails: ["UI 반응형 수정"],
            contributionNote: true,
            description:
              "프로젝트의 첫인상을 책임지는 랜딩페이지를 구성 및 최적화.",
            image: "/images/projects/detail/frontend/features/landing.png",
            tech: ["Next.js", "Tailwind CSS"],
            ux: [
              "반응형 레이아웃 및 애니메이션 최적화",
              "접근성 고려한 버튼 및 링크 구성",
            ],
          },
          {
            title: "[채용자/지원자] 로그인 & 회원가입 페이지 & 회원정보 입력",
            implementedByMe: false,
            contributionPercent: 1,
            contributionDetails: [
              "UI 반응형 수정",
              "권한에 따른 로그인 조건 Alert 수정",
            ],
            contributionNote: false,
            description:
              "JWT 인증을 통한 로그인/회원가입 기능 구현 및 자동 로그인 처리.",
            image: "/images/projects/detail/frontend/features/sign.png",
            tech: ["React Hook Form", "Zod", "NextAuth", "Refresh Token"],
            ux: [
              "실시간 입력 오류 피드백",
              "부드러운 로그인 실패 메시지 애니메이션",
            ],
          },
          {
            title: "알바폼 목록",
            implementedByMe: true,
            contributionPercent: 99,
            contributionDetails: [
              "스크롤 위치에 따른 반응형 헤더 스타일링",
              "모바일 토글 메뉴 및 애니메이션 구현",
            ],
            contributionNote: true,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image: "/images/projects/detail/frontend/features/albaform.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
          {
            title: "[채용자] 알바폼 생성 및 수정",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image:
              "/images/projects/detail/frontend/features/createAlbaform.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
          {
            title: "[채용자/지원자] 알바폼 상세",
            implementedByMe: true,
            contributionPercent: 99,
            contributionDetails: [
              "스크롤 위치에 따른 반응형 헤더 스타일링",
              "모바일 토글 메뉴 및 애니메이션 구현",
            ],
            contributionNote: true,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image:
              "/images/projects/detail/frontend/features/albaformDetail.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
          {
            title: "[채용자/지원자] 지원내역 상세",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: true,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image: "/images/projects/detail/frontend/features/resumeDetail.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },

          {
            title: "[지원자] 알바폼 지원하기",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: true,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image: "/images/projects/detail/frontend/features/apply.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
          {
            title: "알바토크 목록",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image: "/images/projects/detail/frontend/features/albatalk.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
          {
            title: "알바토크 생성 및 수정",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image:
              "/images/projects/detail/frontend/features/createAlbatalk.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
          {
            title: "알바토크 상세",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image:
              "/images/projects/detail/frontend/features/albatalkDetail.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
          {
            title: "[채용자/지원자] 내 알바폼 목록",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image: "/images/projects/detail/frontend/features/myAlbaform.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
          {
            title: "[채용자/지원자] 마이페이지",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: true,
            description:
              "댓글 작성, 삭제, 무한 스크롤, 낙관적 UI 업데이트로 사용자 경험 강화.",
            image: "/images/projects/detail/frontend/features/mypage.png",
            tech: ["React Query", "Infinite Scroll", "Recoil"],
            ux: [
              "댓글 입력 시 버튼 상태 변화",
              "즉시 반영되는 낙관적 UI 업데이트",
            ],
          },
        ],
      },
    ],
  },
];
