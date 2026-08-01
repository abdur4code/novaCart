import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  let { logedUserData, authChecked } = useSelector((state) => state.auth);

  if (!authChecked) return null;
  
  if (!logedUserData) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default MainProtected;
