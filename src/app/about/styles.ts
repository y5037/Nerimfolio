import clsx from "clsx";

export const profileButton = clsx(
  "px-5 py-1 mr-3 border border-solid border-white rounded-full transition-colors duration-200",
  "hover:bg-zinc-700"
);

export const tabContentsWrap = clsx("mt-14 mb-20 text-gray-200");

export const introTitle = clsx("text-xl font-semibold mb-2");

export const introDescription = clsx("leading-relaxed");

export const buildsSection = clsx(
  "relative p-6 rounded-xl bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 shadow-lg"
);

export const buildsTitle = clsx(
  "text-xl font-semibold text-white mb-4 border-b-2 border-solid pb-2 max-w-max"
);

export const buildsStackWrap = clsx("flex flex-wrap gap-4");

export const buildsStackList = clsx(
  "flex items-center gap-2 px-4 rounded-2xl cursor-default select-none font-semibold shadow-md"
);

export const buildsStackEmoji = clsx("text-lg");

export const buildsULList = clsx(
  "list-disc list-inside space-y-2 text-gray-400"
);

export const connectTileType1 = clsx(
  "rounded-xl p-6 bg-[#1e1e1e] border border-zinc-700 text-zinc-200 shadow-md"
);

export const connectTileType2 = clsx(
  "rounded-xl p-6 border border-solid border-gray-500 text-gray-200"
);

export const connectTitle = clsx("text-white text-lg font-semibold mb-3");

export const connectULList = clsx(
  "list-disc list-inside space-y-1 text-gray-400 text-sm"
);
