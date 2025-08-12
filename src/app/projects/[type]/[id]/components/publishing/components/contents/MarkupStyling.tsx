import { motion } from "framer-motion";
import clsx from "clsx";

const strategies = [
  {
    label: "SEMANTIC",
    title: "시맨틱 태그 사용 전략",
    desc: "header, main, footer 등 HTML5 시맨틱 태그를 사용해 구조를 명확히 하고 접근성과 SEO를 향상시켰습니다.",
    color: "rgba(255,149,0,0.6)",
  },
  {
    label: "STYLE",
    title: "스타일 구조",
    descTable: [
      { category: "SCSS 구조", detail: "컴포넌트별 모듈화된 SCSS 사용" },
      { category: "네이밍", detail: "BEM 컨벤션으로 명확한 구조" },
      { category: "Utility Class", detail: "반복 스타일 유틸리티 클래스 활용" },
    ],
    color: "rgba(168,85,247,0.6)",
  },
  {
    label: "IMAGE",
    title: "이미지 최적화",
    desc: "WebP/AVIF, srcset, lazy-loading으로 페이지 로딩 속도를 개선했습니다.",
    color: "rgba(34,197,94,0.6)",
  },
  {
    label: "ANIMATION",
    title: "애니메이션 처리",
    desc: "CSS transition, keyframes, ScrollTrigger로 스크롤 기반 인터랙션과 부드러운 전환을 구현했습니다.",
    color: "rgba(236,72,153,0.6)",
  },
];

export default function MarkupStyling() {
  return (
    <div className="space-y-8">
      <div className="mb-12 pl-5 border-solid border-l-4 border-gray500">
        <h2 className="text-2xl font-bold mb-3">마크업 및 스타일링 전략</h2>
        <p className="text-sm text-gray-400 font-light">
          본 섹션에서는 웹 퍼블리싱 및 프론트엔드 개발에서 적용한 마크업 및
          스타일링 전략을 체계적으로 기술합니다.
          <br />
          시맨틱 태그 활용, 스타일링 아키텍처, 이미지 최적화 기법, 그리고
          애니메이션 구현 방식을 구체적으로 정리했습니다.
        </p>
      </div>
      {strategies.map(({ label, title, desc, descTable, color }, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          className={clsx(
            "relative p-6 ml-4 rounded-xl overflow-hidden transition-transform duration-300 bg-[rgba(255,255,255,0.04)] border border-solid border-[rgba(255,255,255,0.08)]",
            "hover:scale-105"
          )}
          style={{
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <span
            className={clsx(
              "absolute top-0 right-0 left-0 w-full h-[6px] opacity-40"
            )}
            style={{
              backgroundColor: color,
            }}
          />
          <span
            className="px-2 py-1 text-xs font-semibold rounded text-white"
            style={{
              backgroundColor: color,
            }}
          >
            {label}
          </span>
          <h3
            className="text-xl font-bold mt-3 mb-5 text-white"
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.4)",
            }}
          >
            {title}
          </h3>
          {desc ? (
            <p className="leading-relaxed text-sm text-gray-300">{desc}</p>
          ) : descTable ? (
            descTable && (
              <table className="w-full border-collapse text-sm text-gray-300">
                <thead>
                  <tr
                    style={{
                      backgroundColor: color.replace(/0\.6\)$/, "0.1)"),
                    }}
                  >
                    <th className="border-b p-3 text-left">항목</th>
                    <th className="border-b p-3 text-left">설명</th>
                  </tr>
                </thead>
                <tbody>
                  {descTable.map(({ category, detail }, i) => (
                    <tr key={i}>
                      <td className="px-3 py-2">{category}</td>
                      <td className="px-3 py-2">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
