import React, { useState } from "react";

const OrderHistoryComponent = () => {
  // ✅ 우선 샘플 주문 내역
  const sampleOrders = [
    {
      id: "20250205-123456",
      date: "2025-02-05",
      productName: "진정 수분 토너 - 21N 린넨",
      qty: 2,
      price: 30000,
      status: "배송완료",
    },
    {
      id: "20250204-654321",
      date: "2025-02-04",
      productName: "고보습 세럼 앰플 - 19C 라이트",
      qty: 1,
      price: 22000,
      status: "배송중",
    },
  ];

  const showEmpty = sampleOrders.length === 0;

  return (
    <div className="max-w-5xl mx-auto p-8 text-[#111111]">
      <h1 className="text-2xl font-bold mb-8">주문 / 배송 조회</h1>

      {/* 주문 상태 요약 */}
      <div className="grid grid-cols-5 text-center bg-white border rounded-lg py-4 mb-8">
        {["주문접수", "결제완료", "배송준비중", "배송중", "배송완료"].map(
          (label, i) => (
            <div key={label} className="py-2">
              <p className="text-xl font-bold">0</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          )
        )}
      </div>

      {/* 검색 영역 */}
      <div className="border rounded-lg p-6 mb-10 bg-white">
        <p className="font-semibold text-sm mb-3">구매기간</p>
        <div className="flex gap-3 mb-4">
          {["1개월", "3개월", "6개월", "12개월"].map((m, i) => (
            <button
              key={m}
              className={`px-4 py-2 rounded text-sm border ${
                i === 0
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
              disabled
            >
              {m}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400">
          ※ 최근 1년 내 구매내역만 조회 가능합니다.
        </p>
      </div>

      {/* 주문 내역 테이블 */}
      <table className="w-full text-center border-t text-sm">
        <thead className="bg-gray-50 h-12 border-b">
          <tr>
            <th>주문일자</th>
            <th>상품명</th>
            <th>수량</th>
            <th>결제금액</th>
            <th>상태</th>
          </tr>
        </thead>

        {!showEmpty && (
          <tbody>
            {sampleOrders.map((order) => (
              <tr key={order.id} className="h-14 border-b">
                <td>{order.date}</td>
                <td className="px-4">{order.productName}</td>
                <td>{order.qty}</td>
                <td className="font-semibold">
                  {order.price.toLocaleString()}원
                </td>
                <td className="text-[#ff5c00] font-semibold">{order.status}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {/* 주문 내역 없을 때 */}
      {showEmpty && (
        <div className="text-center py-20 text-gray-500">
          <div className="text-3xl mb-3">⚠</div>
          <p>기간 내 주문내역이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryComponent;
