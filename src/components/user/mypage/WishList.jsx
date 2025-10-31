// src/components/user/mypage/WishList.jsx
import React from "react";

export default function WishList() {
  const items = [
    { id: 1, name: "웨딩 초대장 템플릿 01", price: 30000 },
    { id: 2, name: "감성 모바일 청첩장", price: 35000 },
    { id: 3, name: "하객 안내 페이지", price: 15000 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-zinc-100 rounded-2xl p-4 flex gap-4 items-center bg-white"
        >
          <div className="w-16 h-16 bg-zinc-200 rounded-xl" />
          <div className="flex-1">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-zinc-500 mt-1">
              ₩{item.price.toLocaleString()}
            </p>
          </div>
          <button className="text-xs text-red-500 hover:underline">삭제</button>
        </div>
      ))}
    </div>
  );
}
