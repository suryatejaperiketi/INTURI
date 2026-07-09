import React from 'react'
import AdminNav from './AdminNav'
import "../../styles/DashboardLayout.css";
import DashboardRoutes from './DashboardRoutes'
import Sidebar from "../Dashboard/Sidebar";


function DashboardLayout() {
  return (
     <div className="admin-layout">
      <AdminNav/>
      <Sidebar />

      <main className="admin-main-content">
        <DashboardRoutes/>
      </main>
    </div>
  )
}

export default DashboardLayout