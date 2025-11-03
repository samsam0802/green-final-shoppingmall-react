import React from "react";

const SalesStatisticsTable = () => {
  // 월별 헤더 (1월 ~ 12월)
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

  // 항목 구분 (매출액 상단)
  const mainCategories = ["결제금액", "상품", "배송비", "환불", "취소/반품"];

  // 항목 구분 (원가 및 이익)
  const costCategories = [
    "매출액",
    "원가",
    "매입/정산",
    "취소/반품",
    "매출이익[%]",
  ];

  // 테이블 헤더 렌더링
  const renderHeader = () => (
    <thead>
      <tr className="bg-gray-100 border-b border-t border-gray-300 text-gray-700 text-sm font-semibold">
        {/* '구분' 셀 */}
        <th
          rowSpan="2"
          className="min-w-[70px] p-3 text-center border-r border-gray-300"
        >
          구분
        </th>

        {/* 월별 셀 (각 월은 '계' 항목 1개만 가짐) */}
        {months.map((month) => (
          <th
            key={month}
            colSpan="1"
            className="min-w-[80px] p-3 text-center border-r border-gray-300"
          >
            {month}
          </th>
        ))}
        {/* '합계' 셀 */}
        <th
          rowSpan="2"
          className="min-w-[90px] p-3 text-center border-l border-gray-300"
        >
          합계
        </th>
      </tr>
    </thead>
  );

  // 테이블 바디 렌더링
  const renderBody = (categories, isPercentage = false) => (
    <React.Fragment>
      {categories.map((category) => {
        // 매출액, 매출이익, 결제금액 항목을 강조
        const isHighlighted =
          category === "매출액" ||
          category === "매출이익[%]" ||
          category === "결제금액";

        return (
          <tr
            key={category}
            className={`text-sm border-b border-gray-200 transition-colors duration-150 ${
              isHighlighted ? "bg-yellow-50 font-semibold" : "hover:bg-gray-50"
            }`}
          >
            <td
              className={`p-3 text-center border-r border-gray-300 ${
                isHighlighted ? "text-gray-900" : "text-gray-600"
              }`}
            >
              {category}
            </td>

            {/* 월별 데이터 셀 (12개월) + 합계 셀 (총 13개) */}
            {Array.from({ length: 13 }).map((_, index) => (
              <td
                key={index}
                className={`p-3 text-right border-r border-gray-200 ${
                  isPercentage ? "text-blue-700" : "text-gray-800" // 이익률은 강조
                } ${index === 12 ? "border-l border-gray-300 font-bold" : ""}`} // 합계 열 강조
              >
                {/* 실제 데이터가 들어갈 자리. 현재는 더미 데이터 '0' */}
                {isPercentage ? "0.00 [%]" : "0"}
              </td>
            ))}
          </tr>
        );
      })}
    </React.Fragment>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* 헤더 부분 */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            매출 통계 상세 테이블
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            월별, 항목별 상세 매출 및 이익 현황을 확인하세요.
          </p>
        </div>

        {/* 다운로드 버튼 */}
        <div className="mt-4 lg:mt-0">
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-150 text-sm font-medium shadow-md">
            <span className="mr-1">⬇️</span> 데이터 다운로드 (CSV)
          </button>
        </div>
      </div>

      {/* 가로 스크롤 영역 적용 */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
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
