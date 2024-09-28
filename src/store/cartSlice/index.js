import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCarts: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setTotalCarts: (state, action) => {
            state.totalCarts = action.payload
        }
    }

})

export const { setTotalCarts } = cartSlice.actions
export default cartSlice.reducer

