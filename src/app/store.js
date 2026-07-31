import { configureStore } from "@reduxjs/toolkit";
import authReduser from '../features/auth/authSlice'
import productReducer from "../features/products/productSlice";
import cartReducer from '../features/cart/cartSlice'
import { saveCart } from "../utils/cartUtils";

export const store = configureStore({
    reducer: {
        auth: authReduser,
        products: productReducer,
        cart: cartReducer,
    },
})

store.subscribe(() => {
    const state = store.getState();

    const email = state.auth. logedUserData?.email;
    const items = state.cart.items;

    saveCart(email, items);
});