import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import { ApiTransaction, Transaction, TransactionsList } from "../types";

export const createTransaction = createAsyncThunk(
  "transaction/create",
  async (transaction: Transaction) => {
    await axiosApi.post("/transactions.json", transaction);
  }
);

export const fetchTransactions = createAsyncThunk<ApiTransaction[]>(
  "transaction/fetch",
  async () => {
    const { data } = await axiosApi.get<TransactionsList>("/transactions.json");
    return data ? Object.keys(data).map((id) => ({ ...data[id], id })) : [];
  }
);