"use client";

import { useSideTabMenu } from "@/hooks/useSideTabMenu";
import { frontendTabs } from "@/lib/constants/projectDetailTabs";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function MenuContainer() {
  const [isActive, setIsActive] = useState("Overview");
  const { indicatorY, itemRefs } = useSideTabMenu(frontendTabs, isActive);

  return (
    <div className={clsx("sticky top-24 h-fit")}>
      <ul className={clsx("relative")}>
        <div
          className={clsx(
            "absolute left-0 w-full h-[48px] bg-black700 rounded-xl transition-transform duration-300",
            "max-lg:h-[74px]",
            "max-md:h-[42px]"
          )}
          style={{ transform: `translateY(${indicatorY}px)` }}
        />
        {frontendTabs.map((tab, idx) => (
          <li
            key={idx}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className={clsx(
              "flex items-center text-gray100 font-light gap-2 pl-5 pr-12 py-3 rounded-xl cursor-pointer relative z-10",
              "max-lg:flex-col max-lg:text-sm max-lg:pr-2 max-lg:pl-2",
              "max-md:pl-3 max-md:pr-3"
            )}
            onClick={() => setIsActive(tab.title)}
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
            <p className={clsx("max-lg:text-sm", "max-md:hidden")}>
              {tab.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
