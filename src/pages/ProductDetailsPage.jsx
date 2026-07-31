import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  Check,
  Tag,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RotateCcw,
  Share2,
  Sparkles,
  Plus,
  Minus,
  Eye,
} from "lucide-react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getOriginalPrice, getReviewCount } from "../utils/productUtils";
import { addToCart } from "../features/cart/cartSlice";
import ProductCard from "../features/products/ProductCard";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.productList);
  const product = useSelector((state) =>
    state.products.productList.find((p) => p.id === Number(id)),
  );
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const reviewCount = getReviewCount(product.reviews.length, product.id);
  const originalPrice = getOriginalPrice(
    product.discountPercentage,
    product.price,
  );
  const cart = useSelector((state) => state.cart.items);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const isInCart = cart.some((cartItem) => cartItem.id === product.id);
  const relatedProduct = items.filter(
    (prod) => prod.category === product.category,
  );

  console.log(relatedProduct);

  return (
    <div className="relative min-h-screen bg-slate-950 px-6 py-12 font-sans text-slate-300 lg:px-12">
      {/* ========================================================= */}
      {/* AMBIENT BACKGROUND GLOW GRADIENTS */}
      {/* ========================================================= */}
      <div className="pointer-events-none fixed -left-40 top-0 -z-10 h-150 w-150 rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="pointer-events-none fixed -right-40 top-125 -z-10 h-125 w-125 rounded-full bg-blue-600/15 blur-[140px]" />

      <main className="mx-auto max-w-7xl">
        {/* ========================================================= */}
        {/* 1. TOP NAVIGATION & BREADCRUMBS */}
        {/* ========================================================= */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> Back to Catalog
          </a>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Catalog</span>
            <span>/</span>
            <span className="capitalize text-slate-400">
              {product.category}
            </span>
            <span>/</span>
            <span className="text-indigo-400">{product.sku}</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN PRODUCT DETAIL SHOWCASE (2-COLUMN GRID) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* LEFT COLUMN: IMAGE GALLERY (7 columns on desktop) */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {/* Main Active Image Window */}
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-indigo-950/30 via-slate-900 to-slate-950 p-6 shadow-2xl backdrop-blur-xl">
              {/* Background Glow */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl transition-all duration-500 group-hover:h-80 group-hover:w-80 group-hover:bg-indigo-500/25" />
              </div>

              <img
                src={selectedImage}
                alt={product.title}
                className="relative z-10 h-full w-full object-contain object-center drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category Pill */}
              <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/70 px-3.5 py-1 text-xs font-semibold capitalize text-indigo-300 backdrop-blur-md">
                <Tag size={12} className="text-indigo-400" />
                {product.category}
              </div>

              {/* Share Icon */}
              <button className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/40 p-2.5 text-slate-300 backdrop-blur-md transition-all hover:border-white/30 hover:text-white">
                <Share2 size={16} />
              </button>
            </div>

            {/* Thumbnail Gallery Row */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square overflow-hidden rounded-xl border p-2 transition-all ${
                    selectedImage === img
                      ? "border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/20"
                      : "border-white/10 bg-white/2 hover:border-white/20"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} thumbnail ${idx + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT SPECIFICATIONS & ACTIONS (5 columns) */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/3 p-8 shadow-2xl backdrop-blur-xl lg:col-span-5">
            <div>
              {/* Brand & Stock Status */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  {product.brand}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  In Stock ({product.stock} units)
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {product.title}
              </h1>

              {/* Rating Bar */}
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-md border border-amber-500/20 bg-amber-500/10 px-2 py-1 text-amber-400">
                  <Star size={14} className="fill-amber-400" />
                  <span className="text-sm font-bold">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <span className="text-sm text-slate-400">
                  Based on{" "}
                  <span className="font-semibold text-white">
                    {reviewCount}
                  </span>{" "}
                  enterprise reviews
                </span>
              </div>

              {/* Price Row */}
              <div className="mt-6 flex items-baseline gap-3 border-t border-white/10 pt-6">
                <span className="text-4xl font-extrabold text-white">
                  ${product.price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="text-lg text-slate-500 line-through">
                    ${originalPrice}
                  </span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="rounded-md bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-400">
                    Save {Math.round(product.discountPercentage)}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                {product.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION FOOTER: QUANTITY & CART CTAS */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* Quantity Controller */}
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-1.5 sm:w-36">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-40"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-sm font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      setQuantity((q) => Math.min(product.stock, q + 1))
                    }
                    disabled={quantity >= product.stock}
                    className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-40"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Add to Cart CTA */}
                <button
                  onClick={handleAddToCart}
                  disabled={isInCart}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all ${
                    isInCart
                      ? "cursor-default border border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                      : "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 active:scale-[0.98]"
                  }`}
                >
                  {isInCart ? (
                    <>
                      <Check size={18} /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} /> Add to Cart
                    </>
                  )}
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  aria-label="Save to wishlist"
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3.5 text-slate-300 transition-colors hover:border-white/20 hover:text-white"
                >
                  <Heart
                    size={20}
                    className={`transition-colors ${
                      isWishlisted ? "fill-rose-500 text-rose-500" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Enterprise Trust Badges */}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/5 pt-6 text-center text-[11px] text-slate-400">
                <div className="flex flex-col items-center gap-1">
                  <Truck size={16} className="text-indigo-400" />
                  <span>Free Priority Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck size={16} className="text-blue-400" />
                  <span>2-Year Full Warranty</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw size={16} className="text-emerald-400" />
                  <span>30-Day Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. RELATED PRODUCTS SECTION (MAXIMUM 4 CARDS) */}
        {/* ========================================================= */}
        <section className="mt-20 border-t border-white/10 pt-16">
          <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                <Sparkles size={14} /> Recommended Recommendations
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Related Products
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Other high-performance items frequently paired with this
                category.
              </p>
            </div>
          </div>

          {/* 4-Column Grid (Strict Maximum of 4 Products) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProduct.slice(0, 4).map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                isInCart={cart.some((cartItem) => cartItem.id === item.id)}
                onAddToCart={(item) => dispatch(addToCart(item))}
                onToggleWishlist={(item) => console.log("Wishlisted:", item)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
