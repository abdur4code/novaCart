import React, { useEffect, Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/auth/authSlice";
import { setCart } from "../features/cart/cartSlice";
import { getCart } from "../utils/cartUtils";
import getProduct from "../api/productApi";

import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";

// --- Lazy-Loaded Layouts ---
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const ProductLayout = lazy(() => import("../layouts/ProductLayout"));

// --- Lazy-Loaded Pages ---
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const ProductDetailsPage = lazy(() => import("../pages/ProductDetailsPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

// ============================================================================
// LOADING COMPONENT
// ============================================================================
const PageLoader = () => (
  <div className="flex min-h-screen w-full items-center justify-center bg-slate-950">
    <div className="flex flex-col items-center gap-3">
      {/* Indigo Spinner */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500/20 border-t-indigo-600" />
      <span className="text-xs font-medium tracking-wider text-slate-400">
        LOADING...
      </span>
    </div>
  </div>
);

// wrap lazy components in Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

// ============================================================================
// APP ROUTES
// ============================================================================
const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const hydrateUser = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (user) {
        const cartData = getCart(user.email);
        dispatch(addUser(user));
        dispatch(setCart(cartData));
      } else {
        dispatch(removeUser());
      }
    };
    hydrateUser();
    getProduct(dispatch);
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: withSuspense(AuthLayout),
          children: [
            {
              path: "",
              element: withSuspense(LoginPage),
            },
            {
              path: "register",
              element: withSuspense(RegisterPage),
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
          element: withSuspense(MainLayout),
          children: [
            {
              path: "",
              element: withSuspense(HomePage),
            },
            {
              path: "product",
              element: withSuspense(ProductLayout),
              children: [
                {
                  path: "",
                  element: withSuspense(ProductPage),
                },
                {
                  path: ":id",
                  element: withSuspense(ProductDetailsPage),
                },
              ],
            },
            {
              path: "about",
              element: withSuspense(AboutPage),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;