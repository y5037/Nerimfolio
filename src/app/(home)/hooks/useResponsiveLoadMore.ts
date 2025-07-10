import { techPosts } from "@/data/home/techBlog";
import { useBetweenMediaQuery } from "@/hooks/useBetweenMediaQuery";
import { useEffect, useState } from "react";

export const useResponsiveLoadMore = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const visiblePosts = techPosts.slice(0, visibleCount);
  const hasMore = visibleCount < techPosts.length;

  const isTablet = useBetweenMediaQuery(768, 1050);
  useEffect(() => {
    if (isTablet) {
      setVisibleCount(4);
    } else {
      setVisibleCount(3);
    }
  }, [isTablet]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + visibleCount);
      setIsLoading(false);
    }, 800);
  };

  return { visiblePosts, isLoading, hasMore, handleLoadMore };
};
