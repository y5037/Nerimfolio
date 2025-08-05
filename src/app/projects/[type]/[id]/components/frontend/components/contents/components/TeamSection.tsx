import { TeamData } from "@/types/projects";
import clsx from "clsx";

export default function TeamSection({ teamData }: { teamData: TeamData[] }) {
  const target = teamData.find((me) => me.name.toString().includes("윤혜림"));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {teamData.map(({ name, roles }) => (
        <div
          key={name}
          className="rounded-2xl backdrop-blur border border-solid border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.1)] pb-6 space-y-5 overflow-hidden"
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
          <ul className="list-disc list-inside text-sm text-white/80 leading-relaxed space-y-1 px-10">
            {roles.map((role, idx) => (
              <li
                key={idx}
                className={clsx(
                  target?.roles?.includes(role)
                    ? "marker:text-[rgba(0,0,0,.6)] text-black"
                    : "marker:text-white"
                )}
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
