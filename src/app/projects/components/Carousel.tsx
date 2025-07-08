"use client";

import Image from "next/image";
import Slider from "react-slick";
import { ProjectContentsProps } from "../types";
import clsx from "clsx";

export default function Carousel({
  $frontend,
  $publishing,
}: ProjectContentsProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const projectList = [
    {
      id: 1,
      title: "Albaform",
      thumbnail: "/images/projects/frontendSection/thumbnail/albaform.png",
    },
    {
      id: 2,
      title: "Fansign",
      thumbnail: "/images/projects/frontendSection/thumbnail/pandamarket.png",
    },
    {
      id: 3,
      title: "Fansign",
      thumbnail: "/images/projects/frontendSection/thumbnail/globalnomad.png",
    },
    {
      id: 4,
      title: "Fansign",
      thumbnail: "/images/projects/frontendSection/thumbnail/taskify.png",
    },
    {
      id: 5,
      title: "Fansign",
      thumbnail: "/images/projects/frontendSection/thumbnail/rolling.png",
    },
  ];

  return (
    <Slider {...settings}>
      {projectList.map((project) => (
        <div key={project.id} className="px-4 max-md:px-1">
          <div className="relative">
            <div className={clsx("absolute inset-0 bg-black opacity-20")} />
            <div
              className={clsx(
                "absolute z-1 bottom-7 left-[20px] right-[20px]",
                "max-md:bottom-4"
              )}
            >
              <Image
                src="/images/projects/frontendSection/logo/globalnomad.svg"
                alt="logo"
                width={150}
                height={30}
              />
              <p className={clsx("mt-3 font-light", "max-md:hidden")}>
                이렇게 저렇게 해서 만들었습니다.
              </p>
            </div>
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={800}
              height={400}
              className={clsx("rounded-xl object-cover")}
            />
          </div>
          <p className={clsx("mt-3 mb-4 font-light hidden", "max-md:block")}>
            이렇게 저렇게 해서 만들었습니다.
          </p>
        </div>
      ))}
    </Slider>
  );
}
