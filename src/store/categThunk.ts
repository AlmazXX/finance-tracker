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

export const fetchOneCategory = createAsyncThunk<Category, string>(
  "category/fetchOne",
  async (id) => {
    const { data } = await axiosApi.get<Category>(`/categories/${id}.json`);
    return data;
  }
);

export const editCategory = createAsyncThunk(
  "category/edit",
  async ({ id, category }: { id: string; category: Category }) => {
    await axiosApi.put(`/categories/${id}.json`, category);
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id: string) => {
    await axiosApi.delete(`/categories/${id}.json`);
    const { data } = await axiosApi.get(
      `/transactions.json?orderBy="category"&equalTo="${id}"`
    );
    Promise.all(
      Object.keys(data).map(
        async (id) => await axiosApi.delete(`/transactions/${id}.json`)
      )
    );
  }
);