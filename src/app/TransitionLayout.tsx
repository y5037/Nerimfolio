"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

export default function TransitionLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={clsx("min-h-full")}
        style={{
          // willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          // perspective: 1000,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
