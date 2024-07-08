import { AddBlockItemDtoType } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/CustomButton";
import { UiSelectField } from "@/shared/ui/select-field";
import { UiTextField } from "@/shared/ui/text-field";
import { useAddKindnessItemForm } from "../model/use-add-kindness-item-form";



const typeOptions = [
  { label: "qwe", value: AddBlockItemDtoType.Website },
  { label: "asd", value: AddBlockItemDtoType.KeyWord },
];

export function AddKindnessItemForm() {
  const { handleSubmit,  register, type } = useAddKindnessItemForm();

  return (
    <form onSubmit={handleSubmit}>
      <UiSelectField
        options={typeOptions}
        selectProps={{
          ...register("type"),
        }}
      />
      <UiTextField
        inputProps={{
          placeholder:
            type === AddBlockItemDtoType.KeyWord
              ? "Enter Key Word..."
              : "Enter WebSite...",
          ...register("data"),
        }}
      />
      <UiButton variant="primary">
        Add Kindness
      </UiButton>
    </form>
  );
}
