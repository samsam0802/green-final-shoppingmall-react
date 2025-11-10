import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductRegisterForm } from "../../../redux/slices/features/admin/product/productRegisterSlice";

export default function DeliveryCharge() {
  const dispatch = useDispatch();
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

      dispatch(updateProductRegisterForm({ section: "delivery", data: temp }));

      return temp;
    });
  };

  const onDeliveryFeeChangeHandler = (e) => {
    const { name, value } = e.target;

    setDeliveryInfo((prev) => {
      const temp = { ...prev, [name]: value };

      dispatch(updateProductRegisterForm({ section: "delivery", data: temp }));
      return temp;
    });
  };

  return (
    <div className="w-full bg-white p-6 text-sm font-['Inter']">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-3 border-b"
      >
        <h2 className="text-lg font-semibold text-gray-800">배송비 설정</h2>

        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isOpen && (
        <div>
          {/* 필터 전체 영역 */}
          <div className="border border-gray-300 mb-6 mt-6 rounded-lg overflow-hidden shadow-lg">
            {/* 배송비 유형 */}
            <div className="flex border-b border-gray-300 items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                배송비 유형
              </div>
              <div className="flex items-center flex-grow p-2 gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="paid"
                    onChange={onDeliveryTypeChangeHandler}
                    checked={deliveryInfo.deliveryType === "paid"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>유료</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="free"
                    onChange={onDeliveryTypeChangeHandler}
                    checked={deliveryInfo.deliveryType === "free"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>무료</span>
                </label>
              </div>
            </div>

            {/* 기본 배송비 */}
            <div className="flex items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                기본 배송비
              </div>
              <div className="flex flex-col flex-grow p-2">
                <div className="flex items-center gap-2">
                  <input
                    name="deliveryFee"
                    type="number"
                    onChange={onDeliveryFeeChangeHandler}
                    value={deliveryInfo.deliveryFee}
                    className="border border-gray-300 rounded-md p-1 w-32"
                    disabled={deliveryInfo.deliveryType === "free"}
                  />
                  <span>원</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * 제주/도서산간 지역은 추가 배송비가 발생할 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
