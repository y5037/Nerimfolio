import clsx from "clsx";
import Image from "next/image";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function Overview() {
  return (
    <>
      <div className={clsx("pb-10")}>
        <p className={clsx("text-2xl font-bold mb-1")}>알바폼 (albaform)</p>
        <p className={clsx("text-gray400 font-light")}>
          NEXT App Router · SSR/CSR 통합 기반 긱워커 취업 매칭 플랫폼
        </p>
        <p
          className={clsx(
            "mt-3 font-light text-gray500 bg-black500 rounded-full inline-block px-2 py-1 text-xs"
          )}
        >
          #Router
        </p>
      </div>
      <div
        className={clsx(
          "relative w-full h-[calc(100vw_*_(150/390))] max-h-[500px]"
        )}
      >
        <Image
          src="/images/projects/frontendSection/thumbnail/albaform.png"
          alt="thumbnail"
          fill
          className={clsx("object-cover")}
        />
      </div>
      <ul className={clsx("text-gray-300 mt-7 space-y-4")}>
        <li>
          <strong className={clsx("text-white")}>진행 기간:</strong> 2025.04 -
          06
        </li>
        <li>
          <strong className={clsx("text-white")}>팀원 수:</strong> 4명
        </li>
        <li>
          <strong className={clsx("text-white")}>기술 스택:</strong>{" "}
          {["React", "Next.js", "Zustand", "TailwindCSS"].join(", ")}
        </li>
      </ul>
      <div className={clsx("w-full h-28 gap-5 flex mt-7 mb-14")}>
        <CircularProgressbar
          value={80}
          text={`Frontend 70%`}
          styles={buildStyles({
            pathColor: "#10B981",
            textColor: "#fff",
            trailColor: "#333",
            textSize: "12px",
          })}
        />
        <CircularProgressbar
          value={65}
          text={`Publishing 65%`}
          styles={buildStyles({
            pathColor: "#10B981",
            textColor: "#fff",
            trailColor: "#333",
            textSize: "12px",
          })}
        />
      </div>
      <div className={clsx("flex items-center gap-3")}>
        <button className={clsx("bg-[#3c82f6] rounded-xl px-4 py-2")}>
          GitHub
        </button>
        <button className={clsx("bg-[#374151] rounded-xl px-4 py-2")}>
          Live Site
        </button>
      </div>
    </>
  );
}
