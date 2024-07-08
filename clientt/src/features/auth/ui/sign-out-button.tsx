import { UiButton } from "@/shared/ui/CustomButton";
import { useSignOut } from "../model/use-sign-out";
import { UiSpinner } from '@/shared/ui/spinner'

export function SignOutButton() {
  const { handleSignOut, session } = useSignOut();

  const { status } = session;

  if (status === "loading") {
    return UiSpinner;
  }
  return (
    <UiButton variant="primary" onClick={handleSignOut}>
      Sign Out
    </UiButton>
  );
}
