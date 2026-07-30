import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import CartDrawer from "../../components/dashboard/CartDrawer";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
} from "../cart/cartSlice";

const ProductList = ({ filteredProducts }) => {
  const dispatch = useDispatch();
  const { items: cart, isCartOpen } = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products.productList);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
            isInCart={cart.some((cartItem) => cartItem.id === item.id)}
            onAddToCart={(prod) => dispatch(addToCart(prod))}
            onToggleWishlist={(prod) => console.log("Wishlisted:", prod)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
