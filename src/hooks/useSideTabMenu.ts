import { TabMenu } from "@/types/projects";
import { useEffect, useRef, useState } from "react";

export const useSideTabMenu = (tabs: TabMenu[], activeMenu: string) => {
  const [indicatorY, setIndicatorY] = useState(0);

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const idx = tabs.findIndex((tab) => tab.title === activeMenu);
    const targetEl = itemRefs.current[idx];
    if (targetEl) {
      setIndicatorY(targetEl.offsetTop);
    }
  }, [tabs, activeMenu]);

  return { indicatorY, itemRefs };
};
