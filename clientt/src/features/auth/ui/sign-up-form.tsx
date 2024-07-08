import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/CustomButton";
import { UiLink } from "@/shared/ui/link";
import { UiTextField } from "@/shared/ui/text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SignUpForm() {
  const { handleSubmit, register, onSubmit, errorMessage } = useSignUpForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UiTextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton variant="primary" type="submit">
        Sign Up
      </UiButton>
      <UiLink href={ROUTES.SIGN_IN}>sign in</UiLink>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
