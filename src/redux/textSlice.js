import { createSlice } from "@reduxjs/toolkit";
import { data } from "./helpText";
const textSlice = createSlice({
    name: "text",
    initialState: {
        item: "this is user input",
        helpText: data,
        helpActive: false
    },
    reducers: {
        getItem: (state, action) => {
            state.item = action.payload
        },
        getHelp: (state) => {
            if (state.helpActive) {
                state.helpActive = false

            } else {
                state.helpActive = true

            }
        }
    }
})

export default textSlice.reducer;
export const { getItem, getHelp } = textSlice.actions