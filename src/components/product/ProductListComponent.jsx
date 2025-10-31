import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/product/ProductCard";
import ProductFilterBar from "../../components/filter/ProductFilterBar";

const ProductListComponent = () => {
  const { main, sub } = useParams();
  const [filters, setFilters] = useState({});

  // sub = "skin-toner" 형태 → 다시 "스킨/토너" 로 변환
  const subName = sub.replace(/-/g, "/");

  const decodedSub = decodeURIComponent(subName);

  // 해당 카테고리 상품만 가져오기
  const categoryProducts = products.filter(
    (p) => p.categoryMain === main && p.categorySub === decodedSub
  );

  // ✅ 옵션 자동 생성
  const brandOptions = [...new Set(categoryProducts.map((p) => p.brand))];
  const sizeOptions = [...new Set(categoryProducts.flatMap((p) => p.sizes))];

  // ✅ 필터 적용
  const filteredProducts = categoryProducts.filter((p) => {
    if (filters.brand && p.brand !== filters.brand) return false;
    if (filters.size && !p.sizes.includes(filters.size)) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">
        {main} &gt; {decodedSub}
      </h1>

      <ProductFilterBar
        filters={filters}
        setFilters={setFilters}
        brandOptions={brandOptions}
        sizeOptions={sizeOptions}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListComponent;
