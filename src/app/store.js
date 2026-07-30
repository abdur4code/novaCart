import { configureStore } from "@reduxjs/toolkit";
import authReduser from '../features/auth/authSlice'
import productReducer from "../features/products/productSlice";
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer:{
        auth: authReduser,
        products: productReducer,
        cart: cartReducer,
    },
})
