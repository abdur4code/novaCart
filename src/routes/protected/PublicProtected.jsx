import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  let { logedUserData } = useSelector((state) => state.auth);
  if (logedUserData) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default PublicProtected;
