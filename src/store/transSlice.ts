import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { createTransaction } from "./transThunk";

interface transState {
  oneIsSubmitted: "idle" | "pending" | "success" | "failure";
}

const initialState: transState = {
  oneIsSubmitted: "idle",
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
      });
  },
});

export const transactionReducer = transSlice.reducer;
export const selectTransactionIsSubmitted = (state: RootState) =>
  state.transaction.oneIsSubmitted;