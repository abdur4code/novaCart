import React from "react";
import { useSelector } from "react-redux";
import { Sparkles, SprayCan, Sofa, Carrot } from "lucide-react";
import { getCategoryProdCount } from "../../utils/productUtils";
import { Link } from "react-router";

const ShopByCategory = () => {
  const productsData = useSelector((state) => state.products.productList);
  const categoryIcons = {
    beauty: Sparkles,
    fragrances: SprayCan,
    furniture: Sofa,
    groceries: Carrot,
  };

  const CATEGORIES = [
    ...[...new Set(productsData.map((product) => product.category))].map(
      (category) => ({
        label: category.charAt(0).toUpperCase() + category.slice(1),
        value: category,
      }),
    ),
  ];

  return (
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
        <Link
          to={'/main/product'}
          className="hidden text-sm font-semibold text-indigo-400 hover:text-indigo-300 sm:block"
        >
          View all categories →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
        {CATEGORIES.map((cat) => {
          const categoryKey = cat.value;
          const IconComponent = categoryIcons[categoryKey];
          return (
            <Link
              key={cat.value}
              to={`/main/product?category=${encodeURIComponent(cat.value)}`}
              className="group cursor-pointer flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/3 p-6 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-white/6 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-indigo-400 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <IconComponent size={24} />
              </div>
              <span className="font-semibold text-white">{cat.label}</span>
              <span className="mt-1 text-xs text-slate-500 group-hover:text-slate-400">
                {getCategoryProdCount(productsData, cat.value)} Products
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ShopByCategory;
