// src/pages/mypage/MyPageCouponsPage.jsx
import React from "react";
import CouponList from "../../components/user/mypage/CouponList";

export default function MyPageCouponsPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h1 className="text-xl font-bold mb-6">쿠폰함</h1>
      <p className="text-sm text-zinc-500 mb-6">
        보유 중인 할인/프로모션 쿠폰입니다.
      </p>
      <CouponList />
    </div>
  );
}
