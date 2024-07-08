import { SignOutButton } from "@/features/auth";
import { RootState } from "@/shared/store";
import { useSelector } from "react-redux";

export function Profile() {
  const session = useSelector((state: RootState) => state.session);
  const { data } = session;

  return (
    <>
      <span>User:</span>
      <div>mail:{data?.email}</div>
      <div>id: {data?.id}</div>
      <SignOutButton />
    </>
  );
}
