import React from "react";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";

const isAuth = true;

const PrivateRoute = ({ children, ...rest }) => {
  return isAuth ? (
    <DefaultLayout>{children}</DefaultLayout>
  ) : (
    // If not authenticated, redirect to the entry route. if you go back, replace will still not let you go to protected route
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
