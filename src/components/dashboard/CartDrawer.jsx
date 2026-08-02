import React, { useState } from "react";
import {
  ShoppingBag,
  X,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Check,
  ShoppingCart,
  Heart,
  Star,
  Eye,
  Tag,
} from "lucide-react";

import { cartCount } from "../../utils/cartUtils";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearCart, toggleCart } from "../../features/cart/cartSlice";

// ============================================================================
// SLIDECART DRAWER COMPONENT
// ============================================================================
const CartDrawer = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const dispatch = useDispatch();
  // Calculate total price
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalItemsCount = cartCount(cart);

  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      toast.warn("Your cart is empty!");
      return;
    } else {
      toast.success("🎉 Congrats! Your order has been placed successfully!");
    }
    // Clear the cart
    dispatch(clearCart());

    // Close the cart modal/drawer
    dispatch(toggleCart());
  };

  return (
    <>
      {/* OVERLAY BACKDROP (Fades in, click to close) */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* RIGHT-SIDE DRAWER PANEL */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ========================================================= */}
        {/* DRAWER HEADER */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 shadow-lg shadow-indigo-600/20">
              <ShoppingBag size={18} className="text-white" />
            </div>
            <h2 className="text-lg font-bold text-white">Your Cart</h2>
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-400">
              {totalItemsCount} {totalItemsCount === 1 ? "item" : "items"}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition-colors hover:border-white/20 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* ========================================================= */}
        {/* DRAWER BODY: CART ITEM LIST */}
        {/* ========================================================= */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between gap-4 rounded-xl border border-white/10 bg-white/3 p-4 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  {/* Item Image, Title, Price */}
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-slate-900 p-1">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="truncate text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-sm font-bold text-indigo-400">
                          ${Number(item.price).toFixed(2)}
                        </span>
                        <span className="text-xs text-slate-500">each</span>
                      </div>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-rose-500/10 hover:text-rose-400"
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Quantity Controller Row */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-black/40 p-1">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="rounded p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <span className="text-sm font-semibold text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty Cart State */
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-slate-500">
                <ShoppingBag size={32} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                Your cart is empty
              </h3>
              <p className="mt-1 max-w-xs text-xs text-slate-400">
                Explore our catalog and add items to your cart to proceed with
                checkout.
              </p>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* DRAWER FOOTER (Subtotal, Checkout & Clear Cart) */}
        {/* ========================================================= */}
        {cart.length > 0 && (
          <div className="border-t border-white/10 bg-slate-950/80 p-6 backdrop-blur-xl">
            {/* Subtotal Row */}
            <div className="mb-4 flex items-center justify-between text-base">
              <span className="font-medium text-slate-400">Total Amount</span>
              <span className="text-2xl font-extrabold text-white">
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 active:scale-[0.98]"
            >
              Proceed to Checkout
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* Clear Cart Button */}
            <button
              onClick={onClearCart}
              className="mt-3 w-full text-center text-xs font-medium text-slate-500 transition-colors hover:text-rose-400"
            >
              Clear entire cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
