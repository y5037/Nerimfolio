import { useEffect, useState } from "react";

interface CollaborationModule {
  collaborationContentMap: Record<string, React.ReactNode>;
}

const contentMap: Record<number, () => Promise<CollaborationModule>> = {
  1: () => import("@/app/projects/[type]/[id]/components/frontend/components/contents/collaborationMap/albaform"),
  3: () => import("@/app/projects/[type]/[id]/components/frontend/components/contents/collaborationMap/globalnomad"),
  4: () => import("@/app/projects/[type]/[id]/components/frontend/components/contents/collaborationMap/taskify"),
  5: () => import("@/app/projects/[type]/[id]/components/frontend/components/contents/collaborationMap/rolling"),
};

export const useCollaborationContent = (paramsId: number) => {
  const [content, setContent] = useState<Record<
    string,
    React.ReactNode
  > | null>(null);

  useEffect(() => {
    const load = async () => {
      if (contentMap[paramsId]) {
        const { collaborationContentMap } = await contentMap[paramsId]();
        setContent(collaborationContentMap);
      }
    };
    load();
  }, [paramsId]);

  return { content };
};
