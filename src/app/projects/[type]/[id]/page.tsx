import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}){
  const { type, id } = await params;

  if (type !== "frontend" && type !== "publishing") {
    notFound();
  }
  return (
    <>
      {type} 프로젝트 #{id}
    </>
  );
}
