import React from "react";

const SalesStatisticsTable = () => {
  // 월별 헤더 (1월 ~ 12월)
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

  // 항목 구분 (매출액 상단)
  // '되돌리기' 항목은 이전 요청에 따라 제외되었습니다.
  const mainCategories = ["결제금액", "상품", "배송비", "환불", "취소/반품"];

  // 항목 구분 (원가 및 이익)
  const costCategories = [
    "매출액",
    "원가",
    "매입/정산",
    "취소/반품",
    "매출이익[%]",
  ];

  // 지점 구분 (온라인 쇼핑몰 가정에 따라 '계' 항목만 유지)
  const subCategory = "계";

  // 테이블 헤더 렌더링
  const renderHeader = () => (
    <thead>
      <tr className="bg-gray-100 border-b border-t border-gray-300 text-gray-700 text-sm font-semibold">
        {/* '구분' 셀 */}
        <th
          rowSpan="2"
          className="min-w-[28] p-2 text-center border-r border-gray-300"
        >
          구분
        </th>

        {/* 월별 셀 (각 월은 '계' 항목 1개만 가짐) */}
        {months.map((month) => (
          <th
            key={month}
            colSpan="1"
            className="min-w-[16] p-2 text-center border-r border-gray-300"
          >
            {month}
          </th>
        ))}
        {/* '합계' 셀 */}
        <th rowSpan="2" className="min-w-[20] p-2 text-center">
          합계
        </th>
      </tr>

      {/* 월별 하위 지점 구분 셀 (모든 월에 '계'만 반복) */}
      <tr className="bg-gray-50 border-b border-gray-300 text-gray-600 text-xs">
        {months.map((month) => (
          <th
            key={`${month}-sub`}
            className="p-1 text-center border-r border-gray-300"
          >
            {subCategory}
          </th>
        ))}
      </tr>
    </thead>
  );

  // 테이블 바디 렌더링
  const renderBody = (categories, isPercentage = false) => (
    <React.Fragment>
      {categories.map((category) => {
        const isHighlighted =
          category === "매출액" ||
          category === "매출이익[%]" ||
          category === "결제금액";

        return (
          <tr
            key={category}
            className={`text-xs ${
              isHighlighted ? "bg-yellow-50 font-bold" : "hover:bg-gray-50"
            }`}
          >
            <td
              className={`p-2 text-center border-r border-gray-300 ${
                isHighlighted ? "text-gray-900" : "text-gray-600"
              }`}
            >
              {category}
              {/* '결제금액' 옆의 물음표 아이콘 */}
              {category === "결제금액" && (
                <span
                  className="ml-1 text-gray-400 cursor-help"
                  title="결제금액 정보"
                >
                  ?
                </span>
              )}
            </td>

            {/* 월별 데이터 셀 (12개월) + 합계 셀 (총 13개) */}
            {Array.from({ length: 13 }).map((_, index) => (
              <td
                key={index}
                className={`p-2 text-right border-r border-gray-200 ${
                  isPercentage ? "text-gray-500" : "text-gray-800"
                }`}
              >
                {/* 데이터가 들어갈 자리 */}
                {isPercentage ? "0 [%]" : "0"}
              </td>
            ))}
          </tr>
        );
      })}
    </React.Fragment>
  );

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">매출 통계 상세</h2>
        <button className="flex items-center px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-150 text-sm">
          <span className="mr-1">⬇️</span> 다운로드
        </button>
      </div>

      {/* 가로 스크롤 영역 적용 */}
      <div className="overflow-x-auto">
        <table className="divide-y divide-gray-200 border border-gray-300 whitespace-nowrap">
          {renderHeader()}
          <tbody className="divide-y divide-gray-200">
            {/* 매출액 상단 항목들 */}
            {renderBody(mainCategories)}

            {/* 매출액 및 원가 관련 항목들 */}
            {renderBody(costCategories.slice(0, -1))}

            {/* 매출이익[%] 항목 */}
            {renderBody([costCategories[costCategories.length - 1]], true)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesStatisticsTable;
