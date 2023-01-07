import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import { Category } from "../types";

export const createCategory = createAsyncThunk(
  "category/create",
  async (category: Category) => {
    await axiosApi.post("/categories.json", category);
  }
);