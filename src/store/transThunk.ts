import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import {
  ApiTransaction,
  Category,
  Transaction,
  TransactionsCategories,
} from "../types";

export const createTransaction = createAsyncThunk(
  "transaction/create",
  async (transaction: Transaction) => {
    await axiosApi.post("/transactions.json", transaction);
  }
);

export const fetchTransactions = createAsyncThunk<ApiTransaction[]>(
  "transaction/fetch",
  async () => {
    const { data } = await axiosApi.get<TransactionsCategories>(".json");
    const transactions = data.transactions;
    const categories = data.categories;
    return data
      ? Object.keys(transactions)
          .map((id) => ({
            ...transactions[id],
            category: categories[transactions[id].category].name,
            type: categories[transactions[id].category].type,
            id,
          }))
          .sort((a, b) => (b.date > a.date ? 1 : -1))
      : [];
  }
);

export const editTransaction = createAsyncThunk(
  "transaction/edit",
  async ({ id, category }: { id: string; category: Category }) => {
    await axiosApi.put(`/transactions/${id}.json`, category);
  }
);

export const deleteTransaction = createAsyncThunk(
  "transaction/delete",
  async (id: string) => {
    await axiosApi.delete(`/transactions/${id}.json`);
  }
);