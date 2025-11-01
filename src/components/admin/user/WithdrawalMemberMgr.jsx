import { useState } from "react";
import WithdrawalMemberResultTable from "./WithdrawalMemberResultTable";

const WithdrawalMemberMgr = () => {
  const [activeTab, setActiveTab] = useState("list");
  const dateOptions = ["오늘", "1주", "15일", "1개월", "3개월", "6개월"];

  return (
    <div className="max-w-6xl mx-auto bg-white my-10 text-sm font-['Inter']">
      {/* 헤더 */}
      <div className="text-xl font-bold text-gray-800 border-b border-gray-300 px-6 pt-6 pb-4 flex justify-between items-center">
        <span>탈퇴회원리스트</span>
      </div>

      {/* 탭 버튼 (밑줄 완전 표시되도록 수정) */}
      <div className="flex border-b border-gray-300 px-6 bg-gray-50">
        <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-50 cursor-default">
          탈퇴회원리스트
        </button>
      </div>

      {/* 내용 */}
      <div className="p-6">
        {/* 검색 필터 */}
        <div className="border border-gray-300 mb-6 overflow-hidden">
          <div className="flex border-b border-gray-300">
            <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
              이름
            </div>
            <div className="flex items-center flex-grow p-2">
              <input
                type="text"
                className="border border-gray-300 p-1 w-96 focus:border-blue-500 focus:ring-blue-500"
                placeholder="이름을 입력하세요"
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
              탈퇴일
            </div>
            <div className="flex items-center flex-grow p-2 gap-2">
              <input
                type="date"
                className="border border-gray-300 p-1 bg-white"
              />
              <span className="text-gray-500">~</span>
              <input
                type="date"
                className="border border-gray-300 p-1 bg-white"
              />

              <div className="ml-4 space-x-1">
                {dateOptions.map((label) => (
                  <button
                    key={label}
                    className="bg-white text-gray-700 px-3 py-1 border border-gray-300 text-xs"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-green-500 text-white px-5 py-2 font-bold">
            검색
          </button>
          <button className="bg-gray-200 text-gray-700 px-5 py-2 font-bold">
            초기화
          </button>
        </div>

        {/* 리스트 테이블 */}
        <WithdrawalMemberResultTable />
      </div>
    </div>
  );
};

export default WithdrawalMemberMgr;
