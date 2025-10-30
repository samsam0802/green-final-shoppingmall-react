import React from "react";

const ProductSearchBar = () => {
  return (
    <input
      placeholder="상품명을 검색하세요"
      className="w-full border p-2 rounded mb-4"
      disabled // 검색 기능 사용 X
    />
  );
};

export default ProductSearchBar;
