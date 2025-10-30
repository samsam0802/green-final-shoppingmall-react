// SalesInfo.jsx
import React from "react";

// BasicInfo와 동일한 공통 행 레이아웃 컴포넌트
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

export default function SalesInfo() {
  return (
    <div className="max-w-4xl mx-auto border border-gray-200 bg-white shadow-lg mt-6">
      {/* 1. 판매 정보 섹션 헤더 */}
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">판매 정보</h2>
        {/* Chevron 아이콘 (열림 상태 가정) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>

      {/* 2. 판매 상태 */}
      <InfoRow label="판매 상태" required>
        <div className="space-y-3">
          <div className="flex gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="salesStatus"
                value="onSale"
                className="mr-2 text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              <span className="text-sm text-gray-700">판매중</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="salesStatus"
                value="soldOut"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">품절</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="salesStatus"
                value="stop"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">판매중지</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="salesStatus"
                value="restock"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">재입고 상품</span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                품절 시 재입고 알림 사용
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
              name="exposure"
              value="exposed"
              className="mr-2 text-blue-600 focus:ring-blue-500"
              defaultChecked
            />
            <span className="text-sm text-gray-700">노출</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="exposure"
              value="hidden"
              className="mr-2 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">미노출</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="exposure"
              value="scheduled"
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
              name="withdrawal"
              value="possible"
              className="mr-2 text-blue-600 focus:ring-blue-500"
              defaultChecked
            />
            <span className="text-sm text-gray-700">가능</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="withdrawal"
              value="impossible"
              className="mr-2 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              불가 (취소/교환/반품 불가)
            </span>
          </label>
        </div>
      </InfoRow>
    </div>
  );
}
