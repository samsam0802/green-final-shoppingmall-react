import React from "react";
import OrderSearchResultTable from "./OrderSearchResultTable";

const AdminOrderMgrComponent = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md my-10 text-sm font-['Inter']">
      {/* 헤더 */}
      <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 px-6 py-4 mb-4 flex justify-between items-center">
        전체 주문 조회
        <div className="space-x-2">
          <button className="bg-gray-100 px-3 py-1">엑셀 다운로드</button>
          <button className="bg-gray-100 px-3 py-1">프린트 설정</button>
        </div>
      </h2>

      {/* 검색 필터 전체 */}
      <div className="border border-gray-300 mb-6 relative -m-px">
        {/* 검색어 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-sm font-semibold text-gray-700 flex items-center justify-center">
            검색어
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            <input
              type="text"
              placeholder="주문번호, 주문자명, 상품명 등"
              className="border border-gray-300 p-1 w-80 bg-white pointer-events-none cursor-default"
              readOnly
            />
            <div className="ml-2 flex items-center select-none">
              <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
              부분검색
            </div>
          </div>
        </div>

        {/* 날짜 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-sm font-semibold text-gray-700 flex items-center justify-center">
            날짜
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            <select
              className="border border-gray-300 p-1 mr-2 bg-white pointer-events-none cursor-default"
              disabled
            >
              <option>주문일</option>
              <option>결제일</option>
            </select>
            <input
              type="date"
              className="border border-gray-300 p-1 mr-1 bg-white pointer-events-none cursor-default"
              readOnly
            />
            -
            <input
              type="date"
              className="border border-gray-300 p-1 ml-1 bg-white pointer-events-none cursor-default"
              readOnly
            />
          </div>
        </div>

        {/* 주문상태(출고 전) */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-sm font-semibold text-gray-700 flex items-center justify-center">
            주문상태(출고 전)
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            {["주문접수", "결제확인", "상품준비", "출고준비", "주문취소"].map(
              (label) => (
                <label key={label} className="flex items-center select-none">
                  <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
                  {label}
                </label>
              )
            )}
            <div className="ml-3 flex items-center select-none">
              <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
              전체
            </div>
          </div>
        </div>

        {/* 주문상태(출고 후) */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-sm font-semibold text-gray-700 flex items-center justify-center">
            주문상태(출고 후)
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            {["출고완료", "배송중", "배송완료", "반품신청", "반품완료"].map(
              (label) => (
                <label key={label} className="flex items-center select-none">
                  <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
                  {label}
                </label>
              )
            )}
            <div className="ml-3 flex items-center select-none">
              <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
              전체
            </div>
          </div>
        </div>

        {/* 배송방법 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-sm font-semibold text-gray-700 flex items-center justify-center">
            배송방법
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            {["대한통운", "우체국", "직접입력", "해외국가"].map((label) => (
              <label key={label} className="flex items-center select-none">
                <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* 주문결제 + 주문유형 */}
        <div className="flex border-b border-gray-300">
          {/* 주문결제 */}
          <div className="flex flex-1 border-r border-gray-300">
            <div className="w-40 bg-gray-50 border-r border-gray-300 text-sm font-semibold text-gray-700 flex items-center justify-center">
              주문결제
            </div>
            <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
              {["무통장입금", "신용카드", "휴대폰결제"].map((label) => (
                <label key={label} className="flex items-center select-none">
                  <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* 주문유형 */}
          <div className="flex flex-1">
            <div className="w-40 bg-gray-50 border-r border-gray-300 text-sm font-semibold text-gray-700 flex items-center justify-center">
              주문유형
            </div>
            <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
              {["고객주문", "관리자주문"].map((label) => (
                <label key={label} className="flex items-center select-none">
                  <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 결제상태 */}
        <div className="flex">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-sm font-semibold text-gray-700 flex items-center justify-center">
            결제상태
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            {["무통장입금 대기", "카드결제완료", "소액결제완료"].map(
              (label) => (
                <label key={label} className="flex items-center select-none">
                  <span className="inline-block w-3.5 h-3.5 mr-1 border border-gray-400 rounded-sm bg-white align-middle"></span>
                  {label}
                </label>
              )
            )}
          </div>
        </div>
      </div>

      {/* 검색 버튼 */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-blue-600 text-white px-5 py-2">검색</button>
        <button className="bg-gray-200 px-5 py-2">초기화</button>
      </div>

      {/* 검색 결과 테이블 (별도 컴포넌트) */}
      <OrderSearchResultTable />
    </div>
  );
};

export default AdminOrderMgrComponent;
