"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import { ModalController } from "../types";
import FadeAnimate from "@/components/modal/FadeAnimate";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StoryProgressBar from "@/components/progressbar/StoryProgressBar";
import { useStorySliderLayout } from "../hooks/useStorySliderLayout";
import clsx from "clsx";
import Image from "next/image";
import StoryHead from "./StoryHead";
import StoryContent from "./StoryContent";

export default function StoryCubeSlider({
  controller,
}: {
  controller: ModalController;
}) {
  const [loadingBar, setLoadingBar] = useState(0);
  const [storyState, setStoryState] = useState({
    showProgress: false,
    showFirstStory: false,
  });

  const swiperRef = useRef<SwiperType | null>(null);

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
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onAutoplayTimeLeft={(swiper, time, progress) => {
                setLoadingBar(1 - progress);
              }}
              pagination={showProgress}
              modules={[EffectCube, Pagination, Autoplay]}
              onTouchStart={() => swiperRef.current?.autoplay.stop()}
              onTouchEnd={() => {
                swiperRef.current?.autoplay.start();
              }}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => {
                swiperRef.current?.autoplay.start();
              }}
              className={clsx("w-full h-full")}
            >
              <SwiperSlide
                className={clsx(
                  "relative",
                  showFirstStory ? "bg-black" : "bg-gray100"
                )}
              >
                {showFirstStory && (
                  <>
                    <StoryHead isClose={controller.handleExitComplete} />
                    {showProgress && (
                      <div
                        className={clsx(
                          "absolute bottom-14 right-3 left-3 font-light text-gray100"
                        )}
                      >
                        <StoryContent $story1 />
                      </div>
                    )}
                    <video
                      src="/videos/family.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      className={clsx("w-full h-full object-cover")}
                    />
                  </>
                )}
              </SwiperSlide>
              <SwiperSlide className={clsx("relative")}>
                <StoryHead isClose={controller.handleExitComplete} />
                <video
                  src="/videos/zoom.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className={clsx("w-full h-full object-cover")}
                />
              </SwiperSlide>
              <SwiperSlide className={clsx("relative")}>
                <StoryHead isClose={controller.handleExitComplete} />
                <video
                  src="/videos/beer.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className={clsx(
                    "w-full h-full object-cover object-[center_bottom]"
                  )}
                />
              </SwiperSlide>
              <SwiperSlide className={clsx("relative")}>
                <StoryHead isClose={controller.handleExitComplete} />
                <video
                  src="/videos/jogging.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className={clsx(
                    "w-full h-full object-cover object-[50%_30%]"
                  )}
                />
              </SwiperSlide>
            </Swiper>
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
