import clsx from "clsx";
import { FixedBackgroundImgProps } from "../types";
import { useEffect, useState } from "react";

export default function FixedBackgroundImg({
  id,
  thumbnailImg,
}: FixedBackgroundImgProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = thumbnailImg;

    const delay = process.env.NODE_ENV === "development" ? 300 : 0;

    const onLoad = () => {
      setTimeout(() => setLoaded(true), delay);
    };

    if (img.complete) {
      requestAnimationFrame(onLoad);
    } else {
      img.onload = () => {
        requestAnimationFrame(onLoad);
      };
    }
  }, [thumbnailImg]);

  return (
    <div className={clsx("relative first z-[-1]")}>
      <div
        className={clsx(
          "absolute top-0 left-0 w-[685px] h-[400px]",
          "max-lg900:w-full",
          "lg1050:w-[685px]",
          (id === 2 || id === 4) && "right-0 left-auto",
          id === 2 && "lg900:w-[550px] lg900:h-[600px]",
          id === 5 && "lg900:h-[600px]"
        )}
        style={{ clip: "rect(0, auto, auto, 0)" }}
      >
        {!loaded ? (
          <div className="absolute inset-0 bg-gray-300 animate-pulse [animation-duration:0.8s] z-0" />
        ) : (
          <div
            className={clsx(
              "fixed top-0 left-1/2 transform -translate-x-1/2 w-[970px] h-full bg-no-repeat bg-gray-300 bg-cover bg-center block grayscale group-hover:grayscale-0",
              "max-lg:w-[900px]",
              "max-lg900:w-full",
              id === 1 &&
                "bg-albaform max-md:bg-[-70px] bg-low-height-albaform",
              id === 2 &&
                "bg-pandamarket max-lg900:bg-[-50px] max-md:bg-[-120px] bg-low-height-pandamarket",
              id === 3 && "bg-low-height-globalnomad",
              id === 4 && "bg-[50px] max-lg900:bg-[-50px] max-md:bg-[-200px]",
              id === 5 && "bg-low-height-rolling"
            )}
            style={{
              backgroundImage: `url(${thumbnailImg})`,
            }}
          />
        )}
      </div>
    </div>
  );
}
