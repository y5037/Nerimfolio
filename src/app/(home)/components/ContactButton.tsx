"use client";

import SectionDefault from "@/components/layout/responsive/SectionDefault";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();

  return (
    <SectionDefault>
      <div className={clsx("py-20 text-right")}>
        <button type="button" onClick={() => router.push("/about")}>
          Contact →
        </button>
      </div>
    </SectionDefault>
  );
}
