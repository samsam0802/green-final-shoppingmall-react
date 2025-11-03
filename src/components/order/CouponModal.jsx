import React from "react";

const CouponModal = ({ onClose, onSelect }) => {
  const coupons = [{ id: 1, name: "신규회원 3,000원 할인", amount: 3000 }];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-80 shadow">
        <h3 className="font-semibold text-lg mb-4">보유 쿠폰</h3>

        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="border p-3 rounded mb-2 cursor-pointer hover:bg-gray-50"
            onClick={() => onSelect(coupon)}
          >
            <div className="font-medium">{coupon.name}</div>
            <div className="text-[#ff5c00] font-bold">
              - {coupon.amount.toLocaleString()}원
            </div>
          </div>
        ))}

        <button className="w-full mt-4 p-2 border rounded" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default CouponModal;
