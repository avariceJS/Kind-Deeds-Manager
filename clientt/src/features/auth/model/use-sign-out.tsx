import { ROUTES } from "@/shared/constants/routes";
import { signOut } from "@/shared/slice/sessionSlice";
import { AppDispatch, RootState } from "@/shared/store";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export function useSignOut() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const session = useSelector((state: RootState) => state.session);

  const handleSignOut = async () => {
    await dispatch(signOut());
    router.push(ROUTES.SIGN_IN);
  };

  return {
    handleSignOut,
    session,
  };
}
