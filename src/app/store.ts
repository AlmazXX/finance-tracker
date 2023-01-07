import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "../store/modalSlice";
import { transactionReducer } from "../store/transSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;