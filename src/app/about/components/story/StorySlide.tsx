import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  EffectCube,
  EffectCreative,
  Pagination,
  Autoplay,
} from "swiper/modules";
import StoryHead from "./StoryHead";
import clsx from "clsx";
import StoryContent from "./StoryContent";
import { SlideProps } from "../../types";
import { useEffect, useRef } from "react";
import { isMobile } from "@/utils/isMobile";

export default function StorySlide({
  showProgress,
  showFirstStory,
  controller,
  setLoadingBar,
  effect,
  setEffect,
}: SlideProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  // 사파리 + 외부모니터 사용으로 인한 Cube Swiper 내부 콘텐츠 hidden 버그 완화
  const isSafari =
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
    !navigator.userAgent.includes("CriOS"); // iOS Chrome은 제외

  useEffect(() => {
    function checkSize() {
      if (isSafari && !isMobile && window.innerWidth < 1300) {
        setEffect("creative");
      } else {
        setEffect("cube");
      }
    }
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [isSafari, setEffect]);

  return (
    <>
      <Swiper
        key={effect}
        loop={true}
        effect={effect}
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
        creativeEffect={{
          prev: {
            translate: ["-20%", 0, -1],
            opacity: 0.5,
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onAutoplayTimeLeft={(swiper, time, progress) => {
          setLoadingBar(1 - progress);
        }}
        pagination={showProgress}
        modules={[EffectCube, EffectCreative, Pagination, Autoplay]}
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
              src="/videos/about/family.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className={clsx(
                "w-full h-full object-cover",
                showFirstStory ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            />
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
            src="/videos/about/zoom.mov"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className={clsx("w-full h-full object-cover")}
          />
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
            src="/videos/about/beer.mp4"
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
          <StoryHead isClose={controller.handleExitComplete} $story4 />
          <div
            className={clsx(
              "absolute bottom-14 right-3 left-3 font-light text-gray100 text-right"
            )}
          >
            <StoryContent $story4 />
          </div>
          <video
            src="/videos/about/jogging.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className={clsx("w-full h-full object-cover object-[50%_30%]")}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
