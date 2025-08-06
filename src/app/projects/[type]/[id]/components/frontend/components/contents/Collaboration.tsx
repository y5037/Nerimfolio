import { collaborationCards } from "@/lib/constants/collaborationCards";
import CollaborationCard from "./components/CollaborationCard";
import { useParamsId } from "@/utils/getParamsId";
import { useCollaborationContent } from "@/app/projects/hooks/useCollaborationContent";
import clsx from "clsx";

export default function Collaboration() {
  const paramsId = useParamsId();
  const { content } = useCollaborationContent(paramsId);

  if (!content) return null;
  return (
    <section className={clsx("relative max-w-7xl mx-auto")}>
      <div className={clsx("flex-col space-y-16")}>
        {collaborationCards.map(({ key, ...rest }, idx) => (
          <CollaborationCard
            key={key}
            {...rest}
            delay={idx * 0.1}
            content={content[key]}
          />
        ))}
      </div>
    </section>
  );
}
