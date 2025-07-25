import { ModalController } from "@/app/about/types";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export default function FadeAnimate({
  children,
  controller,
  $qrcode,
}: {
  children: ReactNode;
  controller: ModalController;
  $qrcode?: boolean;
}) {
  const { isVisible, close, handleExitComplete } = controller;

  return (
    <AnimatePresence onExitComplete={close}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsx(
            "fixed inset-0 bg-[rgba(0,0,0,0.5)] z-10 flex justify-center items-center cursor-auto"
          )}
          onClick={handleExitComplete}
        >
          <motion.div
            key="modal-content"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 0, y: 0, scale: 0.92 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={clsx(
              $qrcode &&
                "relative rounded shadow-xl overflow-hidden w-[300px] h-[370px] max-s:w-full max-s:mx-4"
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
