import { collaborationCards } from "@/lib/constants/collaborationCards";
import CollaborationCard from "./components/CollaborationCard";
import Image from "next/image";

export default function Collaboration() {
  return (
    <section className="relative max-w-7xl mx-auto">
      <div className="mb-12 pb-2 flex items-center justify-between">
        <header>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-violet-500 inline-block">
            Collaboration
          </h2>
          <div className="mt-1">
            <p className="inline-block text-sm text-gray200 font-light relative ml-0.5">
              [팀워크로 완성한 프로젝트 이야기]
              <span
                aria-hidden="true"
                className="absolute left-0 bottom-0 w-full h-[5px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-sm animate-pulse"
              />
            </p>
          </div>
        </header>
        <Image
          src="/images/projects/detail/common/sort.svg"
          alt="Filter"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>
      <div className="flex-col space-y-16">
        {collaborationCards.map((card, index) => (
          <CollaborationCard key={card.title} {...card} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
}
