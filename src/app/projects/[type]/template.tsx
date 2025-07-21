import TransitionLayout from "@/app/TransitionLayout";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <TransitionLayout>{children}</TransitionLayout>;
}
