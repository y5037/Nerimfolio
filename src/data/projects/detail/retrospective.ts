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
        description:
          "이 프로젝트는 퍼블리셔로 취업을 준비하던 시절, 포트폴리오로 사용하기 위해 시작한 작업입니다.\n초기에는 PC 화면을 기준으로 제작했지만,\n‘모든 디바이스에 대응할 수 있어야 한다’는 조언을 받고 반응형 구조로 확장했습니다.\n결과적으로 모바일, 태블릿, 데스크톱 등 모든 디바이스 환경에서 최적화된 레이아웃을 구현할 수 있게 되었고,\n이를 통해 반응형 퍼블리싱 전반에 대한 이해도를 크게 높일 수 있었습니다.\n\n또한, 다양한 프로젝트(자사 웹앱, 랜딩페이지 등)의 퍼블리싱한 결과물들을 함께 담으면서\n이 작업 과정에서 제이쿼리 활용 능력과 마크업 구조 설계 능력도 한층 성장시킬 수 있었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/1.jpg",
      },
      {
        id: 2,
        title: "Areas for Improvement",
        subheading: "직면했던 문제점과 앞으로 개선해야 할 부분",
        description:
          "제이쿼리로 작성한 스크립트가 특정 브라우저에서 정상적으로 동작하지 않는 상황을 마주하게 됐습니다.\n단순한 UI 오류를 넘어, 사용자 경험에 직접적인 영향을 주는 문제였어요.\n이를 계기로 브라우저 환경에 따른 편차 없이\n모든 사용자가 동일한 품질의 서비스를 이용할 수 있는 방법에 대해 깊이 고민하게 되었습니다.\n\n당시에는 제이쿼리가 이미 점차 사용량이 줄고 있었고,\n순수 Javascript로도 동일한 기능을 구현할 수 있는 방법이 존재했습니다.\n그러나 익숙한 기술에서 벗어나 새로운 접근 방식을 적용하는 것은 쉽지 않았고,\n예기치 않은 오류와 마주했을 때의 당황스러움도 컸습니다.\n\n기술 선택이 서비스 품질과 직결된다는 사실과 트렌드 변화에 따른 기술 전환의 중요성을 체감한 계기가 되어\n이후로는 프로젝트 초기부터 호환성과 유지보수성을 함께 고려하는 습관이 자리잡게 되었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Next Steps",
        subheading: "다음 작업에서 시도하고 싶은 방향과 계획",
        description:
          "퍼블리셔로 근무하던 시절에는 jQuery에 의존하며 프로젝트 작업을 이어갔습니다.\n솔직히 말하면, JavaScript가 어렵게 느껴져서 도망친 도피처에 가까웠어요.\n하지만 그 익숙함 속에 안주하다 보니, 정작 JavaScript에 대한 이해는 점점 얕아지고 있었습니다.\n\n기술은 빠르게 발전하고 있었고, 이를 따라가기 위해서는 근본적인 언어부터 다시 탄탄히 다져야 한다는 걸 깨달았습니다.\n그래서 jQuery 대신 순수 JavaScript를 깊이 있게 배우고,\n이를 바탕으로 최신 기술을 활용한 포트폴리오를 만들어보기로 결심했습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/3.png",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "내가 사용하는 디바이스와 브라우저로 정상 동작한다고 해서\n모든 사용자에게 동일한 경험을 제공할 수 없다는 것을 깨달았습니다.\n누군가 이에 대해 질문했을 때 당황하지 않고 상황을 설명하려면,\n브라우저와 디바이스별 특성을 충분히 이해하고 있어야 한다는 것도 알게 되었어요.\n\n그동안은 편하고 빠르게 결과물을 만들기 위해 jQuery라는 쉬운 길을 선택하기도 했지만,\n이번 경험을 통해 뼈대부터 확실히 기반을 잡고, 기술의 근본을 이해하는 것이 더 중요한 접근임을 깨달았습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 2,
    projectName: "Becelo",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Proud Achievements",
        subheading: "이 프로젝트에서 이루어낸 주요 성과와 배운 점",
        description:
          "이 프로젝트는 기획과 디자인 단계부터 참여하여\n개발자와 본격적으로 협업하는 경험을 처음으로 쌓은 작업이었습니다.\n\n협업 과정 속에서 내가 맡은 역할에 충실히 임하는 것이\n다음 단계의 작업을 원활하게 만드는 핵심이라는 것을 실감할 수 있었어요.\n또한, 내가 만든 퍼블리싱 결과물이\n실제 자사 웹앱과 랜딩페이지에서 활용되는 모습을 보며 큰 뿌듯함을 느꼈습니다.\n\n혼자 퍼블리싱을 전담하다 보니 작업량이 많아 힘들기도 했지만,\n그 과정에서 PHP 기반의 그누보드 파일 구조를 빠르게 이해하고 활용할 수 있게 되었습니다.\n처음에는 여기저기 흩어진 파일을 찾는 일이 어려웠지만,\n구조를 익히고 나서는 필요한 파일을 빠르게 찾아 작업할 수 있어 성취감도 느낄 수 있었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/1.jpg",
      },
      {
        id: 2,
        title: "Areas for Improvement",
        subheading: "직면했던 문제점과 앞으로 개선해야 할 부분",
        description:
          "개발이 어느 정도 진행되기도 전에 기획과 디자인이 계속 변경되고\n새로운 기능이 추가되면서 몇 차례 작업물을 다시 작성해야 하는 상황이 있었습니다.\n컨펌을 받고 진행한 작업임에도 리팩토링이 반복되어 처음에는 많이 힘들었어요.\n\n하지만 반복적인 수정 과정을 겪으면서,\n더 나은 기획과 UI 디자인이 나오고 이에 맞춰 빠르게 대응하는 능력을 키울 수 있었습니다.\n또한, 한 작업에 매몰되지 않고 다양한 아이디어를 시도할 수 있는 여유도 생겼습니다.\n\n앞으로 유사한 상황에 직면하더라도 단순히 불평하기보다는\n배움의 기회로 삼아 적응하고 성장하는 태도를 유지하려고 합니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Next Steps",
        subheading: "다음 작업에서 시도하고 싶은 방향과 계획",
        description:
          "PHP 기반 프로젝트에서 jQuery를 사용하는 것 자체에는 큰 무리가 없었지만,\n모달과 같이 반복해서 사용되는 페이지나 디자인 요소를 구현하다 보니\n불필요한 코드가 점점 늘어나고 코드가 지저분해지는 현상을 실시간으로 체감했습니다.\n\n앞으로 PHP 기반 개발을 계속 이어가게 된다면,\n불필요하게 중복되는 코드를 줄이는 방법을 고민하고 이를 개선하기 위해\nPHP에 대한 이해와 공부를 좀 더 심화할 필요가 있다고 느꼈습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/3.png",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "기획과 디자인 단계부터 참여해 PHP 개발자와 협업하며 프로젝트를 완성한 경험은 굉장히 뜻 깊었습니다.\n하나의 서비스를 만들어 나가는 과정에서 얼마나 많은 인력과 시행착오가 필요한지 직접 체감하며,\n이를 통해 다양한 깨달음을 얻을 수 있었어요.\n\n또한, 프로젝트 진행 과정 속에서 각자의 역할 속에서 성장하고 있는 동료들을 보며,\n협업과 경험의 중요성을 깊이 느낄 수 있었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 3,
    projectName: "Fansign",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Proud Achievements",
        subheading: "이 프로젝트에서 이루어낸 주요 성과와 배운 점",
        description:
          "회사에서 제공한 기회를 통해 네이티브 퍼블리싱을 직접 경험할 수 있었던 점이 가장 큰 성과였습니다.\n웹과 달리 모바일 중심으로 진행되는 네이티브 퍼블리싱은\n마크업 구조와 태그 사용 방식이 웹과 상당히 달랐습니다.\n\n처음에는 익숙하지 않아 당황스러웠지만,\n실제로 기능을 구현해보면서 당시 웹에서는 기본적으로 제공되지 않던 모달 UI/UX 라이브러리나 편의 기능들이\n네이티브 환경에서는 이미 준비되어 쉽게 사용할 수 있다는 점에서 굉장히 편하고 재밌었습니다.\n\n이를 통해 단순히 코드를 작성하는 것 이상의 경험,\n즉 새로운 환경에서 빠르게 적응하고 기능을 구현하는 방법을 배우게 되었고,\n앞으로 모바일 퍼블리싱을 다룰 때 기초적인 이해와 자신감을 쌓을 수 있는 계기가 되었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/1.jpg",
      },
      {
        id: 2,
        title: "Areas for Improvement",
        subheading: "직면했던 문제점과 앞으로 개선해야 할 부분",
        description:
          "네이티브 환경에서의 퍼블리싱은 처음 경험하다 보니, 프로젝트 전 과정이 거의 공부와 적용의 반복이었습니다.\n새로운 구조와 규칙을 배우면서 바로 적용해야 하는 상황이 계속되다 보니 정신없이 바쁘기도 했고,\n체력적으로도 쉽지 않았습니다.\n또한, 퍼블리셔로서 마크업을 작성하는 것은 단순한 디자인 구현을 넘어 개발과 직결되는 작업임에도,\n당시에는 이해도가 충분히 높지 않아 여러 부분에서 시행착오를 겪었습니다.\n\n이 경험을 통해, 앞으로는 새로운 환경을 접할 때 사전에 관련 지식을 충분히 쌓고,\n퍼블리싱과 개발의 연계를 이해한 상태에서 프로젝트에 임하는 것이 중요하다는 점을 깨닫게 되었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Next Steps",
        subheading: "다음 작업에서 시도하고 싶은 방향과 계획",
        description:
          "앞으로 비슷한 프로젝트를 진행할 때는 프로젝트 초반부터 관련 규칙과 구조를 충분히 학습하고,\n퍼블리싱과 개발 간의 연계를 고려하여 코드를 작성할 계획입니다.\n반복되는 시행착오를 줄이고, 효율적이면서 안정적인 코드 작성 방식을 지향함으로써\n프로젝트 완성도를 높여, 보다 원활한 협업을 만들어가는 것이 목표입니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/3.png",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "제한된 지식으로도 최대한 안정적인 결과물을 만들어내는 경험을 통해,\n앞으로는 새로운 기술이나 환경에서도 당황하지 않고 체계적으로 대응할 수 있는 자신감을 얻었습니다.\n\n단순히 기능을 구현하는 것을 넘어,\n구조를 이해하고 기반을 탄탄히 다지는 것이 퍼블리셔로서 성장하는 핵심이라는 점을 배운 프로젝트였습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 4,
    projectName: "TravelyMap",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Proud Achievements",
        subheading: "이 프로젝트에서 이루어낸 주요 성과와 배운 점",
        description:
          "기획자나 디자이너와의 협업 과정에서 배우는 점도 많았지만,\n퍼블리싱 작업이 바로 화면으로 확인되다 보니 때로는 의견 충돌이 발생하기도 했습니다.\n퍼블리셔로 일하면서 본격적으로 처음 시작한 프로젝트라,\n당시에는 모르는 부분이 많아 상대방의 의견에 굽히는 경우가 많았지만,\n이제는 필요한 경우 내 의견을 제시하면서 맞춰나가는 점도 중요하다는 것을 배웠습니다.\n\n또한, 퍼블리싱을 전담하고 웹앱을 처음 제작하면서\n화면 레이아웃과 마크업 구조를 어떻게 설계해야 효율적일지 고민했던 경험은\n스스로 공부하고 성장하는 데 큰 도움이 되었습니다.\n이 과정을 통해 퍼블리셔로서의 기초 역량과 문제 해결 능력을 확실히 다질 수 있었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/1.jpg",
      },
      {
        id: 2,
        title: "Areas for Improvement",
        subheading: "직면했던 문제점과 앞으로 개선해야 할 부분",
        description:
          "웹앱 퍼블리싱을 처음 경험하다 보니, 디바이스별 반응형 레이아웃을 어떻게 설계해야 할지 고민이 많았습니다.\n고민이 깊어지면서 마크업 구조를 복잡하게 꼬아 생각하는 시기도 있었고,\n태블릿과 모바일 각각에 맞춘 레이아웃을 따로 잡는 등 여러 시행착오를 겪었습니다.\n\n이 과정에서, 단순히 화면을 구현하는 것을 넘어 다양한 디바이스 환경에서도\n안정적으로 동작하도록 설계하는 것이 얼마나 중요한지 깨닫게 되었습니다.\n유연한 구조를 설계하고, 불필요한 반복과 복잡함을 최소화하는 방법을 적극적으로 고민하려고 합니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Next Steps",
        subheading: "다음 작업에서 시도하고 싶은 방향과 계획",
        description:
          "웹앱 마크업을 작성할 때, 단순히 코드를 무작정 작성하는 것이 아니라 전체적인 디자인 구조를 먼저 파악하고,\nCSS로 어떻게 효율적으로 구현할 수 있을지에 대한 고민이 필요 하다는 것을 깨달았습니다.\n앞으로는 이러한 접근 방식을 꾸준히 적용해 디자인과 구조를 정확히 이해하고,\n유지보수와 확장이 용이한 마크업을 작성하는 퍼블리셔가 되고 싶습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/3.png",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "웹앱 퍼블리싱이 처음이었기 때문에,\n디바이스별 반응형 레이아웃을 고민하며 마크업을 어렵게 꼬아보는 시행착오를 많이 겪었습니다.\n\n단순히 화면을 구현하는 수준을 넘어,\n유지보수와 확장이 용이한 구조를 설계하는 습관을 배우게 되었고,\n앞으로 퍼블리셔로서 더 견고하고 체계적인 작업 방식을 갖추는 발판이 되었다고 생각합니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 5,
    projectName: "HomtStudio",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Proud Achievements",
        subheading: "이 프로젝트에서 이루어낸 주요 성과와 배운 점",
        description:
          "이 프로젝트에서는 기존에 HTML로 작성된 코드를 직접 React 프로젝트로 이전하고 화면에 띄우는 과정을 경험했습니다.\n덕분에 React에서 특정 루트가 어떻게 연결되어 화면이 표시되는지 구조를 직접 이해할 수 있었고,\n초기 React 프로젝트 구조를 직접 세팅해보면서 이전과는 다른 개발 환경의 신선함을 느낄 수 있었습니다.\n\n이를 통해 단순히 마크업을 구현하는 것을 넘어,\n프레임워크 기반에서 화면이 어떻게 구성되는지를 체감하며 구조 설계 능력을 키울 수 있었던 시간이었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/1.jpg",
      },
      {
        id: 2,
        title: "Areas for Improvement",
        subheading: "직면했던 문제점과 앞으로 개선해야 할 부분",
        description:
          "React 기반으로 진행되면서 jQuery를 사용할 수 없었기 때문에\nUX적인 상호작용까지 직접 구현하는 데에는 한계가 있었습니다.\n완전히 프론트엔드 개발 영역에 속하는 부분이다보니 직접 처리할 수 없는 영역이었고,\n그로 인해 많은 답답함과 아쉬움을 느꼈습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Next Steps",
        subheading: "다음 작업에서 시도하고 싶은 방향과 계획",
        description:
          "프레임워크 환경에서도 퍼블리셔로서 기본적인 UX 흐름과 상호작용 구조를 이해하고,\n설계 단계에서부터 개발자와 원활히 협업할 수 있는 능력을 키우는 것이 필요하다고 느꼈습니다.\n\n구현 과정에서 발생할 수 있는 불필요한 시행착오를 줄이고,\n개발자와 함께 원활하게 구현 방향에 대한 의견을 주고 받으며\n더 완성도 높은 화면을 제작할 수 있을 것이라고 생각 됩니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/3.png",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "React 기반 환경에서 퍼블리셔로서 할 수 있는 역할과 한계를 명확히 경험할 수 있었습니다.\nHTML과 CSS를 다루는 기본 퍼블리싱 능력뿐만 아니라, 화면 구조와 레이아웃을 설계하고,\n이를 React 프로젝트 구조에 맞게 적용하는 과정을 직접 수행하면서\n프론트엔드 개발과 퍼블리싱 사이의 경계를 이해하게 되었습니다.\n\n앞으로는 프레임워크 환경에서도 퍼블리셔로서 필요한 UX 흐름과 구조를 이해하고,\n설계 단계에서부터 개발자와 조율할 수 있는 역량을 키우는 것이 목표입니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/4.jpg",
      },
    ],
  },
  {
    id: 6,
    projectName: "Ketock",
    retrospectiveGroup: [
      {
        id: 1,
        title: "Proud Achievements",
        subheading: "이 프로젝트에서 이루어낸 주요 성과와 배운 점",
        description:
          "HTML과 CSS를 기반으로 작업물을 정리하여 개발팀에 전달하는 역할을 맡았습니다.\n비록 직접적인 UX 구현이나 프론트엔드 상호작용까지 다루지는 않았지만,\n전달할 코드의 구조와 가독성을 신경 쓰면서 퍼블리싱의 기본 역량을 더욱 탄탄히 다질 수 있었습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/1.jpg",
      },
      {
        id: 2,
        title: "Areas for Improvement",
        subheading: "직면했던 문제점과 앞으로 개선해야 할 부분",
        description:
          "HTML/CSS만 전달하다 보니, 실제 개발과의 연결 과정에서\n의도와 다른 구현이 발생할 수 있다는 점을 체감했습니다.\n앞으로는 전달용 코드 작성 시 개발 관점에서 필요한 구조와 주석을 더 꼼꼼히 고려해,\n협업 과정에서 생길 수 있는 오해를 최소화하는 것이 필요하다는 것을 깨달았습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/2.jpg",
      },
      {
        id: 3,
        title: "Next Steps",
        subheading: "다음 작업에서 시도하고 싶은 방향과 계획",
        description:
          "개발자와의 소통과 코드 최적화까지 염두에 두고 작업할 계획입니다.\n특히 코드의 일관성과 재사용성을 높여,\n후속 프로젝트에서도 원활한 협업과 유지보수가 가능하도록 개선하고자 합니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/3.png",
      },
      {
        id: 4,
        title: "Personal Reflections",
        subheading: "이 프로젝트가 남긴 개인적인 성장과 회고",
        description:
          "비록 직접적인 인터랙션 구현은 없었지만,\n퍼블리싱의 기본기를 점검하고 협업 과정에서의 역할을 명확히 이해할 수 있었습니다.\n\n이 경험을 바탕으로,\n단순히 코드를 전달하는 것을 넘어 프로젝트 전체를 이해하고\n개발자와 효율적으로 협력할 수 있는 능력을 쌓게 된 것이 가장 큰 성장 포인트였습니다.",
        imageUrl: "/images/projects/detail/publishing/retrospective/4.jpg",
      },
    ],
  },
];
