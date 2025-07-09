import clsx from "clsx";
import Carousel from "./Carousel";
import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import { ProjectContentsProps } from "../types";

export default function ProjectContents({ $frontend }: ProjectContentsProps) {
  const type = $frontend ? "frontend" : "publishing";

  return (
    <ContentsLayout>
      <div
        className={clsx(
          "mb-[130px] max-xs500:mb-[90px]",
          $frontend && "mb-[160px] max-xs500:mb-[90px]"
          // $frontend || "max-xs:mb-0"
        )}
      >
        <div className={clsx("mb-10")}>
          <p className={clsx("text-3xl text-gray100 font-semibold")}>
            {$frontend
              ? "🚀 Frontend Engineering Projects"
              : "🧩 Real-World Publishing"}
          </p>
          {$frontend ? (
            <p className={clsx("mt-3 text-gray400 font-light")}>
              협업과 개인 프로젝트를 통해 만든 실전 중심 웹 서비스입니다.
              <br />
              React와 Next.js를 활용해 다양한 도메인의 문제를 해결하며 사용자
              경험을 고려한 UI 구현과 기능 개발을 맡았습니다.
            </p>
          ) : (
            <p className={clsx("mt-3 text-gray400 font-light")}>
              실제 서비스에 투입된 프로젝트에서 디자이너, 백엔드 개발자와
              협업하며 퍼블리싱을 담당했습니다.
              <br />
              기획 의도와 사용자 경험을 고려해 구현했으며, 다양한 디바이스와
              브라우저 환경에서도 일관된 UI가 유지되도록 작업되었습니다.
            </p>
          )}
        </div>
        <Carousel type={type} />
      </div>
    </ContentsLayout>
  );
}
