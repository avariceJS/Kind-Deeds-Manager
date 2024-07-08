import { AddBlockItemDtoType } from "@/shared/api/generated";
import { addBlockItem, fetchBlockList } from "@/shared/slice/kindnessListSlice";
import { AppDispatch } from "@/shared/store";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export function useAddKindnessItemForm() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>({
    defaultValues: {
      type: AddBlockItemDtoType.Website,
    },
  });

  const type = watch("type");

  const onSubmit = async (data: {
    type: AddBlockItemDtoType;
    data: string;
  }) => {
    if (!data.data.trim()) {
      return;
    }
    await dispatch(addBlockItem(data));
    dispatch(fetchBlockList());
    reset();
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
    type,
  };
}
