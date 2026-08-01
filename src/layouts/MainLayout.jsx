import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
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
import Footer from "../components/dashboard/Footer";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { items: cart, isCartOpen } = useSelector((state) => state.cart);

  const onClose = () => {
    dispatch(isCartOpen(false));
  };
  return (
    <div className="bg-slate-950 font-sans text-slate-300">
      <Navbar />
      <ScrollRestoration />
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
      <Footer />
    </div>
  );
};

export default MainLayout;
