import React, { useState } from "react";

export default function ProductDetailOptions({
  product,
  selectedItems,
  setSelectedItems,
}) {
  const hasOption1 = product.options && product.options.length > 0;
  const hasOption2 = product.option2 && product.option2.length > 0;

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const addSelection = () => {
    if (!selectedOption1) return;

    const label = hasOption2
      ? `${selectedOption1.label} / ${selectedOption2?.label ?? ""}`.trim()
      : selectedOption1.label;

    if (selectedItems.some((i) => i.label === label)) return;

    setSelectedItems([
      ...selectedItems,
      { label, qty: 1, price: product.discountPrice },
    ]);
  };

  const changeQty = (label, delta) => {
    setSelectedItems((prev) =>
      prev.map((i) =>
        i.label === label ? { ...i, qty: Math.max(1, i.qty + delta) } : i
      )
    );
  };

  const removeItem = (label) => {
    setSelectedItems(selectedItems.filter((i) => i.label !== label));
  };

  const totalPrice = selectedItems.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <div className="space-y-4 mt-6">
      {hasOption1 && (
        <OptionDropdown
          title="첫번째 옵션을 선택해주세요"
          options={product.options}
          onSelect={(o) => {
            setSelectedOption1(o);
            if (!hasOption2) addSelection();
          }}
        />
      )}

      {hasOption2 && (
        <OptionDropdown
          title="두번째 옵션을 선택해주세요"
          options={product.option2}
          onSelect={(o) => {
            setSelectedOption2(o);
            if (selectedOption1) addSelection();
          }}
        />
      )}

      {/* ✅ 여기부터 선택 박스 UI (클럽클리오 스타일) */}
      {selectedItems.length > 0 && (
        <div className="space-y-3">
          {selectedItems.map((item) => (
            <div
              key={item.label}
              className="border rounded-md p-3 flex justify-between items-center bg-white"
            >
              <span>{item.label}</span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => changeQty(item.label, -1)}
                  className="px-2 border rounded text-sm"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => changeQty(item.label, 1)}
                  className="px-2 border rounded text-sm"
                >
                  +
                </button>

                <span className="font-medium">
                  {(item.qty * item.price).toLocaleString()}원
                </span>

                <button
                  onClick={() => removeItem(item.label)}
                  className="text-red-500 text-sm ml-2"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-lg font-semibold pt-2">
        총 금액: {totalPrice.toLocaleString()}원
      </div>
    </div>
  );
}

function OptionDropdown({ title, options, onSelect }) {
  return (
    <details className="border rounded-md">
      <summary className="p-3 cursor-pointer text-sm">{title}</summary>
      <div className="max-h-56 overflow-y-auto divide-y">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => o.stock > 0 && onSelect(o)}
            className={`w-full p-3 flex justify-between text-sm ${
              o.stock === 0
                ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
          >
            <span>
              {o.stock === 0 && "[품절] "}
              {o.label}
            </span>
            {o.stock === 0 && (
              <span
                className="text-orange-500 text-xs"
                onClick={() => alert("재입고 알림 신청이 완료되었습니다")}
              >
                재입고 알림
              </span>
            )}
          </button>
        ))}
      </div>
    </details>
  );
}
