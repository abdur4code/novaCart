import React from "react";
import { Outlet } from "react-router";
import {
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 font-sans text-slate-300">
      {/* Ambient Background Gradients (Positioned to highlight the glass effect) */}
      <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]"></div>

      {/* Main Layout Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-6 py-12 lg:flex-row lg:px-12">
        {/* LEFT SIDE: Brand & Statistics */}
        <div className="flex w-full flex-col justify-center lg:w-1/2">
          {/* Logo */}
          <div className="mb-9 flex items-center gap-3 text-2xl font-bold text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 shadow-lg shadow-indigo-600/20">
              <ShoppingBag size={24} className="text-white" />
            </div>
            NovaCart
          </div>

          {/* Value Proposition */}
          <div className="max-w-lg">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white lg:text-6xl">
              Shop the future. <span className="text-indigo-400">Today.</span>
            </h1>
            <p className="mb-8 text-lg text-slate-400">
              Thousands of products, lightning-fast delivery, and prices that
              make your wallet happy.
            </p>

            {/* Stat Cards (Also using a subtle glass effect) */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <TrendingUp className="text-indigo-400" size={24} />
                <div>
                  <div className="text-2xl font-bold text-white">20K+</div>
                  <div className="text-sm text-slate-400">Products</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <Users className="text-blue-400" size={24} />
                <div>
                  <div className="text-2xl font-bold text-white">50k+</div>
                  <div className="text-sm text-slate-400">Active Merchants</div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <ShieldCheck size={18} className="text-emerald-400" />
              Enterprise-grade security and 99.99% uptime guaranteed.
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Glassmorphism Form */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
