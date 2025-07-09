import clsx from "clsx";

export default function BodyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={clsx("overflow-y-auto")}>{children}</div>;
}
