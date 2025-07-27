import clsx from "clsx";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function PageController() {
  const router = useRouter();
  const params = useParams();
  const paramsId = Number(params.id);

  return (
    <div className={clsx("flex items-center justify-between my-8")}>
      <div>
        {paramsId !== 1 && (
          <button
            onClick={() => router.push(`/projects/publishing/${paramsId - 1}`)}
            className={clsx("duration-200 hover:opacity-70")}
          >
            <Image
              src="/images/projects/detail/common/arrowPrev.svg"
              alt="<"
              width={30}
              height={30}
            />
          </button>
        )}
      </div>
      <div>
        {paramsId !== 6 && (
          <button
            onClick={() => router.push(`/projects/publishing/${paramsId + 1}`)}
            className={clsx("duration-200 hover:opacity-70")}
          >
            <Image
              src="/images/projects/detail/common/arrowNext.svg"
              alt=">"
              width={30}
              height={30}
            />
          </button>
        )}
      </div>
    </div>
  );
}
