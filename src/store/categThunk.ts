import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import { ApiCategory, CategoriesList, Category } from "../types";

export const createCategory = createAsyncThunk(
  "category/create",
  async (category: Category) => {
    await axiosApi.post("/categories.json", category);
  }
);

export const fetchCategories = createAsyncThunk<ApiCategory[]>(
  "category/fetch",
  async () => {
    const { data } = await axiosApi.get<CategoriesList>("/categories.json");
    return data ? Object.keys(data).map((id) => ({ ...data[id], id })) : [];
  }
);