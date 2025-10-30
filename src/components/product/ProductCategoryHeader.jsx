import React, { useState } from "react";
import ProductCategoryMegaMenu from "./ProductCategoryMegaMenu";

const ProductCategoryHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative border-b">
      <div className="max-w-6xl mx-auto px-8 py-3 flex items-center gap-6">
        {/* 카테고리 버튼 */}
        <button
          className="font-semibold text-gray-700 hover:text-black"
          onClick={() => setOpen(!open)}
          type="button"
        >
          ☰ 카테고리
        </button>

        {/* (다른 상단 메뉴 버튼들) */}
        <div className="text-gray-600 flex gap-6 text-sm">
          <span>오특</span>
          <span>랭킹</span>
          <span>헬스+</span>
          <span>LUXE</span>
          <span>기획전</span>
          <span>세일</span>
        </div>
      </div>

      {/* ✅ 메가메뉴 표시 */}
      <ProductCategoryMegaMenu isOpen={open} />
    </div>
  );
};

export default ProductCategoryHeader;
