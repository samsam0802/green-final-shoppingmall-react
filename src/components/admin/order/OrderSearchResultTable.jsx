import React, { useState } from "react";

const OrderSearchResultTable = () => {
  const [orders] = useState([
    {
      id: 1,
      date: "2025-10-30",
      orderNo: "A001",
      product: "상품A",
      qty: 1,
      customer: "홍길동1/홍길동1",
      method: "카드",
      amount: "10000",
      status: "주문접수",
      shipment: "미출고",
      delivery: "배송준비중",
      returnStatus: "반품/환불신청",
    },
    {
      id: 2,
      date: "2025-10-30",
      orderNo: "A002",
      product: "상품B",
      qty: 2,
      customer: "홍길동2/홍길동2",
      method: "무통장",
      amount: "20000",
      status: "상품준비",
      shipment: "출고",
      delivery: "배송중",
      returnStatus: "반품/환불중",
    },
    {
      id: 3,
      date: "2025-10-30",
      orderNo: "A003",
      product: "상품C",
      qty: 3,
      customer: "홍길동3/홍길동3",
      method: "카드",
      amount: "30000",
      status: "주문취소",
      shipment: "미출고",
      delivery: "배송완료",
      returnStatus: "반품/환불완료",
    },
  ]);

  return (
    <div className="w-full mt-8">
      <div className="flex justify-between items-center mb-3 text-gray-700 flex-wrap gap-2">
        <span className="font-semibold text-lg">
          검색 결과 (총 {orders.length} 건)
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          <button className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1 rounded-md border border-blue-200 cursor-pointer transition shadow-sm">
            선택 상품 출고
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md border border-gray-300 cursor-pointer hover:bg-gray-300 transition">
            다운로드
          </button>

          <select
            defaultValue="recent"
            className="border border-gray-300 bg-white text-gray-700 px-2 py-1 rounded-md text-sm cursor-pointer"
          >
            <option value="recent">최근 주문 순</option>
            <option value="old">오래된 주문 순</option>
          </select>

          <select
            defaultValue="10"
            className="border border-gray-300 bg-white text-gray-700 px-2 py-1 rounded-md text-sm cursor-pointer"
          >
            <option value="10">10개</option>
          </select>
        </div>
      </div>

      {/* 결과 테이블 */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-md">
        <table className="min-w-full border-collapse text-sm text-center">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr className="text-gray-700 font-semibold text-sm divide-x divide-gray-300">
              <th className="px-1 py-3 w-13">선택</th>
              <th className="px-2 py-3">번호</th>
              <th className="px-3 py-3">주문날짜</th>
              <th className="px-3 py-3">주문번호</th>
              <th className="px-3 py-3">상품명</th>
              <th className="px-3 py-3">수량</th>
              <th className="px-3 py-3">받는사람/주문자</th>
              <th className="px-3 py-3">결제수단</th>
              <th className="px-3 py-3">결제금액</th>
              <th className="px-3 py-3">주문상태</th>
              <th className="px-3 py-3">출고처리</th>
              <th className="px-3 py-3">배송상태</th>
              <th className="px-3 py-3">반품/환불</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition divide-x divide-gray-200"
              >
                <td className="px-2 py-3">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 border-gray-400 rounded text-blue-600 cursor-pointer"
                  />
                </td>
                <td className="px-3 py-3">{item.id}</td>
                <td className="px-3 py-3">{item.date}</td>
                <td className="px-3 py-3 text-blue-600 cursor-pointer hover:underline">
                  {item.orderNo}
                </td>
                <td className="px-3 py-3">{item.product}</td>
                <td className="px-3 py-3">{item.qty}</td>
                <td className="px-3 py-3">{item.customer}</td>
                <td className="px-3 py-3">{item.method}</td>
                <td className="px-3 py-3 text-blue-800 font-medium">
                  {item.amount} 원
                </td>

                <td className="px-3 py-3">
                  <select
                    defaultValue={item.status}
                    className="border border-gray-300 px-2 py-[2px] text-sm bg-white cursor-pointer rounded-md"
                  >
                    <option value="주문접수">주문접수</option>
                    <option value="결제확인">결제확인</option>
                    <option value="상품준비">상품준비</option>
                    <option value="출고준비">출고준비</option>
                    <option value="주문취소">주문취소</option>
                  </select>
                </td>

                <td className="px-3 py-3">
                  <select
                    defaultValue={item.shipment}
                    className="border border-gray-300 px-1 py-[2px] text-sm bg-white cursor-pointer"
                  >
                    <option>미출고</option>
                    <option>출고</option>
                  </select>
                </td>

                <td className="px-3 py-3">
                  <select
                    defaultValue={item.delivery}
                    className="border border-gray-300 px-1 py-[2px] text-sm bg-white cursor-pointer"
                  >
                    <option>배송준비중</option>
                    <option>배송중</option>
                    <option>배송완료</option>
                  </select>
                </td>

                <td className="px-3 py-3">
                  <select
                    defaultValue={item.returnStatus}
                    className="border border-gray-300 px-1 py-[2px] text-sm bg-white cursor-pointer"
                  >
                    <option value="반품/환불신청">반품/환불신청</option>
                    <option value="반품/환불중">반품/환불중</option>
                    <option value="반품/환불완료">반품/환불완료</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSearchResultTable;
