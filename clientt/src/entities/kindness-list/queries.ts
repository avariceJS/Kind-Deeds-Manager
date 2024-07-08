import { useDispatch, useSelector } from "react-redux";

import {
  addBlockItem,
  fetchBlockList,
  removeBlockItem,
} from "@/shared/slice/kindnessListSlice";
import { AppDispatch, RootState } from "@/shared/store";
import { useEffect } from "react";

export function useKindnessListQuery({ q }: { q?: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const blockList = useSelector((state: RootState) => state.blockList);

  const IsLoading = blockList.status;

  useEffect(() => {
    if (blockList.status === "idle") {
      dispatch(fetchBlockList(q));
    }
  }, [dispatch, blockList.status, q]);

  return { blockList, IsLoading };
}

export function useAddBlockItemMutation() {
  const dispatch = useDispatch<AppDispatch>();
  return (item: any) => dispatch(addBlockItem(item));
}

export function useRemoveKindnessItem() {
  const dispatch = useDispatch<AppDispatch>();
  return (itemId: number) => dispatch(removeBlockItem(itemId));
}
