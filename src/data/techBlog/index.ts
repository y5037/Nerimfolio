import { TechPost } from "./types";

export const techPosts: TechPost[] = [
  {
    id: 1,
    title: "클릭도 되고, 드래그도 되고, 터치도 되는 별점 만들기 ⭐️",
    excerpt:
      "후기 작성 모달을 만들다보니 별점 기능을 처음으로 구현해야 했다. 하... 이걸 이미지로 해야 하나, SVG로 그려야 하나 고민에 빠졌다. 결론은?",
    category: ["별점 UX", "터치 슬라이드"],
    date: "2025.06.26",
    link: "https://velog.io/@nerimy/%ED%81%B4%EB%A6%AD%EB%8F%84-%EB%90%98%EA%B3%A0-%EB%93%9C%EB%9E%98%EA%B7%B8%EB%8F%84-%EB%90%98%EA%B3%A0-%ED%84%B0%EC%B9%98%EB%8F%84-%EB%90%98%EB%8A%94-%EB%B3%84%EC%A0%90-%EB%A7%8C%EB%93%A4%EA%B8%B0",
  },
  {
    id: 2,
    title: "처음 써본 React Hook Form + Zod 후기",
    excerpt:
      "😰 예전의 나: 폼만 보면 가슴이 답답해졌다. 퍼블리셔 시절, 회원가입 폼이나 정보 입력 폼을 마주할 때마다 이런 생각이 들곤 했다.",
    category: ["RHF사용법", "zod", "폼 유효성 검사"],
    date: "2025.06.25",
    link: "https://velog.io/@nerimy/%EC%9D%B4%EB%A0%87%EA%B2%8C-%EA%B0%84%EB%8B%A8%ED%95%B4%EB%8F%84-%EB%90%98%EB%8A%94-%EA%B1%B0%EC%95%BC-%EC%B2%98%EC%9D%8C-%EC%8D%A8%EB%B3%B8-React-Hook-Form-Zod-%ED%9B%84%EA%B8%B0",
  },
  {
    id: 3,
    title: "여러 쿼리키를 invalidate하는 깔끔한 방법",
    excerpt:
      "🧹 쿼리키가 뿔뿔이 흩어져 있다? 하나씩 정리해드림 (React Query multiple invalidate)",
    category: [],
    date: "2025.06.25",
    link: "https://velog.io/@nerimy/%EC%97%AC%EB%9F%AC-%EC%BF%BC%EB%A6%AC%ED%82%A4%EB%A5%BC-invalidate%ED%95%98%EB%8A%94-%EA%B9%94%EB%81%94%ED%95%9C-%EB%B0%A9%EB%B2%95",
  },
  {
    id: 4,
    title: "Next에서 캐로셀이 미쳐 날뛸 때 대처법.zip",
    excerpt:
      "슬라이드는 세 장인데 왜 세로로 서있죠...? 😧 — 단 한 장의 이미지 때문에 폭주한 캐로셀, 고쳐보자ㅠㅠ",
    category: ["React Carousel", "React-slick"],
    date: "2025.06.25",
    link: "https://velog.io/@nerimy/Next%EC%97%90%EC%84%9C-%EC%BA%90%EB%A1%9C%EC%85%80%EC%9D%B4-%EB%AF%B8%EC%B3%90-%EB%82%A0%EB%9B%B8-%EB%95%8C-%EB%8C%80%EC%B2%98%EB%B2%95.zip-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-vs-%EC%A0%95%EC%A0%81-%EC%9D%B4%EB%AF%B8%EC%A7%80",
  },
  {
    id: 5,
    title:
      "‘임시 저장 기능’ 백엔드 없어도 문제없다! 프론트엔드에서 로컬스토리지로 임시 저장 구현하기🥲",
    excerpt:
      "디자인은 “임시 저장 기능 꼭 필요해요!” 기획도 “이 버튼 누르면 작성한 내용 다시 복원돼야 해요!” 그런데... 백엔드는 “그런 API 없는데요?”",
    category: ["로컬스토리지"],
    date: "2025.06.24",
    link: "https://velog.io/@nerimy/%EC%9E%84%EC%8B%9C-%EC%A0%80%EC%9E%A5-%EA%B8%B0%EB%8A%A5-%EB%B0%B1%EC%97%94%EB%93%9C-%EC%97%86%EC%96%B4%EB%8F%84-%EB%AC%B8%EC%A0%9C%EC%97%86%EB%8B%A4-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C-%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EB%A1%9C-%EC%9E%84%EC%8B%9C-%EC%A0%80%EC%9E%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0",
  },
  {
    id: 6,
    title: "✨스크랩 기능, 빠르고 부드럽게! Optimistic UI로 반영해보기",
    excerpt:
      "👀 시작은 간단했다. 상세 페이지에 스크랩 버튼을 붙이는 미션! 처음엔 이렇게 생각했다.",
    category: ["Optimistic UI", "낙관적 업데이트"],
    date: "2025.06.15",
    link: "https://velog.io/@nerimy/%EC%8A%A4%ED%81%AC%EB%9E%A9-%EA%B8%B0%EB%8A%A5-%EB%B9%A0%EB%A5%B4%EA%B3%A0-%EB%B6%80%EB%93%9C%EB%9F%BD%EA%B2%8C-Optimistic-UI%EB%A1%9C-%EB%B0%98%EC%98%81%ED%95%B4%EB%B3%B4%EA%B8%B0",
  },
  {
    id: 7,
    title: "React Query로 SSR + CSR 통합하기",
    excerpt:
      "사이드 프로젝트 중 예상치 못한 상황이 생겼다. 팀원 한 명이 갑작스럽게 빠졌고, 전달받은 작업 현황은... 충격 그 자체였다. UI 반응형은 물론, 기능 구현도 절반 이상 비어 있었다.",
    category: ["CSR", "SSR", "무한스크롤"],
    date: "2025.06.13",
    link: "https://velog.io/@nerimy/React-Query%EB%A1%9C-Next-App-Router%EC%97%90%EC%84%9C-SSR-CSR-%ED%86%B5%ED%95%A9%ED%95%98%EA%B8%B0",
  },
  {
    id: 8,
    title: "Optimistic UI 찐- 도전기 💗 좋아요 토글 구현",
    excerpt:
      "예전에 처음 좋아요 기능을 만들 땐, 그냥 useState로 상태를 즉시 바꾸는 방식으로 간단하게 구현했었다. 그 때 정리한 글은 여기서 볼 수 있다 ⬇️",
    category: ["toggleLike"],
    date: "2025.06.03",
    link: "https://velog.io/@nerimy/React-Query%EB%A1%9C-Optimistic-UI-%EC%B0%90-%EB%8F%84%EC%A0%84%EA%B8%B0-%EC%A2%8B%EC%95%84%EC%9A%94-%ED%86%A0%EA%B8%80-%EA%B5%AC%ED%98%84",
  },
];
