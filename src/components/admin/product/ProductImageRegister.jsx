// ProductImageRegister.jsx
import React from "react";

export default function ProductImageRegister() {
  return (
    <div className="max-w-4xl mx-auto border border-gray-200 bg-white shadow-lg mt-6">
      {/* 섹션 헤더 */}
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">이미지 등록</h2>
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

      {/* 이미지 업로드 영역 */}
      <div className="flex border-b border-gray-200">
        {/* 라벨 영역 */}
        <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
          대표 이미지
        </div>
        {/* 내용 영역 */}
        <div className="w-3/4 py-3 px-4">
          <div className="space-y-4">
            {/* 대표 이미지 업로드 박스 */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center space-y-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21,15 16,10 5,21"></polyline>
                </svg>
                <div className="text-sm text-gray-600">
                  <p>이미지를 드래그하거나 클릭하여 업로드하세요</p>
                  <p className="text-xs text-gray-500 mt-1">
                    JPG, PNG, GIF 형식, 최대 10MB
                  </p>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  이미지 선택
                </button>
              </div>
            </div>

            {/* 미리보기 영역 (업로드 후 표시) */}
            <div className="grid grid-cols-4 gap-4">
              {/* 미리보기 이미지 예시 */}
              <div className="relative border border-gray-200 rounded-md p-2">
                <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-400">이미지 미리보기</span>
                </div>
                <button
                  type="button"
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>

              {/* 추가 업로드 박스 */}
              <div className="border-2 border-dashed border-gray-300 rounded-md aspect-square flex items-center justify-center cursor-pointer hover:border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 추가 이미지 영역 */}
      <div className="flex border-b border-gray-200">
        {/* 라벨 영역 */}
        <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
          추가 이미지
        </div>
        {/* 내용 영역 */}
        <div className="w-3/4 py-3 px-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <div className="text-sm text-gray-600">
                <p>추가 이미지를 업로드하세요</p>
                <p className="text-xs text-gray-500 mt-1">
                  상품 상세 설명용 이미지를 등록할 수 있습니다
                </p>
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                이미지 추가
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 이미지 정렬 영역 */}
      <div className="flex">
        {/* 라벨 영역 */}
        <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
          이미지 정렬
        </div>
        {/* 내용 영역 */}
        <div className="w-3/4 py-3 px-4">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="imageSort"
                value="manual"
                className="mr-2 text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              <span className="text-sm text-gray-700">직접 정렬</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="imageSort"
                value="auto"
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">자동 정렬</span>
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * 직접 정렬 시 이미지 순서를 드래그하여 변경할 수 있습니다
          </p>
        </div>
      </div>
    </div>
  );
}
