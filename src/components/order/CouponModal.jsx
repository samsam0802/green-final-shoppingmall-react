import React from "react";

const CouponModal = ({ onClose }) => {
  const coupons = [
    { id: 1, name: "10% 할인 쿠폰" },
    { id: 2, name: "5,000원 할인 쿠폰" },
    { id: 3, name: "무료배송 쿠폰" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">쿠폰 선택</h3>
        <ul className="space-y-2">
          {coupons.map((coupon) => (
            <li
              key={coupon.id}
              className="border p-2 rounded hover:bg-blue-50 cursor-pointer"
              onClick={onClose}
            >
              {coupon.name}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 hover:bg-gray-300 py-2 rounded"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default CouponModal;
