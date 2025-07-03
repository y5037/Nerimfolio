"use client";

import clsx from "clsx";
import { scrollLinks } from "./constants/scrollLinks";
import { handleClickScrollTo } from "./utils/handleClickScrollTo";

export default function ScrollTo({ coord }: { coord: string }) {
  return (
    <div
      className={clsx("flex items-center justify-center mx-auto gap-20 my-32")}
    >
      {scrollLinks.map((item, i) => {
        return (
          <button
            className={clsx(
              "w-[10px] h-[10px] border-spacing-[2px] border-solid cursor-pointer hover:bg-white duration-[.2s]",
              coord === item && "bg-white"
            )}
            key={i}
            onClick={() => handleClickScrollTo(item)}
          />
        );
      })}
    </div>
  );
}
