import { useParams } from "next/navigation";

export function getParamsId() {
  const params = useParams();
  return Number(params.id);
}
