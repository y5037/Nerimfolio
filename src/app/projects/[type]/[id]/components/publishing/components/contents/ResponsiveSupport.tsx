"use client";

import { responsiveSupportData } from "@/data/projects/detail/responsiveSupport";
import { useParamsId } from "@/utils/getParamsId";
import clsx from "clsx";

export default function ResponsiveSupport() {
  const paramsId = useParamsId();

  const data = responsiveSupportData.find((data) => data.id === paramsId);

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
        {data?.responsiveSupportGroup.map(
          ({ label, title, brief, details, color }, i) => (
            <div
              key={i}
              className="relative bg-[rgba(0,0,0,0.8)] bg-opacity-60 rounded-xl ml-4 p-8"
              style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.6)" }}
            >
              <div
                className="absolute right-8 text-5xl font-extrabold select-none"
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
                      <td className="py-2 pr-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
    </div>
  );
}
