import React from "react";
import SecessionMemberResultTable from "./SecessionMemberResultTable";

const SecessionMemberMgr = () => {
  const activeTab = "list";
  const dateOptions = ["오늘", "1주", "15일", "1개월", "3개월", "6개월"];
  const dataLength = 0;

  const handleAction = (msg) => console.log(msg);

  return (
    <div className="max-w-6xl mx-auto bg-white my-10 text-sm font-['Inter']">
      {/* 헤더 및 타이틀 */}
      <div className="text-xl font-bold text-gray-800 border-b border-gray-200 px-6 pt-6 pb-4 flex justify-between items-center">
        <span>탈퇴회원리스트</span>
      </div>

      {/* 탭 영역 */}
      <div className="flex border-b border-gray-300 px-6 bg-gray-50">
        <button
          onClick={() => handleAction("탈퇴회원리스트 탭 클릭")}
          className="px-4 py-2 -mb-px text-sm font-medium border-b-2 border-blue-600 text-blue-600 bg-white"
        >
          탈퇴회원리스트
        </button>
        <button
          onClick={() => handleAction("탈퇴사유구분설정 탭 클릭")}
          className="px-4 py-2 -mb-px text-sm font-medium text-gray-600"
        >
          탈퇴사유구분설정
        </button>
      </div>

      <div className="p-6">
        {/* 검색 필터 영역 */}
        <div className="border border-gray-300 mb-6 overflow-hidden">
          {/* 이름 필터 */}
          <div className="flex border-b border-gray-300">
            <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
              이름
            </div>
            <div className="flex items-center flex-grow p-2">
              <input
                type="text"
                value=""
                onChange={() => handleAction("이름 입력")}
                className="border border-gray-300 p-1 w-96 focus:border-blue-500 focus:ring-blue-500"
                placeholder="이름을 입력하세요"
              />
            </div>
          </div>

          {/* 탈퇴일 필터 */}
          <div className="flex">
            <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
              탈퇴일
            </div>
            <div className="flex items-center flex-grow p-2 gap-2">
              <input
                type="date"
                value=""
                onChange={() => handleAction("시작일 선택")}
                className="border border-gray-300 p-1 bg-white"
              />
              <span className="text-gray-500">~</span>
              <input
                type="date"
                value=""
                onChange={() => handleAction("종료일 선택")}
                className="border border-gray-300 p-1 bg-white"
              />

              <div className="ml-4 space-x-1">
                {dateOptions.map((label) => (
                  <button
                    key={label}
                    className="bg-white text-gray-700 px-3 py-1 border border-gray-300 transition text-xs"
                    onClick={() => handleAction(`${label} 선택`)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            className="bg-green-500 text-white px-5 py-2 font-bold transition"
            onClick={() => handleAction("검색 실행")}
          >
            검색
          </button>
          <button
            className="bg-gray-200 text-gray-700 px-5 py-2 font-bold transition"
            onClick={() => handleAction("초기화 실행")}
          >
            초기화
          </button>
        </div>

        {/* 검색결과 테이블 컴포넌트 */}
        <SecessionMemberResultTable dataLength={dataLength} />
      </div>
    </div>
  );
};

export default SecessionMemberMgr;
