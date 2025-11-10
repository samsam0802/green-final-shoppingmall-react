import React, { useState } from "react";
import AdminSideBar from "./AdminSideBar";
import { useLocation } from "react-router-dom";

const AdminLayout = ({ children }) => {
  // const [activeTab, setActiveTab] = useState("product-search"); // 기본 선택 탭

  const location = useLocation();
  console.log(location.pathname);

  const getActiveTabFromUrl = () => {
    const path = location.pathname;

    const pathMap = {
      "/admin/products": "product-search",
      "/admin/product/add": "product-add",
      "/admin/restock/noti": "restock-notification",
      "/admin/order/search": "order-history",
      "/admin/user/search": "user-search",
      "/admin/coupon/register": "coupon-register",
      "/admin/coupon/search": "coupon-search",
      "/admin/statistics": "sales-statistics",
    };

    return pathMap[path] || "product-search";
  };

  const activeTab = getActiveTabFromUrl();

  const handleTabClick = (tabId) => {
    // setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* 네비게이션 바 */}
      <nav className="flex justify-between items-center px-8 h-16 bg-gray-800 text-white shadow-md">
        <div className="navbar-brand">
          <h1 className="text-xl font-semibold">FirstMall 관리자</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="navbar-user text-sm">ㅇㅇㅇ관리자님</div>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200">
            로그아웃
          </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* 사이드바 */}
        <AdminSideBar activeTab={activeTab} onTabClick={handleTabClick} />

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
