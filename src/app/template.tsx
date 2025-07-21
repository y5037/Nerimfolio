import { ReactNode } from "react";
import TransitionLayout from "./TransitionLayout";

export default function Template({ children }: { children: ReactNode }) {
  return <TransitionLayout>{children}</TransitionLayout>;
}
