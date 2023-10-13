import React from "react";
import Navbar from "../components/Navbar";
import TopDashboard from "../components/dashboard/TopDashboard";
import TableDashboard from "../components/dashboard/TableDashboard";
import OrderDashboard from "../components/dashboard/OrderDashboard";
import DishesDashboard from "../components/dashboard/DishesDashboard";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <TopDashboard />
      <OrderDashboard />
      <DishesDashboard />
      <TableDashboard />
    </div>
  );
};

export default Dashboard;
