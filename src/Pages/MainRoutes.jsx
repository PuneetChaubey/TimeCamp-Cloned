import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
  );
};
