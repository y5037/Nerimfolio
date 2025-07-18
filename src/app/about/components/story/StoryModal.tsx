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
        <div className={clsx("relative")}>
          {showProgress && <StoryProgressBar loadingBar={loadingBar} />}
          <motion.div
            initial={{ width: 0, height: 4, opacity: 0 }}
            animate={{ width: size.width, height: size.height, opacity: 1 }}
            transition={{
              opacity: { duration: 0.2 },
              width: { duration: 0.5, ease: "easeOut" },
              height: { delay: 0.8, duration: 0.8, ease: "easeOut" },
            }}
          >
            <StorySlide
              showProgress={showProgress}
              showFirstStory={showFirstStory}
              setLoadingBar={setLoadingBar}
              controller={controller}
            />
          </motion.div>
        </div>
        {!showFirstStory && (
          <Image
            src="/images/about/video.png"
            alt="video"
            width={40}
            height={40}
            className={clsx("ml-5 mt-[-9.5px] scale-x-[-1]")}
          />
        )}
      </div>
    </FadeAnimate>
  );
}
