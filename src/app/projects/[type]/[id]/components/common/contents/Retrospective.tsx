"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import {
  FrontendRetrospectiveData,
  PublishingRetrospectiveData,
} from "@/data/projects/detail/retrospective";
import { useParamsId } from "@/utils/getParamsId";

export default function Retrospective({ $frontend }: { $frontend: boolean }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const paramsId = useParamsId();

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
          "justify-self-center mt-10 mb-20 animate-scrollHint",
          "max-md:mt-6 max-md:mb-10"
        )}
      />
      <div className="relative w-full">
        <div
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
              <div
                key={item.id}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={clsx(
                  "relative w-full h-96 cursor-pointer rounded-xl overflow-hidden transition-all ease-out shadow-[0_15px_30px_rgba(0,0,0,0.8),0_8px_15px_rgba(255,255,255,0.5)_inset]",
                  "bg-zinc-800 border border-zinc-700 shadow-lg",
                  "hover:scale-105",
                  isActive
                    ? "rotate-0 w-full max-w-4xl z-50 scale-105"
                    : isLeftTilt
                    ? "md:-rotate-6"
                    : "md:rotate-6",
                  isActive
                    ? "w-full max-w-4xl z-50 scale-105 border-0 animate-shadowPulse duration-[0]"
                    : "duration-1000"
                )}
                style={{
                  transitionProperty:
                    "transform, width, height, box-shadow, filter",
                }}
              >
                {!isActive && (
                  <span
                    className="absolute inset-0 pointer-events-none animate-shine z-10"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
                      filter: "blur(6px)",
                      animationDelay: delay,
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 transition-all duration-500 ease-out hover:brightness-110" />
                <div
                  className={clsx(
                    "relative w-full overflow-hidden rounded-t-xl transition-all duration-500",
                    isActive
                      ? "brightness-100 blur-0 h-full"
                      : "brightness-75 blur-sm"
                  )}
                >
                  <div className="absolute inset-0 bg-[rgba(0,0,0,.7)] z-10" />
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <div
                  className={clsx(
                    "flex items-center gap-2 absolute top-[-15px] duration-500",
                    isLeftTilt
                      ? "right-[-10px]"
                      : "left-[-10px] flex-row-reverse",
                    isActive
                      ? `opacity-100 text-xl top-[20px] ${
                          isLeftTilt ? "right-[25px]" : "left-[25px]"
                        } text-light text-zinc-400/50`
                      : "opacity-0 top-10"
                  )}
                >
                  <span className="text-xs text-gray300 font-light">
                    {item.subheading}
                  </span>
                  {String(item.id).padStart(2, "0")}
                </div>
                <div
                  className={clsx(
                    "absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500",
                    isActive
                      ? "opacity-100 translate-y-[-100px]"
                      : "opacity-30 translate-y-0",
                    isActive && isLeftTilt
                      ? "lg1050:translate-x-[20px]"
                      : isActive && !isLeftTilt
                      ? "lg1050:translate-x-[-20px]"
                      : null,
                    isLeftTilt ? "text-left" : "text-right"
                  )}
                  style={{
                    WebkitMaskImage: isActive
                      ? "none"
                      : "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskImage: isActive
                      ? "none"
                      : "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                  }}
                >
                  <div
                    className={clsx(
                      "text-lg sm:text-2xl font-semibold text-zinc-300 mb-5 group-hover:text-indigo-300"
                    )}
                  >
                    <p>{item.title}</p>
                    {isActive && (
                      <div
                        className={clsx(
                          "my-3 w-5 h-0.5 bg-gray200",
                          !isLeftTilt && "justify-self-end"
                        )}
                      />
                    )}
                  </div>
                  <p className="whitespace-pre-linetext-zinc-400 text-sm whitespace-pre-line leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-xl pointer-events-none transition-colors duration-500 border border-transparent hover:border-indigo-400" />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={clsx(
          "flex items-center mt-32 mb-10 justify-self-end",
          "md:px-8",
          "max-md:justify-between max-md:justify-self-auto",
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
            <span className="font-bold text-xl">Wrapping up</span> the{" "}
            <span className="text-gray500 font-robotoSlab">story</span>
            <br /> of this project’s journey.
          </p>
        </div>
        <Image
          src="/images/projects/detail/common/semicolon.svg"
          alt=";"
          width={20}
          height={50}
          className="mt-2 opacity-50"
        />
      </div>
    </>
  );
}
