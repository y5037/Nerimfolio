import clsx from "clsx";

export default function BodyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={clsx("h-full", "min-h-fit")}>{children}</div>;
}
