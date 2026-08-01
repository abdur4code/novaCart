import React from "react";
import { Outlet, ScrollRestoration } from "react-router";

const ProductLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default ProductLayout;
