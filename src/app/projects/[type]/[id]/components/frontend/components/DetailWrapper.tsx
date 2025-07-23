import clsx from "clsx";
import ContentsContainer from "./ContentsContainer";
import MenuContainer from "./MenuContainer";

export default function DetailWrapper() {
  return (
    <div
      className={clsx(
        "flex gap-16",
        "max-lg:gap-5",
        "max-[530px]:mt-7",
        "max-xs500:gap-3"
      )}
    >
      <MenuContainer />
      <ContentsContainer />
    </div>
  );
}
