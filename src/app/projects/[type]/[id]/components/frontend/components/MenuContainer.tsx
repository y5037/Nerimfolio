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
            "absolute left-0 w-full h-[48px] bg-black700 rounded-xl transition-transform duration-300"
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
              "flex items-center text-gray100 font-light gap-2 pl-5 pr-12 py-3 rounded-xl cursor-pointer relative z-10"
            )}
            onClick={() => setIsActive(tab.title)}
          >
            <div className={clsx("relative w-[25px] h-[25px]")}>
              <Image src={tab.icon} alt={tab.title} fill />
            </div>
            <p>{tab.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
