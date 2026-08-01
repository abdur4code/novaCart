import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../features/products/ProductCard";
import { Sparkles } from "lucide-react";

const NewArrivalProducts = () => {
  const productList = useSelector((state) => state.products.productList);
  const {items: cart} = useSelector((state) => state.cart);
  const newArrivals = productList.toSorted((a, b) => b.id - a.id);

  return (
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
        {newArrivals.slice(2, 6).map((product) => (
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

export default NewArrivalProducts;
