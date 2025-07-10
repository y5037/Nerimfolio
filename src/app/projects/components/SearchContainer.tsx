"use client";

import clsx from "clsx";
import Image from "next/image";
import { SearchContainerProps } from "../types";
import { KeyboardEvent, useState } from "react";

export default function SearchContainer({
  keyword,
  setKeyword,
}: SearchContainerProps) {
  const [inputValue, setInputValue] = useState(keyword ?? "");

  const handleEnterKeyword = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setKeyword?.(inputValue.trim());
    }
  };
  return (
    <div className={clsx("py-28", "max-md:py-24", "max-xs:py-20")}>
      <div
        className={clsx(
          "group relative flex items-center border-b border-solid border-gray500 py-1",
          "max-[1310px]:w-1/2",
          "max-md:px-0",
          "max-xs:w-2/3"
        )}
      >
        <input
          name="search"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleEnterKeyword}
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
    </div>
  );
}
