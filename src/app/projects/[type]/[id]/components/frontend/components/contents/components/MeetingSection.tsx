import { MeetingData } from "@/types/projects";

export default function MeetingSection({
  meetingData,
}: {
  meetingData: MeetingData[];
}) {
  return (
    <div className="space-y-6 text-white/80 text-sm">
      {meetingData.map(({ icon, title, description, list }, idx) => (
        <div
          key={idx}
          className="p-4 rounded-xl bg-[rgba(0,0,0,.1)] backdrop-blur space-y-1"
        >
          <p className="flex items-center font-semibold text-white">
            <span className="mr-2 text-xl">{icon}</span>
            {title}
          </p>
          {description && <p>{description}</p>}
          {list && (
            <ul className="pt-2 space-y-2 pl-4 list-disc">
              {list.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
