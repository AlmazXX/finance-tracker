import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: state => {
      state.isOpen = false;
    }
  }
})

export const modalReducer = modalSlice.reducer;
export const {open, close} = modalSlice.actions;
export const selectModalIsOpen = (state: RootState) => state.modal.isOpen;