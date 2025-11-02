import React from "react";
import UserInfoResultTable from "./UserInfoResultTable";

const UserInfoMgr = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md my-10 text-sm font-['Inter']">
      {/* 헤더 */}
      <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 px-6 py-4 mb-4 flex justify-between items-center">
        회원 조회
        <div className="space-x-2">
          <button className="bg-gray-100 px-3 py-1">엑셀 다운로드</button>
        </div>
      </h2>

      {/* 필터 전체 */}
      <div className="border border-gray-300 mb-6 relative -m-px">
        {/* 검색어 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            검색어
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <select className="border border-gray-300 p-1 bg-white">
              <option>이름</option>
              <option>아이디</option>
              <option>닉네임</option>
              <option>이메일</option>
              <option>핸드폰(네자리)</option>
              <option>주소</option>
            </select>
            <input
              type="text"
              className="border border-gray-300 p-1 w-80"
              placeholder="검색어를 입력하세요"
            />
          </div>
        </div>

        {/* 날짜 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            날짜
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <span>가입일</span>
            <input type="date" className="border border-gray-300 p-1" /> -
            <input type="date" className="border border-gray-300 p-1" />
            {/* 기간 버튼들 (디자인용) */}
            <div className="flex gap-1 ml-3">
              {["오늘", "1주", "15일", "1개월", "3개월", "6개월"].map(
                (label) => (
                  <button
                    key={label}
                    className="border border-gray-300 bg-white px-2 py-1 text-gray-700"
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* 등급 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            등급
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <select className="border border-gray-300 p-1 bg-white">
              <option>관리자</option>
              <option>매니저</option>
              <option>일반</option>
            </select>
          </div>
        </div>

        {/* 결제 금액 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            결제 금액
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <input type="number" className="border border-gray-300 p-1 w-24" />
            ~
            <input type="number" className="border border-gray-300 p-1 w-24" />₩
          </div>
        </div>

        {/* 주문 횟수 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            주문 횟수
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <input type="number" className="border border-gray-300 p-1 w-24" />{" "}
            ~
            <input
              type="number"
              className="border border-gray-300 p-1 w-24"
            />{" "}
            건
          </div>
        </div>

        {/* 리뷰 수 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            리뷰 수
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <input type="number" className="border border-gray-300 p-1 w-24" />{" "}
            ~
            <input
              type="number"
              className="border border-gray-300 p-1 w-24"
            />{" "}
            개
          </div>
        </div>

        {/* 회원가입 방법 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            회원가입 방법
          </div>
          <div className="flex items-center flex-grow p-2 gap-4">
            {["전체", "쇼핑몰", "네이버", "카카오", "기타"].map((label) => (
              <label
                key={label}
                className="flex items-center gap-1 text-gray-700 select-none"
              >
                <span className="inline-block w-3.5 h-3.5 border border-gray-400 bg-white"></span>
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* SMS 수신 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            SMS 수신
          </div>
          <div className="flex items-center flex-grow p-2 gap-4">
            {["전체", "동의", "거부"].map((label) => (
              <label
                key={label}
                className="flex items-center gap-1 text-gray-700 select-none"
              >
                <span className="inline-block w-3.5 h-3.5 border border-gray-400 bg-white"></span>
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* 이메일 수신 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            이메일 수신
          </div>
          <div className="flex items-center flex-grow p-2 gap-4">
            {["전체", "동의", "거부"].map((label) => (
              <label
                key={label}
                className="flex items-center gap-1 text-gray-700 select-none"
              >
                <span className="inline-block w-3.5 h-3.5 border border-gray-400 bg-white"></span>
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* 생일 */}
        <div className="flex">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            생일
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <input type="date" className="border border-gray-300 p-1" /> -
            <input type="date" className="border border-gray-300 p-1" />
            <label className="flex items-center gap-1 ml-4 text-gray-700 select-none">
              <span className="inline-block w-3.5 h-3.5 border border-gray-400 bg-white"></span>
              연도 제외
            </label>
          </div>
        </div>
      </div>

      {/* 검색 버튼 */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-blue-600 text-white px-5 py-2">검색</button>
        <button className="bg-gray-200 px-5 py-2">초기화</button>
      </div>
      <UserInfoResultTable />
    </div>
  );
};

export default UserInfoMgr;
