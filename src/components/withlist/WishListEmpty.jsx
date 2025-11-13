import React from "react";
import { Heart } from "lucide-react";

export default function WishListEmpty() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-900 mb-2">
          찜한 상품이 없습니다
        </p>
        <p className="text-sm text-gray-500">마음에 드는 상품을 찜해보세요!</p>
      </div>
    </div>
  );
}
