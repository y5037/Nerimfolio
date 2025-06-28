import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YunHyerim",
  description: "포트폴리오",
  icons: {
    icon: "/images/common/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
