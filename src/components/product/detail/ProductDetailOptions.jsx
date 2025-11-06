import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const ProductDetailOptions = ({ product, selectedItems, setSelectedItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedItems((prev) => {
      console.log("prev", prev);
      // 이미 같은 옵션이 들어있다면 그대로 반환 (추가 X)
      const exists = prev.some((item) => item.id === option.id);
      if (exists) return prev;

      // 없으면 새로 추가 (기본 수량 포함)
      return [...prev, { ...option, qty: 1 }];
    });
    setIsOpen(false);
  };

  const handleQtyChange = (option, delta) => {
    setSelectedItems((prev) => {
      return [...prev, { ...option, qty: qty + delta }];
    });
  };

  return (
    <div className="w-full space-y-4">
      {/* 드롭다운 토글 버튼 */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-5 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-all focus:outline-none focus:border-gray-900"
        >
          <span className="text-gray-700 font-medium">옵션을 선택해주세요</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* 드롭다운 리스트 */}
        {isOpen && (
          <ul className="absolute z-20 w-full mt-2 max-h-64 overflow-y-auto bg-white border-2 border-gray-200 rounded-xl shadow-xl">
            {product.options.map((o, idx) => (
              <li
                key={o.id}
                className={`flex items-center justify-between px-5 py-4 cursor-pointer transition-colors ${
                  idx !== product.options.length - 1
                    ? "border-b border-gray-100"
                    : ""
                } ${
                  o.stock === 0
                    ? "bg-gray-50 opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => o.stock !== 0 && handleSelect(o)}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-900">
                    {o.label}
                  </span>

                  {/* 품절 여부 표시 */}
                  {o.stock === 0 && (
                    <span className="text-xs font-semibold text-red-500">
                      품절
                    </span>
                  )}
                </div>

                {o.stock === 0 && (
                  <button
                    className="px-3 py-1.5 text-xs font-medium text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition-colors"
                    onClick={() => alert("재입고 알림 버튼 클릭")}
                  >
                    재입고 알림
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 옵션 선택하면 아래 구매리스트에 뜨도록 설계 */}
      {selectedItems.length > 0 && (
        <div className="space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              {/* 제품명 */}
              <div className="flex-1 text-sm font-medium text-gray-900">
                {item.label}
              </div>

              {/* 수량 조절 */}
              <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleQtyChange(item, -1)}
                  className="w-10 h-10 flex justify-center items-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="w-12 h-10 flex justify-center items-center text-sm font-semibold text-gray-900 bg-gray-50">
                  {item.qty}
                </span>
                <button
                  onClick={() => handleQtyChange(item, +1)}
                  className="w-10 h-10 flex justify-center items-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              {/* 가격 */}
              <div className="text-sm font-bold text-gray-900 min-w-[80px] text-right">
                {product.price.toLocaleString()}원
              </div>

              {/* 삭제 버튼 */}
              <button
                onClick={() =>
                  setSelectedItems((prev) =>
                    prev.filter((i) => i.id !== item.id)
                  )
                }
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetailOptions;
