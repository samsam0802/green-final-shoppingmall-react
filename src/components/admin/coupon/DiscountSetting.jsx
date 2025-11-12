import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function DiscountSetting({ onChangeForm }) {
  const [isOpen, setIsOpen] = useState(true);
  const [discountSetting, setDiscountSetting] = useState({
    discountType: "PERCENTAGE",
    fixedDiscountAmount: 0,
    discountPercentage: 0,
    isLimitMinOrder: false,
    minOrderAmount: 0,
    isLimitMaxDiscount: false,
    maxDiscountAmount: 0,
  });

  useEffect(() => {
    onChangeForm?.({ ...discountSetting });
  }, [discountSetting]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "discountType") {
      setDiscountSetting((prev) => ({
        ...prev,
        [name]: value,
        fixedDiscountAmount: 0,
        discountPercentage: 0,
        minOrderAmount: 0,
        maxDiscountAmount: 0,
        isLimitMaxDiscount: false,
      }));
    } else {
      setDiscountSetting((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onRadioChangeHandler = (e) => {
    const { name, value } = e.target;
    const bool = value === "true";

    if (name === "isLimitMinOrder") {
      setDiscountSetting((prev) => ({
        ...prev,
        [name]: bool,
        minOrderAmount: 0,
      }));
    } else if (name === "isLimitMaxDiscount") {
      setDiscountSetting((prev) => ({
        ...prev,
        [name]: bool,
        maxDiscountAmount: 0,
      }));
    }
  };

  return (
    <div className="w-full bg-white p-6 text-sm font-['Inter']">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-3 border-b"
      >
        <h2 className="text-lg font-semibold text-gray-800">혜택 설정</h2>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isOpen && (
        <div>
          <div className="border border-gray-300 mb-6 mt-6 rounded-lg overflow-hidden shadow-lg">
            {/* 할인 타입 */}
            <div className="flex border-b border-gray-300 items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                할인 타입
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex items-center flex-grow p-2 gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="discountType"
                    value="PERCENTAGE"
                    onChange={onChangeHandler}
                    checked={discountSetting.discountType === "PERCENTAGE"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>정률할인(%)</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="discountType"
                    value="FIXED"
                    onChange={onChangeHandler}
                    checked={discountSetting.discountType === "FIXED"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>정액할인(원)</span>
                </label>
              </div>
            </div>

            {/* 할인 설정 */}
            <div className="flex border-b border-gray-300 items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                할인 설정
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex items-center flex-grow p-2 gap-2">
                <input
                  type="number"
                  name={
                    discountSetting.discountType === "PERCENTAGE"
                      ? "discountPercentage"
                      : "fixedDiscountAmount"
                  }
                  value={
                    discountSetting.discountType === "PERCENTAGE"
                      ? discountSetting.discountPercentage
                      : discountSetting.fixedDiscountAmount
                  }
                  onChange={onChangeHandler}
                  className="border border-gray-300 p-1 w-32 rounded-md text-right"
                />
                <span className="text-gray-700">
                  {discountSetting.discountType === "PERCENTAGE" ? "%" : "원"}
                </span>
              </div>
            </div>

            {/* 최소 상품금액 설정 */}
            <div className="flex border-b border-gray-300 items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                최소 상품금액
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex flex-col flex-grow p-2 gap-3">
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="isLimitMinOrder"
                      value="false"
                      onChange={onRadioChangeHandler}
                      checked={!discountSetting.isLimitMinOrder}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>제한 없음</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="isLimitMinOrder"
                      value="true"
                      onChange={onRadioChangeHandler}
                      checked={discountSetting.isLimitMinOrder}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>제한 있음</span>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">최소 상품금액</span>
                  <input
                    type="number"
                    name="minOrderAmount"
                    value={discountSetting.minOrderAmount}
                    onChange={onChangeHandler}
                    disabled={!discountSetting.isLimitMinOrder}
                    className={`border p-1 w-32 rounded-md text-right ${
                      !discountSetting.isLimitMinOrder
                        ? "bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed"
                        : "border-gray-300"
                    }`}
                  />
                  <span
                    className={
                      discountSetting.isLimitMinOrder
                        ? "text-gray-700"
                        : "text-gray-400"
                    }
                  >
                    원 이상 상품에만 적용 가능
                  </span>
                </div>
              </div>
            </div>

            {/* 최대 할인금액 설정 */}
            <div className="flex items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                최대 할인금액
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex flex-col flex-grow p-2 gap-3">
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="isLimitMaxDiscount"
                      value="false"
                      onChange={onRadioChangeHandler}
                      checked={!discountSetting.isLimitMaxDiscount}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>제한 없음</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="isLimitMaxDiscount"
                      value="true"
                      onChange={onRadioChangeHandler}
                      checked={discountSetting.isLimitMaxDiscount}
                      disabled={discountSetting.discountType === "FIXED"}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>제한 있음</span>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="maxDiscountAmount"
                    value={discountSetting.maxDiscountAmount}
                    onChange={onChangeHandler}
                    disabled={!discountSetting.isLimitMaxDiscount}
                    className={`border p-1 w-32 rounded-md text-right ${
                      !discountSetting.isLimitMaxDiscount
                        ? "bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed"
                        : "border-gray-300"
                    }`}
                  />
                  <span
                    className={
                      discountSetting.isLimitMaxDiscount
                        ? "text-gray-700"
                        : "text-gray-400"
                    }
                  >
                    원까지 할인 가능
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
