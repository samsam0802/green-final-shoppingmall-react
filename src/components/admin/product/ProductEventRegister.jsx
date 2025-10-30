// ProductEventRegister.jsx
import React from "react";

export default function ProductEventRegister() {
  return (
    <div className="max-w-4xl mx-auto border border-gray-200 bg-white shadow-lg mt-6">
      {/* 섹션 헤더 */}
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">이벤트 등록</h2>
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

      {/* 이벤트 적용 */}
      <div className="flex border-b border-gray-200">
        <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
          이벤트 적용
        </div>
        <div className="w-3/4 py-3 px-4">
          <div className="space-y-4">
            {/* 이벤트 선택 드롭다운 */}
            <div className="max-w-md">
              <select className="w-full border border-gray-300 rounded-sm p-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">이벤트를 선택해주세요</option>
                <option value="event1">신상품 할인 이벤트</option>
                <option value="event2">시즌 오프 할인</option>
                <option value="event3">회원가입 축하 할인</option>
                <option value="event4">빅세일 프로모션</option>
              </select>
            </div>

            {/* 이벤트 미리보기 */}
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                적용된 이벤트
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 px-3 bg-white border border-gray-200 rounded">
                  <span className="text-sm text-gray-800">
                    신상품 할인 이벤트
                  </span>
                  <button className="text-red-500 hover:text-red-700 text-sm">
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 이벤트 배지 표시 */}
      <div className="flex">
        <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
          이벤트 배지
        </div>
        <div className="w-3/4 py-3 px-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="eventBadge"
                  value="show"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="text-sm text-gray-700">표시함</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="eventBadge"
                  value="hide"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">표시하지 않음</span>
              </label>
            </div>
            <div className="flex items-center space-x-2 max-w-xs">
              <span className="text-sm text-gray-700">배지 텍스트:</span>
              <input
                type="text"
                defaultValue="SALE"
                className="border border-gray-300 rounded-sm p-2 w-32 focus:ring-blue-500 focus:border-blue-500"
                aria-label="배지 텍스트"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
