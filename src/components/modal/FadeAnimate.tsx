import { ModalController } from "@/app/about/types";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export default function FadeAnimate({
  children,
  controller,
  $qrcode,
  $frontendFeature,
  $publishingOverview,
}: {
  children: ReactNode;
  controller: ModalController;
  $qrcode?: boolean;
  $frontendFeature?: boolean;
  $publishingOverview?: boolean;
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
            "fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.7)]",
            $frontendFeature
              ? "overflow-y-auto"
              : "flex justify-center items-center cursor-auto"
          )}
          onClick={handleExitComplete}
        >
          <div
            className={clsx(
              ($frontendFeature || $publishingOverview) && "max-md:px-6",
              $frontendFeature &&
                "max-w-[1000px] mx-auto min-h-screen flex justify-center items-center px-6 py-20"
            )}
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
                "max-md:w-full",
                $publishingOverview &&
                  "relative mx-auto w-[calc(100vw_*_(1400/1920))] h-[calc(100vw_*_(800/1920))] max-w-[1400px] max-h-[800px] rounded-lg overflow-hidden max-md:h-[calc(100vw_*_(950/1920))]",
                $qrcode &&
                  "relative rounded shadow-xl overflow-hidden w-[300px] h-[370px] min-w-[300px]"
              )}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
