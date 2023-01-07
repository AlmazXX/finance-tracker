import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ApiTransaction } from "../types";
import {
  createTransaction,
  deleteTransaction,
  editTransaction,
  fetchOneTransaction,
  fetchTransactions,
} from "./transThunk";

interface transState {
  oneIsSubmitted: "idle" | "pending" | "success" | "failure";
  list: ApiTransaction[];
  listReceived: "idle" | "pending" | "success" | "failure";
  one: ApiTransaction | null;
  oneReceived: "idle" | "pending" | "success" | "failure";
  oneDeleted: string | false;
}

const initialState: transState = {
  oneIsSubmitted: "idle",
  list: [],
  listReceived: "idle",
  one: null,
  oneReceived: "idle",
  oneDeleted: false,
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
      })
      .addCase(fetchOneTransaction.pending, (state) => {
        state.oneReceived = "pending";
      })
      .addCase(
        fetchOneTransaction.fulfilled,
        (state, { payload: transaction }) => {
          state.oneReceived = "success";
          state.one = transaction;
        }
      )
      .addCase(fetchOneTransaction.rejected, (state) => {
        state.oneReceived = "failure";
      })
      .addCase(editTransaction.pending, (state) => {
        state.oneIsSubmitted = "pending";
      })
      .addCase(editTransaction.fulfilled, (state) => {
        state.oneIsSubmitted = "success";
      })
      .addCase(editTransaction.rejected, (state) => {
        state.oneIsSubmitted = "failure";
      })
      .addCase(deleteTransaction.pending, (state, { meta }) => {
        state.oneDeleted = meta.arg;
      })
      .addCase(deleteTransaction.fulfilled, (state) => {
        state.oneDeleted = false;
      })
      .addCase(deleteTransaction.rejected, (state) => {
        state.oneDeleted = false;
      });
  },
});

export const transactionReducer = transSlice.reducer;
export const selectTransactionIsSubmitted = (state: RootState) =>
  state.transaction.oneIsSubmitted;
export const selectTransactions = (state: RootState) => state.transaction.list;
export const selectTransactionsReceived = (state: RootState) =>
  state.transaction.listReceived;
export const selectOneTransaction = (state: RootState) => state.transaction.one;
export const selectOneTransactionReceived = (state: RootState) =>
  state.transaction.oneReceived;
export const selectOneTransactionDeleted = (state: RootState) =>
  state.transaction.oneDeleted;