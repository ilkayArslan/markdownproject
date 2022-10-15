import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./redux/textSlice";
export const store = configureStore({
    reducer: {
        text: textSlice
    }
})