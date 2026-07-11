import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import AdminContactus from "./AdminContactus";
import Development from "./Development";
import DevelopmentForm from "./DevelopmentForm";
import CMRFTable from "./CMRFTable";
import CmrFundsForm from "./CmrFundsForm";
import Mp3Table from "./Mp3Table";
import Mp3Form from "./Mp3Form";
import Mp4Table from "./Mp4Table";
import Mp4Form from "./Mp4Form";
import BeneficiariesForm from "./BeneficiariesForm";
import BeneficiariesTable from "./BeneficiariesTable";
import Voters from "./Voters";


function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome/>} />
      <Route path="/dashboard-home" element={<DashboardHome/>} />
      <Route path="/voters" element={<Voters/>} />
      <Route path="/admincontact" element={<AdminContactus/>} />
      <Route path="/development" element={<Development/>} />
      <Route path="/development-form" element={<DevelopmentForm/>} />
      <Route path="/cmrf-table" element={<CMRFTable/>} />
      <Route path="/cmrf-form" element={<CmrFundsForm/>} />
      <Route path="/mp3-table" element={<Mp3Table/>} />
      <Route path="/mp3-form" element={<Mp3Form/>} />
      <Route path="/mp4-table" element={<Mp4Table/>} />
      <Route path="/mp4-form" element={<Mp4Form/>} />
      <Route path="/beneficiaries-table" element={<BeneficiariesTable/>} />
      <Route path="/beneficiaries-form" element={<BeneficiariesForm/>} />
    </Routes>
  );
}

export default DashboardRoutes;
