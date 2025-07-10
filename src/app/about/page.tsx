"use client";

import { useState } from "react";
import ProfileContainer from "./components/ProfileContainer";

export default function About() {
  const [isTab, setIsTab] = useState<"Intro" | "Builds" | "Connect">("Intro");

  return (
    <>
      <ProfileContainer />
    </>
  );
}
