import React, { useState } from "react";
import OrderSearchResultTable from "./OrderSearchResultTable";
import CheckboxGroup from "../CheckboxGroup";

const AdminOrderMgrComponent = () => {
  // --- 상태 관리 ---
  const [selectedPreStatuses, setSelectedPreStatuses] = useState([]);
  const [selectedPostStatuses, setSelectedPostStatuses] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState([]);
  const [selectedOrderType, setSelectedOrderType] = useState([]);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState([]);

  // --- 체크박스 옵션 ---
  const allPreStatuses = [
    "주문접수",
    "결제확인",
    "상품준비",
    "출고준비",
    "주문취소",
    "전체",
  ];
  const allPostStatuses = [
    "출고완료",
    "배송중",
    "배송완료",
    "반품신청",
    "반품완료",
    "전체",
  ];
  const allDelivery = ["대한통운", "우체국", "직접입력", "해외국가"];
  const allPayment = ["무통장입금", "신용카드", "휴대폰결제"];
  const allOrderType = ["고객주문", "관리자주문"];
  const allPaymentStatus = ["무통장입금 대기", "카드결제완료", "소액결제완료"];

  return (
    <div className="w-full bg-white p-6 text-sm font-['Inter'] min-h-screen">
      {/* 헤더 */}
      <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-4 mb-6 flex justify-between items-center px-2">
        전체 주문 조회
        <div className="space-x-2 text-sm">
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-gray-700 cursor-pointer hover:bg-gray-100 transition shadow-sm">
            엑셀 다운로드
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-gray-700 cursor-pointer hover:bg-gray-100 transition shadow-sm">
            프린트 설정
          </button>
        </div>
      </h2>

      {/* 필터 영역 */}
      <div className="border border-gray-300 mb-6 rounded-lg overflow-hidden shadow-lg">
        {/* 검색어 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center p-2 min-h-[44px]">
            검색어
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            <input
              type="text"
              placeholder="주문번호, 주문자명, 상품명 등"
              className="border border-gray-300 p-1 w-80 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <label className="ml-2 flex items-center select-none cursor-pointer text-gray-600 hover:text-gray-800 transition">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mr-1 border border-gray-400 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />{" "}
              부분검색
            </label>
          </div>
        </div>

        {/* 날짜 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center p-2 min-h-[44px]">
            날짜
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            <select className="border border-gray-300 p-1 mr-2 bg-white cursor-pointer h-[32px] rounded-md focus:ring-blue-500 focus:border-blue-500 transition">
              <option>주문일</option>
              <option>결제일</option>
            </select>
            <div className="flex items-center gap-1">
              <input
                type="date"
                className="border border-gray-300 p-1 bg-white cursor-pointer h-[32px] rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="text-gray-500">~</span>
              <input
                type="date"
                className="border border-gray-300 p-1 bg-white cursor-pointer h-[32px] rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-1 ml-2">
              {["오늘", "1주", "15일", "1개월", "3개월", "6개월"].map(
                (label) => (
                  <button
                    key={label}
                    className="border border-gray-300 bg-white px-2 py-1 text-gray-700 text-xs cursor-pointer rounded-md hover:bg-blue-50 hover:border-blue-500 transition"
                  >
                    {label}
                  </button>
                )
              )}
              <button className="border border-blue-600 bg-blue-50 px-2 py-1 text-blue-700 text-xs cursor-pointer rounded-md hover:bg-blue-100 transition">
                전체
              </button>
            </div>
          </div>
        </div>

        {/* 체크박스 그룹: 출고 전/후 */}
        <CheckboxGroup
          title="주문상태(출고 전)"
          options={allPreStatuses}
          selectedOptions={selectedPreStatuses}
          setSelectedOptions={setSelectedPreStatuses}
          showAll={true}
        />
        <CheckboxGroup
          title="주문상태(출고 후)"
          options={allPostStatuses}
          selectedOptions={selectedPostStatuses}
          setSelectedOptions={setSelectedPostStatuses}
          showAll={true}
        />

        {/* 나머지 필터들도 CheckboxGroup으로 재사용 */}
        <CheckboxGroup
          title="배송방법"
          options={allDelivery}
          selectedOptions={selectedDelivery}
          setSelectedOptions={setSelectedDelivery}
        />
        <CheckboxGroup
          title="주문결제"
          options={allPayment}
          selectedOptions={selectedPayment}
          setSelectedOptions={setSelectedPayment}
        />
        <CheckboxGroup
          title="주문유형"
          options={allOrderType}
          selectedOptions={selectedOrderType}
          setSelectedOptions={setSelectedOrderType}
        />
        <CheckboxGroup
          title="결제상태"
          options={allPaymentStatus}
          selectedOptions={selectedPaymentStatus}
          setSelectedOptions={setSelectedPaymentStatus}
        />
      </div>

      {/* 검색 버튼 */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-blue-600 text-white px-8 py-2 cursor-pointer rounded-md shadow-md hover:bg-blue-700 transition font-semibold">
          검색
        </button>
        <button className="border border-gray-300 bg-white px-8 py-2 text-gray-700 cursor-pointer rounded-md shadow-md hover:bg-gray-100 transition font-semibold">
          초기화
        </button>
      </div>

      <OrderSearchResultTable />
    </div>
  );
};

export default AdminOrderMgrComponent;
