import React from "react";

const ProductSortBar = ({ sort, setSort }) => {
  const options = ["신상품순", "판매순", "낮은 가격순", "높은 가격순"];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div className="text-sm font-semibold text-gray-700">정렬</div>

      {/* 데스크톱용 버튼 */}
      <div className="hidden md:flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSort(opt)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              sort === opt
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* 모바일용 셀렉트 */}
      <div className="w-full md:hidden">
        <select
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm bg-white font-medium text-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
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
