import { ReactNode } from "react";
import { Metadata } from "next";
import "@/styles/tailwind.css";
import Navigation from "@/components/layout/navigation/Navigation";
import Footer from "@/components/layout/footer/Footer";
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
      <body>
        <Navigation />
        <div className={clsx("flex flex-col justify-between h-full")}>
          {children}
        </div>
      </body>
    </html>
  );
}
