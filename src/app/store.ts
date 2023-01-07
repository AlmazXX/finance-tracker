import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "../store/categSlice";
import { modalReducer } from "../store/modalSlice";
import { transactionReducer } from "../store/transSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    transaction: transactionReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;