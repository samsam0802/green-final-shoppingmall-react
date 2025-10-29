import React from "react";
import ProductSearchFilter from "./ProductSearchFilter";
import ProductList from "./ProductList";

const ProductSearchPage = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
          일반 상품 조회{" "}
          <span className="text-sm font-normal text-blue-500">[뉴욕몰]</span>
        </h1>
        <div className="space-x-2">
          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
            상품 등록
          </button>
        </div>
      </div>

      {/* 검색 조건 영역 */}
      <ProductSearchFilter />

      {/* 검색 결과 목록 영역 */}
      <ProductList />
    </div>
  );
};

export default ProductSearchPage;
