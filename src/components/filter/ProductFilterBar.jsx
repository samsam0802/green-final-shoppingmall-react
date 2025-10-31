const ProductFilterBar = ({ filters, setFilters, brandOptions }) => (
  <div className="flex gap-4 border-b pb-4 mb-6 text-sm">
    <div>
      <span className="mr-2 font-semibold">브랜드</span>
      <select
        className="border rounded px-2 py-1"
        value={filters.brand || ""}
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
  </div>
);

export default ProductFilterBar;
