import { UiButton } from "@/shared/ui/CustomButton";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {
  const { handleSignOut, session } = useSignOut();

  const { status } = session;

  if (status === "loading") {
    return <main>Loading...</main>;
  }
  return (
    <UiButton variant="outlined" onClick={handleSignOut}>
      Sign Out
    </UiButton>
  );
}
