import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ApiCategory, Category } from "../types";
import {
  createCategory,
  deleteCategory,
  editCategory,
  fetchCategories,
  fetchOneCategory,
} from "./categThunk";

interface CategState {
  oneIsSubmitted: "idle" | "pending" | "success" | "failure";
  list: ApiCategory[];
  listIsreceived: "idle" | "pending" | "success" | "failure";
  one: Category | null;
  oneReceived: "idle" | "pending" | "success" | "failure";
  oneDeleted: string | false;
}

const initialState: CategState = {
  oneIsSubmitted: "idle",
  list: [],
  listIsreceived: "idle",
  one: null,
  oneReceived: "idle",
  oneDeleted: "false",
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
      })
      .addCase(fetchOneCategory.pending, (state) => {
        state.oneReceived = "pending";
      })
      .addCase(fetchOneCategory.fulfilled, (state, { payload: category }) => {
        state.oneReceived = "success";
        state.one = category;
      })
      .addCase(fetchOneCategory.rejected, (state) => {
        state.oneReceived = "failure";
      })
      .addCase(editCategory.pending, (state) => {
        state.oneIsSubmitted = "pending";
      })
      .addCase(editCategory.fulfilled, (state) => {
        state.oneIsSubmitted = "success";
      })
      .addCase(editCategory.rejected, (state) => {
        state.oneIsSubmitted = "failure";
      })
      .addCase(deleteCategory.pending, (state, { meta }) => {
        state.oneDeleted = meta.arg;
      })
      .addCase(deleteCategory.fulfilled, (state) => {
        state.oneDeleted = false;
      })
      .addCase(deleteCategory.rejected, (state) => {
        state.oneDeleted = false;
      }),
});

export const categoryReducer = categSlice.reducer;
export const selectCategoryIsSubmitted = (state: RootState) =>
  state.category.oneIsSubmitted;
export const selectCategories = (state: RootState) => state.category.list;
export const selectCategoriesReceived = (state: RootState) =>
  state.category.listIsreceived;
export const selectOneCategory = (state: RootState) => state.category.one;
export const selectOneCategoryReceived = (state: RootState) =>
  state.category.oneReceived;
export const selectOneCategoryDeleted = (state: RootState) =>
  state.category.oneDeleted;