import { useKindnessListQuery } from "@/entities/block-list/queries";
import { useDebauncedValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useKindnessItems() {
  const [q, setQ] = useState("");

  const { blockList, IsLoading } = useKindnessListQuery({
    q: useDebauncedValue(q, 400),
  });

  const items = blockList.list?.items ?? [];

  return { items, q, setQ, IsLoading };
}
