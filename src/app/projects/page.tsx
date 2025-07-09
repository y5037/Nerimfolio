"use client";

import BodyContainer from "@/components/layout/responsive/BodyContainer";
import ProjectContents from "./components/ProjectContents";
import SearchContainer from "./components/SearchContainer";
import Footer from "@/components/layout/footer/Footer";
import { useState } from "react";
import clsx from "clsx";

export default function ProjectsList() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className={clsx("h-full flex flex-col justify-between")}>
      <BodyContainer>
        <SearchContainer keyword={keyword} setKeyword={setKeyword} />
        <ProjectContents $frontend keyword={keyword} />
        <ProjectContents keyword={keyword} />
      </BodyContainer>
      <Footer />
    </div>
  );
}
