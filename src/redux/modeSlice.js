import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers:{
        toggleMode: (state) => {
            state.value = !state.value
        },
    }
})

export const { toggleMode } = modeSlice.actions

export default modeSlice.reducer