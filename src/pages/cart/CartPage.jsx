import React from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dummyCart = [
    { id: 1, name: "토너", price: 15000, qty: 2 },
    { id: 2, name: "세럼", price: 22000, qty: 1 },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">장바구니</h2>

      {dummyCart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <span>{item.name}</span>
          <span>{item.qty}개</span>
          <span>{item.price.toLocaleString()}원</span>
        </div>
      ))}

      <div className="flex justify-end mt-6">
        <Link
          to="/order"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          주문하기
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
