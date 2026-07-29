import React from "react";
import {
  ShoppingBag,
  ShoppingCart,
  User,
  LogIn,
  Search,
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  Tag,
  Laptop,
  Shirt,
  Armchair,
  Home as HomeIcon,
  Dumbbell,
  Watch,
  Sparkles,
  TrendingUp,
  Heart,
  Package,
  Layers,
} from "lucide-react";

// MOCK DATA: Categories
const CATEGORIES = [
  { id: 1, name: "Electronics", count: "420+ Items", icon: Laptop },
  { id: 2, name: "Clothing", count: "850+ Items", icon: Shirt },
  { id: 3, name: "Furniture", count: "190+ Items", icon: Armchair },
  { id: 4, name: "Home Appliances", count: "310+ Items", icon: HomeIcon },
  { id: 5, name: "Sports", count: "240+ Items", icon: Dumbbell },
  { id: 6, name: "Accessories", count: "530+ Items", icon: Watch },
];

// MOCK DATA: Products
const TOP_RATED = [
  {
    id: 1,
    name: "ProStudio Wireless Headphones",
    category: "Electronics",
    price: "$299",
    rating: "4.9",
    reviews: 128,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "ErgoMesh Executive Chair",
    category: "Furniture",
    price: "$450",
    rating: "4.8",
    reviews: 94,
    tag: "Top Rated",
  },
  {
    id: 3,
    name: "Titanium Smart Fitness Watch",
    category: "Accessories",
    price: "$199",
    rating: "4.9",
    reviews: 210,
    tag: "Popular",
  },
  {
    id: 4,
    name: "Minimalist Merino Wool Crew",
    category: "Clothing",
    price: "$85",
    rating: "4.7",
    reviews: 65,
    tag: "Trending",
  },
];

