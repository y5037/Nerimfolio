"use client";

import { techPosts } from "@/data/techBlog";
import TitleContainer from "./sectionTitle/TitleContainer";
import SectionDefault from "@/components/layout/responsive/SectionDefault";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { tagColors } from "@/lib/constants/tagColors";

export default function TechBlogSection() {
  const router = useRouter();

  return (
    <>
      <TitleContainer id="InWords" />
      <SectionDefault>
        <div className="flex flex-wrap gap-x-[2%] gap-y-5 max-md:gap-y-7">
          {techPosts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between w-[31%] rounded-[8px] px-6 py-4 cursor-pointer max-lg1050:w-[48%] max-md:w-[100%] bg-[#1a1a1a] text-gray100"
              onClick={() => router.push(item.link)}
            >
              <p className="text-lg line-clamp-1 font-medium">{item.title}</p>
              <p className="mt-2 mb-6 line-clamp-2 font-light">
                {item.excerpt}
              </p>
              <div
                className={`flex items-center justify-between  font-light text-sm ${
                  item.category.length > 0 &&
                  "pb-3 border-b border-solid border-gray400"
                }`}
              >
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-2">
                    <Image
                      src="/images/home/techblogSection/profile.svg"
                      alt="profile"
                      width={25}
                      height={25}
                    />
                  </div>
                  <p>y5037</p>
                </div>
                <p className="text-right text-gray200">{item.date}</p>
              </div>
              <div
                className={`flex items-center ${
                  item.category.length > 0 && "mt-3"
                }`}
              >
                {item.category.map((keyword, i) => {
                  const color = tagColors[i % tagColors.length];

                  return (
                    <div
                      key={i}
                      className={`px-4 py-1 mr-3 rounded-[16px] bg-gray200 text-sm font-light`}
                      style={{ backgroundColor: color }}
                    >
                      {keyword}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </SectionDefault>
    </>
  );
}
