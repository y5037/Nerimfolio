import clsx from "clsx";
import Image from "next/image";

export default function ProfileContainer() {
  return (
    <div className={clsx("flex mt-20 mb-10")}>
      <div
        className={clsx(
          "relative w-[150px] min-w-[150px] h-[150px] rounded-full overflow-hidden border border-solid border-gray-300"
        )}
      >
        <Image
          src="/images/about/profile.jpg"
          alt="profile"
          fill
          className={clsx("object-cover")}
        />
      </div>
      <div className={clsx("ml-16 flex flex-col justify-around")}>
        <div className={clsx("flex items-center gap-10 font-light text-lg")}>
          <p>
            Projects <span className={clsx("font-semibold")}>0</span>
          </p>
          <p>
            Markups <span className={clsx("font-semibold")}>0</span>
          </p>
          <p>
            Posts <span className={clsx("font-semibold")}>0</span>
          </p>
        </div>
        <p className={clsx("font-light")}>
          소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다소개글입니다
        </p>
      </div>
    </div>
  );
}
