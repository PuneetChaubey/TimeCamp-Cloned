import React from "react";
import { Route, Routes } from "react-router-dom";
import Integrations from "./Integrations";
import { Login } from "./Login";


export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/integrations" element={<Integrations/>}/>
      </Routes>
    </div>
  );
};
