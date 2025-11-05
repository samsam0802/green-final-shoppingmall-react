import React, { useState } from "react";

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
    <div className="w-full max-w-md border rounded-lg p-2 relative">
      {/* 드롭다운 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 border-b"
      >
        <span className="text-gray-700 text-sm">옵션을 선택해주세요</span>
        <span className="text-gray-500">▼</span>
      </button>

      {/* 드롭다운 리스트 */}
      {isOpen && (
        <ul className="w-full mt-1 max-h-60 overflow-y-auto bg-white border rounded-lg shadow-lg">
          {product.options.map((o) => (
            <li
              key={o.id}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b hover:bg-gray-50 ${
                o.stock === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
              onClick={() => o.stock !== 0 && handleSelect(o)}
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-800">{o.label}</span>

                {/* 품절 여부 표시 */}
                {o.stock === 0 && (
                  <span className="text-xs text-[#ff5c00]">품절</span>
                )}
              </div>

              {o.stock === 0 && (
                <button
                  className="ml-auto text-xs text-[#ff5c00]"
                  onClick={() => alert("재입고 알림 버튼 클릭")}
                >
                  재입고 알림
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {/* 옵션 선택하면 아래 구매리스트에 뜨도록 설계 */}
      <div className="border-t mt-4 pt-4 space-y-3">
        {selectedItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-3 border rounded-lg bg-gray-50"
          >
            {/* 제품명 */}
            <div className="text-sm text-gray-800">{item.label}</div>

            {/* 수량 조절 */}
            <div className="flex items-center border rounded-lg overflow-hidden w-max">
              <button
                onClick={() => handleQtyChange(item, -1)}
                className="w-9 h-9 flex justify-center items-center text-lg text-gray-600 border-r hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="w-12 h-9 flex justify-center items-center text-sm text-gray-800">
                {item.qty}
              </span>
              <button
                onClick={() => handleQtyChange(item, +1)}
                className="w-9 h-9 flex justify-center items-center text-lg text-gray-600 border-l hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>

            {/* 가격 */}
            <div className="text-sm font-semibold">
              {product.price.toLocaleString()}원
            </div>

            {/* 삭제 버튼 => 나중에 추가*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailOptions;
