export const frontendTechStackData = [
  {
    id: 1,
    projectName: "Albaform",
    techStackGroups: [
      {
        groupName: "Tech Stack Choice",
        techStack: [
          {
            title: "Next.js App Router",
            description: `최신 Next.js의 App Router 구조를 실무에 적용해보고자 도입했습니다.
단순한 정적 페이지 구성이 아닌, 다양한 사용자 역할(Role)에 따른 UI 분기, 인증 흐름, 서버 상태 연동 등 복잡한 라우팅 시나리오를 직접 설계해보는 것이 이번 프로젝트의 중요한 목표 중 하나였습니다.
라우트 단위의 레이아웃 구성, 역할별 UI 분리, 서버 컴포넌트와 클라이언트 컴포넌트의 책임 분리 등 실서비스 수준에서 유지보수성과 확장성을 고려한 구조 설계를 중점적으로 구현했습니다.

또한, 전역 상태 관리나 메타데이터 구성 같은 공통 요소들을 레이아웃에 통합함으로써 반복적인 코드 작성을 줄이고 역할 분리를 명확히 했습니다.`,
            titleColor: "text-cyan-400",
          },
          {
            title: "React Query",
            description: `서버 상태 관리를 위해 React Query를 도입했습니다.
클라이언트에서 직접 상태를 관리하는 방식보다 비동기 데이터 흐름을 명확하게 제어할 수 있다는 점에서 큰 이점을 느꼈습니다.

특히 데이터 캐싱, 로딩 및 에러 핸들링, 무한 스크롤 구현 등의 측면에서 유용했으며,
댓글 무한스크롤, 등록 후 자동 refetch, 사용자 정보 요청 및 상태 유지 등 실서비스에 가까운 다양한 시나리오를 간결하고 안정적으로 구현할 수 있었습니다.

실사용자 경험을 고려해 불필요한 요청을 최소화하고 상태를 정확히 동기화하는 데 집중하여 React Query의 mutation 기능을 통해 댓글 등록, 정보 수정 등 사용자 상호작용을 처리했습니다.

invalidateQueries를 활용해 최신 데이터를 자동으로 반영하고, onSuccess를 이용한 즉각적인 UI 반영과 사용자 피드백 제공으로 더욱 매끄럽고 반응성 높은 UX를 구현할 수 있었습니다.`,
            titleColor: "text-yellow-400",
          },
          {
            title: "Zustand",
            description: `전역 상태 관리 라이브러리로는 Redux와 고민했지만, 프로젝트 규모와 일정상 보다 간단하고 빠르게 적용할 수 있는 Zustand를 선택했습니다.
전체 전역 상태가 복잡하지 않고, 주로 로그인 여부와 사용자 역할 관리 등 최소한의 상태만 필요했기 때문에 불필요한 보일러플레이트 없이 직관적으로 구현할 수 있는 점이 큰 장점이었습니다.
실서비스 환경에서도 충분히 활용 가능한 구조로, 컴포넌트 간 상태 공유와 UI 제어를 효율적으로 처리했습니다.`,
            titleColor: "text-purple-400",
          },
          {
            title: "React Hook Form",
            description: `복잡한 폼 관리를 위해 React Hook Form을 도입했습니다.
가볍고 성능이 뛰어나며, 불필요한 리렌더링을 최소화해 사용자 경험을 개선할 수 있었습니다.
또한, Tailwind CSS와도 자연스럽게 결합되어 빠른 UI 구성과 함께 안정적인 유효성 검사 및 에러 핸들링이 가능했습니다.`,
            titleColor: "text-fuchsia-400",
          },
          {
            title: "Tailwind CSS",
            description: `이번 프로젝트에서는 Tailwind CSS를 사용했습니다.
팀원 대부분에게는 처음 접하는 기술이었지만,
최근 프론트엔드 생태계에서 널리 사용되는 만큼 직접 경험해보고 싶었습니다.

기존의 CSS 방식이나 CSS-in-JS보다 빠르고 직관적인 스타일링이 가능했고, 반응형 UI, 다크모드, 커스텀 디자인 구현에서도 효율적으로 대응할 수 있었습니다.

개발 초기에는 클래스 네이밍 방식에 적응이 필요했지만 구성 요소별 스타일이 컴포넌트 내부에 모여 있어 유지보수성과 재사용성이 높았고, 협업 시에도 명확하게 소통할 수 있었습니다.
더불어, PostCSS나 Sass 같은 별도 설정 없이도 생산적인 개발 환경을 만들 수 있어 짧은 개발 기간 내에서 일관된 UI를 빠르게 구성하는 데 큰 도움이 되었습니다.`,
            titleColor: "text-emerald-400",
          },
        ],
      },
      {
        groupName: "Directory Architecture",
        directory: `/src
├── 📂 app
│   └── 📂 albaform                   # 알바폼 관련 페이지 루트
│       ├── 📄 page.tsx               # 공통 페이지 (예: 목록)
│       ├── 📂 components             # 공통 컴포넌트
│       ├── 📂 [id]                   # 공통 상세 페이지 (Owner/Applicant 공용)
│       ├── 📂 owner                  # 채용자 전용 페이지
│       │   ├── 📄 page.tsx
│       │   └── 📂 components
│       └── 📂 applicant              # 지원자 전용 페이지
│           ├── 📄 page.tsx
│           └── 📂 components
│
├── 📂 components                     # 전역 공통 컴포넌트
├── 📂 hooks                          # 커스텀 훅 모음
├── 📂 lib                            # 외부 API, axios 등 클라이언트 설정
├── 📂 styles                         # 전역 스타일 (Tailwind, GlobalStyle 등)
├── 📂 types                          # 타입 정의 (interface, enum 등)
├── 📂 utils                          # 공통 유틸 함수
├── 📂 schemas                        # Zod 스키마, 폼 유효성 로직
└── 📄 page.tsx                       # 앱 진입점`,
      },
    ],
  },
];
