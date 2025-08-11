"use client";

import clsx from "clsx";

const supportItems = [
  {
    label: "RESPONSIVE",
    title: "반응형 전략",
    brief: "모바일 우선, 주요 미디어 쿼리 구간 설명",
    details: [
      { item: "모바일", value: "320px 이상" },
      { item: "태블릿", value: "768px 이상" },
      { item: "데스크탑", value: "1024px 이상" },
      { item: "전략", value: "Mobile First Approach" },
    ],
    color: "#60A5FA", // 파랑 포인트
  },
  {
    label: "BROWSER",
    title: "브라우저 테스트 결과",
    brief: "크로스 브라우징 주요 브라우저별 테스트 요약",
    details: [
      { item: "Chrome", value: "완벽 호환" },
      { item: "Firefox", value: "완벽 호환" },
      { item: "Safari", value: "완벽 호환" },
      { item: "Edge", value: "완벽 호환" },
      { item: "IE11", value: "기본 기능 동작 확인" },
    ],
    color: "#FBBF24", // 노란색 포인트
  },
  {
    label: "DEVICE",
    title: "대응 디바이스",
    brief: "PC, 모바일, 태블릿 전반 지원",
    details: [
      { item: "PC", value: "마우스/키보드 UX 최적화" },
      { item: "모바일", value: "터치 인터페이스 대응" },
      { item: "태블릿", value: "혼합 입력 환경 지원" },
    ],
    color: "#34D399", // 민트 그린
  },
  {
    label: "ACCESSIBILITY",
    title: "접근성 대응 여부",
    brief: "스크린리더, 키보드 탐색 등 고려",
    details: [
      { item: "스크린리더", value: "ARIA 속성 적용" },
      { item: "키보드 탐색", value: "Tab 순서 및 포커스 관리" },
      { item: "색상 대비", value: "WCAG AA 수준 이상" },
    ],
    color: "#F87171", // 레드 톤
  },
];

export default function ResponsiveSupport() {
  return (
    <div className="text-gray-200">
      <div className="mb-12 pl-5 border-solid border-l-4 border-gray500">
        <h2 className="text-2xl font-bold mb-3">반응형 및 호환성</h2>
        <p className="text-sm text-gray-400 font-light">
          다양한 디바이스와 브라우저 환경에서 최적의 사용자 경험을 제공하기 위한
          대응 전략과 테스트 결과를 정리했습니다.
        </p>
      </div>
      <div className="space-y-10">
        {supportItems.map(({ label, title, brief, details, color }, i) => (
          <div
            key={i}
            className="relative bg-[rgba(0,0,0,0.8)] bg-opacity-60 rounded-xl ml-4 p-8"
            style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.6)" }}
          >
            <div
              className="absolute right-5 text-5xl font-extrabold select-none"
              style={{ color }}
            >
              {i + 1}
            </div>
            <span
              className="bg-[rgba(255,255,255,.2)] px-3 py-1 rounded-sm uppercase text-xs font-normal tracking-widest mb-4 inline-block"
              style={{ color, opacity: 0.8 }}
            >
              {label}
            </span>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-gray400 mb-10">{brief}</p>
            <table className="w-full text-left text-gray-300 text-sm border-collapse rounded-md overflow-hidden">
              <tbody>
                {details.map(({ item, value }, idx) => (
                  <tr
                    key={idx}
                    className={clsx(
                      idx % 2 === 0 ? "bg-gray-800 bg-opacity-40" : ""
                    )}
                  >
                    <td className="py-2 pl-3 font-semibold w-1/3">{item}</td>
                    <td className="py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
