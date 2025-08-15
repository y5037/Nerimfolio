import { AboutStats } from "@/lib/constants/aboutStats";
import clsx from "clsx";
import Image from "next/image";
import { profileButton } from "../styles";
import { useModalController } from "@/hooks/useModalController";
import QRCodeModal from "./QRCodeModal";
import { useKakaoShare } from "@/hooks/useKakaoShare";
import StoryProfile from "./story/StoryProfile";
import { useState } from "react";
import StoryModal from "./story/StoryModal";
import BackButton from "@/components/backNavigation/BackButton";

export default function ProfileContainer() {
  const [modalType, setModalType] = useState<"story" | "qr" | null>(null);

  const { handleShare } = useKakaoShare();
  const storyModal = useModalController();
  const qrModal = useModalController();

  const handleOpenStory = () => {
    storyModal.open();
    setModalType("story");
  };

  const handleOpenQR = () => {
    qrModal.open();
    setModalType("qr");
  };

  return (
    <>
      {qrModal.showModal && modalType === "qr" ? (
        <QRCodeModal controller={qrModal} />
      ) : storyModal.showModal && modalType === "story" ? (
        <StoryModal controller={storyModal} />
      ) : (
        null
      )}

      <BackButton $about />
      <div className={clsx("flex")}>
        <StoryProfile handleOpenStory={handleOpenStory} />
        <div
          className={clsx(
            "ml-16 flex flex-col justify-around",
            "max-lg1050:ml-8",
            "max-xs:ml-4"
          )}
        >
          <div
            className={clsx(
              "flex items-center gap-10 font-light text-lg mb-5",
              "max-xs500:gap-8 max-xs500:text-base"
            )}
          >
            {AboutStats.map((stat, idx) => (
              <p
                key={idx}
                className={clsx(
                  "max-xs500:flex max-xs500:flex-col-reverse max-xs500:text-center"
                )}
              >
                {stat.label}
                <span className={clsx("ml-2 font-semibold", "max-xs500:ml-0")}>
                  {stat.value}
                </span>
              </p>
            ))}
          </div>
          <p className={clsx("font-light", "max-xs500:text-sm")}>
            퍼블리셔로 일하며 쌓은 감각과 실무 경험을 바탕으로, 효율적이고 확장
            가능한 프론트엔드 개발에 집중하고 있습니다.
            <br />
            재사용 가능한 컴포넌트 설계와 직관적인 UI 구현을 중요하게 생각하며,{" "}
            <br className={clsx("max-[600px]:hidden")} />
            디자이너 및 백엔드 개발자와의 원활한 협업이 강점입니다.
          </p>
          <div className={clsx("mt-8 mb-10 flex items-center justify-start")}>
            <button
              type="button"
              className={profileButton}
              onClick={handleOpenQR}
            >
              <Image
                src="/images/about/qr.png"
                alt="QRcode"
                width={20}
                height={20}
              />
            </button>
            <button
              type="button"
              className={profileButton}
              onClick={handleShare}
            >
              <Image
                src="/images/about/share.svg"
                alt="공유하기"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
