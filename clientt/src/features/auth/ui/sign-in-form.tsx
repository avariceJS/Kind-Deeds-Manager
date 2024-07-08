import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/CustomButton";
import { UiLink } from "@/shared/ui/link";
import { UiTextField } from "@/shared/ui/text-field";
import { useSignInForm } from "../model/use-sign-in-form";

export function SignInForm() {
  const { handleSubmit, register, onSubmit, errorMessage } = useSignInForm();
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
        Sign In
      </UiButton>
      <UiLink href={ROUTES.SIGN_UP}>sign up</UiLink>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
