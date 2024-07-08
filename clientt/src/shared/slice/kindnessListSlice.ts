import {
  AddBlockItemDto,
  BlockItemDto,
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
  BlockListDto,
} from "@/shared/api/generated";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface BlockListState {
  list: BlockListDto | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: BlockListState = {
  list: null,
  status: "idle",
};

export const fetchBlockList = createAsyncThunk(
  "blockList/fetchBlockList",
  async (q?: string) => {
    const response = await blockListControllerGetList({ q });

    return response;
  },
);

export const addBlockItem = createAsyncThunk(
  "blockList/addBlockItem",
  async (addBlockItemDto: AddBlockItemDto) => {
    const response = await blockListControllerAddBlockItem(addBlockItemDto);
    return response.data;
  },
);

export const removeBlockItem = createAsyncThunk(
  "blockList/removeBlockItem",
  async (id: number) => {
    const response = await blockListControllerRemoveBlockItem(id);
    return { id };
  },
);

const blockListSlice = createSlice({
  name: "blockList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlockList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlockList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchBlockList.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addBlockItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBlockItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.list) {
          state.list.items.push(action.payload as unknown as BlockItemDto);
        }
      })
      .addCase(addBlockItem.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(removeBlockItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeBlockItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.list) {
          state.list.items = state.list.items.filter(
            (item) => item.id !== action.payload.id,
          );
        }
      })
      .addCase(removeBlockItem.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default blockListSlice.reducer;
