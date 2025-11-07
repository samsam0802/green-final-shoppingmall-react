import React from "react";
import { Filter } from "lucide-react";

const ProductFilterBar = ({ filters, setFilters, brandOptions }) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
      <Filter className="w-4 h-4" />
      <span>브랜드</span>
    </div>
    <select
      className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all cursor-pointer hover:border-gray-400"
      value={filters.brand || ""}
      onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
    >
      <option value="">전체 브랜드</option>
      {brandOptions.map((b) => (
        <option key={b} value={b}>
          {b}
        </option>
      ))}
    </select>
  </div>
);

export default ProductFilterBar;
