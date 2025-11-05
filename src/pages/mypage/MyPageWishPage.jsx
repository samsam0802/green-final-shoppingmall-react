// src/pages/mypage/MyPageWishPage.jsx
import React from "react";
import WishListContainer from "../../components/withlist/WishListContainer";

export default function MyPageWishPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h1 className="text-xl font-bold mb-2">찜목록</h1>
      <p className="text-sm text-zinc-500 mb-6">
        관심상품을 모아둔 목록입니다.
      </p>
      <WishListContainer />
    </div>
  );
}
