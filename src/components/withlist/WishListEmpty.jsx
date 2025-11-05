// src/components/user/mypage/wishlist/WishListEmpty.jsx
import React from "react";

export default function WishListEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full border-2 border-zinc-300 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-zinc-300 rounded-full rotate-45 -translate-x-1" />
      </div>
      <p className="mt-6 text-sm text-zinc-500">찜한 상품이 없습니다</p>
      <button
        type="button"
        className="mt-4 px-5 py-2 rounded-full bg-black text-white text-sm"
        onClick={() => {
          // TODO: 전체상품 페이지로 라우팅
        }}
      >
        전체상품 보러가기
      </button>
    </div>
  );
}
