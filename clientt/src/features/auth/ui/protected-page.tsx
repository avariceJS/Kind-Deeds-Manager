import { ROUTES } from '@/shared/constants/routes'
import { fetchSession } from '@/shared/slice/sessionSlice'
import { AppDispatch, RootState } from '@/shared/store'
import { useRouter } from 'next/router'
import { PropsWithChildren, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const session = useSelector((state: RootState) => state.session);

    useEffect(() => {
      if (!session.data) {
        dispatch(fetchSession());
      }
    }, [dispatch, session.data]);

    const { data, status } = session;

    if (status === "failed") {
      router.replace(ROUTES.SIGN_IN);
    }

    if (status === 'loading') {
      return <h1>Loading...</h1>;
    }

    return <Component {...props} />;
  };
}
