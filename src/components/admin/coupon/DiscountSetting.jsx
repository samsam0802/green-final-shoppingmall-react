import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateCouponRegisterForm } from "../../../redux/slices/features/admin/coupon/couponRegisterSlice";

export default function DiscountSetting() {
  const dispatch = useDispatch();

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
    dispatch(
      updateCouponRegisterForm({
        section: "discountSetting",
        data: discountSetting,
      })
    );
  }, [discountSetting, dispatch]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "discountType") {
      setDiscountSetting((prev) => ({
        ...prev,
        fixedDiscountAmount: 0,
        discountPercentage: 0,
      }));
    }

    setDiscountSetting((prev) => {
      const temp = { ...prev, [name]: value };
      console.log(temp);
      return temp;
    });
  };

  const onRadioChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    const bool = value === "true" ? true : false;

    if (name === "isLimitMinOrder") {
      setDiscountSetting((prev) => ({ ...prev, minOrderAmount: 0 }));
    } else if (name === "isLimitMaxDiscount") {
      setDiscountSetting((prev) => ({ ...prev, maxDiscountAmount: 0 }));
    }

    setDiscountSetting((prev) => {
      const temp = { ...prev, [name]: bool };
      console.log(temp);
      return temp;
    });
  };

  return (
    <div className="border rounded-lg mb-4">
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold">혜택 설정</h2>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && (
        <div className="divide-y">
          {/* 할인 타입 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">할인 타입</span>
            </div>
            <div className="flex-1 p-4 flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="discountType"
                  value="PERCENTAGE"
                  onChange={onChangeHandler}
                  checked={discountSetting.discountType === "PERCENTAGE"}
                  className="w-4 h-4"
                />
                <span className="text-sm">정률할인(%)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="discountType"
                  value="FIXED"
                  onChange={onChangeHandler}
                  checked={discountSetting.discountType === "FIXED"}
                  className="w-4 h-4"
                />
                <span className="text-sm">정액할인(원)</span>
              </label>
            </div>
          </div>

          {/* 할인 설정 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">할인 설정</span>
            </div>
            <div className="flex-1 p-4">
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
                className="w-35 px-3 py-2 border rounded text-right"
              />
              {discountSetting.discountType === "PERCENTAGE" ? " %" : " 원"}
            </div>
          </div>

          {/* 최소 상품금액 설정 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">최소 상품금액 설정</span>
            </div>
            <div className="flex-1 p-4 flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isLimitMinOrder"
                  value={false}
                  onChange={onRadioChangeHandler}
                  checked={!discountSetting.isLimitMinOrder}
                  className="w-4 h-4"
                />
                <span className="text-sm">제한 없음</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isLimitMinOrder"
                  value={true}
                  onChange={onRadioChangeHandler}
                  checked={discountSetting.isLimitMinOrder}
                  className="w-4 h-4"
                />
                <span className="text-sm">제한 있음</span>
              </label>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm">최소 상품금액</span>
                <input
                  type="text"
                  name="minOrderAmount"
                  value={discountSetting.minOrderAmount}
                  onChange={onChangeHandler}
                  disabled={!discountSetting.isLimitMinOrder}
                  className={`w-32 px-3 py-2 border rounded ${
                    !discountSetting.isLimitMinOrder
                      ? "bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed"
                      : "bg-white text-gray-900 border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                />

                <span
                  className={`text-sm ${
                    !discountSetting.isLimitMinOrder
                      ? "text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  원 이상 상품에만 적용 가능
                </span>
              </div>
            </div>
          </div>

          {/* 최대 할인금액 설정 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">최대 할인금액 설정</span>
            </div>
            <div className="flex-1 p-4 flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isLimitMaxDiscount"
                  value="false"
                  onChange={onRadioChangeHandler}
                  checked={!discountSetting.isLimitMaxDiscount}
                  className="w-4 h-4"
                />
                <span className="text-sm">제한 없음</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isLimitMaxDiscount"
                  value="true"
                  onChange={onRadioChangeHandler}
                  checked={discountSetting.isLimitMaxDiscount}
                  className="w-4 h-4"
                />
                <span className="text-sm">제한 있음</span>
              </label>
              <div className="ml-auto flex items-center gap-2">
                <input
                  type="text"
                  name="maxDiscountAmount"
                  value={discountSetting.maxDiscountAmount}
                  onChange={onChangeHandler}
                  disabled={!discountSetting.isLimitMaxDiscount}
                  className={`w-32 px-3 py-2 border rounded ${
                    !discountSetting.isLimitMaxDiscount
                      ? "bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed"
                      : "bg-white text-gray-900 border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                />
                <span
                  className={`text-sm ${
                    !discountSetting.isLimitMaxDiscount
                      ? "text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  원까지 할인 가능
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
