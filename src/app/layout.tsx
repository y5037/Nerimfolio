import { ReactNode } from "react";
import { Metadata } from "next";
import "@/styles/globals.css";
import Navigation from "@/components/layout/navigation/Navigation";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  icons: {
    icon: "/images/common/favicon.ico",
  },
  title: {
    default: "윤혜림의 포트폴리오 🥨",
    template: "%s | 윤혜림의 포트폴리오 🥨",
  },
  description: "프론트엔드 개발자 윤혜림의 포트폴리오 입니다.",
  openGraph: {
    title: "윤혜림의 포트폴리오 🥨",
    description: "프론트엔드 개발자 윤혜림의 포트폴리오 입니다.",
    url: "https://nerimfolio.vercel.app/",
    siteName: "윤혜림의 포트폴리오 🥨",
    images: [
      {
        url: "https://nerimfolio.vercel.app/images/common/og-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "포트폴리오 썸네일",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "윤혜림의 포트폴리오 🥨",
    description: "프론트엔드 개발자 윤혜림의 포트폴리오 입니다.",
    images: ["https://nerimfolio.vercel.app/images/common/og-thumbnail.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={clsx("scrollbar-hide overflow-y-scroll")}>
        <Navigation />
        <div className={clsx("flex flex-col justify-between h-full min-h-fit")}>
          {children}
        </div>
      </body>
    </html>
  );
}
