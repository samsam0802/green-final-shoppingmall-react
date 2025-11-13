import React from "react";
import CouponSearchFilter from "../../../components/admin/coupon/CouponSearchFilter";
import CouponSearchList from "../../../components/admin/coupon/CouponSearchList";

export default function CouponSearch() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <CouponSearchFilter />
        <CouponSearchList />
      </div>
    </div>
  );
}
