"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import {
  techStack,
  favoriteTools,
  collaborationTools,
  building,
} from "@/lib/constants/aboutBuilds";

export default function Builds() {
  return (
    <section className={clsx("space-y-12 mt-14 mb-20")}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={clsx(
          "p-8 rounded-3xl border border-solid border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.03)]"
        )}
      >
        <h2
          className={clsx(
            "inline-block text-2xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          )}
        >
          🛠️ Primary Tech Stack
        </h2>
        <ul className={clsx("grid grid-cols-2 gap-6", "sm:grid-cols-3")}>
          {techStack.map(({ name, emoji }) => (
            <li
              key={name}
              className={clsx(
                "flex flex-col items-center justify-center p-6 rounded-2xl transition bg-[rgba(255,255,255,0.05)]"
              )}
            >
              <span className={clsx("text-3xl mb-3")}>{emoji}</span>
              <span className={clsx("text-sm font-medium")}>{name}</span>
            </li>
          ))}
        </ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={clsx(
          "p-8 rounded-3xl border border-solid border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.03)]"
        )}
      >
        <h2
          className={clsx(
            "inline-block text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          )}
        >
          🧰 Favorite Tools & Libraries
        </h2>
        <p className={clsx("mb-8 text-gray300 text-sm")}>
          프로젝트에 감성을 더하거나, 개발 속도를 높이는 데 자주 사용하는
          도구들이에요.
        </p>
        <div
          className={clsx(
            "flex space-x-4 overflow-x-auto snap-x",
            "hide-scrollbar"
          )}
        >
          {favoriteTools.map(({ name, emoji }) => (
            <div
              key={name}
              className={clsx(
                "flex-shrink-0 snap-center w-40 h-40 rounded-2xl flex flex-col items-center justify-center transition bg-[rgba(255,255,255,0.05)]"
              )}
            >
              <span className={clsx("text-3xl mb-3")}>{emoji}</span>
              <span className={clsx("text-sm font-medium")}>{name}</span>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={clsx(
          "p-8 rounded-3xl border border-solid border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.03)]"
        )}
      >
        <h2
          className={clsx(
            "inline-block text-2xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
          )}
        >
          🤝 Collaboration Tools
        </h2>
        <ul className={clsx("space-y-4 font-light")}>
          {collaborationTools.map((item, i) => (
            <li
              key={i}
              className={clsx(
                "p-5 rounded-xl transition bg-[rgba(255,255,255,0.05)]"
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className={clsx(
          "p-8 rounded-3xl border border-solid border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.03)]"
        )}
      >
        <h2
          className={clsx(
            "inline-block text-2xl font-bold mb-8 bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent"
          )}
        >
          ✨ My Way of Building
        </h2>
        <ul className={clsx("space-y-3")}>
          {building.map((item, idx) => (
            <li
              key={idx}
              className={clsx(
                "p-5 rounded-xl transition bg-[rgba(255,255,255,0.05)]"
              )}
            >
              <p className={clsx("leading-relaxed text-gray300 font-light")}>
                <span
                  className={clsx("text-[rgba(255,255,255,1)] font-semibold")}
                >
                  {item.highlight}
                </span>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </motion.section>
    </section>
  );
}
