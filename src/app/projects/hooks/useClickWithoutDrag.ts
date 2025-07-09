import { useRouter } from "next/navigation";
import { useRef } from "react";

export const useClickWithoutDrag = () => {
  const router = useRouter();
  const dragStart = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    dragStart.current = e.clientX;
  };

  const handleMouseUp = (
    e: React.MouseEvent<HTMLDivElement>,
    projectId: number
  ) => {
    if (dragStart.current === null) return;

    const dragDistance = Math.abs(e.clientX - dragStart.current);
    if (dragDistance < 10) {
      router.push(`/projects/${projectId}`);
    }
    dragStart.current = null;
  };

  return { handleMouseDown, handleMouseUp };
};
