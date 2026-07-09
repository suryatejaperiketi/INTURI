import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import AdminContactus from "./AdminContactus";
import Development from "./Development";
import DevelopmentForm from "./DevelopmentForm";
import CMRFTable from "./CMRFTable";
import CmrFundsForm from "./CmrFundsForm";


function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome/>} />
      <Route path="/dashboard-home" element={<DashboardHome/>} />
      <Route path="/admincontact" element={<AdminContactus/>} />
      <Route path="/development" element={<Development/>} />
      <Route path="/development-form" element={<DevelopmentForm/>} />
      <Route path="/cmrf-table" element={<CMRFTable/>} />
      <Route path="/cmrf-form" element={<CmrFundsForm/>} />
    </Routes>
  );
}

export default DashboardRoutes;
