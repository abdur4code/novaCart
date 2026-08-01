import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    status: "idle",
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.productList = action.payload;
            state.status = "succeeded";
            state.error = null;
        },
        setProductStatus: (state, action) => {
            state.status = action.payload;
        },
        setProductError: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
    }
})

export const { addProduct,  setProductStatus, setProductError } = productSlice.actions;
export default productSlice.reducer;