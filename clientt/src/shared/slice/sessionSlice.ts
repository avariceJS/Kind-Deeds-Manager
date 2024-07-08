import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
  authControllerSignOut,
  authControllerSignUp,
  GetSessionInfoDto,
} from "@/shared/api/generated";

export const fetchSession = createAsyncThunk(
  "session/fetchSession",
  async () => {
    const response = await authControllerGetSessionInfo();
    return response;
  },
);

export const signIn = createAsyncThunk(
  "session/signIn",
  async (data: { email: string; password: string }) => {
    const response = await authControllerSignIn(data);
    return response;
  },
);

export const signOut = createAsyncThunk("session/signOut", async () => {
  const response = await authControllerSignOut();
  return response;
});

export const signUp = createAsyncThunk(
  "session/signUp",
  async (data: { email: string; password: string }) => {
    const response = await authControllerSignUp(data);
    return response;
  },
);

const initialState = {
  data: null as GetSessionInfoDto | null, // Allow data to be either GetSessionInfoDto or null
  status: "idle",
  error: null as string | null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    resetSession: (state) => {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSession.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSession.fulfilled, (state, action) => { 
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSession.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      })
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign in failed";
      })
      .addCase(signOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOut.fulfilled, (state) => {
        state.data = null;
        state.status = "idle";
      })
      .addCase(signOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign out failed";
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign up failed";
      });
  },
});

export const { resetSession } = sessionSlice.actions;
export default sessionSlice.reducer;
