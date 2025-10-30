import React from "react";
import { Link } from "react-router-dom";

const OrderCompletePage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-20 text-center">
      <h2 className="text-3xl font-bold mb-6">주문이 완료되었습니다 🎉</h2>
      <p className="text-gray-600 mb-10">
        주문하신 상품은 순차적으로 배송됩니다.
      </p>
      <Link
        to="/product/list"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        쇼핑 계속하기
      </Link>
    </div>
  );
};

export default OrderCompletePage;
