import React from "react";

const ProductSortBar = ({ sort, setSort }) => {
  const options = ["신상품순", "판매순", "낮은 가격순", "높은 가격순"];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="text-sm text-gray-600">정렬</div>

      <div className="hidden md:flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSort(opt)}
            className={`px-3 py-1.5 rounded border text-sm ${
              sort === opt
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* 모바일용 */}
      <div className="w-full md:hidden">
        <select
          className="w-full border rounded px-3 py-2 text-sm bg-white"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductSortBar;
