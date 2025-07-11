import { AboutStats } from "@/lib/constants/aboutStats";
import clsx from "clsx";
import Image from "next/image";
import { profileButton } from "../styles";
import { useModalController } from "@/hooks/useModalController";
import QRCodeModal from "./QRCodeModal";
import { useKakaoShare } from "@/hooks/useKakaoShare";

export default function ProfileContainer() {
  const { showModal, open, modalRef } = useModalController();
  const { handleShare } = useKakaoShare();

  return (
    <>
      {showModal && <QRCodeModal modalRef={modalRef} />}
      <div className={clsx("flex my-10 items-center")}>
        <Image
          src="/images/about/back.png"
          alt="뒤로가기"
          width={30}
          height={30}
          className={clsx("cursor-pointer")}
          onClick={() => history.back()}
        />
        <p className={clsx("ml-4 mt-[-1px] font-medium text-[18px]")}>
          윤 혜림
        </p>
      </div>
      <div className={clsx("flex")}>
        <div
          className={clsx(
            "relative w-[150px] min-w-[150px] h-[150px] rounded-full overflow-hidden border border-solid border-gray-300 box-border",
            "max-lg1050:w-[100px] max-lg1050:min-w-[100px] max-lg1050:h-[100px]",
            "max-xs500:w-[80px] max-xs500:min-w-[80px] max-xs500:h-[80px]"
          )}
        >
          <Image
            src="/images/about/profile.jpg"
            alt="profile"
            fill
            className={clsx("object-cover")}
          />
        </div>
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
            <button type="button" className={profileButton} onClick={open}>
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
