import React from "react";

const ProductDetailQuantity = ({ qty, setQty, price }) => {
  const handleChangeQty = (delta) => {
    setQty((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="mt-4 border rounded-md bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        {/* 왼쪽 : 수량 텍스트 */}
        <div className="text-sm text-gray-700 font-medium">수량</div>

        {/* 가운데 : 수량 조절 버튼 UI */}
        <div className="flex items-center border rounded-md overflow-hidden">
          <button
            onClick={() => handleChangeQty(-1)}
            className="w-9 h-9 flex justify-center items-center text-lg text-gray-600 border-r hover:bg-gray-100"
          >
            -
          </button>
          <span className="w-12 h-9 flex justify-center items-center text-sm text-gray-800 select-none">
            {qty}
          </span>
          <button
            onClick={() => handleChangeQty(+1)}
            className="w-9 h-9 flex justify-center items-center text-lg text-gray-600 border-l hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* 오른쪽 : 계산된 가격 */}
        <div className="text-sm font-semibold text-[#111111] whitespace-nowrap">
          {(price * qty).toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default ProductDetailQuantity;
