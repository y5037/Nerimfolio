"use client";

import { ReactNode } from "react";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

export default function TransitionLayout({
  children,
}: {
  children: ReactNode;
}) {
  const segments = useSelectedLayoutSegments();
  const key = segments.length > 0 ? segments[0] : "root";

  const pathname = usePathname();

  const isLanding = pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={isLanding ? { opacity: 0 } : { opacity: 0, y: -20 }}
        animate={isLanding ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={isLanding ? { opacity: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={clsx("min-h-full")}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
