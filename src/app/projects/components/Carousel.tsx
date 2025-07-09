"use client";

import Image from "next/image";
import Slider from "react-slick";
import clsx from "clsx";
import { settings } from "@/lib/constants/slickSettings";
import { frontendProject } from "@/data/projects/frontend";
import { ProjectData } from "@/types/projects";
import { publishingProject } from "@/data/projects/publishing";
import React from "react";
import { useClickWithoutDrag } from "../hooks/useClickWithoutDrag";

export default function Carousel({
  type,
}: {
  type: "frontend" | "publishing";
}) {
  const projectData: ProjectData[] =
    type === "frontend" ? frontendProject : publishingProject;

  const { handleMouseDown, handleMouseUp } = useClickWithoutDrag();

  return (
    <Slider {...settings}>
      {projectData.map((project) => (
        <div
          key={project.id}
          className={clsx("px-4 max-md:px-1")}
          onMouseDown={handleMouseDown}
          onMouseUp={(e) => handleMouseUp(e, project.id)}
        >
          <div className={clsx("relative")}>
            <div
              className={clsx(
                type === "frontend" && "absolute inset-0 bg-black opacity-20",
                "max-md:opacity-20"
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
                    type === "frontend" &&
                      project.id === 4 &&
                      "ml-[-10px] max-md:ml-0",
                    type === "frontend" &&
                      project.id === 5 &&
                      "ml-[-8px] max-md:ml-0"
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
            <Image
              src={project.thumbnailImg}
              alt={project.title}
              width={800}
              height={400}
              className={clsx("rounded-xl object-cover min-h-[261px]")}
            />
          </div>
          <p
            className={clsx(
              "mt-3 mb-4 break-words font-light",
              type === "frontend" && "hidden max-md:block"
            )}
          >
            {project.description}
          </p>
        </div>
      ))}
    </Slider>
  );
}
