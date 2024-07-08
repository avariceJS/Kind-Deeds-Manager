import { SignUpForm } from "@/features/auth";
import { UiHeader } from "@/shared/ui/header";

export default function SignUpPage() {
  return (
    <div>
      <div>
        <UiHeader />
      </div>
      <SignUpForm />
    </div>
  );
}
