import clsx from "clsx";
import ContentsContainer from "./ContentsContainer";
import MenuContainer from "./MenuContainer";

export default function DetailWrapper() {
  return (
    <div className={clsx("flex gap-16", "max-lg:gap-5")}>
      <MenuContainer />
      <ContentsContainer />
    </div>
  );
}
