import clsx from "clsx";
import Image from "next/image";

export default function StoryHead({ isClose }: { isClose: () => void }) {
  return (
    <>
      <div className={clsx("absolute inset-0 bg-[rgba(0,0,0,.4)]")} />
      <div
        className={clsx(
          "absolute top-3 left-3 right-3 flex items-center justify-between z-10"
        )}
      >
        <div className={clsx("flex items-center")}>
          <div
            className={clsx(
              "relative w-[28px] h-[28px] rounded-full overflow-hidden border border-solid border-white"
            )}
          >
            <Image
              src="/images/about/profile.jpg"
              alt="프로필"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className={clsx("ml-2 font-light text-sm")}>윤 혜림</p>
        </div>
        <Image
          src="/images/common/close.svg"
          alt="X"
          width={20}
          height={20}
          className={clsx("cursor-pointer")}
          onClick={isClose}
        />
      </div>
    </>
  );
}
