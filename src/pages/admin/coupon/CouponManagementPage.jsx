import React from "react";
import CouponBasicInfo from "../../../components/admin/coupon/CouponBasicInfo";
import DiscountSetting from "../../../components/admin/coupon/DiscountSetting";
import IssuranceSetting from "../../../components/admin/coupon/IssuranceSetting";
import PeriodSetting from "../../../components/admin/coupon/PeriodSetting";
import { useSelector } from "react-redux";

const CouponManagementPage = () => {
  const couponRegisterForm = useSelector((state) => state.couponRegisterSlice);
  const submitHandler = () => {
    console.log(couponRegisterForm);
  };

  return (
    <div className="min-h-screen">
      <div className="space-y-8 pb-40">
        <CouponBasicInfo />
        <DiscountSetting />
        <IssuranceSetting />
        <PeriodSetting />
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div className="flex space-x-3">
            <button
              type="button"
              className="px-6 py-2 bg-gray-500 text-white text-sm font-medium rounded-md hover:bg-gray-600 transition-colors"
            >
              초기화
            </button>
            <button
              type="button"
              onClick={submitHandler}
              className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
            >
              상품 등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponManagementPage;
