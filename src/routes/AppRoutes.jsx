import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import AboutPage from "../pages/AboutPage";
import getProduct from "../api/productApi";
import ProductLayout from "../layouts/ProductLayout";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import { getCart } from "../utils/cartUtils";
import { setCart } from "../features/cart/cartSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const hydrateUser = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (user) {
        const cartData = getCart(user.email);
        dispatch(addUser(user));
        dispatch(setCart(cartData));
      }else{
        dispatch(removeUser())
      }
    };
    hydrateUser();
    getProduct(dispatch);
  }, [dispatch]);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "product",
              element: <ProductLayout />,
              children: [
                {
                  path: "",
                  element: <ProductPage />,
                },
                {
                  path: ":id",
                  element: <ProductDetailsPage />,
                },
              ],
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
