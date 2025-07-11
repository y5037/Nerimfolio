"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: {
          objectType: string;
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
          buttons?: Array<{
            title: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          }>;
        }) => void;
      };
    };
  }
}

export const useKakaoShare = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Kakao &&
      !window.Kakao.isInitialized()
    ) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY!);
    }
  }, []);

  const handleShare = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "윤혜림의 포트폴리오 🥨",
        description: "프론트엔드 개발자 윤혜림의 포트폴리오 입니다.",
        imageUrl:
          "https://nerimfolio.vercel.app/images/common/og-thumbnail.jpg",
        link: {
          mobileWebUrl: "https://nerimfolio.vercel.app/",
          webUrl: "https://nerimfolio.vercel.app/",
        },
      },
      buttons: [
        {
          title: "Dive In",
          link: {
            mobileWebUrl: "https://nerimfolio.vercel.app/",
            webUrl: "https://nerimfolio.vercel.app/",
          },
        },
      ],
    });
  };

  return { handleShare };
};
