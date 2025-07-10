"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

export default function TransitionLayout({
  children,
  $landing,
}: {
  children: ReactNode;
  $landing?: boolean;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={$landing ? { opacity: 0 } : { opacity: 0, y: -20 }}
        animate={$landing ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={$landing ? { opacity: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={clsx("min-h-full")}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
