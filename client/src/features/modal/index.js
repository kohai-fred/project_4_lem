import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.value = {
                isOpen: action.payload.isOpen,
                top: action.payload.top,
                deleteUserId: action.payload?.deleteUserId,
            };
        },
    },
});

export const { setModal, setIsOpen } = modalSlice.actions;

export default modalSlice.reducer;
