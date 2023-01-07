import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

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
});

export const categoryReducer = categSlice.reducer;
export const selectCategoryIsSubmitted = (state: RootState) =>
  state.category.oneIsSubmitted;