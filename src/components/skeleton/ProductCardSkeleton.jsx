import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-2.5 shadow-xl backdrop-blur-md animate-pulse">
      {/* ========================================================= */}
      {/* THUMBNAIL SKELETON */}
      {/* ========================================================= */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/5 bg-slate-900/60 p-4">
        {/* Top-Left Category Badge Placeholder */}
        <div className="absolute left-3 top-3 h-6 w-20 rounded-full bg-white/10" />

        {/* Top-Right Wishlist Button Placeholder */}
        <div className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/10" />

        {/* Center Product Graphic Placeholder */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-28 w-28 rounded-full bg-white/5 blur-sm" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* CARD CONTENT SKELETON */}
      {/* ========================================================= */}
      <div className="flex flex-1 flex-col justify-between px-2 pt-4 pb-1">
        <div>
          {/* Brand & Secondary Tag Row */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 rounded bg-white/10" />
            <div className="h-3 w-12 rounded bg-white/10" />
          </div>

          {/* Product Title */}
          <div className="mt-2.5 space-y-1.5">
            <div className="h-4 w-full rounded bg-white/15" />
            <div className="h-4 w-2/3 rounded bg-white/10" />
          </div>

          {/* Rating & Review Count Row */}
          <div className="mt-3 flex items-center gap-2">
            <div className="h-5 w-10 rounded bg-amber-500/10 border border-amber-500/20" />
            <div className="h-3 w-20 rounded bg-white/10" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* FOOTER: PRICE & CTA BUTTON SKELETON */}
        {/* ========================================================= */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <div className="space-y-1">
            {/* Price */}
            <div className="h-5 w-16 rounded bg-white/15" />
            {/* Discount Label */}
            <div className="h-2.5 w-10 rounded bg-emerald-500/15" />
          </div>

          {/* Add to Cart Button Placeholder */}
          <div className="h-9 w-20 rounded-xl bg-indigo-600/30 border border-indigo-500/20" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
