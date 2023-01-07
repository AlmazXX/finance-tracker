import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { createCategory } from "./categThunk";

interface CategState {
  oneIsSubmitted: "idle" | "pending" | "success" | "failure";
}

const initialState: CategState = {
  oneIsSubmitted: "idle",
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
      }),
});

export const categoryReducer = categSlice.reducer;
export const selectCategoryIsSubmitted = (state: RootState) =>
  state.category.oneIsSubmitted;