import React, { useState } from "react";
import AdminSideBar from "./nav/AdminSideBar";

const AdminLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("product-inquiry"); // 기본 선택 탭

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* 네비게이션 바 */}
      <nav className="flex justify-between items-center px-8 h-16 bg-gray-800 text-white shadow-md">
        <div className="navbar-brand">
          <h1 className="text-xl font-semibold">FirstMall 관리자</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="navbar-user text-sm">관리자님</div>
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
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {getPageTitle(activeTab)}
            </h2>
            <p className="text-gray-600 mt-2">
              {getPageDescription(activeTab)}
            </p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

// 활성 탭에 따른 페이지 제목 반환
const getPageTitle = (activeTab) => {
  const titles = {
    "product-inquiry": "상품조회",
    "product-registration": "상품등록",
    "restock-notification": "재입고 알림",
    "order-inquiry": "주문조회",
    "sales-statistics": "판매 통계",
    "discount-events": "할인 이벤트",
    "discount-codes": "할인코드",
    "member-inquiry": "회원 조회",
    "dormant-members": "휴먼 회원 조회",
    "withdrawn-members": "탈퇴 회원 조회",
    "email-management": "이메일 발송 관리",
    "bulk-email": "이메일 대량 발송",
    "sms-management": "SMS 발송 관리",
    "bulk-sms": "SMS 대량 발송",
  };
  return titles[activeTab] || "관리자 페이지";
};

// 활성 탭에 따른 페이지 설명 반환
const getPageDescription = (activeTab) => {
  const descriptions = {
    "product-inquiry": "등록된 상품을 조회하고 검색합니다.",
    "product-registration": "새로운 상품을 등록합니다.",
    "restock-notification": "재입고 알림을 관리합니다.",
    "order-inquiry": "주문 내역을 조회하고 관리합니다.",
    "sales-statistics": "판매 통계를 확인합니다.",
    "discount-events": "할인 이벤트를 관리합니다.",
    "discount-codes": "할인 코드를 생성하고 관리합니다.",
    "member-inquiry": "회원 정보를 조회하고 관리합니다.",
    "dormant-members": "휴먼 회원을 조회하고 관리합니다.",
    "withdrawn-members": "탈퇴 회원 내역을 조회합니다.",
    "email-management": "이메일 발송을 관리합니다.",
    "bulk-email": "대량 이메일을 발송합니다.",
    "sms-management": "SMS 발송을 관리합니다.",
    "bulk-sms": "대량 SMS를 발송합니다.",
  };
  return descriptions[activeTab] || "관리자 페이지입니다.";
};

export default AdminLayout;
