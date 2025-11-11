import React from "react";

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
    "관리",
  ];

  return (
    <div className="w-full mt-6">
      {/* 상단 영역 */}
      <div className="flex justify-between items-center mb-3 text-gray-700 flex-wrap gap-2 px-2">
        <span className="font-semibold text-lg">
          검색 결과 (총 {dummyProducts.length}개)
        </span>

        <div className="flex items-center gap-2 flex-wrap">
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md border border-gray-300 cursor-pointer hover:bg-gray-300 transition shadow-sm">
            다운로드
          </button>

          <select
            defaultValue="recent"
            className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md cursor-pointer bg-white shadow-sm hover:bg-gray-50 transition"
          >
            <option value="recent">최근 등록 순</option>
            <option value="old">오래된 등록 순</option>
          </select>

          <select
            defaultValue="10"
            className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md cursor-pointer bg-white shadow-sm hover:bg-gray-50 transition"
          >
            <option value="10">10개</option>
            <option value="20">20개</option>
            <option value="50">50개</option>
          </select>
        </div>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-md">
        <table className="min-w-full border-collapse text-sm text-center">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr className="text-gray-700 font-semibold text-sm divide-x divide-gray-300">
              <th className="px-3 py-3 whitespace-nowrap w-[50px]">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 accent-blue-600 cursor-pointer"
                />
              </th>

              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className={`px-3 py-3 whitespace-nowrap ${
                    header === "번호"
                      ? "w-[50px]"
                      : header === "상태" || header === "노출"
                      ? "w-[90px]"
                      : header === "관리"
                      ? "w-[130px]"
                      : ""
                  } text-center`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {dummyProducts.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition divide-x divide-gray-200"
              >
                <td className="px-2 py-3 w-[50px]">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 accent-blue-600 cursor-pointer"
                  />
                </td>

                <td className="px-3 py-3 w-[50px]">{product.id}</td>

                <td className="px-3 py-3 text-left">
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    {product.name}
                  </span>
                </td>

                <td className="px-3 py-3 text-right">
                  {product.price.toLocaleString()}원
                </td>

                <td className="px-3 py-3 text-center">
                  <div>{product.aStock}</div>
                  <div className="text-gray-600 text-xs">
                    {product.dStock}{" "}
                    <span className="text-red-500 ml-1">📦</span>
                  </div>
                </td>

                <td className="px-3 py-3 text-center text-blue-600 hover:underline cursor-pointer">
                  {product.delivery}
                </td>

                <td className="px-3 py-3 text-center">{product.hits}</td>

                <td className="px-3 py-3 text-xs text-gray-500">
                  <div>{product.date.split(" ")[0]}</div>
                  <div>{product.date.split(" ")[1]}</div>
                </td>

                <td className="px-3 py-3 text-center">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === "정상"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>

                <td className="px-3 py-3 text-center">{product.exposure}</td>

                <td className="px-3 py-3 w-[130px]">
                  <div className="flex flex-col gap-1">
                    <button className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1 rounded-md border border-blue-200 cursor-pointer transition shadow-sm">
                      수정
                    </button>
                    <button className="bg-green-50 text-green-700 hover:bg-green-100 px-3 py-1 rounded-md border border-green-200 cursor-pointer transition shadow-sm">
                      재입고 알림
                    </button>
                  </div>
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
