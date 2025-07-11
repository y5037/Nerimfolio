"use client";

import { useState } from "react";
import ProfileContainer from "./components/ProfileContainer";
import TabContainer from "./components/TabContainer";
import ContentsLayout from "@/components/layout/responsive/ContentsLayout";
import ContentsContainer from "./components/ContentsContainer";

export const metadata = {
  title: "About Me",
};

export default function AboutClient() {
  const [isTab, setIsTab] = useState<"Intro" | "Builds" | "Connect">("Intro");

  return (
    <ContentsLayout>
      <ProfileContainer />
      <TabContainer isTab={isTab} setIsTab={setIsTab} />
      <ContentsContainer isTab={isTab} />
    </ContentsLayout>
  );
}
