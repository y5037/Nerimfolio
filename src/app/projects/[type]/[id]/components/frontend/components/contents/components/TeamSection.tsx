import { TeamData } from "@/types/projects";
import clsx from "clsx";

export default function TeamSection({ teamData }: { teamData: TeamData[] }) {
  const target = teamData.find((me) => me.name.toString().includes("윤혜림"));

  return (
    <div className={clsx("grid grid-cols-1 sm:grid-cols-2 gap-4")}>
      {teamData.map(({ name, roles }) => (
        <div
          key={name}
          className={clsx(
            "rounded-2xl backdrop-blur border border-solid border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.1)] pb-6 space-y-5 overflow-hidden"
          )}
        >
          <div
            className={clsx(
              "text-base relative text-center font-semibold text-white ml-[-5px] py-4",
              name.toString().includes("윤혜림")
                ? "bg-[rgba(0,0,0,.8)]"
                : "bg-[rgba(0,0,0,.1)]"
            )}
          >
            {name}
          </div>
          <ul
            className={clsx(
              "text-sm text-white/80 leading-relaxed space-y-1 px-10"
            )}
          >
            {roles.map((role, idx) => (
              <li
                key={idx}
                className={clsx(
                  "relative pl-4",
                  target?.name?.includes(name)
                    ? "marker:text-[rgba(0,0,0,.6)] text-black"
                    : "marker:text-white"
                )}
              >
                <span
                  className={clsx(
                    "absolute left-0 top-2 inline-block w-1 h-1 rounded-full",
                    target?.name?.includes(name)
                      ? "bg-[rgba(0,0,0,.6)]"
                      : "bg-white"
                  )}
                />
                {role}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
