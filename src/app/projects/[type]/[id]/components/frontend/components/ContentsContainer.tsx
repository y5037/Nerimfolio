import clsx from "clsx";
import Overview from "./contents/Overview";

export default function ContentsContainer() {
  return (
    <div
      className={clsx(
        "flex-[1] flex-wrap rounded-md bg-black700 px-7 py-10 mb-[80px]",
        "max-lg:rounded-xl"
      )}
    >
      <Overview />
    </div>
  );
}
