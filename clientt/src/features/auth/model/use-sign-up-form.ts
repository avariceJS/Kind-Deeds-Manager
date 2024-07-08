import { ROUTES } from "@/shared/constants/routes";
import { signUp } from "@/shared/slice/sessionSlice";
import { AppDispatch, RootState } from "@/shared/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export function useSignUpForm() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const session = useSelector((state: RootState) => state.session);

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(signUp(data));
  };

  useEffect(() => {
    if (session.status === "failed") {
      setErrorMessage("Sign up failed");
    } else {
      setErrorMessage("");
    }

    if (session.status === "succeeded") {
      router.push(ROUTES.HOME);
    }
  }, [session.status]);

  return {
    errorMessage,
    register,
    handleSubmit,
    onSubmit,
  };
}
