import clsx from "clsx";
import Image from "next/image";

export default function StoryHead({
  isClose,
  $story1,
  $story2,
  $story3,
  $story4,
}: {
  isClose: () => void;
  $story1?: boolean;
  $story2?: boolean;
  $story3?: boolean;
  $story4?: boolean;
}) {
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
              "relative w-[30px] h-[30px] rounded-full overflow-hidden border border-solid border-white"
            )}
          >
            <Image
              src="/images/about/profile.jpg"
              alt="프로필"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className={clsx("ml-2 font-light text-sm")}>윤 혜림</p>
            <p className={clsx("ml-2 font-light text-sm text-gray200")}>
              {$story1
                ? "am 10:00 ~ pm 10:00 (with a short break in the evening)"
                : $story2
                ? "pm 4:00 - pm 5:00"
                : $story3
                ? "pm 6:00 - pm 7:30"
                : $story4
                ? "am 6:30 - am 8:00"
                : ""}
            </p>
          </div>
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
