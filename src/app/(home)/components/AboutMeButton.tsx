"use client";

import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function AboutMeButton() {
  const router = useRouter();

  return (
    <ContentsLayout>
      <div className={clsx("py-20 text-right", "max-md:pt-0")}>
        <button type="button" onClick={() => router.push("/about")}>
          About Me →
        </button>
      </div>
    </ContentsLayout>
  );
}
