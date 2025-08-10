import { RetrospectiveData } from "@/types/projects";

export const FrontendRetrospectiveData: RetrospectiveData[] = [
  {
    id: 1,
    projectName: "Albaform",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Key Takeaways",
        subheading: "이 프로젝트에서 얻은 가장 중요한 성과와 배움",
        description:
          "처음엔 단순히 편의성을 위해 선택했던 라이브러리들이,\n프로젝트가 커질수록 얼마나 강력한 기반이 되는지 몸소 느꼈습니다.\n\nReact Query의 query key 설계 하나로 데이터 흐름이 안정되고\nRHF를 적용하니 반복적인 상태 관리에서 벗어나 개발에 더 집중할 수 있었어요.\n\n마지막으로 Zustand를 사용하며, 혼자선 결코 만들 수 없었을 이 안정적인 개발 환경이\n수많은 개발자들의 지식과 노력 위에 있다는 사실이 크게 와닿았습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/1.png",
      },
      {
        id: 2,
        title: "Challenges Faced",
        subheading: "직면했던 주요 난관과 그 극복 과정",
        description:
          "프로젝트 초반, 예상치 못한 난관이 찾아왔습니다.\n시작 후 한 달여가 지난 뒤, 팀원 절반이 기초 UI만 남기고 프로젝트를 떠나버리면서 제 일정은 크게 흔들리고 멘탈도 무너졌어요.\n\n다행히 한 명의 팀원이 끝까지 자리를 지켜주었지만 그 분은 인턴 업무와 병행하느라 최소한의 역할만 맡을 수 있었고,\n결국 나머지 모든 책임이 제 손에 넘어왔습니다.\n\n계획했던 마감일을 지키진 못했지만,\n그 과정에서 쏟아낸 노력과 책임감이 오히려 제 성장의 밑거름이 되었다는 것을 느꼈습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Future Improvements",
        subheading: "앞으로의 개선 방향과 성장 계획",
        description:
          "초반에 공통 UI와 API를 재사용성을 고려해 설계하는 것이 얼마나 중요한지 뼈저리게 느꼈습니다.\n작업 중간에 이를 만들려니 수정과 정리가 꼬리에 꼬리를 물며 골치가 아팠어요.\n\n하지만 이런 역량은 단번에 완성되는 것이 아니라,\n수많은 경험으로 시행착오를 거쳐야 제대로 다듬어진다고 생각합니다.\n앞으로는 이 부분을 능숙하게 해내는 개발자, 그리고 팀원이 되기 위해 꾸준히 경험을 쌓아갈 계획입니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/3.jpg",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "이번 프로젝트를 통해, 커뮤니케이션과 책임감이 팀워크의 핵심이라는 사실을 다시금 깨달았습니다.\n남아 있는 사람, 그리고 함께 뛰어든 팀원들을 끝까지 믿고 배려하는 것이 얼마나 중요한지도 배웠습니다.\n\n앞으로도 저는 맡은 일을 끝까지 완수하는, 신뢰할 수 있는 팀원이 되고 싶습니다.\n설령 프로젝트를 끝까지 완주하지 못하는 상황이 오더라도,\n그에 대한 책임을 다하고 충분한 설명과 인계를 마친 뒤 물러나는 사람이 되겠습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 2,
    projectName: "PandaMarket",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Key Takeaways",
        subheading: "이 프로젝트에서 얻은 가장 중요한 성과와 배움",
        description:
          "혼자서 1부터 10까지 모든 것을 개발해보니, 그 자유로움과 무거운 책임감이 동시에 느꼈습니다.\n처음부터 끝까지 직접 만든 덕분에 코드와 구조를 온전히 이해할 수 있었지만,\n그만큼 모든 문제와 결정도 혼자 감당해야 했어요.\n\n개발 퀄리티를 높이는 게 생각보다 쉽지 않았고,\n가끔은 우물 안 개구리처럼 자신의 한계를 절실히 느끼기도 했습니다.\n이 경험을 통해 혼자 개발한다는 것이 단순한 편리함 이상의 도전이자 성장의 기회임을 깨달았습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/1.png",
      },
      {
        id: 2,
        title: "Challenges Faced",
        subheading: "직면했던 주요 난관과 그 극복 과정",
        description:
          "이 프로젝트는 React의 자바스크립트 코드에서 시작해\nNext.js의 페이지 라우터 타입스크립트로 단계별 마이그레이션을 진행했습니다.\n\n이미 구축된 기반 코드를 차근차근 변경하는 과정이 처음엔 부담스럽고 마음의 짐처럼 느껴졌지만,\n오류를 발견하고 해결하는 과정에서 많은 공부가 되었습니다.\n\n이런 경험은 앞으로 취업할 회사에서 기존 프로젝트를 마이그레이션할 때도 큰 도움이 될 거라 생각합니다.\n덕분에 어려움을 극복하며 성장할 수 있었습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Future Improvements",
        subheading: "앞으로의 개선 방향과 성장 계획",
        description:
          "아직 완성하지 못한 프로젝트라 마음 한켠에 무거운 부담이 남아 있습니다.\n그래서 이 포트폴리오 개발을 마무리 한 뒤 취업 준비를 하는 동안,\n미처 구현하지 못한 기능들을 하나씩 채워나갈 계획입니다.\n\n이 프로젝트 또한 제가 온전히 책임져야 할 일이기에 꼭 끝까지 완성하고 싶습니다.\n어느 프로젝트든 기능을 하나씩 더할 때마다 뿌듯함을 느껴요.\n앞으로도 이 소중한 감정을 간직하며 성장해 나가고 싶습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/3.jpg",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "이번 프로젝트는 처음부터 끝까지 혼자서 개발을 진행하면서,\n어떻게 설계하고 구현할지 고민하는 시간이 매우 값진 경험이 되었습니다.\n\n단순히 기존 코드를 복사해 붙여넣는 방식이 아니라,\n‘이렇게 구현해볼까?’, ‘저렇게 개선할까?’를 스스로 결정하고 그 책임을 온전히 지는 과정에서 많은 성장을 느꼈습니다.\n\n이러한 자기주도적 경험을 바탕으로\n앞으로도 다양한 상황에 능동적으로 대응하며 발전해 나가고자 합니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 3,
    projectName: "GlobalNomad",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Key Takeaways",
        subheading: "이 프로젝트에서 얻은 가장 중요한 성과와 배움",
        description:
          "React Query을 처음 사용하면서 query key가 얼마나 강력한 무기인지 처음으로 깨달았습니다.\n이전에는 REST API 호출 후 화면을 갱신하기 위해 매번 GET 요청을 수동으로 실행해야 했는데,\nReact Query 덕분에 그런 번거로움이 크게 줄었어요.\n특히 useEffect에 의존하지 않고도 상태 관리를 효율적으로 할 수 있다는 점이 매우 인상적이었습니다.\n\n다만, 효과적인 협업을 위해서는 query key에 대해 팀원들과 충분한 커뮤니케이션이 반드시 필요하다는 점도 배웠습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/1.png",
      },
      {
        id: 2,
        title: "Challenges Faced",
        subheading: "직면했던 주요 난관과 그 극복 과정",
        description:
          "소통이 원활하지 않은 팀원으로 인해 진행 상황이나 퍼포먼스 상태를 제대로 파악하지 못했습니다.\n‘잘 하고 있겠지’라는 막연한 기대만으로 넘어갔던 게 결국 문제였어요.\n\n나중에 확인해보니 개발 상태가 엉망이었고,\n발생하는 오류들을 직접 처리하면서 빠른 소통의 중요성을 절실히 깨달았습니다.\n앞으로는 문제가 예상되면 주저하지 말고 즉시 소통할 것을 다짐했습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Future Improvements",
        subheading: "앞으로의 개선 방향과 성장 계획",
        description:
          "이번 프로젝트에서는 처음 도전하는 기술들이 많아 부담이 컸습니다.\nNext.js의 App Router를 처음 써보고 Zustand로 전역 상태 관리를 해보며, Tailwind CSS도 새롭게 접했어요.\n결과적으로 모두 잘 해냈지만, 처음에는 두려움이 컸습니다.\n\n빠르게 변화하는 디지털 시대에서 개발자로서 두려움에 머무르는 것은 성장에 장애가 되는데,\n초보라는 이유로 배움에 주저했던 저를 돌아보게 됐습니다.\n\n앞으로는 새로운 도전을 두려워하지 않고,\n'결국 사람이 해낼 수 있는 일'이라는 믿음으로 자신 있게 임하고자 합니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/3.jpg",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "본 프로젝트에서 처음 접하는 여러 라이브러리를 활용하면서,\n해당 도구들에 대한 이해도가 충분치 않은 상태로 개발을 진행하게 되어 아쉬움이 남습니다.\n각 라이브러리가 제공하는 강력한 기능을 제대로 활용하기 위해서는 보다 심도 있는 학습이 필요했으며,\n이로 인해 예상보다 개발 기간이 길어졌습니다.\n\n결과적으로, 세부적인 버그 수정 및 최적화에 할당할 시간이 부족했던 점은\n앞으로 개선해야 할 과제로 남았습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 4,
    projectName: "Taskify",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Key Takeaways",
        subheading: "이 프로젝트에서 얻은 가장 중요한 성과와 배움",
        description:
          "디자인 요소인지 개발 기능과 관련된 부분인지 명확하지 않을 때는,\n혼자 판단하기보다 팀원과 충분히 의논하는 노력이 필요하다는 것을 배웠습니다.\n\n한 번은 디자인의 일부라고 생각해 무심코 고정된 값으로 처리했는데, 실제로는 개발 기능과 깊게 연관된 부분이라\n나중에 파일명부터 모듈 CSS 클래스명까지 모두 수정하는 일이 생겨 불필요한 작업이 많아졌습니다.\n\n이런 경험을 통해 애매한 부분은 반드시 소통을 통해 명확히 해야 한다는 교훈을 얻었습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/1.png",
      },
      {
        id: 2,
        title: "Challenges Faced",
        subheading: "직면했던 주요 난관과 그 극복 과정",
        description:
          "한 팀원이 코어 타임에 제대로 참여하지 않고 소통도 원활하지 않았으나,\n그 팀원이 맡은 페이지가 접속조차 불가능할 정도로 에러가 발생하는 상황임을\n프로젝트 막바지가 되어서야 발견하게 되었습니다.\n결국 저를 포함한 다른 팀원들이 추가로 맡아 개발해야 했고, 덕분에 전체 일정이 한층 더 촉박해지는 경험을 했습니다.\n\n개인 업무에 집중하느라 팀 전체 상황을 충분히 살피지 못한 점이 아쉬웠고,\n팀원 간 소통과 협력의 중요성을 다시 한 번 절감했습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Future Improvements",
        subheading: "앞으로의 개선 방향과 성장 계획",
        description:
          "REST API를 사용할 때 화면을 업데이트하기 위해\n수동으로 GET 요청을 보내는 방식이 필요하다는 점을 깨닫고 직접 구현해보았습니다.\n하지만 동시에, 이 부분에 대해 잘 모르는 팀원이 어떻게 개발해야 할지 고민할 때\n제대로 설명해주지 못한 점이 아쉬웠습니다.\n\n기술을 사용할 줄 아는 것과, 누군가에게 명확하게 설명하고 도움을 줄 수 있는 것은 다르다는 걸 느꼈어요.\n앞으로는 이 분야에 대해 자신 있게 설명할 수 있을 만큼 더 깊이 공부하고, 지식에 대해 떳떳해지고 싶습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/3.jpg",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "이번 프로젝트를 돌아보면, 다른 팀원들의 상황에 대해 무심했던 부분이 많았던 것 같습니다.\n내 할 일에만 급급해 정신없이 움직이느라, 팀원들의 어려움이나 상황을 제대로 살피지 못했어요.\n\n하지만 팀프로젝트란 혼자가 아니라 함께 협력하는 과정이라는 걸 절실히 느꼈습니다.\n앞으로는 동료들의 상황에도 더 주의를 기울이며, 함께 성장해 나가는 협업자가 되고 싶습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 5,
    projectName: "Rolling",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Key Takeaways",
        subheading: "이 프로젝트에서 얻은 가장 중요한 성과와 배움",
        description:
          "혼자서 진행하는 프로젝트가 가장 효율적이라고 생각했던 과거의 저를 되돌아보는 계기가 되었습니다.\n처음으로 여러 프론트엔드 개발자들과 협업하며 프로젝트를 진행해보니,\n각자의 역할에 충실한 팀원들과 함께할 때 개발 속도가 훨씬 빨라지고 맡은 기능에 집중할 수 있다는 것을 느꼈습니다.\n\n또한, 팀 내에서 발생하는 어려운 문제들을 함께 논의하며 해결해 나가는 과정에서 많은 배움을 얻을 수 있었습니다.\n이를 통해 팀 프로젝트가 단순히 불편함만 있는 것이 아니라는 점을 깊이 깨닫게 되었습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/1.png",
      },
      {
        id: 2,
        title: "Challenges Faced",
        subheading: "직면했던 주요 난관과 그 극복 과정",
        description:
          "주니어 개발자로 구성된 팀이다 보니 학습 속도의 차이로 인해 개발 진행이 원활하지 않은 팀원도 있었습니다.\n팀장으로서 프로젝트를 이끌어가며 이런 상황까지 책임져야 한다는 점이 가장 큰 어려움이었어요.\n\n이에 기준에 부합하는 개발 역량을 가진 팀원들과 함께 2명씩 소그룹을 구성하여 2차 R&R을 분배했고,\n이를 통해 상대적으로 어려움을 겪는 팀원들도 함께 성장하며 문제를 극복할 수 있도록 이끌어 나갔습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Future Improvements",
        subheading: "앞으로의 개선 방향과 성장 계획",
        description:
          "이번 프로젝트는 React의 자바스크립트 기반으로 개발되었지만,\n앞으로는 타입스크립트로의 마이그레이션도 꼭 시도해보고 싶습니다.\n시간적 여유가 생긴다면 차근차근 진행할 계획입니다.\n\n또한, 기획·디자인과 백엔드 서버 사이에서 균형을 맞추고 보완하는 작업이 얼마나 중요한지 깊이 깨닫게 되었고,\n이에 따라 UI/UX에 대한 이해와 공부에도 더욱 매진하고자 합니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/3.jpg",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "팀원들과의 충분한 커뮤니케이션을 통해 각자의 역량과 수행 가능 업무를 미리 파악하는 것이\n팀장의 중요한 역할임을 깨달았습니다.\n\n앞으로 다시 그런 위치에 서게 된다면, 모든 팀원이 자부심을 느끼며\n함께 하나의 완성도 높은 결과물을 만들어낼 수 있도록 든든한 지원군이 되고 싶습니다.",
        imageUrl: "/images/projects/detail/frontend/retrospective/4.jpg",
      },
    ],
  },
];

export const PublishingRetrospectiveData: RetrospectiveData[] = [
  {
    id: 1,
    projectName: "Publisher Portfolio",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Proud Achievements",
        subheading: "이 프로젝트에서 이루어낸 주요 성과와 배운 점",
        description: "",
        imageUrl: "/images/projects/detail/publishing/retrospective/1.jpg",
      },
      {
        id: 2,
        title: "Areas for Improvement",
        subheading: "직면했던 문제점과 앞으로 개선해야 할 부분",
        description: "",
        imageUrl: "/images/projects/detail/publishing/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Next Steps",
        subheading: "다음 작업에서 시도하고 싶은 방향과 계획",
        description: "",
        imageUrl: "/images/projects/detail/publishing/retrospective/3.png",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description: "",
        imageUrl: "/images/projects/detail/publishing/retrospective/4.jpg",
      },
    ],
  },
];
