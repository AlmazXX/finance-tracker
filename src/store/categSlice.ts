import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ApiCategory } from "../types";
import { createCategory, fetchCategories } from "./categThunk";

interface CategState {
  oneIsSubmitted: "idle" | "pending" | "success" | "failure";
  list: ApiCategory[];
  listIsreceived: "idle" | "pending" | "success" | "failure";
}

const initialState: CategState = {
  oneIsSubmitted: "idle",
  list: [],
  listIsreceived: "idle",
};

export const categSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createCategory.pending, (state) => {
        state.oneIsSubmitted = "pending";
      })
      .addCase(createCategory.fulfilled, (state) => {
        state.oneIsSubmitted = "success";
      })
      .addCase(createCategory.rejected, (state) => {
        state.oneIsSubmitted = "failure";
      })
      .addCase(fetchCategories.pending, (state) => {
        state.listIsreceived = "pending";
      })
      .addCase(fetchCategories.fulfilled, (state, { payload: list }) => {
        state.listIsreceived = "success";
        state.list = list;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.listIsreceived = "failure";
      }),
});

export const categoryReducer = categSlice.reducer;
export const selectCategoryIsSubmitted = (state: RootState) =>
  state.category.oneIsSubmitted;
export const selectCategories = (state: RootState) => state.category.list;
export const selectCategoriesReceived = (state: RootState) =>
  state.category.listIsreceived;