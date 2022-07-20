import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </div>
  );
};
