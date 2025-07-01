import TitleContainer from "./sectionTitle/TitleContainer";

export default function FrontendSection() {
  return (
    <>
      <TitleContainer sectionId="ThingsIBuilt" />
      <div className="mx-auto w-[970px] max-lg:w-[900px] max-lg1050:w-[800px] max-lg900:w-auto max-lg900:px-10 max-lg900:overflow-auto">
        <div className="relative mb-20 group">
          <div className="w-[685px] h-[300px] bg-[url(/images/home/frontendSection/frontend1.png)] bg-center bg-fixed bg-no-repeat bg-cover grayscale group-hover:grayscale-0 max-lg900:w-auto" />
          <div className="flex flex-col w-[390px] absolute top-[60px] right-0 box-border px-[35px] py-5 bg-[rgba(255,255,255,.7)] shadow-gray text-black max-lg900:relative max-lg900:top-6 max-lg900:text-white max-lg900:bg-inherit max-lg900:p-0 max-xs500:w-auto">
            <div className="flex items-center gap-2 font-light text-[rgba(0,0,0,.7)] max-lg900:text-gray300">
              <p className="underline underline-offset-1">#next15v</p>
              <p className="underline underline-offset-1">#cooperation</p>
            </div>
            <div className="flex-1">
              <p className="text-3xl font-semibold my-2">Albaform</p>
              <p className="my-5">취업 매칭 플랫폼</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex-1 text-center border border-solid border-black rounded h-9 duration-[.2s] max-lg900:bg-[rgba(255,255,255.3)] max-lg900:text-black lg900:hover:bg-[rgba(255,255,255,.3)]">
                Go Live
              </button>
              <button className="flex-1 text-center border border-solid border-black rounded h-9 duration-[.2s] max-lg900:bg-[rgba(255,255,255.3)] max-lg900:text-black lg900:hover:bg-[rgba(255,255,255,.3)]">
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
