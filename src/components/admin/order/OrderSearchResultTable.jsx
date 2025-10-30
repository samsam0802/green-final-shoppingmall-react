import React from "react";

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

  return (
    <div className="border border-gray-300 rounded-sm bg-white">
      {/* 상단 영역 */}
      <div className="bg-gray-50 p-3 border-b border-gray-300 flex justify-between items-center">
        <span>총 0건의 주문이 검색되었습니다.</span>
      </div>

      {/* 테이블 */}
      <table className="w-full border-collapse text-center text-sm">
        <thead className="bg-gray-100 border-t border-gray-300">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`py-2 border-b border-gray-300 border-r last:border-r-0 text-gray-700 font-semibold
                  ${
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
          <tr>
            <td
              colSpan={headers.length}
              className="py-6 text-gray-500 border-t border-gray-300"
            >
              검색된 주문이 없습니다.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderSearchResultTable;
