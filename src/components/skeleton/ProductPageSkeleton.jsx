import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductPageSkeleton = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 px-6 py-12 font-sans text-slate-300 lg:px-12">
      {/* Ambient Background Gradients */}
      <div className="pointer-events-none fixed left-1/4 top-0 -z-10 h-125 w-125 rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-10 right-10 -z-10 h-125 w-125 rounded-full bg-blue-600/15 blur-[140px]" />

      <main className="mx-auto max-w-7xl animate-pulse">
        {/* ========================================================= */}
        {/* 1. HEADER & ACTIVE COUNT SKELETON */}
        {/* ========================================================= */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            {/* Catalog Feed Tag */}
            <div className="h-4 w-28 rounded-full bg-indigo-500/20" />
            {/* Page Title */}
            <div className="h-10 w-48 rounded-lg bg-white/15 sm:w-64" />
            {/* Showing Products Subtitle */}
            <div className="h-4 w-36 rounded bg-white/10" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. FILTER BAR SKELETON */}
        {/* ========================================================= */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/3 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input Box Skeleton */}
            <div className="h-12 w-full flex-1 rounded-xl border border-white/10 bg-black/30" />

            {/* Dropdowns Skeleton */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-12 w-40 rounded-xl border border-white/10 bg-black/30" />
              <div className="h-12 w-40 rounded-xl border border-white/10 bg-black/30" />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. PRODUCT GRID SKELETON (8 Cards) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPageSkeleton;