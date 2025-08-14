import { MarkupStylingData } from "@/types/projects";

export const markupStylingData: MarkupStylingData[] = [
  {
    id: 1,
    projectName: "Publishing Portfolio",
    markupStylingGroup: [
      {
        label: "SEMANTIC",
        title: "시맨틱 태그 사용 전략",
        desc: "섹션, 제목, 콘텐츠 구분에 시맨틱 태그를 사용하여 구조적 의미를 명확히 부여했습니다.\n각 섹션에는 id 값을 부여해 클릭 이벤트 시 해당 위치로 스크롤 이동이 가능하며, 이를 통해 섹션 식별이 용이하도록 구성했습니다.",
        color: "rgba(255,149,0,0.6)",
      },
      {
        label: "STYLE",
        title: "스타일 구조",
        descTable: [
          {
            category: "CSS 구조",
            detail:
              "재사용 가능한 외부 CSS 파일로 공통 스타일을 관리하며, 프로젝트별 필요에 따라 개별 스타일 파일로도 분리하여 유지보수를 용이하게 했습니다.",
          },
          {
            category: "네이밍",
            detail:
              "BEM(Block, Element, Modifier) 규칙을 준수하여 의미 기반의 클래스명을 사용했고, 언더바(_) 구분자를 활용한 클래스 네이밍을 적용했습니다.",
          },
        ],
        color: "rgba(168,85,247,0.6)",
      },
      {
        label: "IMAGE",
        title: "이미지 최적화",
        desc: "포트폴리오 내 썸네일, 로고, 목업 이미지는 PNG/JPG 형식을 최적 압축하여 사용했습니다.",
        color: "rgba(34,197,94,0.6)",
      },
      {
        label: "ANIMATION",
        title: "애니메이션 처리",
        desc: "Swiper.js를 활용한 슬라이드 전환 애니메이션과 jQuery 기반 mousewheel 라이브러리를 통해 원 페이지 내 상하 스크롤로 페이지 전환 효과를 적용했습니다.",
        color: "rgba(236,72,153,0.6)",
      },
    ],
  },
  {
    id: 2,
    projectName: "Becelo",
    markupStylingGroup: [
      {
        label: "SEMANTIC",
        title: "시맨틱 태그 사용 전략",
        desc: "이 프로젝트는 기존 PHP 기반 그누보드 시스템 위에서 작업했기 때문에, 각 기능별로 페이지가 분리되어 있었습니다.\n이런 구조적 특성 때문에 시맨틱 태그를 활용한 마크업이 제한적일 수밖에 없었지만, 사용자 접근성과 SEO를 고려하여 섹션 태그를 적절히 배치하려 노력했습니다.\n특히 각 섹션에 의미를 부여해 구조를 명확히 하려 했으며, 스크린 리더가 이해하기 쉽게 마크업을 구성하는 데 초점을 맞췄습니다.",
        color: "rgba(255,149,0,0.6)",
      },
      {
        label: "STYLE",
        title: "스타일 구조",
        descTable: [
          {
            category: "CSS 구조",
            detail:
              "스타일시트는 공통적으로 재사용 가능한 외부 CSS 파일과 페이지 별로 특화된 개별 스타일 파일로 체계적으로 분리해 관리했습니다. 이를 통해 유지보수성과 확장성을 높였으며, 프로젝트 특성상 페이지 단위로 스타일 적용이 용이하도록 구성했습니다.",
          },
          {
            category: "네이밍",
            detail:
              "CSS 클래스 네이밍은 언더바(_)를 활용해 의미 기반으로 명확하게 구분하였으며, 각 요소가 어떤 역할을 하는지 쉽게 파악할 수 있도록 신경 썼습니다.",
          },
        ],
        color: "rgba(168,85,247,0.6)",
      },
      {
        label: "IMAGE",
        title: "이미지 최적화",
        desc: "이미지는 프로젝트 내에서 용량 최적화를 기본으로 진행했으며, 별도의 지연 로딩 기능은 구현하지 않았습니다. 하지만 이미지 품질과 로딩 속도 사이의 균형을 맞추기 위해 적절한 포맷과 압축 방식을 사용했습니다.",
        color: "rgba(34,197,94,0.6)",
      },
      {
        label: "ANIMATION",
        title: "애니메이션 처리",
        desc: "애니메이션은 주로 jQuery 기반의 라이브러리를 활용해 구현했습니다. 슬라이드 쇼에는 swiper.js를 이용했으며, 사용자 경험을 고려해 자연스러운 커스텀 모션(예: 위에서 아래로 시간차를 두며 떨어지는 효과, 페이지 간 페이드 인/아웃 전환 효과 등)을 추가했습니다.",
        color: "rgba(236,72,153,0.6)",
      },
    ],
  },
  {
    id: 3,
    projectName: "Fansign",
    markupStylingGroup: [
      {
        label: "SEMANTIC",
        title: "시맨틱 태그 사용 전략",
        desc: "이 프로젝트는 시맨틱 태그 대신 div 태그를 기본으로 사용하면서, 의미 부여를 위해 클래스명에 BodyWrap, HeadWrap 등 구조를 명확히 나타내는 명칭을 사용했습니다. 이를 통해 HTML 구조의 가독성과 유지보수성을 어느 정도 확보하고자 했습니다.",
        color: "rgba(255,149,0,0.6)",
      },
      {
        label: "STYLE",
        title: "스타일 구조",
        descTable: [
          {
            category: "CSS 구조",
            detail:
              "리셋 CSS 파일을 기본으로 적용하고, 스타일 관련 외부 CSS 파일을 하나만 사용해 전체 스타일을 관리했습니다. 단일 파일로 관리함으로써 스타일 일관성을 유지하는 데 집중했습니다.",
          },
          {
            category: "네이밍",
            detail:
              "파스칼케이스(PascalCase)로 실제 구조와 역할을 쉽게 이해할 수 있는 직관적인 명칭을 사용하여 코드의 가독성과 유지보수성을 높였습니다.",
          },
        ],
        color: "rgba(168,85,247,0.6)",
      },
      {
        label: "IMAGE",
        title: "이미지 최적화",
        desc: "전체적으로 PNG 형식의 이미지를 사용하며, 파일 용량을 줄이기 위한 최적화 작업에 신경 썼습니다. 이를 통해 페이지 로딩 성능 개선에 기여했습니다.",
        color: "rgba(34,197,94,0.6)",
      },
      {
        label: "ANIMATION",
        title: "애니메이션 처리",
        desc: "jQuery의 slideUp과 slideDown 메소드를 활용해 탭 클릭 시 콘텐츠가 부드럽게 펼쳐지고 접히는 아코디언 인터랙션을 구현했습니다.",
        color: "rgba(236,72,153,0.6)",
      },
    ],
  },
  {
    id: 4,
    projectName: "TravelyMap",
    markupStylingGroup: [
      {
        label: "SEMANTIC",
        title: "시맨틱 태그 사용 전략",
        desc: "프로젝트 전반에 걸쳐 시맨틱 태그를 적극 활용하여 구조적 의미를 명확히 하고, SEO 최적화에 중점을 둔 마크업을 구현했습니다.",
        color: "rgba(255,149,0,0.6)",
      },
      {
        label: "STYLE",
        title: "스타일 구조",
        descTable: [
          {
            category: "CSS 구조",
            detail:
              "React 컴포넌트 단위로 스타일을 관리하기 위해 모듈화된 CSS를 사용했고, 공통 스타일은 별도의 파일로 분리하여 재사용성을 높였습니다.",
          },
          {
            category: "네이밍",
            detail:
              "클래스명은 카멜케이스(camelCase)를 사용해 기능과 역할에 따라 직관적으로 명명하여 유지보수성을 높였습니다.",
          },
        ],
        color: "rgba(168,85,247,0.6)",
      },
      {
        label: "IMAGE",
        title: "이미지 최적화",
        desc: "아이콘은 SVG를 활용하여 선명하고 가벼운 이미지를 제공하고, 큰 이미지는 PNG 형식으로 최적화하여 페이지 로딩 성능을 개선했습니다.",
        color: "rgba(34,197,94,0.6)",
      },
      {
        label: "ANIMATION",
        title: "애니메이션 처리",
        desc: "기존 jQuery의 slideDown 메소드를 활용한 애니메이션이 있었으며, React 연동을 고려해 애니메이션 구현은 최소화하여 유지보수와 성능에 집중했습니다.",
        color: "rgba(236,72,153,0.6)",
      },
    ],
  },
  {
    id: 5,
    projectName: "HomtStudio",
    markupStylingGroup: [
      {
        label: "SEMANTIC",
        title: "시맨틱 태그 사용 전략",
        desc: "시맨틱 태그를 활용하여 페이지 내 각 섹션과 콘텐츠의 의미를 명확히 했습니다. 이를 통해 검색 엔진 최적화(SEO)에 기여하고, 접근성 측면에서도 스크린 리더가 내용을 올바르게 해석할 수 있도록 하여 사용자 경험을 향상시켰습니다.",
        color: "rgba(255,149,0,0.6)",
      },
      {
        label: "STYLE",
        title: "스타일 구조",
        descTable: [
          {
            category: "CSS 구조",
            detail:
              "공통 스타일은 외부 CSS 파일로 한 번에 관리해 코드의 일관성과 재사용성을 확보했습니다. 또한 각 페이지별로 필요한 개별 스타일 파일을 별도로 분리하여 유지보수성을 높이고, 필요에 따라 빠르게 수정할 수 있도록 구성했습니다.",
          },
          {
            category: "네이밍",
            detail:
              "클래스 네이밍은 카멜케이스(camelCase) 방식을 사용해 기능과 역할을 직관적으로 표현했습니다. 이로써 코드 가독성이 좋아지고, 협업 시 혼동을 최소화하는 데 도움이 되었습니다.",
          },
        ],
        color: "rgba(168,85,247,0.6)",
      },
      {
        label: "IMAGE",
        title: "이미지 최적화",
        desc: "아이콘은 SVG 형식을 주로 활용해 해상도에 구애받지 않는 선명한 표현이 가능하도록 했으며, 큰 이미지들은 PNG 포맷으로 적절한 용량과 품질을 유지하며 최적화하여 페이지 로딩 속도를 개선했습니다.",
        color: "rgba(34,197,94,0.6)",
      },
    ],
  },
  {
    id: 6,
    projectName: "Ketock",
    markupStylingGroup: [
      {
        label: "SEMANTIC",
        title: "시맨틱 태그 사용 전략",
        desc: "시맨틱 태그를 적극 도입하여 각 콘텐츠와 섹션에 명확한 구조적 의미를 부여했습니다. 이를 통해 SEO 최적화와 접근성 향상을 도모하며, 스크린 리더 사용자를 위한 배려도 함께 고려했습니다.",
        color: "rgba(255,149,0,0.6)",
      },
      {
        label: "STYLE",
        title: "스타일 구조",
        descTable: [
          {
            category: "CSS 구조",
            detail:
              "공통 스타일 시트는 외부 파일로 통합 관리하여 유지보수와 재사용성을 높였으며, 개별 페이지별 필요한 스타일은 별도의 CSS 파일로 분리해 효율적인 관리를 실현했습니다.",
          },
          {
            category: "네이밍",
            detail:
              "클래스명은 카멜케이스(camelCase) 방식을 적용해 기능을 직관적으로 표현했으며, 이를 통해 코드의 가독성과 협업 효율성을 향상시켰습니다.",
          },
        ],
        color: "rgba(168,85,247,0.6)",
      },
      {
        label: "IMAGE",
        title: "이미지 최적화",
        desc: "아이콘은 SVG 파일을 활용해 선명도와 확장성을 확보했으며, 큰 이미지는 PNG 포맷으로 최적화했습니다.",
        color: "rgba(34,197,94,0.6)",
      },
    ],
  },
];
