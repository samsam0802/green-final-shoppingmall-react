import React from "react";
import { FiSearch } from "react-icons/fi";

const ProductSearchBar = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full max-w-3xl mx-auto relative mt-6 mb-6">
      {/* 검색 아이콘 */}
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

      <input
        placeholder="상품명을 검색하세요"
        className="
          w-full
          border border-gray-300
          rounded-full 
          py-3 pl-12 pr-4
          text-sm tracking-wide
          placeholder-gray-400
          focus:outline-none focus:border-black focus:ring-1 focus:ring-black
          transition
        "
      />
    </div>
  );
};

export default ProductSearchBar;
