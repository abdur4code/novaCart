import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        isCartOpen: false,
    },
    reducers: {
        setCart: (state, action) => {
            state.items = action.payload;
        },
        addToCart: (state, action) => {
            const existing = state.items.find((item) => item.id === action.payload.id);
            if (!existing) {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.isCartOpen = true;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            if (quantity <= 0) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                const item = state.items.find((i) => i.id === id);
                if (item) item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        toggleCart: (state, action) => {
            state.isCartOpen = action.payload ?? !state.isCartOpen;
        },

    },
});

export const {
    setCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;