import { TechStack } from "@/types/projects";

export const frontendTechStackData: TechStack[] = [
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

'invalidateQueries'를 활용해 최신 데이터를 자동으로 반영하고, 'onSuccess'를 이용한 즉각적인 UI 반영과 사용자 피드백 제공으로 더욱 매끄럽고 반응성 높은 UX를 구현할 수 있었습니다.`,
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
        description: `실제 서비스 환경을 가정하여, 채용자(Owner)와 지원자(Applicant)의 UI 및 흐름 차이를 명확히 반영하기 위해 역할별로 분리했습니다. 이렇게 분리함으로써 유지보수성을 높이고, 협업 과정에서 컴포넌트 간 의존성을 최소화하여 효율적인 개발이 가능하도록 설계했습니다.`,
        directory: `📂 src
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
  {
    id: 2,
    projectName: "PandaMarket",
    techStackGroups: [
      {
        groupName: "Tech Stack Choice",
        techStack: [
          {
            title: "Next.js Page Router",
            description: `초기에는 React JavaScript 환경에서 프로젝트를 시작했으며, 로그인/회원가입의 기능 구현이 어느 정도 완료된 시점부터 Next.js로 점진적으로 마이그레이션을 진행했습니다.  
Next.js 도입을 통해 SEO 대응, 페이지 단위의 라우팅 최적화, 정적 자원 관리 등의 이점을 누릴 수 있었고, 이를 통해 더 나은 사용자 경험과 성능 개선을 도모했습니다.

마이그레이션 과정에서는 Page Router 기반으로 구조를 잡았으며, 이후 App Router로의 전환도 고려했지만 실무에서 기존 Page Router 기반의 레거시 프로젝트 유지보수를 맡게 될 가능성도 고려해, Page Router 환경에 대한 이해도를 높이고자 그대로 유지하며 프로젝트를 완성했습니다.`,
            titleColor: "text-lime-400",
          },
          {
            title: "React Query",
            description: `React Query는 처음에는 학습 목적에서 도입했지만, 사용하면서 실무에서도 매우 유용하다는 점을 체감하게 되었습니다. 
직접 사용해보니, 특히 'query key'를 활용한 자동 'invalidation'을 통해 변경된 데이터를 실시간으로 화면에 반영할 수 있는 점이 매우 편리하다고 느꼈습니다.

초기에는 REST API 호출 이후 수동으로 다시 GET 요청을 보내는 방식으로 변경사항을 반영했지만, React Query를 도입하면서 불필요한 네트워크 요청과 상태 관리의 번거로움을 크게 줄일 수 있었습니다.

이 경험을 통해 React Query의 구조와 장점에 대해 자연스럽게 이해하게 되었고, 캐싱 전략이나 비동기 흐름에 대한 이해도 함께 높일 수 있었습니다.`,
            titleColor: "text-fuchsia-400",
          },
          {
            title: "CSS Modules",
            description: `스타일링은 가장 기본적인 UI 구성 요소인 만큼, 클래스 네이밍 충돌에 대한 고민은 프로젝트 초반부터 자연스럽게 들었습니다.  
CSS Modules는 로컬 범위 클래스 네이밍을 지원해 이러한 충돌 문제를 효과적으로 방지할 수 있기 때문에 선택하게 되었고,  
별도의 세팅 없이도 간단하게 적용할 수 있어 빠르게 프로젝트에 녹여낼 수 있었습니다.

특히 컴포넌트 단위 개발을 할 때 각 컴포넌트에 독립적인 스타일을 유지할 수 있다는 점에서 생산성과 유지보수 측면 모두에 도움이 되었습니다.`,
            titleColor: "text-rose-400",
          },
        ],
      },
      {
        groupName: "Directory Architecture",
        description: `이 프로젝트는 역할별로 디렉토리를 구분한 기능 중심의 구조로 설계되었습니다. components, api, hooks, context, utils 등은 각 기능의 책임에 따라 모듈화하여 유지 보수성과 확장성을 높였고, types를 별도로 분리해 타입 일관성과 재사용성을 확보했습니다.`,
        directory: `📂 PandaMarket
├── 📂 public
│   ├── 📂 assets               # 이미지, 폰트 등 정적 파일 및 메타 태그와 파비콘 관련 파일 모음
├── 📂 src
│   ├── 📂 api                 # Axios API 요청
│   ├── 📂 components          # 재사용 가능한 UI 컴포넌트 및 페이지 작업 컴포넌트
│   ├── 📂 context             # 전역 Provider 관리
│   ├── 📂 hooks               # react-query 훅 모음
│   ├── 📂 pages               # 각 페이지별 컴포넌트
│   ├── 📂 types               # 타입 모음
│   ├── 📂 utils               # 유틸리티성 함수 및 커스텀 훅 모음
│   📂 styles                  # Global Reset Styled
│   📄 package-lock.json        # 정확한 종속성 버전이 기록된 파일로, 일관된 빌드를 보장
│   📄 package.json             # 프로젝트 종속성 및 스크립트 정의
├── 📄 .gitignore               # Git 무시 파일 목록
└── 📄 README.md                # 프로젝트 개요 및 사용법`,
      },
    ],
  },
  {
    id: 3,
    projectName: "GlobalNomad",
    techStackGroups: [
      {
        groupName: "Tech Stack Choice",
        techStack: [
          {
            title: "Next.js App Router",
            description: `이전까지 진행한 프로젝트에서는 Next.js의 Page Router만을 사용해봤던 팀원이 대부분이었기 때문에, 보다 최신의 개발 방식을 경험해보기 위해 App Router 기반으로 프로젝트를 기획하고 주도적으로 적용했습니다.

App Router는 서버 컴포넌트, 파일 기반 라우팅, 레이아웃 분리 등 기존 방식과는 다른 패러다임을 제공하기 때문에, 실제로 사용해보며 학습 곡선을 체감하고 이를 팀원들과 공유하는 과정 자체로 좋은 학습 기회가 되었습니다.

또한 프로젝트 구조나 데이터 fetching 방식에 대해 보다 유연하고 체계적인 구성 경험을 할 수 있었으며,  
이를 통해 개인은 물론 팀 전체의 기술 폭을 넓힐 수 있었다고 생각합니다.`,
            titleColor: "text-orange-400",
          },
          {
            title: "React Query",
            description: `해당 프로젝트에서는 React Query 사용이 암묵적으로 전제된 상태에서 개발을 시작하게 되었기 때문에 처음에는 사용법 자체를 익히는 데 집중해야 했습니다.  

React Query의 기본 개념과 흐름, 특히 'query key'와 'invalidateQueries'를 활용한  
데이터 동기화 방식에 익숙해지기까지 시간이 걸렸지만, 직접 CRUD 기능을 구현하며 반복적으로 사용하다 보니 자연스럽게 학습할 수 있었고 실시간 UI 갱신이나 전역 상태 캐싱의 편리함도 체감할 수 있었습니다.

이 프로젝트는 React Query의 실제 적용 경험을 쌓고 단순한 API 호출 도구를 넘어 데이터 흐름을 체계적으로 다루는 툴로서의 가치를 이해하게 된 계기가 되었습니다.`,
            titleColor: "text-teal-400",
          },
          {
            title: "CSS Modules",
            description: `당시 팀원 대부분이 아직 Tailwind CSS에 익숙하지 않았고, 프로젝트 구조나 데이터 흐름 구현 등 학습할 부분이 많은 상황이었습니다. 그런 만큼, 스타일링만큼은 가장 익숙하고 안정적인 방식으로 처리하고자 CSS Modules를 선택했습니다.

CSS Modules는 클래스 이름 중복을 방지하면서도 일반 CSS처럼 작성할 수 있어  
초기 진입장벽이 낮고 팀원 간 협업에도 적합했습니다.  
디자인 완성도보다는 기능 구현과 학습 효율을 우선시한 기술 선택이었습니다.`,
            titleColor: "text-sky-400",
          },
          {
            title: "Storybook",
            description: `공통 컴포넌트의 재사용성과 관리 효율성을 높이기 위해 Storybook을 도입했습니다.  
개별 컴포넌트를 독립적으로 구현하고 시각적으로 확인하며, UI 개발 경험을 확장하는 것을 목표로 삼았습니다.`,
            titleColor: "text-purple-400",
          },
        ],
      },
      {
        groupName: "Directory Architecture",
        description: `이번 프로젝트의 디렉토리 구조는 각 폴더와 파일의 역할을 명확히 구분하여 유지보수와 확장성에 중점을 두고 설계했습니다.
핵심 소스코드는 'src' 폴더에 모아 프로젝트의 전반적인 구조를 깔끔하게 유지하였으며, Next.js의 App Router 규칙에 따라 페이지별로 폴더를 나누어 라우팅과 코드가 직관적으로 연결될 수 있도록 하였습니다. 재사용되는 컴포넌트는 'components' 폴더에 별도로 모아 관리했고, API 요청 함수는 'src/api'에 집중시켜 각 영역별로 코드가 한눈에 들어올 수 있게 구성했습니다.

또한 상태관리, 커스텀 훅, 유틸리티 함수 등은 그 역할에 따라 각각 분리하여 코드의 재사용성과 유지보수성을 높였습니다.
마지막으로 설정 파일, 스타일, 타입 정의 등은 별도의 폴더로 분리하여 관리 효율성을 더욱 강화한 점도 이 구조의 특징입니다.`,
        directory: `📂 GLOBALNOMAD
├── 📂 .github                        # GitHub 관련 파일 (예: 워크플로우, 이슈 템플릿)
├── 📂 .storybook                     # Storybook 설정 및 구성 파일
├── 📂 node_modules                   # npm 패키지 모듈 저장소
├── 📂 public                         # 정적 파일 저장소 (예: 이미지, 폰트)
├── 📂 src                            # 소스 코드 디렉토리
│   ├── 📂 api                        # API 요청 관련 함수들
│   ├── 📂 app                        # Next.js App Router 구조
│   │   ├── 📂 (auth)                 # 인증 관련 페이지 및 기능
│   │   ├── 📂 activities             # 액티비티 상세 페이지
│   │   │   └── 📂 [id]               # 액티비티 개별 상세 (동적 라우팅)
│   │   ├── 📂 landingComponents      # 랜딩 페이지 관련 컴포넌트 모음
│   │   ├── 📂 myactivities           # 내 활동 페이지
│   │   ├── 📂 mynotification         # 알림 관련 페이지
│   │   ├── 📂 mypage                 # 마이페이지
│   │   ├── 📂 myreservation          # 예약 관련 페이지
│   │   └── 📂 postMyActivity         # 액티비티 등록 페이지
│   ├── 📂 utils                      # 공통 유틸리티 함수들
│   ├── 📄 ClientLayout.tsx           # 클라이언트 전용 레이아웃 컴포넌트
│   ├── 📄 layout.tsx                 # 루트 레벨 레이아웃 설정
│   └── 📄 page.tsx                   # 루트 메인 페이지
├── 📂 components                     # 프로젝트 전역 재사용 컴포넌트
├── 📂 constants                      # 상수 정의 파일 모음
├── 📂 hooks                          # 커스텀 훅 모음
├── 📂 lib                            # 외부 라이브러리, 헬퍼 함수 모음
├── 📂 stores                         # 상태관리 (예: Zustand, Redux 등)
├── 📂 stories                        # Storybook 스토리 파일
├── 📂 styles                         # 글로벌 스타일 파일 (CSS, SCSS)
├── 📂 types                          # TypeScript 타입 정의
├── 📂 utils                          # 유틸리티 함수 (src/utils와 다를 경우 확인 필요)
├── 📄 README.md                      # 프로젝트 개요 및 설명
├── 📄 tsconfig.json                  # TypeScript 설정 파일
└── 📄 vitest.config.ts               # Vitest 테스트 설정 파일`,
      },
    ],
  },
  {
    id: 4,
    projectName: "Taskify",
    techStackGroups: [
      {
        groupName: "Tech Stack Choice",
        techStack: [
          {
            title: "Next.js Page Router",
            description: `특별히 Page Router를 선택한 배경이라기보다는, 타입스크립트를 학습하며 자연스럽게 Next.js와 함께 사용하게 된 흐름이었습니다. App Router가 이미 존재했지만, 당시에는 이를 고려하거나 경험할 여유가 없었기에 익숙한 Page Router를 활용하는 것이 가장 합리적이라고 판단했습니다.

이 과정을 통해 Next.js의 기본 라우팅 방식과 타입스크립트와의 호환성, 안정성을 직접 경험할 수 있었고, 프로젝트 진행에 적합하다고 판단해 그대로 적용하게 되었습니다.`,
            titleColor: "text-rose-400",
          },
          {
            title: "SCSS (CSS Modules)",
            description: `SCSS(CSS Modules)는 팀 내에서 공식적으로 결정한 사항은 아니었지만, 한 명이 SCSS를 사용하기 시작하면서 자연스럽게 팀 전체가 맞춰 사용하게 되었습니다. 덕분에 스타일 작성 시 모듈화와 변수 활용, 중첩 등의 SCSS 장점을 경험할 수 있었고, 코드 일관성 유지에도 도움이 되었습니다. 앞으로는 팀 차원의 스타일 가이드 협의를 통해 좀 더 체계적인 방식으로 발전시켜 나가고자 합니다.`,
            titleColor: "text-yellow-400",
          },
        ],
      },
      {
        groupName: "Directory Architecture",
        description: `이 프로젝트는 Next.js의 자동 라우팅 특성을 살려 pages 폴더에 기능별 페이지를 나누어 직관적으로 관리했습니다. 정적 자원은 public에 모아 편리하게 참조할 수 있도록 했고, 실제 코드들은 src 폴더 안에서 API, 컴포넌트, 훅, 타입 등 역할에 따라 분리해 유지보수와 재사용성을 높였습니다. 전역 스타일과 타입 선언도 별도 폴더로 관리해 코드의 일관성과 관리 편의성을 도모한 구조입니다.
역할 중심으로 깔끔하게 나눈 디렉토리 구조가 협업과 확장에 유리하다고 판단해 이처럼 설계되었습니다.`,
        directory: `📂 Taskify
├── 📂 pages                  # Next.js 라우팅을 담당하는 폴더 (자동 라우팅됨)
│   ├── 📂 dashboard          # 대시보드 관련 페이지
│   ├── 📂 login              # 로그인 페이지
│   ├── 📂 mypage             # 마이페이지 (사용자 정보, 설정 등)
│   ├── 📂 signup             # 회원가입 페이지
│   ├── 📄 _app.tsx            # 커스텀 App 컴포넌트, 전역 스타일/Provider 설정
│   ├── 📄 _document.tsx       # 커스텀 Document, HTML 구조 커스터마이징
│   └── 📄 index.tsx           # 루트 페이지 (메인 홈 화면)
│
├── 📂 public                 # 정적 파일을 두는 곳 (이미지, 아이콘 등)
│   ├── 📂 icons              # 아이콘 파일들
│   ├── 📂 images             # 이미지 파일들
│   └── 📄 favicon.ico         # 사이트 파비콘
│
├── 📂 src                    # 실제 소스 코드들이 들어있는 핵심 디렉토리
│   ├── 📂 api                # API 호출 함수들 (fetch, axios 등)
│   ├── 📂 components         # 재사용 가능한 UI 컴포넌트들
│   ├── 📂 contexts           # React Context API 관련 설정
│   ├── 📂 hooks              # 커스텀 훅 모음
│   ├── 📂 lib                # 유틸성 함수, 외부 라이브러리 래퍼 등
│   ├── 📂 types              # 타입 정의 (TypeScript 인터페이스/타입)
│
├── 📄 global.d.ts             # 전역 타입 선언 파일
│
└── 📂 styles                 # 전역 스타일, 공통 CSS 또는 styled-components 설정 등`,
      },
    ],
  },
  {
    id: 5,
    projectName: "Rolling",
    techStackGroups: [
      {
        groupName: "Tech Stack Choice",
        techStack: [
          {
            title: "React",
            description: `이 프로젝트는 React에 익숙해지기 위한 학습 중심의 첫 과제였습니다. 당시에는 Next.js를 접하기 전이었고, 순수 JavaScript 학습 이후 React를 활용한 프로젝트 경험을 쌓기 위해 진행한 실습 성격의 프로젝트였습니다.
학습 과정의 연장선에서 자연스럽게 사용하게 되었고, 컴포넌트 기반 개발 방식과 상태 관리에 대한 이해를 넓히는 데 집중했습니다.`,
            titleColor: "text-emerald-400",
          },
          {
            title: "CSS Modules",
            description: `기존 CSS에 익숙했던 만큼 진입 장벽이 낮아 동적 스타일링이 필요 없는 단순한 레이아웃 구성에는 가장 효율적인 선택이었습니다. 컴포넌트 단위로 클래스를 분리해 관리할 수 있어 코드의 가독성과 유지보수에도 도움이 되었습니다.`,
            titleColor: "text-amber-400",
          },
          {
            title: "Styled Components",
            description: `CSS Modules만으로는 어려웠던 동적 스타일링이나 변수를 활용한 테마 관리 등을 적용하기 위해 선택한 방식입니다. 컴포넌트 단위로 스타일을 관리할 수 있어 코드의 응집도가 높아지고, 자바스크립트 문법을 그대로 활용할 수 있다는 점도 학습 및 개발 측면에서 큰 장점이었습니다.`,
            titleColor: "text-cyan-400",
          },
        ],
      },
      {
        groupName: "Directory Architecture",
        description: `이 프로젝트의 디렉토리 구조는 각 기능과 역할에 따라 명확하게 구분하여 설계했습니다.
정적 자원과 템플릿 파일은 별도의 공간에 모아 관리해 접근성과 유지보수성을 높였고, 핵심 소스 코드는 기능별로 분리하여 개발 효율을 극대화했습니다. UI 컴포넌트와 페이지를 구분해 재사용성과 가독성을 강화했고, API 호출, 커스텀 훅, 상수, 유틸리티 함수 등은 각각 독립적인 영역으로 분리해 역할과 책임을 명확히 하였습니다.
또한 전역 스타일과 진입점 코드를 분리해 프로젝트 전반의 일관성과 구조적 명확성을 유지할 수 있도록 했습니다.`,
        directory: `📂 Rolling
├── 📂 public
│   ├── 📂 meta                 # 메타 태그와 파비콘 관련 파일 모음
│   └── 📄 index.html           # HTML 템플릿 파일
├── 📂 src
│   ├── 📂 assets               # 이미지, 폰트 등 정적 파일
│   ├── 📂 components           # 재사용 가능한 UI 컴포넌트 및 페이지 작업 컴포넌트
│   ├── 📂 constant             # 공통적으로 사용하는 상수 모음
│   ├── 📂 hooks                # 커스텀 훅 모음
│   ├── 📂 pages                # 각 페이지별 컴포넌트
│   ├── 📂 services             # API
│   ├── 📂 styles               # Global Reset Styled
│   ├── 📂 utils                # 페이지네이션, 유효성 검사 등
│   ├── 📄 App.js               # 메인 애플리케이션 컴포넌트
│   ├── 📄 index.js             # 엔트리 포인트 파일
└── 📄 README.md                # 프로젝트 개요 및 사용법`,
      },
    ],
  },
];
