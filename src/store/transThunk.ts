import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import { Transaction } from "../types";

export const createTransaction = createAsyncThunk(
  "transaction/create",
  async (transaction: Transaction) => {
    await axiosApi.post("/transactions.json", transaction);
  }
);