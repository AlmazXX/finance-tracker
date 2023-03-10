import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "../store/categSlice";
import { transactionReducer } from "../store/transSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;