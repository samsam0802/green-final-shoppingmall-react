import React, { useState } from "react";
import CouponModal from "../../components/order/CouponModal";
import OrderSummary from "../../components/order/OrderSummary";
import PaymentMethod from "../../components/order/PaymentMethod";

const OrderComponent = () => {
  const [showCouponModal, setShowCouponModal] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">주문 / 결제</h2>

      {/* 주문자 정보 */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">주문자 정보</h3>
        <div className="grid grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="이름" />
          <input className="border p-2 rounded" placeholder="연락처" />
          <input
            className="col-span-2 border p-2 rounded"
            placeholder="배송 주소"
          />
        </div>
      </section>

      {/* 쿠폰 및 결제 */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">할인 쿠폰</h3>
          <button
            onClick={() => setShowCouponModal(true)}
            className="text-blue-500 underline"
          >
            쿠폰 선택
          </button>
        </div>
        {showCouponModal && (
          <CouponModal onClose={() => setShowCouponModal(false)} />
        )}
      </section>

      <PaymentMethod />

      <OrderSummary />
    </div>
  );
};

export default OrderComponent;
