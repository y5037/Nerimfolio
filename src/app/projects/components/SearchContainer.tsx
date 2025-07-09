import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import clsx from "clsx";
import Image from "next/image";
import { SearchContainerProps } from "../types";

export default function SearchContainer({
  keyword,
  setKeyword,
}: SearchContainerProps) {
  return (
    <ContentsLayout>
      <div
        className={clsx(
          "group relative flex items-center border-b border-solid border-gray500 py-1 my-32",
          "max-[1310px]:w-1/2",
          "max-md:px-0 max-md:my-24",
          "max-xs:w-2/3 max-xs:my-16"
        )}
      >
        <input
          name="search"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword?.(e.target.value)}
          className={clsx(
            "w-full bg-transparent mr-3 focus:outline-none font-light",
            "max-md:mr-2"
          )}
        />
        <span
          className={clsx(
            "pointer-events-none absolute left-1/2 bottom-0 h-[1px] w-0 -translate-x-1/2 bg-white transition-all duration-500 group-focus-within:w-full"
          )}
        />
        <div
          className={clsx(
            "relative w-[30px] h-[30px] min-w-[30px]",
            "max-md:w-[25px] max-md:h-[25px] max-md:min-w-[25px]"
          )}
        >
          <Image
            src="/images/projects/searchSection/search.png"
            alt="Search"
            fill
            className={clsx("mt-[-5px]", "max-md:mt-[-2px]")}
            priority
          />
        </div>
      </div>
    </ContentsLayout>
  );
}
