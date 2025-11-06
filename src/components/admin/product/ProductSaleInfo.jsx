import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductRegisterForm } from "../../../redux/slices/features/admin/product/productRegisterSlice";

const InfoRow = ({ label, required, children, className = "" }) => (
  <div className={`flex border-b border-gray-200 ${className}`}>
    {/* 라벨 영역 */}
    <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </div>
    {/* 내용 영역 */}
    <div className="w-3/4 py-3 px-4">{children}</div>
  </div>
);

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
    <div className="max-w-4xl mx-auto border border-gray-200 bg-white shadow-lg mt-6">
      {/* 1. 판매 정보 섹션 헤더 */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-3 border-b"
      >
        <h2 className="text-lg font-semibold text-gray-800">판매 정보</h2>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {/* 2. 판매 상태 */}
      {isOpen && (
        <div>
          <InfoRow label="판매 상태" required>
            <div className="space-y-3">
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="saleStatus"
                    onChange={onCheckBoxChangeHandler}
                    value="onSale"
                    checked={saleInfo.saleStatus === "onSale"}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">판매중</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="saleStatus"
                    onChange={onCheckBoxChangeHandler}
                    value="soldOut"
                    checked={saleInfo.saleStatus === "soldOut"}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">품절</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="saleStatus"
                    onChange={onCheckBoxChangeHandler}
                    value="stop"
                    checked={saleInfo.saleStatus === "stop"}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">판매중지</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="saleStatus"
                    onChange={onCheckBoxChangeHandler}
                    value="restock"
                    checked={saleInfo.saleStatus === "restock"}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">재입고 상품</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="useRestockNoti"
                    onChange={onCheckBoxChangeHandler}
                    checked={saleInfo.useRestockNoti}
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    안전 재고 미만으로 떨어질 시 재입고 알림 사용
                  </span>
                </label>
              </div>
            </div>
          </InfoRow>

          {/* 3. 노출 여부 */}
          <InfoRow label="노출 여부" required>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="exposureStatus"
                  value="exposure"
                  onChange={onCheckBoxChangeHandler}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="text-sm text-gray-700">노출</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="exposureStatus"
                  value="hidden"
                  onChange={onCheckBoxChangeHandler}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">미노출</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="exposureStatus"
                  value="scheduled"
                  onChange={onCheckBoxChangeHandler}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">노출 예약</span>
              </label>
            </div>
          </InfoRow>

          {/* 4. 청약철회 */}
          <InfoRow label="청약철회" required>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isCancelable"
                  value="possible"
                  onChange={onCheckBoxChangeHandler}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="text-sm text-gray-700">가능</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isCancelable"
                  value="impossible"
                  onChange={onCheckBoxChangeHandler}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  불가 (취소/교환/반품 불가)
                </span>
              </label>
            </div>
          </InfoRow>
        </div>
      )}
    </div>
  );
}
