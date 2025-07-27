"use client";

import { DetailTab } from "@/app/projects/types";
import { useSideTabMenu } from "@/hooks/useSideTabMenu";
import {
  frontendTabs,
  publishingTabs,
} from "@/lib/constants/projectDetailTabs";
import clsx from "clsx";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function MenuContainer({
  isActive,
  setIsActive,
  $frontend,
}: DetailTab) {
  const { indicatorX, indicatorY, itemRefs, indicatorWidth } = useSideTabMenu(
    $frontend ? frontendTabs : publishingTabs,
    isActive
  );

  const params = useParams();

  const tabData = $frontend ? frontendTabs : publishingTabs;

  return (
    <div
      className={clsx("sticky top-24 h-fit", "max-md:static max-md:mt-3 mb-2")}
    >
      <div
        className={clsx(
          "relative",
          "max-md:flex max-md:flex-row max-md:min-h-[48px]"
        )}
      >
        <div
          className={clsx(
            "absolute left-0 w-full h-[48px] bg-black700 rounded-xl transition-transform duration-300",
            "max-lg:h-[74px]",
            "max-md:hidden"
          )}
          style={{ transform: `translateY(${indicatorY}px)` }}
        />
        <div
          className={clsx(
            "relative hide-scrollbar",
            "max-md:flex max-md:flex-row max-md:overflow-x-scroll"
          )}
        >
          <div
            className={clsx(
              "h-12 absolute top-0 bg-black700 rounded-full transition-transform duration-300",
              "md:hidden"
            )}
            style={{
              transform: `translateX(${indicatorX}px)`,
              width: `${indicatorWidth}px`,
            }}
          />
          {tabData.map((tab, idx) => {
            if ($frontend && params.id === "2" && idx === 3) return null;

            return (
              <div
                key={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className={clsx(
                  "flex items-center text-gray100 font-light gap-2 pl-5 pr-12 py-3 rounded-xl cursor-pointer relative z-10",
                  "max-lg:flex-col max-lg:text-sm max-lg:pr-2 max-lg:pl-2",
                  "max-md:px-4 max-md:flex-row max-md:min-w-fit"
                )}
                onClick={() => setIsActive?.(tab.title)}
              >
                <div
                  className={clsx(
                    "relative w-[25px] h-[25px]",
                    "max-lg:w-[22px] max-lg:h-[22px]",
                    "max-md:w-[18px] max-md:h-[18px]"
                  )}
                >
                  <Image src={tab.icon} alt={tab.title} fill />
                </div>
                <p className={clsx("max-lg:text-sm")}>{tab.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
