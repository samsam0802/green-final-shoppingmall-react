// src/pages/mypage/MyPageInquiriesPage.jsx
import React from "react";
import InquiriesList from "../../components/user/mypage/InquiriesList";

export default function MyPageInquiriesPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h1 className="text-xl font-bold mb-6">내 문의내역</h1>
      <p className="text-sm text-zinc-500 mb-6">1:1 문의내역</p>
      <InquiriesList />
    </div>
  );
}
