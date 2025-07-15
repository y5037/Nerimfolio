import clsx from "clsx";
import { introDescription, introTitle, tabContentsWrap } from "../../styles";

export default function Intro() {
  return (
    <>
      <section className={clsx("space-y-14", tabContentsWrap)}>
        <div>
          <h2 className={clsx(introTitle)}>🙋‍♀️ Who I Am</h2>
          <p className={clsx(introDescription)}>
            안녕하세요, 프론트엔드 개발자 취업을 준비 중인{" "}
            <strong>윤혜림</strong>입니다. <br />웹 퍼블리셔로 2-3년간 실무를
            경험한 뒤, 지금은 사용자와 개발자 모두를 잇는{" "}
            <strong>프론트엔드 개발자</strong>로 다시 도약하고 있어요.
          </p>
        </div>
        <div>
          <h2 className={clsx(introTitle)}>🎯 Why Frontend</h2>
          <p className={clsx(introDescription)}>
            디자인과 사용자 경험에 대한 관심, 그리고 코드로 인터페이스를
            만들어내는 매력에 이끌려 프론트엔드를 선택하게 되었습니다. <br />
            퍼블리셔로 일하면서 디자인의 완성도를 끌어올리는 경험은 지금도 저의
            강력한 무기가 되고 있습니다.
          </p>
        </div>
        <div>
          <h2 className={clsx(introTitle)}>💪 What I Do Well</h2>
          <ul
            className={clsx("list-disc list-inside leading-relaxed space-y-1")}
          >
            <li>디자이너와 개발자 사이의 언어를 모두 이해합니다.</li>
            <li>
              협업 과정에서 의도를 파악하고, 더 나은 방향을 제시하는 데
              익숙합니다.
            </li>
            <li>
              주어진 과제에 그대로 따르기보다,{" "}
              <em className={clsx("text-orange-300")}>
                “더 나은 방법은 없을까?”
              </em>{" "}
              를 고민하는 편입니다.
            </li>
          </ul>
        </div>
        <div>
          <h2 className={clsx(introTitle)}>📌 Now</h2>
          <p className={clsx(introDescription)}>
            - Next.js 기반 포트폴리오를 완성하고 있습니다. <br />- 다양한 사이드
            프로젝트 팀 리딩을 통해 <strong>기획부터 구현, 배포까지</strong>{" "}
            직접 수행해보며 성장 중입니다.
          </p>
        </div>
      </section>
    </>
  );
}
