import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/product/ProductCard";
import ProductSortBar from "./ProductSortBar"
import ProductFilterBar from "../filter/ProductFilterBar"
import Pagination from "./Pagination";

const ProductListComponent = () => {
  const { main, sub } = useParams();
  const decodedSub = decodeURIComponent(sub).replace(/-/g, "/");

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("인기순");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const categoryProducts = products.filter(
    (p) => p.categoryMain === main && p.categorySub === decodedSub
  );

  const brandOptions = [...new Set(categoryProducts.map((p) => p.brand))];

  let filteredProducts = categoryProducts.filter((p) => {
    if (filters.brand && p.brand !== filters.brand) return false;
    return true;
  });

  // ✅ 정렬 적용
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "낮은 가격순":
        return a.price - b.price;
      case "할인율순":
        return (
          ((b.originalPrice - b.price) / b.originalPrice) -
          ((a.originalPrice - a.price) / a.originalPrice)
        );
      default:
        return 0; // API 연동 시 인기/판매/신상품 정렬 변경 예정
    }
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">
        {main} &gt; {decodedSub}
      </h1>

      <ProductFilterBar filters={filters} setFilters={setFilters} brandOptions={brandOptions} />
      <ProductSortBar sort={sort} setSort={setSort} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {pagedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default ProductListComponent;
