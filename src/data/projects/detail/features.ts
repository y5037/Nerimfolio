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
              "/images/projects/detail/frontend/features/albaform/apply.png",
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
              "/images/projects/detail/frontend/features/albaform/mypage.png",
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
];
