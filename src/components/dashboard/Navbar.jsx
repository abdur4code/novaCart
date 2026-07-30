import React from "react";
import { ShoppingBag, ShoppingCart, User, LogIn, Search } from "lucide-react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../features/cart/cartSlice";
import { cartCount } from "../../utils/cartUtils";

const Navbar = () => {
  const dispatch = useDispatch();
  let { items: cart, isCartOpen
   } = useSelector((state) => state.cart);

   const cartTotal = cartCount(cart);

  const getLinkClass = ({ isActive }) => {
    return `transition-colors hover:text-indigo-400 ${
      isActive ? "text-indigo-500" : "text-gray-300 hover:text-indigo-600"
    }`;
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
          Novacart
        </a>

        {/* Navigation Links */}
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

        {/* Right Action Icons (Cart, Profile, Login) */}
        <div className="flex items-center gap-3">
          {/* Profile Icon */}
          <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-white/20 hover:text-white">
            <User size={18} />
            <span>Abdur</span>
          </button>
          {/* Cart Icon with Badge */}
          <button
            onClick={() => dispatch(toggleCart())}
            className="relative cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-all  hover:border-indigo-500/30 hover:bg-indigo-600/20 hover:text-white"
          >
            <ShoppingCart size={18} />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
              {cartTotal}
            </span>
          </button>

          {/* Logout Icon / Button */}
          <button className="rounded-lg border border-indigo-500/30 bg-indigo-600/20 p-2.5 text-sm font-medium text-indigo-300 transition-all hover:bg-indigo-600 hover:text-white">
            <LogIn size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
