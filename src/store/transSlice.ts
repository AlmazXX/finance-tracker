import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ApiTransaction } from "../types";
import { createTransaction, fetchTransactions } from "./transThunk";

interface transState {
  oneIsSubmitted: "idle" | "pending" | "success" | "failure";
  list: ApiTransaction[];
  listReceived: "idle" | "pending" | "success" | "failure";
}

const initialState: transState = {
  oneIsSubmitted: "idle",
  list: [],
  listReceived: "idle",
};

export const transSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.oneIsSubmitted = "pending";
      })
      .addCase(createTransaction.fulfilled, (state) => {
        state.oneIsSubmitted = "success";
      })
      .addCase(createTransaction.rejected, (state) => {
        state.oneIsSubmitted = "failure";
      })
      .addCase(fetchTransactions.pending, (state) => {
        state.listReceived = "pending";
      })
      .addCase(fetchTransactions.fulfilled, (state, { payload: list }) => {
        state.listReceived = "success";
        state.list = list;
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.listReceived = "failure";
      });
  },
});

export const transactionReducer = transSlice.reducer;
export const selectTransactionIsSubmitted = (state: RootState) =>
  state.transaction.oneIsSubmitted;
export const selectTransactions = (state: RootState) => state.transaction.list;
export const selectTransactionsReceived = (state: RootState) =>
  state.transaction.listReceived;