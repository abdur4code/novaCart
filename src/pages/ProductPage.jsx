import React, { useState, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  Tag,
  ShoppingBag,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import ProductList from "../features/products/ProductList";
import { useSelector } from "react-redux";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating-desc" },
];

const ProductPage = () => {
  // Filter & Search State
  const productsData = useSelector((state) => state.products.productList);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const CATEGORIES = [
    { label: "All Categories", value: "all" },
    ...[...new Set(productsData.map((product) => product.category))].map(
      (category) => ({
        label: category.charAt(0).toUpperCase() + category.slice(1),
        value: category,
      }),
    ),
  ];

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return productsData
      .filter((item) => {
        // Search Matching (title or brand)
        const matchesSearch =
          item.title.toLowerCase().includes(searchQuery) ||
          (item.brand || "").toLowerCase().includes(searchQuery);

        // Category Matching
        const matchesCategory =
          selectedCategory === "all" ||
          item.category.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating-desc") return b.rating - a.rating;
        return 0; // "featured" default order
      });
  }, [searchQuery, selectedCategory, sortBy]);

  // Check if any filter is currently active
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    sortBy !== "featured";

  // Reset all filters
  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("featured");
  };

  return (
    <div className="relative min-h-screen bg-slate-950 px-6 py-12 font-sans text-slate-300 lg:px-12">
      {/* ========================================================= */}
      {/* AMBIENT BACKGROUND GRADIENTS */}
      {/* ========================================================= */}
      <div className="pointer-events-none fixed left-1/4 top-0 -z-10 h-125 w-125 rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-10 right-10 -z-10 h-125 w-125 rounded-full bg-blue-600/15 blur-[140px]" />

      <main className="mx-auto max-w-7xl">
        {/* ========================================================= */}
        {/* 1. HEADER & ACTIVE COUNT */}
        {/* ========================================================= */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              <Sparkles size={14} /> Catalog Feed
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              All Products
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Showing{" "}
              <span className="font-semibold text-white">
                {filteredProducts.length}
              </span>{" "}
              products found
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  in{" "}
                  <span className="font-semibold text-indigo-400 capitalize">
                    {selectedCategory}
                  </span>
                </span>
              )}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FILTER  */}
        {/* ========================================================= */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/3 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
          {/* Top Row: Search Input + Dropdowns + Reset */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* SEARCH INPUT BAR */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by title or brand..."
                className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-11 pr-10 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-black/50 focus:ring-1 focus:ring-indigo-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* DROPDOWN CONTROLS */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter Dropdown */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`appearance-none rounded-xl border bg-black/30 py-3 pl-4 pr-10 text-sm font-medium outline-none transition-all ${
                    selectedCategory !== "all"
                      ? "border-indigo-500/60 bg-indigo-500/10 text-white"
                      : "border-white/10 text-slate-300 hover:border-white/20"
                  }`}
                >
                  {CATEGORIES.map((cat) => (
                    <option
                      key={cat.value}
                      value={cat.value}
                      className="bg-slate-900 text-white"
                    >
                      {cat.label}
                    </option>
                  ))}
                </select>
                <Tag
                  size={14}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>

              {/* Price / Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`appearance-none rounded-xl border bg-black/30 py-3 pl-4 pr-10 text-sm font-medium outline-none transition-all ${
                    sortBy !== "featured"
                      ? "border-indigo-500/60 bg-indigo-500/10 text-white"
                      : "border-white/10 text-slate-300 hover:border-white/20"
                  }`}
                >
                  {SORT_OPTIONS.map((sort) => (
                    <option
                      key={sort.value}
                      value={sort.value}
                      className="bg-slate-900 text-white"
                    >
                      {sort.label}
                    </option>
                  ))}
                </select>
                <ArrowUpDown
                  size={14}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>

              {/* Clear All Filters Button */}
              {hasActiveFilters && (
                <button
                  onClick={handleClearAll}
                  className="flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-300 transition-colors hover:bg-rose-500/20 hover:text-white"
                >
                  <X size={16} />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* ========================================================= */}
          {/* ACTIVE FILTER */}
          {/* ========================================================= */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <span className="text-xs font-medium text-slate-500">
                Active Filters:
              </span>

              {/* Search Query Chip */}
              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:text-white"
                  >
                    <X size={13} />
                  </button>
                </span>
              )}

              {/* Category Chip */}
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/20 px-3 py-1 text-xs font-medium capitalize text-indigo-300">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="hover:text-white"
                  >
                    <X size={13} />
                  </button>
                </span>
              )}

              {/* Sort Chip */}
              {sortBy !== "featured" && (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300">
                  Sorted:{" "}
                  {SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label}
                  <button
                    onClick={() => setSortBy("featured")}
                    className="hover:text-white"
                  >
                    <X size={13} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* 3. PRODUCT GRID DISPLAY */}
        {/* ========================================================= */}
        {filteredProducts.length > 0 ? (
          <ProductList filteredProducts={filteredProducts} />
        ) : (
          /* Empty State / No Results Found */
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/2 p-16 text-center backdrop-blur-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-slate-400">
              <ShoppingBag size={28} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">
              No products matched your search
            </h3>
            <p className="mt-1 max-w-sm text-sm text-slate-400">
              We couldn't find any products matching your active filters. Try
              clearing your search query or resetting category filters.
            </p>
            <button
              onClick={handleClearAll}
              className="mt-6 flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-indigo-500"
            >
              <RotateCcw size={14} /> Reset All Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
