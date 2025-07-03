import clsx from "clsx";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className={clsx(
        "flex items-center bg-black400 text-gray200 justify-center py-10"
      )}
    >
      2025 &copy; _hyerim
      <a
        href="https://github.com/y5037"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx("flex items-center ml-4")}
      >
        <Image
          src="/images/layout/github.svg"
          alt="Github"
          width={20}
          height={20}
          className={clsx("mr-1")}
        />
        y5037
      </a>
    </div>
  );
}
