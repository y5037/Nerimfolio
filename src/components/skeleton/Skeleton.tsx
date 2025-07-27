import clsx from "clsx";

export default function Skeleton({
  $text1,
  $text2,
}: {
  $text1?: boolean;
  $text2?: boolean;
}) {
  return (
    <>
      <div
        className={clsx(
          $text1
            ? "mt-3 mb-4 w-3/4 h-3 bg-gray-700 animate-pulse rounded-xl"
            : $text2
            ? "mt-3 mb-4 w-2/4 h-3 bg-gray-600 animate-pulse rounded-xl"
            : "absolute inset-0 bg-gray-700 animate-pulse rounded-xl"
        )}
      />
    </>
  );
}
