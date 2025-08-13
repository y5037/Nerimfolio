import { motion } from "framer-motion";
import clsx from "clsx";
import { useParamsId } from "@/utils/getParamsId";
import { markupStylingData } from "@/data/projects/detail/markupStyling";

export default function MarkupStyling() {
  const paramsId = useParamsId();

  const data = markupStylingData.find((data) => data.id === paramsId);

  return (
    <div className="space-y-8">
      <div className="mb-12 pl-5 border-solid border-l-4 border-gray500">
        <h2 className="text-2xl font-bold mb-3">마크업 및 스타일링</h2>
        <p className="text-sm text-gray-400 font-light">
          본 섹션에서는 웹 퍼블리싱 및 프론트엔드 개발에서 적용한 마크업 및
          스타일링 전략을 체계적으로 기술합니다.
          <br />
          시맨틱 태그 활용, 스타일링 아키텍처, 이미지 최적화 기법, 그리고
          애니메이션 구현 방식을 구체적으로 정리했습니다.
        </p>
      </div>
      {data?.markupStylingGroup.map(
        ({ label, title, desc, descTable, color }, idx) => (
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
                "absolute bottom-0 right-0 left-0 w-full h-[6px] opacity-40"
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
              <p className="whitespace-pre-line leading-relaxed text-sm text-gray-300">
                {desc}
              </p>
            ) : descTable ? (
              descTable && (
                <table className="w-full border-collapse text-sm text-gray-300">
                  <thead>
                    <tr
                      style={{
                        backgroundColor: color.replace(/0\.6\)$/, "0.1)"),
                      }}
                    >
                      <th className="border-b min-w-24 p-3 text-left">항목</th>
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
        )
      )}
    </div>
  );
}
