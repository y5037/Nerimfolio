import clsx from "clsx";
import ContentsContainer from "./ContentsContainer";
import MenuContainer from "./MenuContainer";
import { useState } from "react";

export default function DetailWrapper() {
  const [isActive, setIsActive] = useState("Overview");

  return (
    <div
      className={clsx(
        "flex gap-16",
        "max-lg:gap-5",
        "max-md:flex-col",
        "max-[530px]:mt-7",
        "max-xs500:gap-3"
      )}
    >
      <MenuContainer isActive={isActive} setIsActive={setIsActive} />
      <ContentsContainer isActive={isActive} />
    </div>
  );
}
