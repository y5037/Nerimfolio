import clsx from "clsx";

export const controller = clsx(
  "border border-solid border-gray100 rounded-full p-2 bg-[rgba(0,0,0,.3)] duration-[.2s] hover:bg-[rgba(255,255,255,.1)]"
);

export const controllerButton = clsx(
  "relative w-[20px] max-w-[20px] h-[20px] max-h-[20px]",
  "max-[530px]:w-[10px] max-[530px]:h-[10px]"
);
