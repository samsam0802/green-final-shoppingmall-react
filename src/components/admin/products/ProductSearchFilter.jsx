import React from "react";

const InputRow = ({ label, children }) => (
  <div className="flex border-b border-gray-200">
    <div className="w-1/6 p-3 bg-gray-50 flex items-center text-sm font-semibold text-gray-700 border-r border-gray-200">
      {label}
    </div>
    <div className="w-5/6 p-3 flex items-center space-x-2">{children}</div>
  </div>
);

const ProductSearchFilter = () => {
  return (
    <div className="border border-gray-300 bg-white mb-6 shadow-md rounded-lg">
      {/* 검색어 */}
      <InputRow label="검색어">
        <select className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500">
          <option>전체</option>
          <option>상품명</option>
          <option>상품코드</option>
        </select>
        <input
          type="text"
          className="flex-1 border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
          placeholder="검색어를 입력하세요"
        />
      </InputRow>

      {/* 카테고리 */}
      <InputRow label="카테고리">
        {["카테고리"].map((label) => (
          <select
            key={label}
            className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
          >
            <option>{label}</option>
          </select>
        ))}
        <div className="flex items-center space-x-4 ml-4"></div>
      </InputRow>

      {/* 날짜 */}
      <InputRow label="날짜">
        <select className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500">
          <option>등록일</option>
          <option>수정일</option>
        </select>
        <input
          type="date"
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="mx-1">-</span>
        <input
          type="date"
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        />
        {["오늘", "3일간", "1주일", "1개월", "3개월"].map((period) => (
          <button
            key={period}
            className="px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-100"
          >
            {period}
          </button>
        ))}
        <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
          전체
        </button>
      </InputRow>

      {/* 판매 상태 */}
      <InputRow label="판매 상태">
        {["전체", "정상", "품절", "재고 확보 중", "판매 중지"].map((status) => (
          <label key={status} className="flex items-center text-sm mr-4">
            <input
              type="checkbox"
              className="mr-1 rounded text-blue-600 focus:ring-blue-500"
              defaultChecked={status === "전체"}
            />
            {status}
          </label>
        ))}
      </InputRow>

      {/* 노출 여부 */}
      <InputRow label="노출 여부">
        {["전체", "노출", "미노출", "노출 예약"].map((exposure) => (
          <label key={exposure} className="flex items-center text-sm mr-4">
            <input
              type="radio"
              name="exposure"
              className="mr-1 text-blue-600 focus:ring-blue-500"
              defaultChecked={exposure === "전체"}
            />
            {exposure}
          </label>
        ))}
      </InputRow>

      {/* 검색/초기화 버튼 영역 */}
      <div className="p-4 flex justify-between items-center bg-gray-100 border-t border-gray-200">
        <div className="space-x-2">
          <button className="px-8 py-2 text-base bg-blue-500 text-white rounded hover:bg-blue-600">
            검색
          </button>
          <button className="px-8 py-2 text-base border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-100">
            초기화
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchFilter;
