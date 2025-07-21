import { notFound } from "next/navigation";
import FrontendContents from "./components/frontend/Contents";
import PublishingContents from "./components/publishing/Contents";
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
        <FrontendContents />
      ) : type === "publishing" ? (
        <PublishingContents />
      ) : (
        <NotFound />
      )}
    </>
  );
}
