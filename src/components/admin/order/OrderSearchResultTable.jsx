import React, { useState } from "react";

const OrderSearchResultTable = () => {
  const [downloadType, setDownloadType] = useState("선택 다운로드");

  const headers = [
    "선택",
    "번호",
    "주문날짜",
    "주문번호",
    "상품명",
    "수량",
    "받는사람/주문자",
    "결제수단",
    "결제금액",
    "주문상태",
    "출고처리",
    "배송상태",
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
      shipment: "미출고",
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
      status: "완료",
      shipment: "출고",
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
      shipment: "미출고",
    },
  ];

  return (
    <div className="border border-gray-300 bg-white w-full">
      {/* 상단 */}
      <div className="bg-gray-50 p-3 border-b border-gray-300 flex justify-between items-center">
        <span>총 {dummyData.length}건의 주문이 검색되었습니다.</span>

        <div className="flex items-center gap-2">
          <button className="bg-gray-200 text-gray-700 px-3 py-1.5 text-sm border border-gray-300 cursor-pointer">
            일괄 송장 등록
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1.5 text-sm border border-gray-300 cursor-pointer">
            출고 처리
          </button>

          <select
            value={downloadType}
            onChange={(e) => setDownloadType(e.target.value)}
            className="border border-gray-300 p-1.5 text-sm bg-white text-gray-700 cursor-pointer"
          >
            <option>선택 다운로드</option>
            <option>전체 다운로드</option>
          </select>

          <button className="bg-gray-200 text-gray-700 px-3 py-1.5 text-sm border border-gray-300 cursor-pointer">
            다운로드
          </button>
        </div>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-auto">
                선택
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-12">
                번호
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-auto">
                주문날짜
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-36">
                주문번호
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-52">
                상품명
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-12">
                수량
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-auto">
                받는사람/주문자
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-auto">
                결제수단
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-auto">
                결제금액
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-auto">
                주문상태
              </th>
              <th className="py-2 border-b border-r border-gray-300 text-gray-700 font-semibold w-auto">
                출고처리
              </th>
              <th className="py-2 border-b border-gray-300 text-gray-700 font-semibold w-auto">
                배송상태
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => (
              <tr key={item.id}>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.id}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.date}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.orderNo}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.product}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.qty}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.customer}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.method}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.amount}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  {item.status}
                </td>
                <td className="py-[6px] px-2 border-b border-r border-gray-300 text-gray-700">
                  <select
                    className="border border-gray-300 px-1 py-[2px] text-sm bg-white cursor-pointer"
                    defaultValue={item.shipment}
                  >
                    <option>미출고</option>
                    <option>출고</option>
                  </select>
                </td>
                <td className="py-[6px] px-2 border-b border-gray-300 text-gray-700">
                  <select className="border border-gray-300 px-1 py-[2px] text-sm bg-white cursor-pointer">
                    <option>배송준비중</option>
                    <option>배송중</option>
                    <option>배송완료</option>
                    <option>반품중</option>
                    <option>반품완료</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-2 p-4 border-t border-gray-300 bg-gray-50">
        <button className="px-3 py-1 border border-gray-300 text-sm cursor-pointer">
          이전
        </button>
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            className="px-3 py-1 border border-gray-300 text-sm cursor-pointer"
          >
            {i + 1}
          </button>
        ))}
        <button className="px-3 py-1 border border-gray-300 text-sm cursor-pointer">
          다음
        </button>
      </div>
    </div>
  );
};

export default OrderSearchResultTable;
