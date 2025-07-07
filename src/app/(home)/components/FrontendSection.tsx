"use client";

import clsx from "clsx";
import TitleContainer from "./sectionTitle/TitleContainer";
import { frontendSectionButton } from "../styles";
import Image from "next/image";
import React, { useState } from "react";
import { prontendProject } from "@/data/frontend";
import FixedBackgroundImg from "./FixedBackgroundImg";

export default function FrontendSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      <TitleContainer id="ThingsIBuilt" />
      <div
        className={clsx(
          "mx-auto w-[970px]",
          "max-lg:w-[900px] max-lg900:w-auto max-lg900:px-10 max-lg900:overflow-visible",
          "max-lg1050:w-[800px]",
          "max-md:px-6"
        )}
      >
        {prontendProject.map((item) => {
          const isHovered = hoveredId === item.id;
          return (
            <React.Fragment key={item.id}>
              <div
                className={clsx(
                  "relative h-[400px] mb-20 group",
                  "max-lg900:h-[670px] max-lg900:mb-0 max-lg900:last-of-type:h-[585px]",
                  item.id === 2 && "lg900:h-[600px]",
                  item.id === 5 && "lg900:h-[600px]"
                )}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={isHovered ? item.logoActiveImg : item.logoDefaultImg}
                  alt="logo"
                  width={100}
                  height={100}
                  className={clsx(
                    "absolute top-3 left-3",
                    (item.id === 2 || item.id === 4) &&
                      "lg900:right-3 lg900:left-auto"
                  )}
                />
                <FixedBackgroundImg
                  id={item.id}
                  thumbnailImg={item.thumbnailImg}
                />
                <div
                  className={clsx(
                    "flex flex-col w-[390px] absolute top-[60px] right-0 box-border px-[35px] py-5 bg-[rgba(255,255,255,.7)] shadow-gray text-black",
                    "max-lg900:relative max-lg900:w-full max-lg900:top-[420px] max-lg900:text-white max-lg900:bg-inherit max-lg900:p-0",
                    "max-xs500:w-auto",
                    (item.id === 2 || item.id === 4) && "right-auto left-0",
                    (item.id === 3 || item.id === 5) && "top-auto bottom-[60px]"
                  )}
                >
                  <div
                    className={clsx(
                      "flex flex-wrap items-center gap-x-2 font-light text-[rgba(0,0,0,.7)]",
                      "max-lg900:text-gray300"
                    )}
                  >
                    {item.keyword.map((tag, idx) => (
                      <p
                        key={idx}
                        className={clsx("underline underline-offset-2")}
                      >
                        #{tag}
                      </p>
                    ))}
                  </div>
                  <div className={clsx("flex-1")}>
                    <p className={clsx("text-3xl font-semibold my-2")}>
                      {item.title}
                    </p>
                    <p className={clsx("mt-4 mb-5")}>{item.description}</p>
                  </div>
                  <div className={clsx("flex items-center gap-4")}>
                    <button className={frontendSectionButton}>Explore</button>
                    <button className={frontendSectionButton}>Dive In</button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
