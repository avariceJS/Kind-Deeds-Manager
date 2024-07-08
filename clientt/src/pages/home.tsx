import { AddKindnessItemForm, KindnessList } from "@/features/kindness-list";

import { RootState } from "@/shared/store";
import { UiHeader } from "@/shared/ui/header";
import { UiSpinner } from "@/shared/ui/spinner";
import { Profile } from "@/widgets/profile";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const session = useSelector((state: RootState) => state.session);

  const { status } = session;

  if (status === "loading") {
    return <UiSpinner />;
  }

  if (status === "failed") {
    return <main>Failed to load session data</main>;
  }

  return (
    <>
      <div>
        <UiHeader right={<Profile />} />
        <div>
          <main>
            <AddKindnessItemForm />
            <KindnessList />
          </main>
        </div>
      </div>
    </>
  );
}
