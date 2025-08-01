import { overviewLinkButton, overviewLiTitle } from "@/app/projects/styles";
import AnimatedCircle from "@/components/progressbar/AnimatedCircle";
import { frontendOverviewData } from "@/data/projects/detail/overview";
import { tagColors } from "@/lib/constants/tagColors";
import { useParamsId } from "@/utils/getParamsId";
import clsx from "clsx";
import Image from "next/image";

export default function Overview() {
  const paramsId = useParamsId();
  const data = frontendOverviewData.find((item) => {
    return item.id === paramsId;
  });

  if (!data) return;
  return (
    <>
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
      <div
        className={clsx(
          "relative w-full h-[calc(100vw_*_(150/390))] max-h-[500px]"
        )}
      >
        <Image
          src={data.thumbnail!}
          alt={data.title}
          fill
          className={clsx("object-cover object-[25%_38%]")}
        />
      </div>
      <ul className={clsx("text-gray-300 mt-5 space-y-10")}>
        <li>
          <h2 className={clsx(overviewLiTitle, "border-amber-400")}>
            진행 기간
          </h2>
          {data.period}
        </li>
        <li>
          <h2 className={clsx(overviewLiTitle, "border-rose-400")}>팀원 수</h2>
          {data.member}명
        </li>
        <li className={clsx("flex flex-col gap-2")}>
          <h2 className={clsx(overviewLiTitle, "border-blue-400")}>
            기술 스택
          </h2>
          <div className={clsx("grid gap-4 sm:grid-cols-2 md:grid-cols-2")}>
            {data.stack!.map((categoryObj) =>
              Object.entries(categoryObj).map(([category, stacks]) => (
                <div
                  key={category}
                  className={clsx(
                    "rounded-2xl p-5 bg-gray-800/60",
                    "shadow-sm border border-solid border-gray-500/40"
                  )}
                >
                  <h3
                    className={clsx("text-base font-semibold mb-3 text-white")}
                  >
                    {category}
                  </h3>
                  <ul className={clsx("flex flex-wrap gap-2")}>
                    {stacks.map((stack, i) => {
                      const color = tagColors[i % tagColors.length];

                      return (
                        <li
                          key={stack}
                          className={clsx(
                            "text-sm px-3 py-1 rounded-full",
                            "text-gray100"
                          )}
                          style={{ background: color }}
                        >
                          {stack}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))
            )}
          </div>
        </li>
      </ul>
      <div className={clsx("flex gap-7 mt-12 mb-20", "max-xs:mb-9")}>
        {data.progressbar.map((data, idx) => (
          <AnimatedCircle key={idx} data={data} />
        ))}
      </div>
      <div className={clsx("flex items-center gap-3")}>
        <button
          className={clsx(overviewLinkButton, "bg-[#3c82f6]")}
          onClick={() => window.open(data.githubLink)}
        >
          GitHub
        </button>
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
