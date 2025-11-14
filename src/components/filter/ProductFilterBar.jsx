import React from "react";
import { Filter } from "lucide-react";

const ProductFilterBar = ({ filters, setFilters, brandOptions }) => (
  // ✨ 정렬 바와 간격을 시각적으로 조정
  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
    {/* ✨ 필터 제목 디자인 개선 (SortBar와 일관성 유지) */}
    <div className="flex items-center gap-2 text-base font-bold text-gray-900 shrink-0">
      <Filter className="w-5 h-5 text-gray-600" />
      <span>브랜드 필터</span>
    </div>

    {/* ✨ 셀렉트 박스 디자인 개선 및 반응형 적용 */}
    <select
      className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-2.5 text-base bg-white text-gray-700 font-medium 
                 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all cursor-pointer shadow-sm
                 hover:border-gray-400"
      value={filters.brand || ""}
      onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
    >
      {/* ✨ 전체 브랜드 옵션 디자인 강화 */}
      <option value="">{`— 전체 브랜드 (${brandOptions.length}개) —`}</option>
      {brandOptions.map((b) => (
        <option key={b} value={b}>
          {b}
        </option>
      ))}
    </select>
  </div>
);

export default ProductFilterBar;
