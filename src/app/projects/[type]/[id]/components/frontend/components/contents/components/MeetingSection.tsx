import { MeetingData } from "@/types/projects";
import clsx from "clsx";

export default function MeetingSection({
  meetingData,
}: {
  meetingData: MeetingData[];
}) {
  return (
    <div className={clsx("space-y-6 text-white/80 text-sm")}>
      {meetingData.map(({ icon, title, description, list }, idx) => (
        <div
          key={idx}
          className={clsx(
            "p-4 rounded-xl bg-[rgba(0,0,0,.1)] backdrop-blur space-y-1"
          )}
        >
          <p
            className={clsx(
              "flex items-center font-semibold text-white text-base"
            )}
          >
            <span className={clsx("mr-2 text-xl")}>{icon}</span>
            {title}
          </p>
          {description && <p>{description}</p>}
          {list && (
            <ul className={clsx("pt-2 space-y-2 pl-4")}>
              {list.map((li, idx) => (
                <li key={idx} className="relative pl-4">
                  <span
                    className={clsx(
                      "absolute left-0 top-2 inline-block w-1 h-1 rounded-full bg-white"
                    )}
                  />
                  {li}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
