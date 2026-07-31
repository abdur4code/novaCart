import React, { useState } from "react";
import { ShoppingCart, Heart, Star, Eye, Check, Tag } from "lucide-react";
import { useNavigate } from "react-router";
import { getOriginalPrice, getReviewCount } from "../../utils/productUtils";

const ProductCard = ({
  // Direct API Props Destructured with Fallbacks
  id,
  title = "Untitled Product",
  brand = "Novacart",
  category = "general",
  price = 0,
  discountPercentage = 0,
  rating = 0,
  stock = 0,
  tags = [],
  thumbnail = "",
  reviews = [],
  // Action Handler Props
  onAddToCart,
  isInCart,
  onToggleWishlist,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  // Calculate review count
  const reviewCount = getReviewCount(reviews.length, id);

  // Calculate the original pre-discount price (e.g., $11.16 if price is $9.99 with 10.48% off)
  const originalPrice = getOriginalPrice(discountPercentage, price)

  // Handlers
  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (onToggleWishlist) {
      onToggleWishlist({ id, title, price, thumbnail, category });
    }
  };

  //Return componenet
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-2.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:bg-white/6 hover:shadow-2xl hover:shadow-indigo-500/10">
      {/* ========================================================= */}
      {/* THUMBNAIL */}
      {/* ========================================================= */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/5 bg-linear-to-br from-indigo-950/40 via-slate-900 to-slate-950 p-4">
        {/* BackgroundGlow behind thumbnail */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full bg-indigo-500/15 blur-xl transition-all duration-500 group-hover:h-44 group-hover:w-44 group-hover:bg-indigo-500/25" />
        </div>

        {/* Product Thumbnail */}
        <img
          src={thumbnail}
          alt={title}
          className="relative z-10 h-full w-full object-contain object-center drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* TOP-LEFT CATEGORY TAG */}
        <div className="absolute left-3 top-3 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold capitalize text-indigo-300 shadow-sm backdrop-blur-md">
          <Tag size={11} className="text-indigo-400" />
          {category}
        </div>

        {/* TOP-RIGHT WISHLIST BUTTON */}
        <button
          onClick={handleWishlist}
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-20 rounded-full border border-white/10 bg-black/40 p-2 text-slate-300 backdrop-blur-md transition-all hover:scale-110 hover:border-white/30 hover:text-white active:scale-95"
        >
          <Heart
            size={15}
            className={`transition-colors ${
              isWishlisted ? "fill-rose-500 text-rose-500" : ""
            }`}
          />
        </button>

        {/* QUICK VIEW OVERLAY ON HOVER */}
        <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => navigate(`/main/product/${id}`)}
            className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-slate-950/85 px-3.5 py-1.5 text-xs font-medium text-slate-200 shadow-lg backdrop-blur-md transition-colors hover:bg-slate-900 hover:text-white"
          >
            <Eye size={13} /> Quick View
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CARD CONTENT (BRAND, TITLE, TAGS, RATING) */}
      {/* ========================================================= */}
      <div className="flex flex-1 flex-col justify-between px-2 pt-4 pb-1">
        <div>
          {/* Brand & Secondary Tag */}
          <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-slate-400">
            <span>{brand || "Novacart"}</span>
            {tags.length > 0 && (
              <span className="text-indigo-400/80">#{tags[0]}</span>
            )}
          </div>

          {/* Product Title */}
          <h3
            title={title}
            className="mt-1 line-clamp-2 min-h-11 text-sm font-semibold text-white transition-colors group-hover:text-indigo-300 sm:text-base"
          >
            {title}
          </h3>

          {/* Rating & Review Count */}
          <div className="mt-2 flex items-center gap-1.5 text-xs">
            <div className="flex items-center gap-1 rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-400 border border-amber-500/20">
              <Star size={12} className="fill-amber-400" />
              <span className="font-bold">{Number(rating).toFixed(1)}</span>
            </div>
            <span className="text-slate-400">
              ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FOOTER: PRICE & ADD TO CART */}
        {/* ========================================================= */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">
                ${Number(price).toFixed(2)}
              </span>

              {/* Strikethrough pre-discount price */}
              {originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>

            {/* Subtle Discount Badge under price */}
            {discountPercentage > 0 && (
              <span className="text-[10px] font-semibold text-emerald-400">
                Save {Math.round(discountPercentage)}%
              </span>
            )}
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={() =>
              onAddToCart({ id, title, price, thumbnail, category })
            }
            disabled={isInCart || stock <= 0}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
              isInCart
                ? "cursor-default border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : stock <= 0
                  ? "cursor-not-allowed bg-white/5 text-slate-500"
                  : "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 active:scale-95"
            }`}
          >
            {isInCart ? (
              <>
                <Check size={14} /> Added
              </>
            ) : (
              <>
                <ShoppingCart size={14} /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
