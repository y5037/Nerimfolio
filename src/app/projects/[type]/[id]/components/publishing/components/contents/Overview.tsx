import { overviewLinkButton, overviewLiTitle } from "@/app/projects/styles";
import AnimatedCircle from "@/components/progressbar/AnimatedCircle";
import { publishingOverviewData } from "@/data/projects/detail/overview";
import { useModalController } from "@/hooks/useModalController";
import clsx from "clsx";
import ScreenshotModal from "../../../common/ScreenshotModal";
import { useState } from "react";
import Image from "next/image";
import { getParamsId } from "@/utils/getParamsId";

export default function Overview() {
  const [isScreenshot, setIsScreenshot] = useState("");

  const paramsId = getParamsId();
  const data = publishingOverviewData.find((item) => {
    return item.id === paramsId;
  });

  const { showModal, isVisible, open, close, handleExitComplete } =
    useModalController();

  if (!data) return;
  return (
    <>
      {showModal && (
        <ScreenshotModal
          $publishingOverview
          imgSrc={isScreenshot}
          controller={{ isVisible, close, handleExitComplete }}
        />
      )}
      <div className={clsx("pb-10")}>
        <p className={clsx("text-2xl font-bold mb-2")}>{data.title}</p>
        <div>
          {data.description.map((text, idx) => (
            <p key={idx} className={clsx("text-gray400 font-light")}>
              {text}
            </p>
          ))}
        </div>
        <div className={clsx("mt-5 flex items-center flex-wrap gap-2")}>
          {data.keyword.map((keyword, idx) => (
            <p
              key={idx}
              className={clsx(
                "min-w-fit font-light text-gray500 bg-black500 rounded-full px-2 py-1 text-xs"
              )}
            >
              #{keyword}
            </p>
          ))}
        </div>
      </div>
      <ul className={clsx("text-gray-300 mt-5 space-y-10")}>
        <li>
          <h2 className={clsx(overviewLiTitle, "border-amber-400")}>
            진행 기간
          </h2>
          {data.period}
        </li>
        <li>
          <h2 className={clsx(overviewLiTitle, "border-rose-400")}>소속</h2>
          {data.department}
        </li>
        <li className={clsx("flex flex-col")}>
          <h2 className={clsx(overviewLiTitle, "border-blue-400")}>역할</h2>
          <ul
            className={clsx(
              "relative borde border-solid border-slate-700 pl-4 space-y-2"
            )}
          >
            {data.responsibilities!.map((item, i) => (
              <li key={i} className={clsx("relative")}>
                <span
                  className={clsx(
                    "absolute -left-[9px] top-[6.8px] w-1.5 h-1.5 bg-slate-800 rounded-full border border-solid border-white"
                  )}
                />
                <p className={clsx("text-sm text-slate-300 ml-1 font-light")}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h2 className={clsx(overviewLiTitle, "border-purple-400")}>
            디자인 시안
          </h2>
          {data.id !== 1 && (
            <p
              className={clsx("mt-[-7px] mb-5 text-sm text-gray300 font-light")}
            >
              기업 보안을 고려하여 디자인 시안의 세부 요소가 노출되지 않도록,
              일부 축소·간략화된 스크린샷만 제공드리는 점 참고 부탁드립니다.
            </p>
          )}
          <div
            className={clsx(
              "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            )}
          >
            {data.designScreenshots!.map((src, i) => (
              <div
                key={i}
                className={clsx(
                  "relative h-[calc(100vw_*_(150/375))] cursor-pointer",
                  "sm:h-[calc(100vw_*_(120/480))]",
                  "md:h-[calc(100vw_*_(100/768))] md:max-h-[150px]",
                  "lg1050:max-h-[130px]"
                )}
              >
                <Image
                  src={src}
                  alt={`${data.title} ${i + 1}`}
                  fill
                  className={clsx("rounded-lg shadow-md")}
                  onClick={() => {
                    open();
                    setIsScreenshot(src);
                  }}
                />
              </div>
            ))}
          </div>
        </li>
      </ul>
      <div className={clsx("flex gap-7 mt-14 mb-20", "max-xs:mb-9")}>
        {data.progressbar.map((data, idx) => (
          <AnimatedCircle key={idx} data={data} />
        ))}
      </div>
      <div className={clsx("flex items-center gap-3 mt-20")}>
        <button
          className={clsx(overviewLinkButton, "bg-[#374151]")}
          onClick={() => window.open(data.diveInLink)}
        >
          Live Site
        </button>
      </div>
    </>
  );
}
