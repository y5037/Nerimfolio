import { Features } from "@/types/projects";

export const featuresData: Features[] = [
  {
    id: 1,
    projectName: "Albaform",
    featureGroups: [
      {
        groupName: "공통 UI",
        features: [
          {
            title: "GNB",
            implementedByMe: true,
            contributionPercent: 85,
            contributionDetails: [
              "반응형 레이아웃 및 모바일 메뉴 UI 구현",
              "Zustand 기반 Auth Store와 상태 동기화 로직 구현",
              "로그인 상태별 네비게이션 메뉴 및 버튼 조건부 렌더링",
              "로그인 여부 및 권한(owner/applicant)에 따른 URL 분기 처리",
              "URL 직접 접근 시 권한 기반 리디렉션 처리 미들웨어 구현",
              "Hydrate 완료 여부에 따른 깜빡임 최소화 로직 적용",
            ],
            contributionNote: true,
            description: [
              "GNB는 사이트 전반의 주요 내비게이션 역할을 하며, 사용자 권한과 로그인 상태에 따라 다른 버튼과 메뉴를 제공합니다.",
              "기존에 구현된 UI를 기반으로, Zustand Store를 활용해 로그인 여부와 권한(owner/applicant)에 따라 분기 처리를 추가하였고, hydrate 완료 여부를 조건부 렌더링에 반영해 UI 깜빡임을 최소화했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/navigation.svg",
            tech: ["Zustand", "TypeScript", "Styled Components"],
            ux: [
              "모바일/태블릿 환경에서도 안정적인 네비게이션 제공",
              "로그인 전/후 상태에 따라 버튼 및 메뉴가 자연스럽게 전환",
              "권한에 따른 동적 라우팅으로 사용자 흐름 최적화",
              "권한 없는 URL 직접 접근 시 미들웨어를 통한 리디렉션 처리로 보안성 강화",
              "새로고침 시 UI 깜빡임 방지를 위한 Hydrate 상태 분기 처리",
            ],
          },
          {
            title: "Modal",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "모달은 공통 컴포넌트와 기능 전용 모달로 구성되어 있으며, 다양한 상황에서 유연하게 재사용될 수 있도록 설계되었습니다.",
              "공통 모달 컴포넌트는 `$기능명` 프롭스를 통해 UI와 동작을 유동적으로 구성할 수 있으며, `modalController` 커스텀 훅을 사용해 모달의 열림/닫힘 상태와 메시지를 개발자가 직접 제어할 수 있습니다. 이 모달은 삭제 경고, 알림 등 다양한 피드백 상황에 활용됩니다.",
              "한편, '내 정보 수정', '비밀번호 변경' 등과 같은 페이지 전용 모달은 각 디렉토리 내부에서 독립적으로 관리되며, 재사용성과 유지보수성을 고려한 구조로 구현했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/modal.png",
            tech: [
              "React Query",
              "React Hook Form",
              "Zod",
              "Custom Hook",
              "TypeScript",
              "Styled Components",
            ],
            ux: [
              "모달 외부 클릭 시 닫힘 처리로 UX 일관성 유지",
              "상황에 따른 유연한 기능 확장이 가능하도록 설계",
            ],
          },
          {
            title: "Tooltip",
            implementedByMe: false,
            contributionPercent: 5,
            contributionDetails: [
              "사용자 경험 개선을 위해 글로벌 상태 관리가 가능한 툴팁 별도 개발",
            ],
            contributionNote: false,
            description: [
              "기존에 페이지별로 개별 관리되던 툴팁의 UI/UX를 기반으로, 전역 상태에서 사용할 수 있는 글로벌 툴팁 컴포넌트를 새롭게 구현했습니다.",
              "페이지 전환 시 툴팁이 깜빡이며 사라지던 문제를 해결하고, 상태에 따라 자연스럽게 동작하도록 애니메이션을 개선했습니다.",
              "툴팁은 3초간 표시 후 자동으로 사라지며, 전역/로컬 상황 모두에서 일관된 경험을 제공할 수 있도록 구성했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/tooltip.svg",
            tech: ["Zustand", "Styled Components"],
            ux: [
              "일관된 UI/UX를 위한 글로벌 상태 관리",
              "페이지 전환 중 툴팁 깜빡임 방지",
              "사용자 집중도를 높이는 자동 사라짐 효과",
            ],
          },
          {
            title: "FloatingButton",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "Floating Button은 다양한 기능에서 재사용될 수 있도록 `$기능` 프롭스를 기반으로 UI와 동작을 유동적으로 분기할 수 있도록 설계했습니다.",
              "사용자 권한(채용자/지원자)에 따라 버튼의 형태나 진입 경로가 다르게 설정되며, 사용자 흐름에 맞춘 유연한 분기 로직을 적용했습니다.",
              "구조적으로 재사용성과 유지보수성을 고려하여, 이후 기능 확장이나 새로운 페이지에 대한 대응도 쉽게 이루어질 수 있도록 구성했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/floating.svg",
            tech: ["Typescript", "Tailwind CSS"],
            ux: [
              "권한에 따라 버튼 동작과 이동 경로가 달라지는 유동적인 플로우 제공",
              "`$기능` 프롭스를 통한 버튼 기능의 재사용성과 일관성 확보",
              "모바일 사용성을 고려한 고정 위치 및 접근성 중심의 UI 구성",
            ],
          },
          {
            title: "KaKao 지도 및 주소 검색",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "카카오 지도 SDK를 활용해 주소 기반 지도 검색 및 마커 표시 기능을 구현했습니다.",
              "주소 입력 시 자동완성과 좌표 변환(Geocoding)을 연동하여 위치 기반 정보 등록의 편의성을 높였습니다.",
              "재사용성을 고려한 컴포넌트 구조로, 회원 정보 입력 및 알바폼 생성 페이지 등 다양한 곳에 활용됩니다.",
            ],
            image: "/images/projects/detail/frontend/features/albaform/map.svg",
            tech: ["Kakao Maps SDK", "TypeScript", "Tailwind CSS"],
            ux: [
              "주소 검색 시 자동완성 및 마커 표시로 사용자의 공간 인식 향상",
              "입력 오류를 방지하고 정확한 위치 선택을 유도하는 UX 설계",
            ],
          },
        ],
      },
      {
        groupName: "페이지별 기능",
        features: [
          {
            title: "랜딩",
            implementedByMe: true,
            contributionPercent: 5,
            contributionDetails: [
              "메인 섹션 비율 문제 해결을 위한 max-height 조정",
              "'알바폼 시작하기' 버튼 클릭 시 로그인 상태에 따라 경로 분기 처리",
            ],
            contributionNote: true,
            description: [
              "랜딩페이지는 사용자가 알바폼에 처음 진입하는 첫 인상으로, 서비스 목적과 주요 기능을 소개하고 CTA 버튼을 통해 서비스 흐름을 유도하는 역할을 합니다.",
              "기존 반응형 레이아웃은 유지하면서, 과도하게 확장되던 메인 섹션의 시각적 불안정성을 해결하고, 사용자 상태에 따라 CTA 버튼의 이동 경로를 유동적으로 설정하여 더 매끄러운 온보딩 경험을 제공합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/landing.png",
            tech: ["Tailwind CSS", "Styled Components"],
            ux: [
              "'알바폼 시작하기' 버튼 클릭 시 로그인 여부에 따라 로그인 또는 알바목록으로 이동",
              "첫 화면에서 사용자 흐름을 빠르게 유도할 수 있는 CTA 경험 강화",
            ],
          },
          {
            title: "[채용자/지원자] 로그인 & 회원가입 & 회원 정보 입력",
            implementedByMe: false,
            contributionPercent: 1,
            contributionDetails: [
              "채용자/지원자 전용 로그인 페이지 외의 경로에서 접근 시, 권한 불일치 경고 메시지가 정상 출력되도록 조건 분기 로직 구현",
            ],
            contributionNote: false,
            description: [
              "사용자의 서비스 진입을 위한 첫 단계로, 회원가입과 회원 정보 입력, 로그인을 순차적으로 처리합니다.",
              "회원가입 후 사용자 유형(채용자/지원자)에 따라 별도의 회원 정보를 추가 입력받으며, 로그인 시에는 액세스/리프레시 토큰을 활용한 인증 체계를 갖춥니다.",
              "카카오 소셜 로그인을 포함해 다양한 방식으로 접근성을 높이며, Zustand를 기반으로 사용자 흐름을 유지합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/sign.png",
            tech: [
              "React Query",
              "Zustand",
              "React Hook Form",
              "zod",
              "Axios",
              "Cookies",
              "Kakao API",
              "Kakao Map API",
              "Typescript",
              "Tailwind CSS",
            ],
            ux: [
              "회원가입 → 회원정보 입력 → 로그인으로 이어지는 직관적인 흐름",
              "입력값 실시간 검증으로 사용자 오류를 최소화",
              "토큰 만료 시 자동 갱신을 통한 로그인 상태 유지",
              "소셜 로그인 제공으로 비회원 진입 장벽 완화",
            ],
          },
          {
            title: "알바폼 공고 목록",
            implementedByMe: true,
            contributionPercent: 99,
            contributionDetails: [
              "IntersectionObserver를 활용한 무한 스크롤 기능 구현",
              "QueryClient를 활용한 SSR + CSR 통합 구성으로 초기 데이터 처리",
              "키워드 기반 검색 기능 및 정렬 필터 구현",
              "반응형 레이아웃 및 모바일 UI 구성",
            ],
            contributionNote: true,
            description: [
              "알바폼 목록 페이지는 사용자가 전체 채용 공고를 탐색하는 중심 페이지로, 알바폼 플랫폼의 핵심 콘텐츠를 보여줍니다.",
              "SSR과 CSR을 통합해 초기 렌더링 속도를 개선하였으며, 검색/필터/무한스크롤을 통해 다양한 조건에 맞는 공고 탐색을 지원합니다.",
              "모바일 환경에서도 최적화된 UI를 제공하여 모든 사용자에게 원활한 탐색 경험을 보장합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/albaform.png",
            tech: [
              "React Query",
              "IntersectionObserver",
              "TypeScript",
              "Tailwind CSS",
            ],
            ux: [
              "무한 스크롤을 통한 자연스러운 콘텐츠 로딩",
              "검색어 및 정렬 필터 조건에 따라 실시간으로 결과 목록 업데이트",
              "다양한 해상도에서 일관된 레이아웃 제공",
              "SSR 기반 초기 로딩으로 콘텐츠 접근 속도 및 SEO 개선",
            ],
          },
          {
            title: "[채용자] 알바폼 공고 등록 및 수정",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "채용자가 새로운 알바 공고를 작성하거나 기존 공고를 수정할 수 있는 입력 폼 페이지입니다.",
              "입력된 데이터를 RHF으로 관리하며, 모든 필수 항목이 작성 완료된 경우에만 제출이 가능하도록 유효성 검사를 포함하고 있습니다.",
              "폼 상태 변화에 따라 상위 컴포넌트로 데이터를 전달하고, 최종 제출 시에는 서버로 전송되는 구조로 구현되어 있습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/createAlbaform.png",
            tech: [
              "React Query",
              "Kakao Map API",
              "TypeScript",
              "Tailwind CSS",
              "Styled Components",
            ],
            ux: [
              "필수 항목이 모두 입력된 경우에만 제출 버튼이 활성화되어, 불완전한 제출 사전 방지",
              "기존 공고 수정 시에도 동일한 UX 흐름을 제공하여 일관된 사용자 경험 유지",
            ],
          },
          {
            title: "[채용자/지원자] 알바폼 공고 상세",
            implementedByMe: true,
            contributionPercent: 99,
            contributionDetails: [
              "반응형 UI 및 채용자/지원자 권한 분기 처리",
              "카카오 지도 및 카카오 공유 기능 연동",
              "채용자용 지원자 목록 무한스크롤 구현 (IntersectionObserver)",
              "지원자용 스크랩 기능 구현 및 옵티미스틱 UI 적용",
              "상세 페이지 내 수정, 삭제, 공고 지원 등 액션 기능 연동",
            ],
            contributionNote: true,
            description: [
              "알바폼 상세 페이지는 채용자와 지원자 모두에게 각기 다른 인터페이스를 제공하며, 공고의 핵심 정보를 시각적으로 구성하여 전달하는 역할을 합니다.",
              "초기에는 정적인 텍스트 기반 구조였으나, 지도 연동, 공유 기능, 액션 버튼, 반응형 스타일링 등 다양한 기능을 통해 실사용에 적합한 상세 페이지로 고도화했습니다.",
              "채용자는 하단에서 지원자 목록을 무한스크롤로 확인할 수 있고, 지원자는 스크랩 기능을 통해 관심 공고를 저장할 수 있도록 구성되었습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/albaformDetail.png",
            tech: [
              "React Query",
              "IntersectionObserver",
              "Kakao Maps SDK",
              "Optimistic UI",
              "Typescript",
              "Tailwind CSS",
            ],
            ux: [
              "권한에 따라 상세 페이지 내 콘텐츠와 액션이 동적으로 분기되어 개인화된 사용자 경험 제공",
              "지도 및 공유 기능으로 공고 정보 전달의 범용성 강화",
              "무한스크롤 및 스크랩 기능으로 사용자 편의성과 접근성 향상",
            ],
          },
          {
            title: "[지원자] 공고 지원하기",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: true,
            description: [
              "지원자는 이 페이지에서 이력서를 첨부하고 자기소개 등 필요한 정보를 입력해 알바폼에 지원할 수 있습니다.",
              "React Hook Form과 Zod 기반의 스키마 유효성 검사를 통해 입력 흐름을 자연스럽게 제어하며, 불완전한 제출을 방지합니다.",
              "또한 백엔드에서 임시저장을 지원하지 않는 한계를 보완하기 위해, 로컬스토리지를 활용한 임시저장 기능을 구현했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/apply.svg",
            tech: [
              "React Hook Form",
              "Zod",
              "LocalStorage",
              "Typescript",
              "Tailwind CSS",
            ],
            ux: [
              "폼 입력 도중 '임시저장'을 누르면 이력서를 제외한 텍스트 데이터를 로컬스토리지에 저장하여 이탈 시에도 데이터 유실을 방지",
              "페이지 복귀 시 임시 저장된 데이터가 존재하면 복구 여부를 묻는 모달을 통해 사용자 선택에 따라 데이터 복구 또는 삭제 가능",
              "스키마 유효성 검사로 입력 흐름을 제어하여 올바른 정보만 제출되도록 유도",
            ],
          },
          {
            title: "[채용자/지원자] 지원내역 상세",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: true,
            description: [
              "지원내역 상세 페이지는 채용자와 지원자가 각자의 입장에서 지원 정보를 확인하고, 필요한 조치를 취할 수 있도록 설계된 페이지입니다.",
              "지원자는 본인이 제출한 지원 내용과 자기소개 글, 첨부된 이력서를 확인할 수 있으며, 채용자는 지원자의 상세 정보를 확인하고 지원 상태를 변경할 수 있습니다.",
              "지원 상태 변경은 공통 모달 컴포넌트를 활용하여 '거절', '면접 대기', '면접 완료', '채용 완료'의 상태로 유연하게 처리됩니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/resumeDetail.png",
            tech: [
              "React Query",
              "Kakao Maps SDK",
              "Custom Modal System",
              "Typescript",
              "Tailwind CSS",
            ],
            ux: [
              "채용자/지원자 권한에 따른 정보 노출 범위와 인터페이스 분기",
              "지원 상태 변경 시 모달 기반 인터랙션으로 직관적인 UX 제공",
              "이력서 다운로드 기능을 통해 채용자가 필요한 정보를 쉽게 확보할 수 있도록 구성",
            ],
          },
          {
            title: "알바토크 게시글 목록",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "알바토크는 사용자 간의 자유로운 소통을 위한 커뮤니티 게시판 기능으로, 다양한 주제의 글을 자유롭게 탐색하고 확인할 수 있는 공간입니다.",
              "목록은 IntersectionObserver를 활용한 무한스크롤 방식으로 구현되어 사용자는 자연스럽게 콘텐츠를 탐색할 수 있습니다.",
              "검색 기능과 정렬 필터를 함께 제공하여 원하는 게시글을 효율적으로 찾을 수 있도록 구성했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/albatalk.png",
            tech: [
              "React Query",
              "IntersectionObserver",
              "TypeScript",
              "Tailwind CSS",
            ],
            ux: [
              "스크롤에 따라 자연스럽게 이어지는 게시글 로딩 경험 제공",
              "검색 키워드 및 정렬 조건에 따라 즉각적인 게시글 목록 필터링",
              "반응형 UI로 모바일/PC 환경 모두에서 쾌적한 탐색 경험 보장",
            ],
          },
          {
            title: "알바토크 게시글 등록 및 수정",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "사용자가 자유롭게 게시글을 작성하거나 기존 글을 수정할 수 있는 페이지입니다.",
              "동일한 UI 구조를 유지하며, 변경사항이 없거나 필수 입력 조건이 충족되지 않으면 등록 버튼이 비활성화되어 불완전한 제출을 방지합니다.",
              "이미지는 한 게시글당 최대 1개까지 첨부할 수 있도록 제한하여 사용자 경험을 단순하고 명확하게 유지합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/createAlbatalk.png",
            tech: [
              "React Query",
              "React Hook Form",
              "Zod",
              "TypeScript",
              "Tailwind CSS",
            ],
            ux: [
              "필수 항목 입력 여부에 따른 등록 버튼 활성화 상태 관리로 올바른 데이터 제출 유도",
              "최대 1개의 이미지 첨부 기능으로 심플한 UI 제공",
              "일관된 UI 구조로 사용자가 쉽게 게시글을 작성하고 수정 가능",
            ],
          },
          {
            title: "알바토크 게시글 상세",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "사용자가 자유게시판 형태의 게시글을 열람할 수 있는 페이지입니다.",
              "이미지가 첨부된 경우, 콘텐츠는 이미지-텍스트 순으로 구성되며, 다양한 이미지 비율에 대응할 수 있도록 useEffect를 활용해 동적으로 크기를 계산해 렌더링합니다.",
              "댓글은 유틸리티 함수를 통한 페이지네이션과 React Query 기반의 데이터 처리로 구성되어, 수정 및 삭제 시에도 실시간으로 반영됩니다.",
              "좋아요 기능은 옵티미스틱 UI로 구현되어 빠른 인터랙션 피드백을 제공합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/albatalkDetail.png",
            tech: [
              "React Query",
              "React Hook Form",
              "Zod",
              "Optimistic UI",
              "Pagination",
              "TypeScript",
              "Tailwind CSS",
            ],
            ux: [
              "비동기 처리 전에도 좋아요 상태가 반영되는 옵티미스틱 UI로 즉각적인 사용자 피드백 제공",
              "댓글 수정/삭제 시 목록 자동 갱신으로 인터랙션 일관성 유지",
              "유동적인 이미지 크기 계산으로 레이아웃 깨짐 없는 콘텐츠 노출",
              "숫자 기반 페이지네이션을 통해 댓글 목록을 효과적으로 관리하며, 가독성과 접근성 강화",
            ],
          },
          {
            title: "[채용자/지원자] 내 알바폼 목록",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "사용자 권한에 따라 다른 정보를 제공하는 개인화된 알바폼 목록 페이지입니다.",
              "채용자는 자신이 작성한 공고를 확인할 수 있고, 지원자는 자신이 지원한 알바 목록을 열람할 수 있도록 구성했습니다.",
              "검색과 정렬 필터 기능을 통해 원하는 항목을 빠르게 찾을 수 있으며, IntersectionObserver를 활용한 무한 스크롤 방식으로 UX를 부드럽게 유지했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/myAlbaform.png",
            tech: [
              "React Query",
              "IntersectionObserver",
              "TypeScript",
              "Tailwind CSS",
            ],
            ux: [
              "채용자/지원자 권한에 따른 UI 및 데이터 분기",
              "검색 및 정렬 필터를 통한 효율적인 목록 탐색",
              "무한 스크롤을 통한 자연스러운 목록 탐색 경험",
            ],
          },
          {
            title: "[채용자/지원자] 마이페이지",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: true,
            description: [
              "마이페이지는 채용자와 지원자 모두 사용하는 공통 페이지로, 사용자 권한에 따라 UI와 노출 기능이 유동적으로 분기되도록 구성했습니다.",
              "기본적으로는 내가 쓴 알바토크 글과 댓글을 확인할 수 있으며, 정렬 필터 기능과 무한 스크롤을 통해 편리하게 탐색할 수 있습니다.",
              "비밀번호 변경 및 내 정보 수정 기능은 RHF + Zod를 활용한 폼 유효성 검사를 적용했으며, 특히 '내 정보 수정' 모달은 입력 항목이 달라 권한별로 각각 다른 UI를 제공합니다.",
              "지원자에게는 스크랩한 알바폼 목록을 확인할 수 있는 추가 기능이 제공되어 개인화된 사용 경험을 제공합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/albaform/mypage.svg",
            tech: [
              "React Query",
              "React Hook Form",
              "Zod",
              "IntersectionObserver",
              "Kakao Map API",
              "TypeScript",
              "Tailwind CSS",
            ],
            ux: [
              "채용자/지원자 권한에 따른 유동적 UI 분기",
              "내가 쓴 글, 댓글, 스크랩 등 개인 활동 내역 확인 가능",
              "정렬 필터 및 무한 스크롤을 통한 사용자 편의성 강화",
              "RHF + Zod 기반 폼 유효성 검사로 안정적인 정보 수정 흐름 제공",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    projectName: "PandaMarket",
    featureGroups: [
      {
        groupName: "공통 UI",
        features: [
          {
            title: "GNB",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "로컬 인증 방식을 기반으로 사용자 로그인 여부에 따라 네비게이션 UI를 동적으로 구성했습니다.",
              "accessToken 존재 여부에 따라 로그인 버튼 또는 프로필 이미지가 조건부 렌더링되며, 토큰을 확인하는 동안 불필요한 UI 깜빡임을 방지하기 위해 hydration 완료 후에만 화면이 렌더링되도록 처리했습니다.",
              "기획에 없던 로그아웃 기능을 사용성 측면에서 직접 기획·추가하였으며, 프로필 이미지를 클릭하면 로그아웃 메뉴가 드롭다운 형태로 출력되도록 구현했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/navigation.svg",
            tech: [
              "React Query",
              "LocalStorage",
              "Typescript",
              "Styled Components",
            ],
            ux: [
              "토큰 유무에 따른 자연스러운 네비게이션 변화로 사용자 혼란 방지",
              "Hydration 완료 후에만 UI 렌더링되도록 처리해 깜빡임 최소화",
              "사용자의 흐름을 고려한 드롭다운 로그아웃 메뉴 구현",
            ],
          },
        ],
      },
      {
        groupName: "페이지별 기능",
        features: [
          {
            title: "랜딩",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "첫 진입 시 사용자에게 브랜드 인상을 전달하는 랜딩 페이지로, PC/태블릿/모바일 환경에서 모두 자연스럽게 작동하는 반응형 UI로 구현했습니다.",
              "'구경하러 가기' 버튼 클릭 시 로그인 여부를 판단해, 로그인 상태면 중고마켓 목록으로, 비로그인 상태면 로그인 페이지로 이동하도록 분기 처리를 적용했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/landing.png",
            tech: ["Styled Components", "CSS Modules"],
            ux: [
              "접근 기기 해상도에 따라 최적화된 UI로 자연스러운 사용자 경험 제공",
              "로그인 여부에 따른 사용자 흐름 분기 처리로 UX 혼란 최소화",
            ],
          },
          {
            title: "로그인 & 회원가입",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "서비스 접속의 첫 단계로, 로그인과 회원가입 기능을 제공하는 페이지입니다.",
              "React Context API와 Provider 패턴을 활용해 입력 상태를 전역으로 관리하여 컴포넌트 간 일관성을 유지했습니다.",
              "입력 값에 대한 유효성 검사는 하드코딩으로 직접 구현했으며, React Query를 이용해 서버와 안정적으로 데이터를 주고받도록 처리했습니다.",
              "현재 SNS 로그인 기능은 개발이 중단된 상태이며, 추후 포트폴리오 완성 후 추가 개발할 계획입니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/sign.png",
            tech: ["React Query", "Axios", "Context API", "Typescript"],
            ux: [
              "전역 상태 관리를 통해 입력값의 일관성과 관리 편의성 향상",
              "직접 구현한 유효성 검사로 입력 오류 최소화",
              "API 요청 상태에 따른 로딩 및 에러 처리 UI 제공",
              "향후 SNS 로그인 기능 추가로 사용자 경험 확장 예정",
            ],
          },
          {
            title: "중고마켓 상품 목록",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "중고마켓 사용자들이 다양한 상품을 편리하게 탐색하고 구매할 수 있도록 설계된 핵심 페이지입니다.",
              "사용자는 키워드 검색 기능을 통해 원하는 상품을 즉시 찾을 수 있으며, 검색어 입력과 동시에 결과가 실시간으로 필터링되는 반응성을 높였습니다.",
              "또한, 최신순과 좋아요순 정렬 기능을 제공해 사용자가 선호하는 기준에 따라 상품을 쉽게 정렬할 수 있도록 지원합니다.",
              "베스트 상품과 전체 상품을 구분해 보여주며, 반응형 디자인에 맞춰 한 화면에 표시되는 상품 수를 자동 조절해 기기별 최적화된 사용자 경험을 제공합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/market.png",
            tech: ["React Query", "useMediaQuery", "TypeScript", "CSS Modules"],
            ux: [
              "실시간 키워드 검색 결과 반영",
              "정렬 필터를 통한 사용자 맞춤형 상품 탐색",
              "반응형에 따른 동적 데이터 렌더링으로 최적화된 사용자 경험 제공",
            ],
          },
          {
            title: "중고마켓 상품 등록",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "사용자가 상품 정보를 입력할 수 있는 등록 페이지입니다.",
              "각 폼 필드는 상태 관리 함수로 제어되며, React Query의 mutate를 통해 서버에 데이터를 제출합니다.",
              "필수 입력 항목이 모두 채워져야만 등록 버튼이 활성화되어, 불완전한 등록을 방지합니다.",
              "이미지는 최대 1개까지 업로드할 수 있도록 제한하여, 직관적이고 간결한 UI를 제공합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/createProduct.png",
            tech: ["React Query", "TypeScript", "CSS Modules"],
            ux: [
              "입력 검증에 따른 버튼 활성화 제어로 사용자 실수 방지",
              "최대 1개 이미지 등록 제한으로 명확한 사용자 경험 제공",
            ],
          },
          {
            title: "중고마켓 상품 상세",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "상품 정보 확인과 사용자 상호작용을 위한 상세 페이지로, 게시자는 본인이 등록한 게시글을 삭제할 수 있습니다. (수정 기능은 추후 추가 예정)",
              "좋아요는 토글 방식으로 구현되어 클릭 시 숫자가 즉시 반영되며, 댓글은 등록/수정/삭제가 가능하고 React Query의 queryKey 기반 캐싱을 통해 실시간 반영됩니다.",
              "댓글 무한스크롤 기능은 향후 구현 예정입니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/productDetail.png",
            tech: ["React Query", "TypeScript", "CSS Modules"],
            ux: [
              "좋아요 클릭 시 즉각 반응하는 숫자 갱신으로 인터랙션 피드백 강화",
              "댓글 작성 후 UI 실시간 반영으로 자연스러운 사용자 흐름 유지",
              "게시자 권한으로 게시글 삭제 가능",
            ],
          },
          {
            title: "자유게시판 게시글 목록",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "사용자가 게시된 자유게시판 글을 확인하고 탐색할 수 있는 목록 페이지입니다.",
              "검색 키워드 입력 시, 결과가 실시간으로 필터링되어 사용자에게 즉각적인 검색 경험을 제공합니다.",
              "정렬 필터를 통해 최신순과 좋아요순으로 게시글을 정렬할 수 있어, 다양한 탐색 기준을 지원합니다.",
              "현재는 제한된 데이터 수만 로드되도록 구성되어 있으며, 추후 IntersectionObserver 기반의 무한 스크롤 기능이 추가될 예정입니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/board.png",
            tech: ["React Query", "TypeScript", "CSS Modules"],
            ux: [
              "실시간 키워드 검색 필터로 탐색 효율성 향상",
              "정렬 기준 선택으로 사용자의 탐색 목적 반영",
              "추후 무한스크롤 적용을 고려한 구조 설계",
            ],
          },
          {
            title: "자유게시판 게시글 등록",
            implementedByMe: true,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "사용자가 자유롭게 글을 작성하고 등록할 수 있는 게시글 등록 페이지로, 현재는 구현되지 않은 상태입니다.",
              "향후 구현 시, 제목/본문 입력 및 이미지 첨부 기능을 지원할 예정이며, 필수 입력값 검증 및 입력 상태에 따른 등록 버튼 활성화 로직이 포함될 예정입니다.",
              "폼 입력은 React Hook Form과 Zod를 활용한 유효성 검사를 통해 처리하고, 등록 시 서버와의 통신은 React Query를 사용할 계획입니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/createPost.png",
            tech: [
              // "React Hook Form",
              // "Zod",
              // "React Query",
              // "TypeScript",
              // "CSS Modules",
            ],
            ux: [
              "작성 중 실수 방지를 위한 유효성 검사 및 인터랙션 설계 예정",
              "직관적인 에디터 기반 UI로 사용자 편의성 확보 목표",
            ],
          },
          {
            title: "자유게시판 게시글 상세",
            implementedByMe: true,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "개별 게시글의 내용과 댓글을 확인할 수 있는 상세 페이지로, 현재는 구현되지 않은 상태입니다.",
              "본문 외에도 첨부 이미지 출력, 댓글 등록/수정/삭제 및 좋아요 기능을 제공할 계획이며, 각 상호작용은 실시간 반영되도록 설계할 예정입니다.",
              "댓글은 페이지네이션 또는 무한스크롤 방식 중 적절한 형태로 로딩하며, 좋아요 기능은 낙관적 UI 적용 여부를 고려하여 설계할 계획입니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/pandamarket/postDetail.png",
            tech: [
              // "React Query", "TypeScript", "CSS Modules"
            ],
            ux: [
              "댓글 및 좋아요 등 상호작용에 따른 즉각적인 피드백 제공 예정",
              "이미지 포함 콘텐츠의 유연한 레이아웃 렌더링 고려",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    projectName: "GlobalNomad",
    featureGroups: [
      {
        groupName: "공통 UI",
        features: [
          {
            title: "Input",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "공통적으로 사용하는 입력 필드 컴포넌트로, 다양한 타입의 input 요소에 대응하도록 설계되었습니다.",
              "라벨 표시, 에러 상태 시 스타일링, React Hook Form과의 호환성을 고려해 유연하게 구성되어 있습니다.",
              "스타일은 CSS Module을 사용해 관리하며, 라벨 크기 조절과 클래스명 커스터마이징이 가능해 재사용성이 뛰어납니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/input.svg",
            tech: ["TypeScript", "CSS Modules"],
            ux: [
              "일관된 UI/UX를 보장하는 범용 입력 컴포넌트",
              "React Hook Form과 완벽히 호환되어 효율적인 폼 관리 가능",
              "에러 상태를 직관적으로 표시해 사용자 입력 오류를 명확히 안내",
            ],
          },
          {
            title: "Dropdown",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "제네릭 타입을 활용해 다양한 옵션 타입을 지원하는 범용 드롭다운 컴포넌트입니다.",
              "선택된 값에 따라 버튼 레이블이 동적으로 변경되며, 토글 버튼 클릭으로 메뉴가 열리고 닫힙니다.",
              "컴포넌트 외부 클릭 시 메뉴가 자동으로 닫히도록 커스텀 훅(useClickOutside)을 적용해 사용자 경험을 개선했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/dropdown.svg",
            tech: ["Custom Hooks", "TypeScript", "CSS Modules"],
            ux: [
              "외부 클릭 감지로 메뉴 자동 닫힘 처리",
              "선택 상태가 직관적으로 반영되는 토글 버튼 UI",
              "유연한 스타일링을 위한 클래스명 커스터마이징 지원",
            ],
          },
          {
            title: "GNB",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "로그인 상태에 따라 로그인 버튼 또는 프로필 이미지를 조건부 렌더링하는 글로벌 내비게이션입니다.",
              "기획에 없던 사용자 경험 개선을 위해, 프로필 클릭 시 로그아웃 기능이 포함된 드롭다운 메뉴를 직접 추가 구현했습니다.",
              "hydration 상태를 선제적으로 판단하여 초기 렌더링 시 UI 깜빡임을 최소화 했으며 로그인 후 새로고침 시 UI 지연 노출 이슈가 있으나, 기능적인 흐름에는 영향을 주지 않습니다. (추후 보완 예정)",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/navigation.svg",
            tech: ["Custom Hooks", "TypeScript", "CSS Modules"],
            ux: [
              "hydration 상태 관리로 서버-클라이언트 렌더링 차이 최소화",
              "조건부 렌더링으로 로그인 상태에 따른 UI 동적 변화 제공",
              "프로필 클릭 시 드롭다운 메뉴로 직관적이고 접근성 높은 사용자 제어 환경 구현",
            ],
          },
          {
            title: "Button",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "블랙/화이트 테마와 sm·md·lg 크기 옵션을 지원하는 범용 버튼 컴포넌트입니다.",
              "button 또는 Link 컴포넌트로 렌더링되며, 상황에 따라 클릭 동작 또는 페이지 이동이 가능합니다.",
              "비활성화 상태, 커스텀 클래스 및 인라인 스타일 확장이 가능하도록 설계되었습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/button.svg",
            tech: ["TypeScript", "CSS Modules"],
            ux: [
              "다양한 크기와 색상 옵션으로 일관된 UI 제공",
              "조건부 Link 지원으로 유연한 네비게이션 구현",
              "비활성화 및 스타일 커스터마이징으로 재사용성 향상",
            ],
          },
        ],
      },
      {
        groupName: "페이지별 기능",
        features: [
          {
            title: "메인",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "사용자가 전체 체험 콘텐츠를 탐색할 수 있도록 인기 체험과 전체 체험 섹션으로 구성된 메인 페이지입니다.",
              "인기 체험은 slick-slider를 활용한 슬라이드 UI로 제공되며, 전체 체험 목록은 숫자 기반 페이지네이션 방식으로 구현되어 효율적인 데이터 로딩이 가능합니다.",
              "제목 기반의 키워드 검색 기능과 다양한 정렬 조건을 제공하여 사용자가 원하는 체험을 빠르게 찾을 수 있도록 지원합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/main.png",
            tech: [
              "React Query",
              "TypeScript",
              "Slick Carousel",
              "Pagination",
              "CSS Modules",
            ],
            ux: [
              "슬라이드 UI로 인기 체험 콘텐츠에 대한 사용자 주목도 강화",
              "숫자 기반 페이지네이션으로 빠르고 안정적인 콘텐츠 탐색 지원",
              "검색 및 정렬 필터 기능으로 사용자 맞춤형 콘텐츠 접근성 향상",
            ],
          },
          {
            title: "로그인 & 회원가입",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "사용자의 계정 인증을 위한 로그인 및 회원가입 기능으로, React Hook Form과 Zod를 조합해 각 입력 항목에 대한 정교한 유효성 검사를 적용했습니다.",
              "서버와의 데이터 송수신은 React Query로 처리하며, 비동기 상태에 따른 로딩 및 에러 대응이 안정적으로 이뤄집니다.",
              "카카오 로그인 연동을 통해 간편한 소셜 로그인 기능을 제공하며, 신규 회원은 카카오 정보를 기반으로 자동 회원가입이 가능합니다.",
              "가입 및 로그인 완료 후에는 react-hot-toast를 이용해 사용자에게 결과 메시지를 직관적으로 안내합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/sign.png",
            tech: [
              "React Query",
              "React Hook Form",
              "Zod",
              "Kakao API",
              "react-hot-toast",
              "TypeScript",
              "CSS Modules",
            ],
            ux: [
              "실시간 유효성 검사를 통해 입력 단계에서 사용자 오류를 최소화",
              "비동기 처리 상태에 따라 피드백이 즉시 반영되어 사용자 신뢰도 향상",
              "카카오 소셜 로그인으로 빠르고 편리한 접근성 제공",
              "로그인 및 회원가입 완료 후 알림을 통해 흐름 단절 없이 서비스 이용 유도",
            ],
          },
          {
            title: "체험 상세",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "체험 상품에 대한 상세 정보를 제공하며, 카카오 지도를 연동해 체험 장소를 시각적으로 확인할 수 있습니다.",
              "사용자는 예약 가능한 날짜, 시간, 인원 수를 선택해 예약 신청이 가능하며, 후기는 숫자 기반 페이지네이션으로 분리되어 확인할 수 있습니다.",
              "단, 필수 항목이 선택되지 않은 경우의 버튼 비활성화 처리 등 UX 관점에서의 유효성 피드백은 미흡한 편으로, 추후 개선이 필요한 부분입니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/activityDetail.png",
            tech: [
              "React Query",
              "Kakao Map API",
              "Pagination",
              "TypeScript",
              "CSS Modules",
            ],
            ux: [
              "카카오 지도를 통한 위치 정보 제공으로 공간 이해도 향상",
              "숫자형 페이지네이션으로 후기 탐색의 가독성 및 접근성 확보",
              "예약 기능은 동작하지만, 필수 입력 미완료 시의 UI 피드백은 보완 필요",
            ],
          },
          {
            title: "내 정보",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "사용자의 닉네임, 프로필 이미지, 비밀번호를 수정할 수 있는 개인 정보 관리 페이지입니다.",
              "모달 UI를 통해 입력 정보를 손쉽게 변경할 수 있도록 구성되어 있으며, 사용자 경험을 고려한 인터페이스로 구현되었습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/mypage.png",
            tech: ["React Query", "TypeScript", "CSS Modules"],
            ux: [
              "모달 기반 인터페이스로 정보 수정 동선을 간결하게 구성",
              "입력 필드에 대한 유효성 검사를 통해 안정적인 정보 변경 유도",
              "프로필 이미지 미리보기 및 교체 기능 제공",
            ],
          },
          {
            title: "예약 내역",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "사용자가 참여한 체험의 예약 상태를 한눈에 확인하고, 필요한 조치를 취할 수 있는 예약 관리 페이지입니다.",
              "직접 구현한 커스텀 훅(`useScrollPositioning`)을 활용하여, 스크롤 위치를 유지한 채 데이터를 무한스크롤 방식으로 불러오도록 구성했습니다.",
              "예약 상태에 따른 정렬 필터, 예약 취소, 후기 작성 기능을 제공하며, 후기는 별점 드래그 인터랙션이 적용된 모달을 통해 작성할 수 있습니다.",
              "기획에는 없던 기능으로, 예약 기한 만료나 후기 작성 완료 여부를 판단하여 상황에 맞는 안내 문구를 동적으로 표시하는 로직을 추가 개발했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/myReservation.png",
            tech: ["React Query", "Custom Hook", "TypeScript", "CSS Modules"],
            ux: [
              "무한스크롤과 스크롤 위치 유지 기능으로 자연스러운 콘텐츠 탐색 경험 제공",
              "별점 드래그 인터랙션을 통해 직관적인 후기 작성 환경 구성",
              "상태 기반 안내 문구 출력으로 사용자의 예약 상황 이해를 돕는 인터페이스 구현",
              "예약 현황에 따른 실시간 필터링 기능 제공",
            ],
          },
          {
            title: "내 체험 관리",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "커스텀 훅(`useScrollPositioning`)을 활용해 '내가 등록한 체험'을 무한스크롤 방식으로 불러올 수 있도록 구현했습니다.",
              "페이지 상단에는 새로운 체험 등록을 위한 이동 버튼이 배치되어 있으며, 각 체험 카드에는 '더보기' 버튼을 통해 수정 또는 삭제 작업을 수행할 수 있습니다.",
              "사용자 관점에서 체험 목록 탐색, 관리, 등록 흐름이 자연스럽게 이어지도록 인터페이스가 구성되어 있습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/myActivity.png",
            tech: ["React Query", "Custom Hook", "TypeScript", "CSS Modules"],
            ux: [
              "무한스크롤을 통한 자연스러운 콘텐츠 로딩 경험 제공",
              "카드별 '더보기' 인터랙션을 통해 체험 수정/삭제 접근성 향상",
              "등록 버튼 제공으로 신규 체험 등록 동선 마련",
            ],
          },
          {
            title: "내 체험 등록 및 수정",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "내 체험을 등록하거나 수정할 수 있는 공통 UI의 폼 페이지입니다.",
              "입력 값을 직접 상태로 관리하여 payload를 구성한 뒤 React Query를 통해 서버로 전송하는 방식으로 구현되었습니다.",
              "카카오 주소 검색 기능이 연동되어 위치 정보를 효율적으로 입력할 수 있으며, 배너 이미지는 1개, 서브 이미지는 최대 4개까지 업로드가 가능합니다.",
              "현재는 필수 입력값 검증과 버튼 활성화가 분리되어 있어 UX 측면에서 아쉬움이 있으며, 향후 조건부 활성화 로직 개선 여지가 있습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/createActivity.png",
            tech: ["React Query", "Kakao Map API", "TypeScript", "CSS Modules"],
            ux: [
              "입력값을 직접 조립해 전송하는 방식으로 유연한 데이터 제어",
              "주소 검색 자동완성 기능으로 빠른 위치 입력 지원",
              "이미지 업로드 제한 설정을 통해 사용자 실수 방지",
              "입력 유효성 조건에 따른 버튼 활성화 로직 미비로 개선 필요",
            ],
          },
          {
            title: "예약 현황",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "react-calendar 라이브러리를 활용해 달력 UI를 구현하였습니다.",
              "사용자가 직접 등록한 체험을 선택하여 해당 체험의 예약 현황을 달력을 통해 한눈에 확인할 수 있습니다.",
              "달력 내에서 예약 승인 및 거절 기능을 제공하여, 예약 관리 업무를 직관적이고 효율적으로 수행할 수 있습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/globalnomad/reservationStatus.png",
            tech: [
              "React Query",
              "react-calendar",
              "TypeScript",
              "CSS Modules",
            ],
            ux: [
              "달력 기반 예약 현황 조회로 예약 일정 관리 편의성 향상",
              "직관적인 예약 승인/거절 UI로 빠른 예약 처리 지원",
              "사용자 선택 체험에 따른 맞춤형 예약 데이터 표시",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    projectName: "Taskify",
    featureGroups: [
      {
        groupName: "공통 UI",
        features: [
          {
            title: "Button",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "기본 버튼과 앵커 태그를 모두 지원하며, 버튼의 너비, 높이, 패딩, 둥근 스타일 등을 prop을 통해 자유롭게 커스터마이징할 수 있습니다.",
              "클릭 이벤트 핸들러와 조건부 렌더링을 활용해 사용자 상호작용 및 네비게이션 용도로 유연하게 활용 가능하도록 구현되었습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/button.svg",
            tech: ["SCSS Modules"],
            ux: [
              "버튼의 형태와 동작 방식을 유연하게 제어할 수 있어 다양한 UI 요구사항에 대응",
              "둥근 버튼 여부를 설정해 시각적인 강조나 액션의 특성을 명확하게 전달",
              "링크 및 버튼을 하나의 컴포넌트로 통합하여 개발 생산성과 유지보수 효율 향상",
            ],
          },
          {
            title: "Modal",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "React Portal을 활용하여 모달 콘텐츠를 DOM 최상단에 렌더링하며, 뒷배경 클릭 시 모달을 닫을 수 있도록 인터랙션을 제공합니다.",
              "모달 외부 영역 클릭 시 이벤트 전파를 차단해 의도치 않은 닫힘을 방지하며, 다양한 콘텐츠에 대응 가능한 children 기반의 확장형 구조로 구성되어 있습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/modal.png",
            tech: ["React DOM Portal", "SCSS Modules"],
            ux: [
              "모달 외부 클릭 시 닫힘 기능 제공으로 직관적인 UX 구현",
              "자식 요소 기반으로 다양한 콘텐츠 삽입이 가능하여 재사용성 확보",
            ],
          },
          {
            title: "GNB",
            implementedByMe: false,
            contributionPercent: 1,
            contributionDetails: [
              "'초대하기' 버튼 활성화 로직 추가",
              "초대 완료 시 내역 자동 갱신 로직 구현",
            ],
            contributionNote: false,
            description: [
              "사용자 로그인 정보를 바탕으로 대시보드 이름, 관리 기능, 멤버 목록, 프로필 드롭다운을 표시하는 글로벌 내비게이션 컴포넌트입니다.",
              "대시보드가 본인이 생성한 경우에만 설정 및 초대 기능이 노출되며, 현재 라우트에 따라 조건부 렌더링이 이뤄집니다.",
              "사용자 프로필을 클릭하면 드롭다운 메뉴가 노출되고, 외부 영역 클릭 시 자동으로 닫히도록 이벤트 리스너를 활용한 UX 처리를 적용했습니다.",
              "멤버 목록은 API 호출을 통해 실시간으로 불러오며, 프로필 이미지가 없는 경우에는 이니셜을 기반으로 스타일링된 대체 UI를 제공해 사용자 식별이 가능합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/navigation.svg",
            tech: ["Axios", "SCSS Modules", "Styled-components"],
            ux: [
              "프로필 클릭 시 사용자 메뉴가 드롭다운으로 노출되어 계정 기능 접근이 직관적",
              "초대 및 설정 버튼은 본인이 생성한 대시보드에만 표시돼 사용자 권한에 따른 접근 제어를 지원",
              "멤버 프로필 이미지 또는 이니셜로 사용자 구분을 시각적으로 제공해 인지 용이성 향상",
              "드롭다운 외부 클릭 시 자동 닫힘 처리로 UX 일관성 확보",
            ],
          },
        ],
      },
      {
        groupName: "페이지별 기능",
        features: [
          {
            title: "랜딩",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "서비스의 첫 인상을 담당하는 랜딩 페이지로, 정적인 시각 요소에 AOS(Ani­mate on Scroll)를 적용해 부드러운 인터랙션 효과를 구현했습니다.",
              "React Type Animation을 활용해 제품명 'Taskify'가 반복적으로 타이핑되는 애니메이션을 연출하여 브랜드 이미지를 강화했습니다.",
              "CustomButton 컴포넌트와 함께 '로그인하기' 버튼을 배치하여 사용자 흐름의 시작 지점을 명확하게 유도합니다.",
              "초기에는 다크모드 테마를 고려해 흰 배경으로 시작했으나, 실제 개발 과정에서 테마 기능은 제외되어 현재는 라이트 모드만 제공됩니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/landing.png",
            tech: [
              "AOS (Animate On Scroll)",
              "React Type Animation",
              "SCSS Modules",
            ],
            ux: [
              "스크롤에 따른 자연스러운 시각 효과로 사용자 몰입도 향상",
              "반복되는 타이핑 애니메이션으로 브랜드 네임을 각인",
              "단일 CTA 버튼을 통해 사용자의 행동 유도 경로를 단순화",
            ],
          },
          {
            title: "로그인 & 회원가입",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "회원가입과 로그인이 유사한 구조로 구성되어 있으며, 이메일, 닉네임, 비밀번호 입력에 대한 정적 유효성 검사를 직접 구현해 실시간 피드백을 제공합니다.",
              "입력값 검증은 별도의 라이브러리 없이 정규표현식 및 조건문 기반의 로직으로 구성되어 있으며, 필수 체크 항목(이용약관 동의 등)이 모두 완료돼야 가입 버튼이 활성화됩니다.",
              "비밀번호와 비밀번호 확인 입력창에는 눈 아이콘을 활용한 가시성 토글 기능이 포함되어 사용자 편의성을 높였고, 가입/로그인 성공 또는 실패 시에는 CustomModal을 활용하여 사용자에게 직관적인 결과 피드백을 제공합니다.",
              "회원가입 완료 시 자동으로 로그인 페이지로 리디렉션되는 흐름을 구성하여 자연스러운 사용자 여정을 유도합니다.",
            ],
            image: "/images/projects/detail/frontend/features/taskify/sign.png",
            tech: ["axios", "Custom Modal", "TypeScript", "SCSS Modules"],
            ux: [
              "입력 단계마다 실시간 유효성 검사를 통해 사용자 오류를 사전에 방지",
              "이용약관 동의 여부를 기반으로 버튼 활성화 상태를 제어해 사용자의 책임 인식 유도",
              "비밀번호 가시성 토글로 입력 편의성 향상",
              "가입 성공/실패에 따른 즉각적인 모달 피드백 제공으로 행동 유도",
              "회원가입 후 자동 이동 처리로 중단 없는 사용자 흐름 설계",
            ],
          },
          {
            title: "나의 대시보드",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "내가 생성한 대시보드, 소속된 대시보드, 초대받은 대시보드를 한눈에 관리할 수 있는 대시보드 개요 페이지입니다.",
              "초대받은 대시보드는 수락 여부에 따라 별도로 분리되어 표시되며, 각 영역은 디자인과 목적에 따라 무한스크롤 또는 페이지네이션 방식으로 구현돼 있습니다.",
              "'새로운 대시보드 생성' 기능으로 사용자는 이 페이지에서 바로 자신의 협업 공간을 추가로 만들 수 있으며, 각 대시보드 카드를 클릭하면 해당 대시보드의 상세 페이지로 진입할 수 있어 협업 중인 여러 공간을 유연하게 전환할 수 있습니다.",
              "데이터 통신은 axios와 useEffect 조합으로 구현되며, 직접적인 비동기 처리와 상태 관리를 수행합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/myDashboard.png",
            tech: ["axios", "TypeScript", "SCSS Modules"],
            ux: [
              "대시보드 유형별 구분과 페이징 방식 도입으로 정보 탐색의 직관성 향상",
              "직접 생성한 대시보드뿐 아니라 소속 및 초대된 대시보드까지 통합적으로 확인 가능",
              "대시보드 생성 진입점을 제공하여 사용자의 협업 공간 확장을 유도",
              "axios 기반 비동기적 상태 관리를 통해 충분한 성능과 안정성 확보",
            ],
          },
          {
            title: "대시보드 등록",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "‘나의 대시보드’ 페이지에서 접근 가능한 대시보드 생성 전용 모달 컴포넌트입니다.",
              "사용자가 입력한 대시보드 이름과 색상 정보를 axios를 통해 서버에 POST 요청으로 전송하여 새로운 대시보드를 생성합니다.",
              "대시보드 이름은 빈 값 방지를 위한 입력 유효성 검사를 진행하며, 색상 선택은 미리 정의된 색상 리스트 중 하나를 클릭해 지정할 수 있습니다. 색상이 선택되면 체크 아이콘이 표시되며, 이름과 색상이 모두 유효할 경우 ‘생성’ 버튼을 통해 대시보드가 실제로 생성되고 부모 컴포넌트에 반영됩니다.",
              "입력 및 상태 관리는 모두 해당 컴포넌트 내부에서 처리되며, 별도의 상태관리 라이브러리 없이도 독립적인 데이터 흐름이 완성된 구조입니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/createDashboard.png",
            tech: ["axios", "TypeScript", "SCSS Modules"],
            ux: [
              "대시보드 이름 입력과 색상 선택 과정을 직관적으로 구성하여 사용자 진입 장벽 최소화",
              "입력값 미충족 시 alert 처리로 필수 항목 누락 방지",
              "즉각적인 색상 선택 피드백과 체크 아이콘 제공으로 사용자의 현재 선택 상태 명확화",
              "모달 내에서 바로 대시보드 생성 가능해 페이지 이동 없이 빠른 워크플로우 제공",
            ],
          },
          {
            title: "대시보드 수정",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "이 페이지는 사용자가 대시보드의 핵심 정보를 관리하고 구성원을 효율적으로 운영할 수 있도록 설계된 관리 페이지입니다.",
              "현재 소속된 구성원과 초대 내역을 확인하여 구성원 삭제 및 초대 취소 기능을 통한 팀 관리가 가능하며, 초대 기능도 통합되어 있어 신규 구성원 초대가 용이합니다.",
              "모든 변경 사항은 즉각적으로 화면에 업데이트되어 사용자 경험의 연속성을 보장하고 있습니다.",
              "마지막으로, '대시보드 삭제' 기능으로 불필요한 대시보드를 손쉽게 제거할 수 있으며, 삭제 후에는 자동으로 메인 대시보드 목록으로 이동하여 자연스러운 작업 흐름을 유지합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/editDashboard.png",
            tech: ["axios", "TypeScript", "SCSS Modules"],
            ux: [
              "수정 사항이 즉시 반영되어 사용자 피드백 지연 없이 자연스러운 작업 흐름 제공",
              "대시보드 설정 내 다양한 관리 기능을 하나의 페이지에서 접근 가능하도록 통합",
              "삭제 완료 시 사용자 혼란을 줄이기 위한 리디렉션 처리로 UX 안정성 확보",
              "초대 및 취소가 직관적으로 이루어지며, 실시간 데이터 반영으로 신뢰도 향상",
            ],
          },
          {
            title: "대시보드 상세",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "특정 대시보드에 속한 컬럼과 해당 컬럼 내 메모들을 확인하고 관리할 수 있는 페이지입니다.",
              "대시보드 ID를 기반으로 API를 호출하여 해당 대시보드에 속한 컬럼들을 불러오고, 각 컬럼 내부에는 텍스트 및 이미지 기반의 메모들이 시각적으로 표시됩니다.",
              "각 컬럼은 독립적인 컴포넌트로 구성되어 있으며, 새로운 컬럼을 생성하는 기능도 제공됩니다. 생성은 전용 모달을 통해 컬럼명을 입력한 후 서버에 전송하여 처리됩니다.",
              "컬럼 삭제 기능 또한 지원되며, 삭제 시 현재 UI에서 즉시 반영됩니다.",
              "드래그 앤 드롭을 위한 `@hello-pangea/dnd` 라이브러리가 적용되어 있으나, 실제 드래그 이동 기능은 구현되지 않은 상태로 마무리되었습니다.",
              "axios + useEffect를 기반으로 API와 데이터 흐름을 제어합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/dashboardDetail.png",
            tech: ["axios", "@hello-pangea/dnd", "TypeScript", "SCSS Modules"],
            ux: [
              "컬럼 별 카드 형태로 메모를 구분해 가독성을 높이고 시각적인 작업 흐름 제공",
              "컬럼 추가/삭제 시 실시간으로 UI에 반영되어 사용자의 작업 피드백을 명확히 전달",
              "컬럼 생성을 위한 모달 도입으로 사용자 흐름을 해치지 않는 비동기 인터랙션 제공",
            ],
          },
          {
            title: "칼럼 등록 및 수정",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "새로운 칼럼을 생성하고 기존 칼럼명을 변경할 수 있는 기능을 제공합니다.",
              "사용자가 입력한 칼럼명을 서버로 POST 요청 보낸 후 리스트 및 변경사항을 실시간 반영하도록 구현 되었습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/createColumn.png",
            tech: ["axios", "TypeScript", "SCSS Modules"],
            ux: [
              "모달 기반 입력 UI를 통해 직관적인 칼럼 생성 및 수정 경험 제공",
              "서버 요청 후 즉시 리스트 업데이트로 사용자 피드백 향상",
            ],
          },
          {
            title: "카드 등록 및 수정",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "할 일 카드의 등록과 수정을 위한 모달 컴포넌트입니다.",
              "사용자는 제목, 설명, 마감일, 담당자, 태그, 이미지 등을 입력할 수 있으며, 필수 항목은 제목, 설명, 마감일, 담당자입니다.",
              "담당자는 현재 대시보드 멤버 중에서 선택할 수 있으며, 선택된 담당자는 프로필 이미지 또는 닉네임 첫 글자로 표시됩니다.",
              "태그 입력 시 Enter 키로 여러 태그를 추가할 수 있고, 이미지 업로드 기능도 포함되어 있습니다.",
              "마감일은 시간 단위까지 선택 가능한 데이트피커로 설정하며, 입력값 검증 후 서버에 카드 데이터를 전송합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/createCard.png",
            tech: ["axios", "react-datepicker", "TypeScript", "SCSS Modules"],
            ux: [
              "필수 입력값 검증을 통해 올바른 데이터 입력 유도",
              "담당자 선택 드롭다운으로 직관적인 멤버 지정",
              "태그 입력 시 엔터키로 쉽게 추가 가능",
              "이미지 업로드로 시각적 정보 보완",
              "모달 오픈 시 배경 스크롤 차단으로 집중도 향상",
            ],
          },
          {
            title: "카드 상세",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "카드의 세부 정보를 확인하고 댓글을 관리할 수 있는 모달입니다.",
              "카드 제목, 설명, 태그, 담당자 정보, 마감일, 첨부 이미지 등 모든 카드 관련 데이터를 직관적으로 확인할 수 있습니다.",
              "담당자는 이름 또는 프로필 이미지로 표시되며, 마감일과 함께 레이아웃 우측에 시각적으로 구분됩니다.",
              "댓글 목록은 서버에서 조회되며, 새로운 댓글 작성 시 서버에 전송 후 목록이 실시간으로 갱신되도록 구현했습니다.",
              "카드 수정 버튼을 통해 별도의 수정 모달(TaskEditModal)을 열 수 있으며, 수정 후 상세 정보가 즉시 반영됩니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/cardDetail.png",
            tech: ["axios", "TypeScript", "SCSS Modules"],
            ux: [
              "모달 내부 클릭 시 외부 닫힘 방지 및 포커스 유지",
              "카드 정보 수정 시 즉시 반영되는 데이터 흐름",
              "댓글 작성 후 실시간 목록 갱신을 통한 인터랙션 강화",
              "담당자 및 마감일 섹션을 별도로 분리하여 정보 명확성 향상",
              "스크롤 차단을 통한 집중도 높은 사용자 경험",
            ],
          },
          {
            title: "계정 관리",
            implementedByMe: false,
            contributionPercent: 45,
            contributionDetails: [
              "반응형 레이아웃 및 모바일 UI 구성",
              "렌더링 오류로 인한 페이지 진입 불가 현상 해결",
              "닉네임·프로필 이미지 수정 기능 정상화 및 저장 버튼 활성화 조건 추가",
            ],
            contributionNote: true,
            description: [
              "계정 관리 페이지는 사용자가 자신의 계정 정보를 관리할 수 있는 공간으로, 프로필 수정 및 비밀번호 변경 기능을 제공합니다.",
              "프로필 수정 섹션에서는 사용자의 닉네임과 프로필 이미지를 변경할 수 있으며, 이는 실시간 반영됩니다.",
              "비밀번호 변경은 별도의 입력 검증 로직과 함께 구성되어 있어 보안과 사용성을 동시에 고려한 설계가 적용되어 있습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/taskify/mypage.png",
            tech: ["TypeScript", "SCSS Modules"],
            ux: [
              "모듈화된 컴포넌트 구조로 사용자 정보와 보안 정보를 분리하여 제공",
              "직관적인 UI를 통해 닉네임 및 프로필 이미지 수정 과정을 간소화",
              "이메일 및 비밀번호 변경 과정에서 명확한 피드백 제공",
              "‘돌아가기’ 버튼 제공으로 탐색 흐름의 유연성 확보",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    projectName: "Rolling",
    featureGroups: [
      {
        groupName: "공통 UI",
        features: [
          {
            title: "Input",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "입력 상태에 따라 시각적 피드백이 제공되도록 설계된 `styled-components` 기반의 공통 입력 컴포넌트입니다.",
              "focus, disabled 등의 다양한 상태를 반영해 UX 향상을 도모하고, 플레이스홀더 색상 변화로 입력 흐름을 명확히 안내합니다.",
              "전역 변수를 활용하여 디자인 일관성과 유지보수성을 확보했습니다.",
              "모든 필드는 반응형 너비를 갖추고 있으며, padding 및 타이포그래피 설정을 통해 가독성과 조작성 모두 고려되었습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/rolling/input.svg",
            tech: ["Styled Components"],
            ux: ["상태 기반 시각 피드백", "접근성 향상", "디자인 일관성 유지"],
          },
          {
            title: "Button",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "재사용성과 디자인 일관성을 고려하여 `styled-components` 기반으로 구현된 공통 버튼 컴포넌트입니다.",
              "버튼 크기(`small`, `default`)와 상태(hover, active, focus, disabled)에 따라 동적으로 스타일이 적용되도록 설계되었습니다.",
              "모든 버튼은 중앙 정렬 및 반응형 패딩을 제공하며, 주요 색상은 전역 CSS 변수로 관리되어 유지보수가 용이합니다.",
              "button 디렉토리 내에서 다양한 상황에 맞는 버튼 변형들이 함께 정의되어 있어 유연한 UI 개발이 가능합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/rolling/button.svg",
            tech: ["Styled Components"],
            ux: ["접근성 고려", "상호작용 피드백 제공", "디자인 일관성 유지"],
          },
          {
            title: "Toast",
            implementedByMe: false,
            contributionPercent: 75,
            contributionDetails: [
              "미완성 상태였던 스타일링을 마무리하고, 반응형 대응을 포함하여 토스트 컴포넌트의 UI를 완성함",
              "전역적으로 사용할 수 있도록 구조를 단순화하고, 다양한 페이지에서 손쉽게 호출 가능한 형태로 재사용성을 개선함",
            ],
            contributionNote: false,
            description: [
              "URL 복사와 같은 사용자 액션에 대한 피드백을 전달하기 위해 제작된 공통 Toast 컴포넌트입니다.",
              "정중앙 하단 고정 위치에 자연스럽게 등장하며, 체크 아이콘과 텍스트를 함께 배치해 직관성을 높였습니다.",
              "반응형 설계를 통해 모바일 환경에서도 가독성과 위치 정렬이 유지되며, 배경 투명도와 그림자 효과로 시인성을 확보했습니다.",
              "클로즈 버튼을 통해 사용자 조작으로도 종료가 가능하도록 UX를 배려하였고, 다크 배경에 화이트 텍스트 대비를 적용하여 접근성을 향상시켰습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/rolling/toast.svg",
            tech: ["Styled Components"],
            ux: [
              "즉각적 피드백 제공",
              "반응형 대응",
              "접근성 고려",
              "재사용성 최적화",
            ],
          },
        ],
      },
      {
        groupName: "페이지별 기능",
        features: [
          {
            title: "랜딩",
            implementedByMe: false,
            contributionPercent: 50,
            contributionDetails: [
              "반응형 레이아웃 구현을 지원해 모바일과 데스크탑 전반의 화면 안정성을 확보함",
            ],
            contributionNote: false,
            description: [
              "서비스의 첫 진입점으로, 사용자가 롤링페이퍼 작성 기능에 자연스럽게 접근할 수 있도록 유도하는 역할을 합니다.",
              "기초적인 서비스 소개와 함께 사용 흐름을 안내하는 구성으로 되어 있으며, 시각적 집중을 위한 간결한 레이아웃으로 설계되었습니다.",
              "반응형 대응을 통해 모바일 및 데스크탑 환경에서 콘텐츠가 흐트러지지 않도록 최적화되어 있습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/rolling/landing.png",
            tech: ["Styled Components"],
            ux: ["간결한 진입 구조", "반응형 최적화", "이용 유도 중심 구성"],
          },
          {
            title: "롤링페이퍼 목록",
            implementedByMe: true,
            contributionPercent: 100,
            contributionNote: false,
            description: [
              "롤링페이퍼 서비스를 탐색할 수 있는 대표적인 진입점으로, 사용자들이 인기 롤링페이퍼와 최근 작성된 롤링페이퍼를 각각의 섹션에서 쉽게 찾아볼 수 있도록 구성하였습니다.",
              "두 섹션 모두 카드 형태의 슬라이드 방식으로 구성되어 있으며, slick-carousel 라이브러리를 이용해 한 번에 하나의 카드가 이동하도록 설정해 자연스럽고 직관적인 사용자 경험을 제공했습니다.",
              "각 롤링페이퍼 카드는 썸네일 이미지, 제목, 작성자 정보를 포함하고 있으며, 클릭 시 해당 롤링페이퍼의 상세 페이지로 이동되도록 구현되어 콘텐츠 접근성을 높였습니다.",
              "섹션 간 시각적 구분과 인터랙션 효과, 전체적인 콘텐츠 배치와 구성 흐름을 고려하여 UI/UX 흐름을 직접 설계하고 구현하였으며, 데스크톱과 모바일 환경 모두에서 콘텐츠가 안정적으로 보이도록 레이아웃을 조정했습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/rolling/rolling.png",
            tech: ["slick-carousel", "Javascript", "Styled Components"],
            ux: [
              "카드 슬라이드 인터랙션",
              "섹션 기반 콘텐츠 탐색",
              "반응형 콘텐츠 레이아웃",
            ],
          },
          {
            title: "롤링페이퍼 등록",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "사용자가 새 롤링페이퍼를 생성할 수 있는 페이지로, 받는 사람의 이름과 배경 스타일을 선택하여 간편하게 롤링페이퍼를 등록할 수 있도록 구성되었습니다.",
              "배경은 이미지 또는 컬러 중 하나를 선택하는 방식이며, 제공된 컬러 팔레트와 이미지 샘플 중에서 원하는 테마를 클릭하여 선택하는 직관적인 인터페이스를 제공합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/rolling/createRolling.png",
            tech: ["JavaScript", "Styled Components"],
            ux: [
              "컬러 및 이미지 선택 인터랙션",
              "실시간 테마 미리보기",
              "간편한 등록 플로우",
            ],
          },
          {
            title: "롤링페이퍼 상세",
            implementedByMe: true,
            contributionPercent: 40,
            contributionDetails: [
              "상단 헤더 영역의 전반적인 UI 구성 및 스타일링을 맡아, 사용자 경험 흐름에 맞는 레이아웃과 인터랙션을 설계",
              "이모지 감정 표현 기능 구현으로 사용자 참여도를 높이는 인터랙션 제공",
              "카카오톡 공유 및 URL 복사 기능을 구현하여, 소셜 공유 경로를 다양화하고 접근성을 향상시킴",
            ],
            contributionNote: false,
            description: [
              "개별 롤링페이퍼의 상세 내용을 확인할 수 있는 페이지로, 해당 페이지 상단에는 사용자 감정 표현을 위한 이모지 리액션 기능이 구현되어 있습니다.",
              "기본 제공되는 여러 종류의 이모지 중 하나를 클릭하면 해당 감정 표현에 대한 카운트가 올라가는 구조로, 소셜 피드백처럼 자연스러운 사용자 반응을 유도합니다.",
              "또한 카카오 공유 API와 URL 복사 기능을 통해 타인에게 롤링페이퍼를 쉽게 전달할 수 있도록 구성되어 있어, 콘텐츠 확산을 지원합니다.",
              "페이지 하단에는 해당 롤링페이퍼에 등록된 메시지들이 무한 스크롤 방식으로 출력되며, 각 메시지를 클릭 시 모달 형태로 상세 내용을 확인할 수 있습니다.",
              "개별 메시지 삭제뿐 아니라, 전체 롤링페이퍼 삭제 기능도 함께 제공되어 사용자에게 콘텐츠 관리의 자율성을 부여합니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/rolling/rollingDetail.png",
            tech: ["Kakao Share API", "JavaScript", "Styled Components"],
            ux: [
              "이모지 기반 감정 표현 인터랙션",
              "카카오 공유 및 URL 복사 기능",
              "무한스크롤 메시지 렌더링 및 모달 뷰",
              "삭제 기능을 통한 콘텐츠 관리 지원",
            ],
          },
          {
            title: "롤링페이퍼 메시지 등록",
            implementedByMe: false,
            contributionPercent: 0,
            contributionNote: false,
            description: [
              "롤링페이퍼에 메시지를 등록하는 페이지로, 보내는 사람의 이름, 프로필 이미지, 상대와의 관계, 메시지 내용, 그리고 사용할 폰트를 선택할 수 있습니다.",
              "프로필 이미지와 폰트는 기본 제공된 리스트 중에서 선택할 수 있으며, 모든 입력값이 유효할 때에만 등록 버튼이 활성화되도록 구성되어 있습니다.",
              "텍스트 중심의 입력 UI에 감성적 시각 요소를 결합해, 사용자 맞춤형 메시지를 직관적으로 작성할 수 있도록 설계되었습니다.",
            ],
            image:
              "/images/projects/detail/frontend/features/rolling/sendMessage.png",
            tech: ["JavaScript", "Styled Components"],
            ux: [
              "필수 입력 완료 시 등록 버튼 활성화",
              "직관적이고 감성적인 프로필 이미지 및 폰트 선택 UI",
              "간결하고 명확한 입력 폼으로 편리한 메시지 작성 지원",
            ],
          },
        ],
      },
    ],
  },
];
