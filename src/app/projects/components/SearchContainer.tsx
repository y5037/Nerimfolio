import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import clsx from "clsx";
import Image from "next/image";

export default function SearchContainer() {
  return (
    <ContentsLayout>
      <div
        className={clsx(
          "flex items-center border-b border-solid border-gray100 py-1 my-32",
          "max-[1310px]:w-1/2",
          "max-md:px-0 my-24",
          "max-xs:w-2/3 my-16"
        )}
      >
        <input
          name="search"
          type="text"
          className={clsx("w-full bg-inherit mr-3 font-light", "max-md:mr-2")}
        />
        <div
          className={clsx(
            "relative w-[30px] h-[30px] min-w-[30px]",
            "max-md:w-[25px] max-md:h-[25px] max-md:min-w-[25px]"
          )}
        >
          <Image
            src="/images/projects/searchSection/search.png"
            alt="Search"
            fill
            className={clsx("mt-[-5px]", "max-md:mt-[-2px]")}
            priority
          />
        </div>
      </div>
    </ContentsLayout>
  );
}
