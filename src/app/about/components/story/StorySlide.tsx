import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import StoryHead from "./StoryHead";
import clsx from "clsx";
import StoryContent from "./StoryContent";
import { SlideProps } from "../../types";
import { useRef } from "react";

export default function StorySlide({
  showProgress,
  showFirstStory,
  controller,
  setLoadingBar,
}: SlideProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
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
            showFirstStory
              ? "bg-black"
              : "bg-[repeating-linear-gradient(-45deg,_#333_0px,_#333_16px,_#fff_16px,_#fff_21px)] animate-filmMove"
          )}
        >
          <>
            <StoryHead isClose={controller.handleExitComplete} $story1 />
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
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              className={clsx(
                "w-full h-full object-cover",
                showFirstStory ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <source src="/videos/family.mp4" type="video/mp4" />
            </video>
          </>
        </SwiperSlide>
        <SwiperSlide className={clsx("relative")}>
          <StoryHead isClose={controller.handleExitComplete} $story2 />
          <div
            className={clsx(
              "absolute bottom-14 right-3 left-3 font-light text-gray100"
            )}
          >
            <StoryContent $story2 />
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            className={clsx("w-full h-full object-cover")}
          >
            <source src="/videos/zoom.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className={clsx("relative")}>
          <StoryHead isClose={controller.handleExitComplete} $story3 />
          <div
            className={clsx(
              "absolute top-[48%] right-3 left-3 font-light text-gray100 text-right"
            )}
          >
            <StoryContent $story3 />
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            className={clsx(
              "w-full h-full object-cover object-[center_bottom]"
            )}
          >
            <source src="/videos/beer.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className={clsx("relative")}>
          <StoryHead isClose={controller.handleExitComplete} $story4 />
          <div
            className={clsx(
              "absolute bottom-14 right-3 left-3 font-light text-gray100 text-right"
            )}
          >
            <StoryContent $story4 />
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            className={clsx("w-full h-full object-cover object-[50%_30%]")}
          >
            <source src="/videos/jogging.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
