import { SignOutButton } from "@/features/auth";
import { AddKindnessItemForm, KindnessList } from '@/features/kindness-list'


import { RootState } from "@/shared/store";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const session = useSelector((state: RootState) => state.session);

  const { data, status } = session;

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  if (status === "failed") {
    return <main>Failed to load session data</main>;
  }

  return (
    <>
      <main>
        {data?.email}
        <SignOutButton />
        <AddKindnessItemForm></AddKindnessItemForm>
        <KindnessList></KindnessList>
      </main>
    </>
  );
}
