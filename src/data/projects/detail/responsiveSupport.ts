import { ResponsiveSupportData } from "@/types/projects";

export const responsiveSupportData: ResponsiveSupportData[] = [
  {
    id: 1,
    projectName: "Publishing Portfolio",
    responsiveSupportGroup: [
      {
        label: "RESPONSIVE",
        title: "반응형 전략",
        brief: "데스크탑 우선, 주요 미디어 쿼리 구간 설명",
        details: [
          { item: "PC", value: "1400px 이상" },
          { item: "Tablet", value: "768px 이상" },
          { item: "Mobile", value: "280px 이상" },
          { item: "전략", value: "PC First Approach" },
        ],
        color: "#60A5FA",
      },
      {
        label: "BROWSER",
        title: "브라우저 테스트 결과",
        brief: "크로스 브라우징 주요 브라우저별 테스트 요약",
        details: [
          { item: "Chrome", value: "완벽 호환" },
          { item: "Firefox", value: "완벽 호환" },
          { item: "Safari", value: "완벽 호환" },
          { item: "Edge", value: "완벽 호환" },
          { item: "IE11", value: "기본 기능 동작 확인" },
        ],
        color: "#FBBF24",
      },
      {
        label: "DEVICE",
        title: "대응 디바이스",
        brief: "데스크탑, 모바일, 태블릿 전반 지원",
        details: [
          {
            item: "PC",
            value: "주요 브라우저 호환성 확보, 해상도별 반응형 지원",
          },
          {
            item: "Tablet",
            value: "가로/세로 모드 대응, 주요 태블릿 기기 테스트 진행",
          },
          {
            item: "Mobile",
            value: "iOS, Android 주요 버전 대응, 터치 인터랙션 최적화",
          },
        ],
        color: "#34D399",
      },
      {
        label: "ACCESSIBILITY",
        title: "접근성 대응 여부",
        brief: "스크린리더, 키보드 탐색 등 고려 상세",
        details: [
          {
            item: "색상 대비",
            value: "WCAG AA 기준 만족, 버튼 및 링크 대비 최적화",
          },
        ],
        color: "#F87171",
      },
    ],
  },
  {
    id: 2,
    projectName: "Becelo",
    responsiveSupportGroup: [
      {
        label: "RESPONSIVE",
        title: "반응형 전략",
        brief: "모바일 우선, 주요 미디어 쿼리 구간 설명",
        details: [
          { item: "Mobile", value: "380px 이상" },
          { item: "Tablet", value: "768px 이상" },
          { item: "PC", value: "1000px 이상" },
          { item: "전략", value: "Mobile First Approach" },
        ],
        color: "#60A5FA",
      },
      {
        label: "BROWSER",
        title: "브라우저 테스트 결과",
        brief: "크로스 브라우징 주요 브라우저별 테스트 요약",
        details: [
          { item: "Chrome", value: "완벽 호환" },
          { item: "Firefox", value: "완벽 호환" },
          { item: "Safari", value: "완벽 호환" },
          { item: "Edge", value: "완벽 호환" },
          { item: "IE11", value: "기본 기능 동작 확인" },
        ],
        color: "#FBBF24",
      },
      {
        label: "DEVICE",
        title: "대응 디바이스",
        brief: "데스크탑, 모바일, 태블릿 전반 지원",
        details: [
          {
            item: "PC",
            value:
              "데스크톱/노트북 브라우저 전반 지원, 주요 브라우저 크로스브라우징 완료, 해상도별 반응형 지원",
          },
          {
            item: "Tablet",
            value: "iPad, Android 태블릿 대응, UI 요소 크기 조절",
          },
          {
            item: "Mobile",
            value:
              "모바일 퍼스트 디자인 적용, iOS, Android 주요 버전 대응, 터치 인터랙션 최적화, 마우스/키보드 UX 최적화",
          },
        ],
        color: "#34D399",
      },
      {
        label: "ACCESSIBILITY",
        title: "접근성 대응 여부",
        brief: "스크린리더, 키보드 탐색 등 고려 상세",
        details: [
          { item: "스크린리더", value: "ARIA 속성 적용" },
          {
            item: "키보드 탐색",
            value:
              "탭 순서 자연스러움, 포커스 시 스타일 적용, 키보드 전용 기능 접근 가능",
          },
          {
            item: "색상 대비",
            value: "텍스트 대비 충분함, 버튼 및 링크 대비 최적화",
          },
        ],
        color: "#F87171",
      },
    ],
  },
  {
    id: 3,
    projectName: "Fansign",
    responsiveSupportGroup: [
      {
        label: "RESPONSIVE",
        title: "반응형 전략",
        brief: "데스크탑 우선, 주요 미디어 쿼리 구간 설명",
        details: [
          { item: "Tablet/PC", value: "870px 이상" },
          { item: "Mobile", value: "280px 이상" },
          { item: "전략", value: "PC First Approach" },
        ],
        color: "#60A5FA",
      },
      {
        label: "BROWSER",
        title: "브라우저 테스트 결과",
        brief: "크로스 브라우징 주요 브라우저별 테스트 요약",
        details: [
          { item: "Chrome", value: "완벽 호환" },
          { item: "Firefox", value: "완벽 호환" },
          { item: "Safari", value: "완벽 호환" },
          { item: "Edge", value: "완벽 호환" },
          { item: "IE11", value: "기본 기능 동작 확인" },
        ],
        color: "#FBBF24",
      },
      {
        label: "DEVICE",
        title: "대응 디바이스",
        brief: "데스크탑, 모바일, 태블릿 전반 지원",
        details: [
          {
            item: "PC/Tablet",
            value: "주요 브라우저 크로스브라우징 완료, 해상도별 반응형 지원",
          },
          { item: "Mobile", value: "iOS, Android 주요 버전 대응" },
        ],
        color: "#34D399",
      },
      {
        label: "ACCESSIBILITY",
        title: "접근성 대응 여부",
        brief: "스크린리더, 키보드 탐색 등 고려 상세",
        details: [{ item: "색상 대비", value: "버튼 및 링크 대비 최적화" }],
        color: "#F87171",
      },
    ],
  },
  {
    id: 4,
    projectName: "TravelyMap",
    responsiveSupportGroup: [
      {
        label: "RESPONSIVE",
        title: "반응형 전략",
        brief: "모바일 우선, 주요 미디어 쿼리 구간 설명",
        details: [
          { item: "Mobile", value: "320px 이상" },
          { item: "Tablet", value: "768px 이상" },
          { item: "전략", value: "Mobile First Approach" },
        ],
        color: "#60A5FA",
      },
      {
        label: "BROWSER",
        title: "브라우저 테스트 결과",
        brief: "크로스 브라우징 주요 브라우저별 테스트 요약",
        details: [
          { item: "Chrome", value: "완벽 호환" },
          { item: "Firefox", value: "완벽 호환" },
          { item: "Safari", value: "완벽 호환" },
          { item: "Edge", value: "완벽 호환" },
          { item: "IE11", value: "기본 기능 동작 확인" },
        ],
        color: "#FBBF24",
      },
      {
        label: "DEVICE",
        title: "대응 디바이스",
        brief: "데스크탑, 모바일, 태블릿 전반 지원",
        details: [
          {
            item: "Tablet",
            value: "iPad, Android 태블릿 대응, UI 요소 크기 조절",
          },
          {
            item: "Mobile",
            value:
              "모바일 퍼스트 디자인 적용, iOS, Android 주요 버전 대응, 터치 인터랙션 최적화",
          },
        ],
        color: "#34D399",
      },
      {
        label: "ACCESSIBILITY",
        title: "접근성 대응 여부",
        brief: "스크린리더, 키보드 탐색 등 고려 상세",
        details: [
          { item: "키보드 탐색", value: "키보드 전용 기능 접근 가능" },
          {
            item: "색상 대비",
            value: "텍스트 대비 충분함, 버튼 및 링크 대비 최적화",
          },
        ],
        color: "#F87171",
      },
    ],
  },
  {
    id: 5,
    projectName: "HomtStudio",
    responsiveSupportGroup: [
      {
        label: "RESPONSIVE",
        title: "반응형 전략",
        brief: "모바일 우선, 주요 미디어 쿼리 구간 설명",
        details: [
          { item: "Mobile", value: "320px 이상" },
          { item: "Tablet", value: "768px 이상" },
          { item: "전략", value: "Mobile First Approach" },
        ],
        color: "#60A5FA",
      },
      {
        label: "BROWSER",
        title: "브라우저 테스트 결과",
        brief: "크로스 브라우징 주요 브라우저별 테스트 요약",
        details: [
          { item: "Chrome", value: "완벽 호환" },
          { item: "Firefox", value: "완벽 호환" },
          { item: "Safari", value: "완벽 호환" },
          { item: "Edge", value: "완벽 호환" },
          { item: "IE11", value: "기본 기능 동작 확인" },
        ],
        color: "#FBBF24",
      },
      {
        label: "DEVICE",
        title: "대응 디바이스",
        brief: "데스크탑, 모바일, 태블릿 전반 지원",
        details: [
          {
            item: "Tablet",
            value: "iPad, Android 태블릿 대응, UI 요소 크기 조절",
          },
          {
            item: "Mobile",
            value: "모바일 퍼스트 디자인 적용, iOS, Android 주요 버전 대응",
          },
        ],
        color: "#34D399",
      },
      {
        label: "ACCESSIBILITY",
        title: "접근성 대응 여부",
        brief: "스크린리더, 키보드 탐색 등 고려 상세",
        details: [{ item: "색상 대비", value: "버튼 및 링크 대비 최적화" }],
        color: "#F87171",
      },
    ],
  },
  {
    id: 6,
    projectName: "Ketock",
    responsiveSupportGroup: [
      {
        label: "RESPONSIVE",
        title: "반응형 전략",
        brief: "모바일 우선, 주요 미디어 쿼리 구간 설명",
        details: [
          { item: "Mobile", value: "320px 이상" },
          { item: "Tablet", value: "768px 이상" },
          { item: "전략", value: "Mobile First Approach" },
        ],
        color: "#60A5FA",
      },
      {
        label: "BROWSER",
        title: "브라우저 테스트 결과",
        brief: "크로스 브라우징 주요 브라우저별 테스트 요약",
        details: [
          { item: "Chrome", value: "완벽 호환" },
          { item: "Firefox", value: "완벽 호환" },
          { item: "Safari", value: "완벽 호환" },
          { item: "Edge", value: "완벽 호환" },
          { item: "IE11", value: "기본 기능 동작 확인" },
        ],
        color: "#FBBF24",
      },
      {
        label: "DEVICE",
        title: "대응 디바이스",
        brief: "데스크탑, 모바일, 태블릿 전반 지원",
        details: [
          {
            item: "Tablet",
            value: "iPad, Android 태블릿 대응, UI 요소 크기 조절",
          },
          {
            item: "Mobile",
            value: "모바일 퍼스트 디자인 적용, iOS, Android 주요 버전 대응",
          },
        ],
        color: "#34D399",
      },
      {
        label: "ACCESSIBILITY",
        title: "접근성 대응 여부",
        brief: "스크린리더, 키보드 탐색 등 고려 상세",
        details: [{ item: "색상 대비", value: "버튼 및 링크 대비 최적화" }],
        color: "#F87171",
      },
    ],
  },
];
