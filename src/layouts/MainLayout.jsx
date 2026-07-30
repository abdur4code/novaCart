import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/dashboard/Navbar";

import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
} from "../features/cart/cartSlice";
import CartDrawer from "../components/dashboard/CartDrawer";
import { useDispatch, useSelector } from "react-redux";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { items: cart, isCartOpen } = useSelector((state) => state.cart);

  const onClose = () => {
    dispatch(isCartOpen(false));
  };
  return (
    <div className="bg-slate-950 font-sans text-slate-300">
      <Navbar />
      <Outlet />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => dispatch(toggleCart(false))}
        cart={cart}
        onUpdateQuantity={(id, quantity) =>
          dispatch(updateQuantity({ id, quantity }))
        }
        onRemoveItem={(id) => dispatch(removeFromCart(id))}
        onClearCart={() => dispatch(clearCart())}
      />
    </div>
  );
};

export default MainLayout;
