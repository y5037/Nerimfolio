"use client";

import { ModalController } from "../../types";
import FadeAnimate from "@/components/modal/FadeAnimate";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StoryProgressBar from "@/components/progressbar/StoryProgressBar";
import { useStorySliderLayout } from "../../hooks/useStorySliderLayout";
import clsx from "clsx";
import Image from "next/image";
import StorySlide from "./StorySlide";

export default function StoryModal({
  controller,
}: {
  controller: ModalController;
}) {
  const [loadingBar, setLoadingBar] = useState(0);
  const [storyState, setStoryState] = useState({
    showProgress: false,
    showFirstStory: false,
  });
  const [effect, setEffect] = useState<"cube" | "creative">("cube");

  const { size } = useStorySliderLayout();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStoryState((prev) => ({ ...prev, showFirstStory: true }));
      setTimeout(() => {
        setStoryState((prev) => ({ ...prev, showProgress: true }));
      }, 950);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  const { showProgress, showFirstStory } = storyState;

  return (
    <FadeAnimate controller={controller}>
      <div className={clsx("flex items-center")}>
        {!showFirstStory && (
          <Image
            src="/images/about/video.png"
            alt="video"
            width={35}
            height={35}
            className={clsx("mr-5")}
          />
        )}
        <div
          className={clsx(
            "relative",
            effect === "creative" && "overflow-hidden"
          )}
        >
          {showProgress && <StoryProgressBar loadingBar={loadingBar} />}
          <motion.div
            initial={{ width: 0, height: 6, opacity: 0 }}
            animate={{ width: size.width, height: size.height, opacity: 1 }}
            transition={{
              opacity: { duration: 0.2 },
              width: { duration: 0.5, ease: "easeOut" },
              height: { delay: 0.8, duration: 0.8, ease: "easeOut" },
            }}
            className={clsx(!showProgress && "overflow-hidden")}
          >
            <StorySlide
              showProgress={showProgress}
              showFirstStory={showFirstStory}
              setLoadingBar={setLoadingBar}
              controller={controller}
              effect={effect}
              setEffect={setEffect}
            />
          </motion.div>
        </div>
      </div>
    </FadeAnimate>
  );
}
