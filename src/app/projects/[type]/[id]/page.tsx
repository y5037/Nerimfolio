import { notFound } from "next/navigation";
import FrontendDetail from "./components/frontend/DetailPage";
import PublishingDetail from "./components/publishing/DetailPage";
import NotFound from "@/app/not-found";
import { frontendProject } from "@/data/home/frontend";
import { publishingProject } from "@/data/home/publishing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  const { type, id } = await params;

  const project =
    type === "frontend"
      ? frontendProject.find((p) => Number(id) === p.id)
      : type === "publishing"
      ? publishingProject.find((p) => Number(id) === p.id)
      : undefined;

  const title = project?.title;

  if (type !== "frontend" && type !== "publishing") {
    return { title: "Not Found" };
  }

  if (
    (type === "frontend" && Number(id) > 5) ||
    (type === "publishing" && Number(id) > 6)
  ) {
    notFound();
  }

  return {
    title,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  const { type } = await params;

  if (type !== "frontend" && type !== "publishing") {
    notFound();
  }
  return (
    <>
      {type === "frontend" ? (
        <FrontendDetail type={type}/>
      ) : type === "publishing" ? (
        <PublishingDetail type={type}/>
      ) : (
        <NotFound />
      )}
    </>
  );
}
