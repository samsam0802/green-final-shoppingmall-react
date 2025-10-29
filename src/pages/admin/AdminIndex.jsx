import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Outlet } from "react-router-dom";

const AdminIndex = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default AdminIndex;
