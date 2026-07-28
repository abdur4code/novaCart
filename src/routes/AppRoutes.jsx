import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
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
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