const NEW_ARRIVALS = [
  {
    id: 5,
    name: "UltraSlim 4K OLED Monitor",
    category: "Electronics",
    price: "$699",
    rating: "5.0",
    reviews: 12,
    tag: "New",
  },
  {
    id: 6,
    name: "Carbon Fiber Tennis Racket",
    category: "Sports",
    price: "$220",
    rating: "4.8",
    reviews: 19,
    tag: "New",
  },
  {
    id: 7,
    name: "Smart Aroma Diffuser Pro",
    category: "Home Appliances",
    price: "$75",
    rating: "4.6",
    reviews: 28,
    tag: "New",
  },
  {
    id: 8,
    name: "Handcrafted Leather Weekender",
    category: "Accessories",
    price: "$310",
    rating: "4.9",
    reviews: 41,
    tag: "New",
  },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-300">
      {/* ========================================================= */}
      {/* FULL-PAGE AMBIENT BACKGROUND GRADIENTS (PUNCHY & VISIBLE) */}
      {/* ========================================================= */}

      {/* 1. Hero Section Glow (Top Left / Center) */}
      <div className="pointer-events-none absolute -left-40 top-0 h-150 w-150 rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* 2. Categories & Top-Rated Glow (Middle Right) */}
      <div className="pointer-events-none absolute -right-40 top-175 h-137.5 w-137.5 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* 3. New Arrivals Glow (Middle Left) */}
      <div className="pointer-events-none absolute -left-40 top-375 h-150 w-150 rounded-full bg-indigo-500/20 blur-[120px]" />

      {/* 4. Bottom Value Props Glow (Bottom Center/Right) */}
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-125 w-125 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* ========================================================= */}

      {/* 1. TOP NAVBAR */}
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
            <a
              href="#"
              className="text-white transition-colors hover:text-indigo-400"
            >
              Home
            </a>
            <a href="#" className="transition-colors hover:text-indigo-400">
              Shop
            </a>
            <a href="#" className="transition-colors hover:text-indigo-400">
              About
            </a>
          </nav>

          {/* Right Action Icons (Cart, Profile, Login) */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-white/20 hover:text-white">
              <Search size={18} />
            </button>

            {/* Cart Icon with Badge */}
            <button className="relative rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-white/20 hover:text-white">
              <ShoppingCart size={18} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            {/* Profile Icon */}
            <button className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-white/20 hover:text-white">
              <User size={18} />
            </button>

            {/* Login Icon / Button */}
            <a
              href="#"
              className="flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/20 px-3.5 py-2 text-sm font-medium text-indigo-300 transition-all hover:bg-indigo-600 hover:text-white"
            >
              <LogIn size={16} />
              <span className="hidden sm:inline">Login</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-12">
        {/* 2. HERO SECTION */}
        <section className="relative my-8 overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-8 shadow-2xl backdrop-blur-xl md:p-14 lg:p-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
              <Sparkles size={14} /> Welcome back to your Novacart workspace
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Next-gen shopping,{" "}
              <span className="text-indigo-400">engineered</span> for speed.
            </h1>
            <p className="mt-4 text-lg text-slate-400 sm:text-xl">
              Explore curated premium products with transparent pricing, instant
              checkout, and enterprise-grade logistics.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500">
                Explore Catalog
                <ArrowRight size={18} />
              </button>
              <button className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white">
                View Orders
              </button>
            </div>
          </div>
        </section>

        {/* 3. STATS CARDS */}
        <section className="my-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-6 shadow-lg backdrop-blur-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400">
              <Package size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">2,500+</div>
              <div className="text-sm text-slate-400">
                Top Products Available
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-6 shadow-lg backdrop-blur-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
              <ShoppingCart size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3 Items</div>
              <div className="text-sm text-slate-400">
                Currently in Your Cart
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-6 shadow-lg backdrop-blur-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <Layers size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">6 Categories</div>
              <div className="text-sm text-slate-400">Curated & Verified</div>
            </div>
          </div>
        </section>

        {/* 4. SHOP BY CATEGORY */}
        <section className="my-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Shop by Category
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Select a category card to filter our inventory.
              </p>
            </div>
            <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-400 hover:text-indigo-300 sm:block"
            >
              View all categories →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {CATEGORIES.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/3 p-6 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-white/6 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-indigo-400 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    <IconComponent size={24} />
                  </div>
                  <span className="font-semibold text-white">{cat.name}</span>
                  <span className="mt-1 text-xs text-slate-500 group-hover:text-slate-400">
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 5. TOP-RATED PRODUCTS */}
        <section className="my-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                <TrendingUp size={14} /> Highest Satisfaction
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Top-Rated Products
              </h2>
            </div>
            <a
              href="#"
              className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Browse top rated →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TOP_RATED.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 6. NEW ARRIVALS */}
        <section className="my-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                <Sparkles size={14} /> Fresh Drops
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                New Arrivals
              </h2>
            </div>
            <a
              href="#"
              className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Browse new drops →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NEW_ARRIVALS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 7. VALUE PROPOSITIONS (BOTTOM TRUST FEATURES) */}
        <section className="my-20 border-y border-white/10 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Fast, Tracked Delivery
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Global priority fulfillment with automated SMS and dashboard
                  milestone updates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  100% Secure Payments
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  256-bit SSL encryption and tokenized transactions. Your card
                  data never hits our servers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <Tag size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Transparent, Best Prices
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  No hidden markup fees or surprise shipping costs at checkout.
                  Honest e-commerce.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-indigo-600">
                <ShoppingBag size={16} className="text-white" />
              </div>
              Novacart
            </div>

            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Novacart Infrastructure, Inc.
              All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// REUSABLE PRODUCT CARD COMPONENT
function ProductCard({ product }) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/3 shadow-lg backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/6">
      {/* Product Image Placeholder (SaaS style dark card box) */}
      <div className="relative flex h-48 w-full items-center justify-center bg-linear-to-br from-slate-900 to-slate-950">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
          {product.category}
        </span>

        {/* Top Badge */}
        <span className="absolute left-3 top-3 rounded-md bg-indigo-600/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {product.tag}
        </span>

        {/* Wishlist Button */}
        <button className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/40 p-2 text-slate-400 transition-colors hover:text-white">
          <Heart size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center gap-1 text-xs text-amber-400">
            <Star size={14} className="fill-amber-400" />
            <span className="font-semibold text-white">{product.rating}</span>
            <span className="text-slate-500">({product.reviews})</span>
          </div>
          <h3 className="mt-2 font-medium text-white transition-colors group-hover:text-indigo-400">
            {product.name}
          </h3>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-lg font-bold text-white">{product.price}</span>
          <button className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-600">
            <ShoppingCart size={14} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
