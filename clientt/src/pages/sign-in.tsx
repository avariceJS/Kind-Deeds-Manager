import { SignInForm } from "@/features/auth/ui/sign-in-form";
import { UiHeader } from "@/shared/ui/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SignInPage() {
  return (
    <div>
      <div>
        <UiHeader />
      </div>
      <SignInForm />
    </div>
  );
}
