"use client";

import Image from "next/image";
import Slider from "react-slick";
import clsx from "clsx";
import { customSettings } from "@/lib/constants/slickSettings";
import { frontendProject } from "@/data/projects/frontend";
import { ProjectData } from "@/types/projects";
import { publishingProject } from "@/data/projects/publishing";
import React, { useState } from "react";
import { useClickWithoutDrag } from "../hooks/useClickWithoutDrag";
import Skeleton from "@/components/skeleton/Skeleton";

export default function Carousel({
  type,
  keyword,
}: {
  type: "frontend" | "publishing";
  keyword: string;
}) {
  const [loadedMap, setLoadedMap] = useState<{ [key: number]: boolean }>({});

  const projectData: ProjectData[] =
    type === "frontend" ? frontendProject : publishingProject;

  const filteredData = keyword.trim()
    ? projectData.filter(
        (project) =>
          project.title.toLowerCase().includes(keyword.toLowerCase()) ||
          project.name.toLowerCase().includes(keyword.toLowerCase()) ||
          project.description.toLowerCase().includes(keyword.toLowerCase())
      )
    : projectData;

  const { handleMouseDown, handleMouseUp } = useClickWithoutDrag(type);

  const { settings } = customSettings();

  return filteredData.length > 0 ? (
    <div className={clsx(filteredData.length < 3 && "leftMode")}>
      <Slider {...settings}>
        {filteredData.map((project) => (
          <div
            key={project.id}
            className={clsx("px-4 max-md:px-1 cursor-pointer")}
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => handleMouseUp(e, project.id)}
          >
            <div className={clsx("relative")}>
              <div
                className={clsx(
                  type === "frontend" && "absolute inset-0 bg-black opacity-40",
                  "max-md:opacity-10"
                )}
              />
              <div
                className={clsx(
                  "absolute z-1",
                  type === "frontend" &&
                    "bottom-7 left-[20px] right-0 break-words pr-[20px] max-md:bottom-4 max-md:left-1/2 max-md:-translate-x-1/2 max-md:pr-0 max-md:w-fit max-md:text-center",
                  type === "publishing" && "right-[20px] top-0"
                )}
              >
                <div
                  className={clsx(
                    "relative w-[120px] h-[30px]",
                    type === "publishing" && "w-[80px] h-[70px]"
                  )}
                >
                  <Image
                    src={project.logoImg}
                    alt="logo"
                    fill
                    className={clsx(
                      loadedMap[project.id] ? "opacity-100" : "opacity-0",
                      type === "frontend" &&
                        project.id === 4 &&
                        "ml-[-10px] max-md:ml-0",
                      type === "frontend" &&
                        project.id === 5 &&
                        "ml-[-8px] max-md:ml-0",
                      type === "publishing" && project.id === 1 && "ml-[20px]"
                    )}
                  />
                </div>
                <p
                  className={clsx(
                    "mt-3 font-light",
                    type === "publishing" && "hidden",
                    type === "frontend" && "max-md:hidden"
                  )}
                >
                  {project.description}
                </p>
              </div>
              {!loadedMap[project.id] && <Skeleton />}
              <Image
                src={project.thumbnailImg}
                alt={project.title}
                width={800}
                height={400}
                className={clsx(
                  "rounded-xl object-cover min-h-[261px]",
                  loadedMap[project.id] ? "opacity-100" : "opacity-0"
                )}
                onLoad={() =>
                  setLoadedMap((prev) => ({ ...prev, [project.id]: true }))
                }
              />
            </div>
            {!loadedMap[project.id] ? (
              <>
                <Skeleton $text1 />
                <Skeleton $text2 />
              </>
            ) : (
              <p
                className={clsx(
                  "mt-3 mb-4 break-words font-light",
                  type === "frontend" && "hidden max-md:block"
                )}
              >
                {project.description}
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  ) : (
    <div className={clsx("text-center mt-24 mb-20 text-gray-300")}>
      <Image
        src="/images/projects/searchSection/notFound.png"
        alt="X"
        width={30}
        height={30}
        className={clsx("mx-auto")}
      />
      <p className={clsx("mt-1 font-light")}>검색 결과가 없습니다</p>
    </div>
  );
}
