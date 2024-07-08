import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
  AccountDto,
  PatchAccountDto,
} from "@/shared/api/generated";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AccountState {
  account: AccountDto | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AccountState = {
  account: null,
  status: "idle",
};

export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  async () => {
    const response = await accountControllerGetAccount();
    return response;
  },
);

export const updateAccount = createAsyncThunk(
  "account/updateAccount",
  async (patchAccountDto: PatchAccountDto) => {
    const response = await accountControllerPatchAccount(patchAccountDto);

    return response;
  },
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.account = action.payload;
      })
      .addCase(fetchAccount.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.account = action.payload;
      })
      .addCase(updateAccount.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default accountSlice.reducer;
