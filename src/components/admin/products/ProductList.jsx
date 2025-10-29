import React from "react";

// 테이블에 표시할 더미 데이터
const dummyProducts = [
  {
    id: 11,
    name: "프리미엄 검색 모델 제공",
    price: 90000,
    aStock: "[7] 200/130",
    dStock: "[3] 0/0",
    delivery: "기본배송료(1)",
    hits: 1,
    date: "2025-10-29 10:43",
    status: "정상",
    exposure: "노출",
  },
  {
    id: 10,
    name: "프리미엄 검색 모델 제공",
    price: 90000,
    aStock: "[5] 100/50",
    dStock: "[5] 0/0",
    delivery: "기본배송료(1)",
    hits: 5,
    date: "2019-02-20 11:07",
    status: "정상",
    exposure: "노출",
  },
  {
    id: 9,
    name: "세련된 갤러리 배너 제공",
    price: 26000,
    aStock: "[4] 100/70",
    dStock: "[6] 0/0",
    delivery: "기본배송료(1)",
    hits: 1,
    date: "2019-02-15 17:47",
    status: "정상",
    exposure: "노출",
  },
  {
    id: 8,
    name: "세련된 단일 3호 제공",
    price: 64000,
    aStock: "[3] 50/20",
    dStock: "[7] 0/0",
    delivery: "기본배송료(1)",
    hits: 4,
    date: "2019-02-15 19:44",
    status: "정상",
    exposure: "노출",
  },
];

const ProductList = () => {
  const tableHeaders = [
    "번호",
    "상품명",
    "정가",
    "재고/옵션",
    "배송비",
    "조회",
    "등록/수정일",
    "상태",
    "노출",
    "통계",
    "관리",
  ];

  const ActionButton = ({ label }) => (
    <button className="w-full px-2 py-1 text-xs bg-gray-400 text-white rounded hover:bg-gray-500 mb-1">
      {label}
    </button>
  );

  return (
    <div>
      {/* 목록 상단 정보 및 버튼 */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-semibold">
          검색 결과 <span className="text-red-600">11</span>개 (총 11개)
        </div>
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 p-1 text-xs rounded">
            <option>최근 등록 순</option>
          </select>
          <select className="border border-gray-300 p-1 text-xs rounded">
            <option>10개</option>
          </select>
          <button className="px-3 py-1 text-xs bg-gray-400 text-white rounded hover:bg-gray-500">
            엑셀로 다운로드
          </button>
        </div>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto border border-gray-300 rounded shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 w-10">
                <input
                  type="checkbox"
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
              </th>
              {/* <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 w-12">
                선택 삭제
              </th> */}
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="px-2 py-2 text-left text-xs font-semibold text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dummyProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-2 py-2 text-center text-sm w-10">
                  <input
                    type="checkbox"
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-2 py-2 text-sm w-12">{product.id}</td>
                <td className="px-2 py-2 text-sm flex items-center space-x-2">
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {product.name}
                  </span>
                </td>
                <td className="px-2 py-2 text-sm text-right">
                  {product.price.toLocaleString()}원
                </td>
                <td className="px-2 py-2 text-sm text-center">
                  {product.aStock} <br />
                  {product.dStock} <span className="text-red-500 ml-1">📦</span>
                </td>
                <td className="px-2 py-2 text-sm text-center text-blue-600 hover:underline cursor-pointer">
                  {product.delivery}
                </td>
                <td className="px-2 py-2 text-sm text-center">
                  {product.hits}
                </td>
                <td className="px-2 py-2 text-xs text-gray-500">
                  <div>{product.date.split(" ")[0]}</div>
                  <div>{product.date.split(" ")[1]}</div>
                </td>
                <td className="px-2 py-2 text-sm text-center text-green-600">
                  {product.status}
                </td>
                <td className="px-2 py-2 text-sm text-center">
                  {product.exposure}
                </td>
                <td className="px-2 py-2 text-sm text-center text-blue-600 hover:underline cursor-pointer">
                  통계
                </td>
                <td className="px-2 py-2 text-sm space-y-0.5 w-20">
                  <ActionButton label="수정" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
