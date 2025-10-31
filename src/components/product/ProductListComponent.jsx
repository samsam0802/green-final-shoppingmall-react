import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/product/ProductCard";
import ProductFilterBar from "../../components/filter/ProductFilterBar";

const ProductListComponent = () => {
  const { main, sub } = useParams();
  const decodedSub = decodeURIComponent(sub).replace(/-/g, "/");

  const [filters, setFilters] = useState({});

  const categoryProducts = products.filter(
    (p) => p.categoryMain === main && p.categorySub === decodedSub
  );

  const brandOptions = [...new Set(categoryProducts.map((p) => p.brand))];

  const filteredProducts = categoryProducts.filter((p) => {
    if (filters.brand && p.brand !== filters.brand) return false;
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
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListComponent;
