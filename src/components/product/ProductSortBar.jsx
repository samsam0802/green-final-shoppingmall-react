import React from "react";
import { SlidersHorizontal } from "lucide-react";

const ProductSortBar = ({ sort, setSort }) => {
  const options = ["신상품순", "판매순", "낮은 가격순", "높은 가격순"];

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        <SlidersHorizontal className="w-4 h-4" />
        <span>정렬</span>
      </div>

      {/* 데스크톱용 버튼 */}
      <div className="hidden md:flex gap-2 flex-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSort(opt)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              sort === opt
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* 모바일용 셀렉트 */}
      <div className="w-full md:hidden">
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all cursor-pointer"
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
