import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import { ApiTransaction, Transaction, TransactionsCategories } from "../types";

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
    return transactions
      ? Object.keys(transactions)
          .filter((id) => transactions[id].category in categories)
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

export const fetchOneTransaction = createAsyncThunk<Transaction, string>(
  "transaction/fetchOne",
  async (id) => {
    const { data } = await axiosApi.get<Transaction>(
      `/transactions/${id}.json`
    );
    return data;
  }
);

export const editTransaction = createAsyncThunk(
  "transaction/edit",
  async ({ id, transaction }: { id: string; transaction: Transaction }) => {
    await axiosApi.put(`/transactions/${id}.json`, transaction);
  }
);

export const deleteTransaction = createAsyncThunk(
  "transaction/delete",
  async (id: string) => {
    await axiosApi.delete(`/transactions/${id}.json`);
  }
);