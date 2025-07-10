"use client";

import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import ProjectContents from "./components/ProjectContents";
import SearchContainer from "./components/SearchContainer";
import Footer from "@/components/layout/footer/Footer";
import { useState } from "react";

export default function Projects() {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <ContentsLayout>
        <SearchContainer keyword={keyword} setKeyword={setKeyword} />
        <ProjectContents $frontend keyword={keyword} />
        <ProjectContents keyword={keyword} />
      </ContentsLayout>
      <Footer />
    </>
  );
}
