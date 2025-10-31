import { useState } from "react";

const ProductFilterBar = ({
  filters,
  setFilters,
  brandOptions,
  sizeOptions,
}) => {
  return (
    <div className="flex flex-wrap gap-4 border-b pb-4 mb-6">
      {/* 성별 */}
      <div>
        <span className="mr-2 font-semibold">성별:</span>
        <button onClick={() => setFilters({ ...filters, gender: "남" })}>
          남
        </button>
        <button
          onClick={() => setFilters({ ...filters, gender: "여" })}
          className="ml-2"
        >
          여
        </button>
      </div>

      {/* 가격 */}
      <div>
        <span className="mr-2 font-semibold">가격:</span>
        <select
          onChange={(e) => {
            const value = e.target.value;
            let priceRange = null;
            if (value === "1") priceRange = { min: 0, max: 50000 };
            if (value === "2") priceRange = { min: 50000, max: 100000 };
            if (value === "3") priceRange = { min: 100000, max: 100000000 };
            setFilters({ ...filters, priceRange });
          }}
        >
          <option value="">전체</option>
          <option value="1">~ 5만원</option>
          <option value="2">5만원 ~ 10만원</option>
          <option value="3">10만원 이상</option>
        </select>
      </div>

      {/* 브랜드 */}
      <div>
        <span className="font-semibold mr-2">브랜드:</span>
        <select
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        >
          <option value="">전체</option>
          {brandOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* 사이즈 */}
      <div>
        <span className="font-semibold mr-2">사이즈:</span>
        {sizeOptions.map((s) => (
          <button
            key={s}
            className="border px-2 py-1 rounded mx-1"
            onClick={() => setFilters({ ...filters, size: s })}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilterBar;
