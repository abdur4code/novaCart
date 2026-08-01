import React from "react";
import { TrendingUp } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "../../features/products/ProductCard";
import {addToCart} from "../../features/cart/cartSlice"
import { Link } from "react-router";

const TopRatedProducts = () => {
  const productList = useSelector((state) => state.products.productList);
  const { items: cart, isCartOpen } = useSelector((state) => state.cart);
  const topProducts = productList.toSorted((a, b) => b.rating - a.rating);

  return (
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
        <Link
          to={`/main/product?filter=rating-desc`}
          className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
        >
          Browse top rated →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {topProducts.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            isInCart={cart.some((cartItem) => cartItem.id === product.id)}
            product={product}
            onToggleWishlist={(prod) => console.log("Wishlisted:", prod)}
          />
        ))}
      </div>
    </section>
  );
};

export default TopRatedProducts;
