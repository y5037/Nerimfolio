import {
  COLLABORATIONICONS_MAP,
  IconKey,
} from "@/lib/constants/collaborationIcons";
import clsx from "clsx";
import Image from "next/image";
import CollaborationContent from "./CollaborationContent";

export default function CollaborationCard({
  iconKey,
  title,
  color,
  thumbnail,
  delay,
  content,
}: {
  iconKey: IconKey;
  title: string;
  color: string;
  thumbnail: string;
  delay?: number;
  content: React.ReactNode;
}) {
  const IconComponent = COLLABORATIONICONS_MAP[iconKey];

  return (
    <div
      className={clsx(
        `flex flex-col relative group rounded-3xl border border-gray-700  shadow-xl transition-all duration-300 min-h-[500px] overflow-hidden`,
        "lg900:scale-[0.98] lg900:hover:scale-[1] group"
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={clsx("relative w-full h-[250px]")}>
        <div
          className={clsx(
            "absolute inset-0 bg-[rgba(0,0,0,.7)] z-10 group-hover:lg900:bg-[rgba(0,0,0,.8)] duration-300"
          )}
        />
        <Image
          src={thumbnail}
          alt="team"
          fill
          className={clsx("object-cover")}
        />
        <div
          className={clsx(
            "h-full flex-col content-center justify-self-center justify-items-center items-center gap-3 absolute z-[11]"
          )}
        >
          <div
            className={clsx(
              `w-12 h-12 mb-2 flex items-center justify-center rounded-full text-white shadow-md bg-gradient-to-br ${color}`
            )}
          >
            <IconComponent size={22} />
          </div>
          <h3
            className={clsx("text-lg font-semibold text-white tracking-tight")}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className={clsx("flex-1 p-6 h-full", ` bg-gradient-to-br ${color}`)}>
        <div className={clsx("text-sm text-white leading-relaxed")}>
          <CollaborationContent content={content} />
        </div>
      </div>
    </div>
  );
}
