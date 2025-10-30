import React, { useState } from "react";

const OrderSearchResultTable = () => {
  const headers = [
    "선택",
    "번호",
    "주문날짜",
    "주문번호",
    "상품명",
    "수량",
    "받는분/주문자",
    "결제수단",
    "결제금액",
    "주문상태",
  ];

  const dummyData = [
    {
      id: 1,
      date: "2025-10-30",
      orderNo: "A001",
      product: "상품A",
      qty: 1,
      customer: "홍길동1/홍길동1",
      method: "카드",
      amount: "10000",
      status: "완료",
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
      status: "배송중",
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
      status: "취소",
    },
  ];

  const [downloadType, setDownloadType] = useState("선택 다운로드");

  return (
    <div className="border border-gray-300 bg-white w-full">
      {/* 상단 */}
      <div className="bg-gray-50 p-3 border-b border-gray-300 flex justify-between items-center">
        <span>총 {dummyData.length}건의 주문이 검색되었습니다.</span>

        {/* 다운로드 영역 오른쪽 */}
        <div className="flex items-center gap-2">
          <select
            value={downloadType}
            onChange={(e) => setDownloadType(e.target.value)}
            className="border border-gray-300 p-1.5 text-sm"
          >
            <option>선택 다운로드</option>
            <option>전체 다운로드</option>
          </select>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 text-sm font-medium">
            다운로드
          </button>
        </div>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center text-sm">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`py-2 border-b border-r border-gray-300 text-gray-700 font-semibold ${
                    h === "주문번호"
                      ? "w-48"
                      : h === "상품명"
                      ? "w-64"
                      : "w-auto"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, idx) => (
              <tr key={idx}>
                {[
                  <span className="inline-block w-4 h-4 border border-gray-400 bg-white rounded-sm"></span>,
                  item.id,
                  item.date,
                  item.orderNo,
                  item.product,
                  item.qty,
                  item.customer,
                  item.method,
                  item.amount,
                  item.status,
                ].map((val, i) => (
                  <td
                    key={i}
                    className={`py-[6px] px-2 border-b border-r border-gray-300 text-gray-700 ${
                      i === headers.length - 1 ? "border-r-0" : ""
                    }`}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 하단 페이지네이션 중앙 */}
      <div className="flex justify-center items-center gap-2 p-4 border-t border-gray-300 bg-gray-50">
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">
          이전
        </button>
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            className="px-3 py-1 border border-gray-300 rounded text-sm"
          >
            {i + 1}
          </button>
        ))}
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">
          다음
        </button>
      </div>
    </div>
  );
};

export default OrderSearchResultTable;
