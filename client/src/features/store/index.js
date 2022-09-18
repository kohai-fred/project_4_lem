import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../user";
import modalReducer from "../modal";

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
    },
});
