import React from "react";

export default function SectionDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[1140px] mx-auto max-lg:w-[900px] max-lg1050:w-auto max-lg1050:px-10 max-md:px-6">
      {children}
    </div>
  );
}
