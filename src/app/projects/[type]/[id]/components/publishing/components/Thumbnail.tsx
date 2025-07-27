import Skeleton from "@/components/skeleton/Skeleton";
import { thumbnailData } from "@/data/projects/detail/media";
import clsx from "clsx";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Thumbnail() {
  const [loadedMap, setLoadedMap] = useState<{ [key: number]: boolean }>({});

  const params = useParams();

  const paramsId = Number(params.id);
  const data = thumbnailData.find((item) => {
    return item.id === paramsId;
  });

  if (!data) return;
  return (
    <div className={clsx("min-h-full")}>
      <div
        className={clsx(
          "absolute right-5 top-5 z-10",
          data.id === 1 &&
            "right-2 top-2 max-xs500:top-[-5px] max-xs500:right-[5px]"
        )}
      >
        <div
          className={clsx(
            "relative w-[80px] h-[30px]",
            "max-xs500:w-[60px] max-xs500:h-[20px]",
            data.id === 1 && "w-[120px] h-[80px] min-h-[80px]"
          )}
        >
          <Image src={data.logo} alt={data.title} fill />
        </div>
      </div>
      <Image
        src={data.thumbnail}
        alt={data.title}
        fill
        className={clsx(
          "object-cover",
          loadedMap[data.id] ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setLoadedMap((prev) => ({ ...prev, [data.id]: true }))}
      />
      {!loadedMap[data.id] && <Skeleton />}
    </div>
  );
}
