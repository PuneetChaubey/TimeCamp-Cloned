import React from "react";
import { Route, Routes } from "react-router-dom";
import Integrations from "./Integrations";
import { Login } from "./Login";
import { Register } from "./Register";
import LandingPAge from "../Pages/LandingPAge";
import Feature from "../Components/Feature";
import Project from "./Project";
import { OnBoarding } from "./OnBoarding";
import Header from "../Components/Header/Header";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPAge />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/projects" element={<Project />} />
        <Route path="onboarding" element={<OnBoarding />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </div>
  );
};
