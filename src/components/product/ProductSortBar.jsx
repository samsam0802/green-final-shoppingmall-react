import React from "react";

/**
 * 와이어프레임용 정렬 바
 * - 동작 없음(이벤트/상태 X)
 * - UI만 표시
 */
const ProductSortBar = () => {
  const options = ["인기순", "신상품순", "판매순", "낮은 가격순", "할인율순"];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      {/* 좌측: 라벨 */}
      <div className="text-sm text-gray-600">정렬</div>

      {/* 우측: 버튼 그룹 (데스크톱 우선) */}
      <div className="hidden md:flex flex-wrap gap-2">
        {options.map((opt, idx) => (
          <button
            key={opt}
            className={`px-3 py-1.5 rounded border text-sm
                        ${
                          idx === 0
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-white text-gray-600 hover:bg-gray-100"
                        }`}
            // 의도적으로 onClick 없음 (와이어프레임)
            type="button"
          >
            {opt}
          </button>
        ))}
      </div>

      {/* 모바일: 셀렉트 드롭다운 UI만 (동작 없음) */}
      <div className="w-full md:hidden">
        <select
          className="w-full border rounded px-3 py-2 text-sm bg-white"
          defaultValue="인기순"
          disabled /* 와이어프레임: 동작 비활성화 */
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
