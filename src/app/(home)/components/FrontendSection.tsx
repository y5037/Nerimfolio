import clsx from "clsx";
import TitleContainer from "./sectionTitle/TitleContainer";
import { frontendSectionButton } from "../styles";

export default function FrontendSection() {
  return (
    <>
      <TitleContainer id="ThingsIBuilt" />
      <div
        className={clsx(
          "mx-auto w-[970px]",
          "max-lg:w-[900px] max-lg900:w-auto max-lg900:px-10 max-lg900:overflow-auto",
          "max-lg1050:w-[800px]",
          "max-md:px-6"
        )}
      >
        {/* max-lg900:h-[] */}
        <div
          className={clsx(
            "relative h-[300px] mb-20 group",
            "max-lg900:h-[490px] max-lg900:mb-0"
          )}
        >
          <div className={clsx("relative first z-[-1]")}>
            <div
              className={clsx(
                "absolute top-0 left-0 w-[685px] h-[300px]",
                "max-lg900:w-full"
              )}
              style={{ clip: "rect(0, auto, auto, 0)" }}
            >
              <div
                className={clsx(
                  "fixed top-0 left-0 w-full h-full bg-cover bg-center block bg-[url(/images/home/frontendSection/frontend1.png)] bg-center bg-fixed bg-no-repeat bg-cover grayscale group-hover:grayscale-0",
                  "max-lg900:w-full"
                )}
              />
            </div>
          </div>
          {/* max-lg900:top-[] */}
          <div
            className={clsx(
              "flex flex-col w-[390px] absolute top-[60px] right-0 box-border px-[35px] py-5 bg-[rgba(255,255,255,.7)] shadow-gray text-black",
              "max-lg900:relative max-lg900:top-[320px] max-lg900:text-white max-lg900:bg-inherit max-lg900:p-0",
              "max-xs500:w-auto"
            )}
          >
            <div
              className={clsx(
                "flex items-center gap-2 font-light text-[rgba(0,0,0,.7)]",
                "max-lg900:text-gray300"
              )}
            >
              <p className={clsx("underline underline-offset-1")}>#next15v</p>
              <p className={clsx("underline underline-offset-1")}>
                #cooperation
              </p>
            </div>
            <div className={clsx("flex-1")}>
              <p className={clsx("text-3xl font-semibold my-2")}>Albaform</p>
              <p className={clsx("my-5")}>취업 매칭 플랫폼</p>
            </div>
            <div className={clsx("flex items-center gap-4")}>
              <button className={frontendSectionButton}>Explore</button>
              <button className={frontendSectionButton}>Dive In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
