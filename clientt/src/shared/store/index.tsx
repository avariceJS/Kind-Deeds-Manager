import {
  Action,
  configureStore,
  createDynamicMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import accountReducer from "../slice/accountSlice";
import blockListReducer from "../slice/kindnessListSlice";
import sessionReducer from "../slice/sessionSlice";

const dynamicMiddleware = createDynamicMiddleware();

export const store = configureStore({
  reducer: {
    account: accountReducer,
    blockList: blockListReducer,
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(dynamicMiddleware.middleware),
});

dynamicMiddleware.addMiddleware(thunk);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
