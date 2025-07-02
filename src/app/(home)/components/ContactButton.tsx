"use client";

import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();

  return (
    <div className="pt-32 pb-20 w-[1140px] mx-auto max-lg:w-[900px] max-lg1050:w-auto max-lg1050:px-10 max-md:px-6 text-right">
      <button type="button" onClick={() => router.push("/about")}>
        Contact 보러가기 →
      </button>
    </div>
  );
}
