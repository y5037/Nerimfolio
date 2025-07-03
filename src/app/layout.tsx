import { ReactNode } from "react";
import { Metadata } from "next";
import "@/styles/globals.css";
import Navigation from "@/components/layout/navigation/Navigation";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Yun Hyerim",
  description: "포트폴리오",
  icons: {
    icon: "/images/common/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={clsx("scrollbar-hide overflow-y-scroll")}>
        <Navigation />
        <div className={clsx("flex flex-col justify-between h-full")}>
          {children}
        </div>
      </body>
    </html>
  );
}
