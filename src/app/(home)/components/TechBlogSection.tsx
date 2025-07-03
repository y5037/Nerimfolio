"use client";

import { techPosts } from "@/data/techBlog";
import TitleContainer from "./sectionTitle/TitleContainer";
import SectionDefault from "@/components/layout/responsive/SectionDefault";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { tagColors } from "@/lib/constants/tagColors";
import clsx from "clsx";
import { useState } from "react";

export default function TechBlogSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const visiblePosts = techPosts.slice(0, visibleCount);
  const hasMore = visibleCount < techPosts.length;

  const router = useRouter();

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <TitleContainer id="InWords" />
      <SectionDefault>
        <div
          className={clsx(
            "flex flex-wrap gap-x-[2%] gap-y-5",
            "max-md:gap-y-7"
          )}
        >
          {visiblePosts.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "flex flex-col justify-between w-[31%] rounded-[8px] px-6 py-4 cursor-pointer bg-[#1a1a1a] text-gray100",
                "max-lg1050:w-[48%]",
                "max-md:w-[100%]"
              )}
              onClick={() => router.push(item.link)}
            >
              <p className={clsx("text-lg line-clamp-1 font-medium")}>
                {item.title}
              </p>
              <p className={clsx("mt-2 mb-6 line-clamp-2 font-light")}>
                {item.excerpt}
              </p>
              <div
                className={clsx(
                  "flex items-center justify-between font-light text-sm",
                  item.category.length > 0 &&
                    "pb-3 border-b border-solid border-gray400"
                )}
              >
                <div className={clsx("flex items-center")}>
                  <div className={clsx("rounded-full overflow-hidden mr-2")}>
                    <Image
                      src="/images/home/techblogSection/profile.svg"
                      alt="profile"
                      width={25}
                      height={25}
                    />
                  </div>
                  <p>y5037</p>
                </div>
                <p className={clsx("text-right text-gray200")}>{item.date}</p>
              </div>
              <div
                className={clsx(
                  "flex items-center",
                  item.category.length > 0 && "mt-3"
                )}
              >
                {item.category.map((keyword, i) => {
                  const color = tagColors[i % tagColors.length];

                  return (
                    <div
                      key={i}
                      className={clsx(
                        "px-4 py-1 mr-3 rounded-[16px] bg-gray200 text-sm font-light"
                      )}
                      style={{ backgroundColor: color }}
                    >
                      {keyword}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          {!hasMore && (
            <div
              className={clsx(
                "min-h-[194px] relative flex items-center border border-solid border-gray400 w-[31%] rounded-[8px] px-10 py-8 text-gray100 cursor-pointer",
                "max-lg1050:w-[48%]",
                "max-md:w-[100%]"
              )}
              onClick={() =>
                window.open("https://velog.io/@nerimy/posts", "_blank")
              }
            >
              <Image
                src="/images/home/techblogSection/curlyArrow.png"
                alt="->"
                width={65}
                height={65}
                className={clsx("absolute top-4 right-10")}
              />
              <Image
                src="/images/home/techblogSection/velog.svg"
                alt="Velog"
                width={40}
                height={40}
                className={clsx("mr-5 pt-4")}
              />
              <p className={clsx("pt-4 font-light")}>
                <span className={clsx("font-semibold")}>Click</span> 하고,
                <span className={clsx("block underline")}>
                  더 많은 글 보러 가기
                </span>
              </p>
            </div>
          )}
          {isLoading ? (
            <div className="flex justify-center mt-3 w-full mb-0.5">
              <Image
                src="/images/common/loader.gif"
                alt="Loading..."
                width={40}
                height={40}
              />
            </div>
          ) : (
            hasMore && (
              <div className="flex justify-center mt-3 w-full">
                <button
                  onClick={handleLoadMore}
                  className="w-10 h-10 rounded-full border border-solid text-gray200 text-center"
                >
                  +
                </button>
              </div>
            )
          )}
        </div>
      </SectionDefault>
    </>
  );
}
