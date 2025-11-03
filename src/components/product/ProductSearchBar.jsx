import React from "react";

const ProductSearchBar = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <input
      placeholder="상품명을 검색하세요"
      className="w-full border p-2 rounded mb-4"
    />
  );
};

export default ProductSearchBar;
