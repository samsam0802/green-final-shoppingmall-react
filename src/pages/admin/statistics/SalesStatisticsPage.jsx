import React from "react";
import SalesStatisticsTable from "../../../components/admin/statistics/SalesStatisticsTable";
import SalesChart from "../../../components/admin/statistics/SalesChart";

const SalesStatisticsPage = () => {
  return (
    <div className="space-y-8">
      <SalesStatisticsTable />
      <SalesChart />
    </div>
  );
};

export default SalesStatisticsPage;
