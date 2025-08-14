"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import {
  FrontendRetrospectiveData,
  PublishingRetrospectiveData,
} from "@/data/projects/detail/retrospective";
import { useParamsId } from "@/utils/getParamsId";
import RetrospectiveCard from "./components/RetrospectiveCard";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function Retrospective({ $frontend }: { $frontend: boolean }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const paramsId = useParamsId();

  const { ref } = useClickOutside({ setActiveId });

  const retrospectiveData = $frontend
    ? FrontendRetrospectiveData
    : PublishingRetrospectiveData;

  const data = retrospectiveData.find((data) => data.id === paramsId);

  return (
    <>
      <Image
        src="/images/projects/detail/common/arrowDown.svg"
        alt="Down"
        width={30}
        height={30}
        className={clsx(
          "justify-self-center mt-10 mb-20 animate-scrollHint mx-auto",
          "max-md:mt-6 max-md:mb-10"
        )}
      />
      <div className={clsx("relative w-full")}>
        <div
          ref={ref}
          className={clsx(
            "flex flex-col items-center gap-y-16 pt-10",
            "md:gap-y-32 md:px-8"
          )}
        >
          {data?.retrospectiveGroup.map((item, idx) => {
            const isActive = activeId === item.id;
            const isLeftTilt = idx % 2 === 0;
            const delay = `-${idx * 1.5}s`;

            return (
              <RetrospectiveCard
                key={idx}
                item={item}
                setActiveId={setActiveId}
                isActive={isActive}
                isLeftTilt={isLeftTilt}
                delay={delay}
              />
            );
          })}
        </div>
      </div>
      <div
        className={clsx(
          "flex items-center mt-32 mb-10 justify-end",
          "md:px-8",
          "max-md:justify-between",
          "max-xs500:mt-24"
        )}
      >
        <div className={clsx("flex items-center gap-10")}>
          <p
            className={clsx(
              "font-light text-1xl mr-7",
              "max-md:mr-0 text-[rgba(255,255,255,.5)]"
            )}
          >
            <span className={clsx("font-bold text-xl")}>Wrapping up</span> the{" "}
            <span className={clsx("text-gray500 font-robotoSlab")}>story</span>
            <br /> of this project’s journey.
          </p>
        </div>
        <Image
          src="/images/projects/detail/common/semicolon.svg"
          alt=";"
          width={20}
          height={50}
          className={clsx("mt-2 opacity-50")}
        />
      </div>
    </>
  );
}
