import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductRegisterForm } from "../../../redux/slices/features/admin/product/productRegisterSlice";

export default function ProductSaleInfo() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [saleInfo, setSaleInfo] = useState({
    saleStatus: "onSale",
    needRestockNoti: false,
    exposureStatus: "exposure",
    isCancelable: true,
    useRestockNoti: false,
  });

  const onCheckBoxChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setSaleInfo((prev) => {
      const saleInfoData = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
      dispatch(
        updateProductRegisterForm({ section: "saleInfo", data: saleInfoData })
      );
      return saleInfoData;
    });
  };

  return (
    <div className="w-full bg-white p-6 text-sm font-['Inter']">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-3 border-b"
      >
        <h2 className="text-lg font-semibold text-gray-800">판매 정보</h2>

        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isOpen && (
        <div>
          {/* 필터 전체 영역 */}
          <div className="border border-gray-300 mb-6 mt-6 rounded-lg overflow-hidden shadow-lg">
            {/* 판매 상태 */}
            <div className="flex border-b border-gray-300 items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                판매 상태
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex flex-col flex-grow p-2 gap-3">
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="saleStatus"
                      onChange={onCheckBoxChangeHandler}
                      value="onSale"
                      checked={saleInfo.saleStatus === "onSale"}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>판매중</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="saleStatus"
                      onChange={onCheckBoxChangeHandler}
                      value="soldOut"
                      checked={saleInfo.saleStatus === "soldOut"}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>품절</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="saleStatus"
                      onChange={onCheckBoxChangeHandler}
                      value="stop"
                      checked={saleInfo.saleStatus === "stop"}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>판매중지</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="saleStatus"
                      onChange={onCheckBoxChangeHandler}
                      value="restock"
                      checked={saleInfo.saleStatus === "restock"}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>재입고 상품</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="useRestockNoti"
                      onChange={onCheckBoxChangeHandler}
                      checked={saleInfo.useRestockNoti}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>안전 재고 미만으로 떨어질 시 재입고 알림 사용</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 노출 여부 */}
            <div className="flex border-b border-gray-300 items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                노출 여부
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex items-center flex-grow p-2 gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="exposureStatus"
                    value="exposure"
                    onChange={onCheckBoxChangeHandler}
                    checked={saleInfo.exposureStatus === "exposure"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>노출</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="exposureStatus"
                    value="hidden"
                    onChange={onCheckBoxChangeHandler}
                    checked={saleInfo.exposureStatus === "hidden"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>미노출</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="exposureStatus"
                    value="scheduled"
                    onChange={onCheckBoxChangeHandler}
                    checked={saleInfo.exposureStatus === "scheduled"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>노출 예약</span>
                </label>
              </div>
            </div>

            {/* 청약철회 */}
            <div className="flex items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                청약철회
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex items-center flex-grow p-2 gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isCancelable"
                    value="possible"
                    onChange={onCheckBoxChangeHandler}
                    checked={saleInfo.isCancelable === "possible"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>가능</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isCancelable"
                    value="impossible"
                    onChange={onCheckBoxChangeHandler}
                    checked={saleInfo.isCancelable === "impossible"}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>불가 (취소/교환/반품 불가)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
