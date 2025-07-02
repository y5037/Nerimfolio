export default function BodyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full min-h-fit">{children}</div>;
}
