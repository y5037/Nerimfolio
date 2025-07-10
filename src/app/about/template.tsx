import { ReactNode } from "react";
import TransitionDownLayout from "../TransitionDownLayout";

export default function AboutTemplate({ children }: { children: ReactNode }) {
  return <TransitionDownLayout>{children}</TransitionDownLayout>;
}
