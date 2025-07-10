import { ReactNode } from "react";
import TransitionLayout from "./TransitionLayout";

export default function AboutTemplate({ children }: { children: ReactNode }) {
  return <TransitionLayout $landing>{children}</TransitionLayout>;
}
