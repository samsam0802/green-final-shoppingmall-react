// src/components/mypage/CouponList.jsx
import React from "react";

export default function CouponList() {
  const coupons = [
    {
      id: 1,
      title: "[신규회원] 5,000원 할인",
      until: "2025-11-30",
      rule: "전체상품",
    },
    {
      id: 2,
      title: "[가을 프로모션] 10% 할인",
      until: "2025-10-31",
      rule: "3만원 이상",
    },
  ];

  return (
    <div className="space-y-3">
      {coupons.map((c) => (
        <div
          key={c.id}
          className="border rounded-xl p-4 flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{c.title}</p>
            <p className="text-xs text-zinc-500 mt-1">
              유효기간: {c.until} 까지
            </p>
          </div>
          <span className="text-xs bg-zinc-100 px-3 py-1 rounded-full">
            {c.rule}
          </span>
        </div>
      ))}
    </div>
  );
}
