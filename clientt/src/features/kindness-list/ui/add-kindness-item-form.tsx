import { UiButton } from "@/shared/ui/CustomButton";
import { UiTextField } from "@/shared/ui/text-field";
import { useAddKindnessItemForm } from "../model/use-add-kindness-item-form";

export function AddKindnessItemForm() {
  const { handleSubmit, register, errors } = useAddKindnessItemForm();

  return (
    <form className="add-kindness-item-form" onSubmit={handleSubmit}>
      <UiTextField
        inputProps={{
          placeholder: "title",
          ...register("data", { required: "This field is required" }),
        }}
      />
      {errors.data && (
        <span className="error-message">{errors.data.message}</span>
      )}
      <UiButton variant="primary">Add Kindness</UiButton>
    </form>
  );
}
