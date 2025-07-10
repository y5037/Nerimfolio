import clsx from "clsx";
import React from "react";

export default function ContentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "w-[1140px] mx-auto overflow-y-scroll",
        "max-lg:w-[900px]",
        "max-lg1050:w-auto max-lg1050:px-10",
        "max-md:px-6"
      )}
    >
      {children}
    </div>
  );
}
