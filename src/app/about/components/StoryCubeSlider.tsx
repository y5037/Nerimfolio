"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import { ModalProps } from "../types";
import FadeAnimate from "@/components/modal/FadeAnimate";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StoryProgressBar from "@/components/progressbar/StoryProgressBar";
import { useStorySliderLayout } from "../hooks/useStorySliderLayout";
import clsx from "clsx";

export default function StoryCubeSlider({ isClose }: ModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const { size } = useStorySliderLayout();

  useEffect(() => {
    const timer = setTimeout(() => setShowProgress(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FadeAnimate isClose={isClose}>
      {showProgress && <StoryProgressBar slideIndex={slideIndex} />}
      <motion.div
        initial={{ width: 0, height: 4, opacity: 0 }}
        animate={{ width: size.width, height: size.height, opacity: 1 }}
        transition={{
          opacity: { duration: 0.2 },
          width: { duration: 0.5, ease: "easeOut" },
          height: { delay: 0.6, duration: 0.6, ease: "easeOut" },
        }}
        className={clsx("overflow-hidden")}
      >
        <Swiper
          loop={true}
          effect="cube"
          grabCursor={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
            shadowOffset: 0,
            shadowScale: 0.94,
          }}
          onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
          pagination={showProgress}
          modules={[EffectCube, Pagination, Autoplay]}
          className={clsx("w-full h-full")}
        >
          <SwiperSlide className="bg-orange-700 flex items-center justify-center text-xl">
            About Me
          </SwiperSlide>
          <SwiperSlide className="bg-orange-100 flex items-center justify-center text-xl">
            TMI
          </SwiperSlide>
          <SwiperSlide className="bg-pink-200 flex items-center justify-center text-xl">
            Skills
          </SwiperSlide>
          <SwiperSlide className="bg-blue-100 flex items-center justify-center text-xl">
            Tools
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </FadeAnimate>
  );
}
