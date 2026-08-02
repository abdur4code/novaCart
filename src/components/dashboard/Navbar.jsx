import React, { useState } from "react";
import { ShoppingBag, ShoppingCart, User, LogIn, Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, clearCart } from "../../features/cart/cartSlice";
import { cartCount } from "../../utils/cartUtils";
import { removeUser } from "../../features/auth/authSlice";
import ConfirmModal from "../ConfirmModal";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.logedUserData);
  let { items: cart } = useSelector((state) => state.cart);

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartTotal = cartCount(cart);

  const getLinkClass = ({ isActive }) => {
    return `transition-colors hover:text-indigo-400 ${
      isActive
        ? "text-indigo-500 font-semibold"
        : "text-gray-300 hover:text-indigo-600"
    }`;
  };

  const handleLogoutConfirmed = () => {
    dispatch(removeUser());
    dispatch(clearCart());
    localStorage.removeItem("loggedInUser");
    setShowLogoutConfirm(false);
    setIsMobileMenuOpen(false);
    toast.success("Logged out successfully");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-xl font-bold text-white"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 shadow-lg shadow-indigo-600/20">
            <ShoppingBag size={20} className="text-white" />
          </div>
          NovaCart
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <NavLink to={"/main"} end className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to={"/main/product"} className={getLinkClass}>
            Shop
          </NavLink>
          <NavLink to={"/main/about"} className={getLinkClass}>
            About
          </NavLink>
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3">
          {/* Cart Icon with Badge (Always Visible outside Hamburger) */}
          <button
            onClick={() => dispatch(toggleCart())}
            className="relative cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-all hover:border-indigo-500/30 hover:bg-indigo-600/20 hover:text-white"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={18} />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
              {cartTotal}
            </span>
          </button>

          {/* Desktop Profile & Logout (Hidden on Mobile) */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-white/20 hover:text-white">
              <User size={18} />
              <span>{user?.fullName || "User"}</span>
            </button>

            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="rounded-lg border border-indigo-500/30 bg-indigo-600/20 p-2.5 text-sm font-medium text-indigo-300 transition-all hover:bg-indigo-600 hover:text-white"
              title="Log out"
            >
              <LogIn size={16} />
            </button>
          </div>

          {/* Hamburger Menu Toggle Button (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            <NavLink
              to={"/main"}
              end
              className={getLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/main/product"}
              className={getLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to={"/main/about"}
              className={getLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>

            {/* Divider */}
            <hr className="my-1 border-white/10" />

            {/* Mobile User Profile */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <User size={16} />
                </div>
                <span className="font-medium">{user?.fullName || "User"}</span>
              </div>

              {/* Mobile Logout Button */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowLogoutConfirm(true);
                }}
                className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 transition-all hover:bg-red-500 hover:text-white"
              >
                <LogIn size={14} />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={showLogoutConfirm}
        title="Log out?"
        message="You'll need to sign in again to access your cart and orders."
        confirmLabel="Log out"
        cancelLabel="Cancel"
        onConfirm={handleLogoutConfirmed}
        onCancel={() => setShowLogoutConfirm(false)}
      />
    </header>
  );
};

export default Navbar;
