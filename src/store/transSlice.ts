import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface transState {
  oneIsSubmitted: "idle" | "pending" | "success" | "failure";
}

const initialState: transState = {
  oneIsSubmitted: 'idle',
}

export const transSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
})

export const transactionReducer = transSlice.reducer;
export const selectTransactionIsSubmitted = (state: RootState) => state.transaction.oneIsSubmitted;