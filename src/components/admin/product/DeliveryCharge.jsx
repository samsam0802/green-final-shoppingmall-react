import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export default function DeliveryCharge() {
  const [isOpen, setIsOpen] = useState(true);
  const [deliveryInfo, setDeliveryInfo] = useState({
    deliveryType: "paid",
    deliveryFee: 3000,
  });

  const onDeliveryTypeChangeHandler = (e) => {
    const { name, value } = e.target;

    if (value === "free") {
      setDeliveryInfo((prev) => ({ ...prev, deliveryFee: 0 }));
    }

    setDeliveryInfo((prev) => {
      const temp = { ...prev, [name]: value };
      console.log(temp);
      return temp;
    });
  };
  const onDeliveryFeeChangeHandler = (e) => {
    const { name, value } = e.target;

    setDeliveryInfo((prev) => {
      const temp = { ...prev, [name]: value };
      console.log(temp);
      return temp;
    });
  };

  return (
    <div className="max-w-4xl mx-auto border border-gray-200 bg-white shadow-lg mt-6">
      {/* 섹션 헤더 */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-3 border-b"
      >
        <h2 className="text-lg font-semibold text-gray-800">배송비 설정</h2>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {/* 배송비 유형 선택 */}
      {isOpen && (
        <div>
          <div className="flex border-b border-gray-200">
            <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
              배송비 유형
            </div>
            <div className="w-3/4 py-3 px-4">
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="paid"
                    onChange={onDeliveryTypeChangeHandler}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <span className="text-sm text-gray-700">유료</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="free"
                    onChange={onDeliveryTypeChangeHandler}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">무료</span>
                </label>
              </div>
            </div>
          </div>

          {/* 기본 배송비 */}
          <div className="flex border-b border-gray-200">
            <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
              기본 배송비
            </div>
            <div className="w-3/4 py-3 px-4">
              <div className="flex items-center space-x-2 max-w-xs">
                <input
                  name="deliveryFee"
                  type="number"
                  onChange={onDeliveryFeeChangeHandler}
                  value={deliveryInfo.deliveryFee}
                  className="border border-gray-300 rounded-sm p-2 w-32 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="기본 배송비"
                />
                <span className="text-sm text-gray-700">원</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                * 제주/도서산간 지역은 추가 배송비가 발생할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
