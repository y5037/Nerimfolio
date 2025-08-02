import { useParams } from "next/navigation";

export function useParamsId() {
  const params = useParams();
  return Number(params.id);
}
