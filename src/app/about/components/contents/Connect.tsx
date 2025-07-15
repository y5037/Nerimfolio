"use client";

import clsx from "clsx";
import {
  connectTileType1,
  connectTileType2,
  connectTitle,
  connectULList,
} from "../../styles";
import { useRef } from "react";
import Image from "next/image";
import { useToastStore } from "@/store/useToastStore";

export default function Connect() {
  const emailRef = useRef<HTMLParagraphElement | null>(null);
  const { showToast } = useToastStore();

  const handleClickCopy = () => {
    showToast("복사가 완료되었습니다");
    const text = emailRef.current?.innerText;
    if (text) navigator.clipboard.writeText(text);
  };

  return (
    <div className={clsx("grid gap-6 mt-14 mb-20", "sm:grid-cols-2")}>
      <div className={clsx(connectTileType1)}>
        <h3 className={clsx(connectTitle)}>🧠 MBTI & 협업 스타일</h3>
        <p className={clsx("text-zinc-400 text-sm leading-relaxed")}>
          ISFJ / UI 레이아웃이나 기능 구현에서 작은 어긋남도 그냥 지나치지 못할
          만큼 꼼꼼한 성격이에요. 평소엔 조용한 편이지만, 팀에서는 유연하게
          소통하며 디자이너와 개발자 사이의 간극을 자연스럽게 메우는 데
          익숙해요.
        </p>
      </div>
      <div className={clsx(connectTileType2)}>
        <h3 className={clsx(connectTitle)}>🧰 좋아하는 도구 / 패턴</h3>
        <ul className={clsx(connectULList)}>
          <li>Framer Motion, Swiper, clsx 등 감각적인 UI 도구</li>
          <li>Custom Hook으로 재사용성과 가독성 향상</li>
          <li>컴포넌트 분리 & 네이밍에 진심인 편</li>
        </ul>
      </div>
      <div className={clsx(connectTileType2)}>
        <h3 className={clsx(connectTitle)}>🌱 개발 습관 & UI 취향</h3>
        <ul className={clsx(connectULList)}>
          <li>
            미세한 UI 디테일부터 기능적인 버그까지 매의 눈으로 꼼꼼하게 확인함
          </li>
          <li>다크모드에 어울리는 감성적인 스타일 선호</li>
          <li>애니메이션, 트랜지션 최적화에 관심 있음</li>
        </ul>
      </div>
      <div className={clsx(connectTileType1)}>
        <h3 className={clsx(connectTitle)}>🎧 취미</h3>
        <p className={clsx("text-gray-400 text-sm")}>
          Lofi 음악 찾기, 디자인 탐색, 고양이 털 쓰다듬기, 안주 맛집 탐방을
          좋아해요.
          <br />
          때로는 코딩 자체가 힐링이 돼 하루종일 컴퓨터 앞을 지킬 때도 많아요.
        </p>
      </div>
      <div
        className={clsx(
          "py-6 text-gray-200",
          "sm:col-span-2",
          "max-sm:border-t max-sm:border-solid max-sm:border-gray-500 max-sm:mt-8 max-sm:py-8"
        )}
      >
        <h3 className={clsx(connectTitle, "mb-4 text-gray-600")}>Contact 🔓</h3>
        <ul className={clsx("text-sm text-gray-400")}>
          <li className={clsx("flex items-center mb-2")}>
            <Image
              src="/images/about/email.png"
              alt="email"
              width={33}
              height={33}
            />
            <p ref={emailRef} className={clsx("ml-2 mr-3")}>
              nerim5037@gmail.com
            </p>
            <button onClick={handleClickCopy}>
              <Image
                src="/images/about/copy.png"
                alt="Copy"
                width={20}
                height={20}
              />
            </button>
          </li>
          <li
            className={clsx(
              "flex items-center w-fit gap-2.5 mb-3.5 cursor-pointer"
            )}
            onClick={() => window.open("https://github.com/y5037")}
          >
            <Image
              src="/images/about/github.svg"
              alt="github"
              width={31}
              height={31}
            />
            <p>Github</p>
          </li>
          <li
            className={clsx(
              "flex items-center w-fit gap-2.5 mb-4 cursor-pointer"
            )}
            onClick={() => window.open("https://velog.io/@nerimy/posts")}
          >
            <Image
              src="/images/about/velog.svg"
              alt="velog"
              width={25}
              height={25}
              className={clsx("ml-[3px] mr-[4px]")}
            />
            <p>Velog</p>
          </li>
          <li className={clsx("flex items-center gap-2.5 cursor-pointer")}>
            <Image
              src="/images/about/resume.png"
              alt="velog"
              width={31}
              height={31}
              onClick={() => window.open("https://velog.io/@nerimy/posts")}
              className={clsx("cursor-pointer mr-[1px]")}
            />
            <p>Resume (추후 추가 예정)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
