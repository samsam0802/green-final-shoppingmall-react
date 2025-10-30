import React from "react";
import products from "../../data/products";
import ProductCard from "../../components/product/ProductCard";
import ProductCategoryHeader from "../../components/product/ProductCategoryHeader"; // ✅ 추가
import ProductSearchBar from "../../components/product/ProductSearchBar";
import ProductSortBar from "../../components/product/ProductSortBar";
import Pagination from "../../components/product/Pagination";
import { useNavigate } from "react-router-dom";

const ProductListComponent = () => {
  const navigate = useNavigate();

  const handleClickCart = () => {
    navigate("../../cart");
  };

  return (
    <div>
      {/* ✅ 상단 카테고리 메뉴 */}
      <ProductCategoryHeader />

      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">상품 목록</h1>
          <button
            className="border px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
            onClick={handleClickCart}
          >
            장바구니
          </button>
        </div>

        <ProductSearchBar />

        <ProductSortBar />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default ProductListComponent;
