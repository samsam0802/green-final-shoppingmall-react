import React, { useState } from "react";
import UserInfoResultTable from "./UserInfoResultTable";

const UserInfoMgr = () => {
  // 체크박스 상태
  const [signupMethods, setSignupMethods] = useState({
    쇼핑몰: false,
    네이버: false,
    카카오: false,
    기타: false,
    전체: false,
  });

  const [sms, setSms] = useState({
    동의: false,
    거부: false,
    전체: false,
  });

  const [email, setEmail] = useState({
    동의: false,
    거부: false,
    전체: false,
  });

  // 전체 클릭 시
  const handleAllChange = (category, checked) => {
    if (category === "signup") {
      setSignupMethods({
        쇼핑몰: checked,
        네이버: checked,
        카카오: checked,
        기타: checked,
        전체: checked,
      });
    } else if (category === "sms") {
      setSms({
        동의: checked,
        거부: checked,
        전체: checked,
      });
    } else if (category === "email") {
      setEmail({
        동의: checked,
        거부: checked,
        전체: checked,
      });
    }
  };

  // 개별 체크박스 클릭 시
  const handleChange = (category, label, checked) => {
    if (category === "signup") {
      const newState = { ...signupMethods, [label]: checked };
      newState.전체 =
        newState.쇼핑몰 && newState.네이버 && newState.카카오 && newState.기타;
      setSignupMethods(newState);
    } else if (category === "sms") {
      const newState = { ...sms, [label]: checked };
      newState.전체 = newState.동의 && newState.거부;
      setSms(newState);
    } else if (category === "email") {
      const newState = { ...email, [label]: checked };
      newState.전체 = newState.동의 && newState.거부;
      setEmail(newState);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md my-10 text-sm font-['Inter']">
      {/* 헤더 */}
      <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 px-6 py-4 mb-4 flex justify-between items-center">
        회원 조회
        <div className="space-x-2">
          <button className="bg-gray-100 px-3 py-1 border border-gray-300 cursor-pointer">
            엑셀 다운로드
          </button>
        </div>
      </h2>

      {/* 필터 전체 */}
      <div className="border border-gray-300 mb-6 relative -m-px">
        {/* 검색어 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            검색어
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <select className="border border-gray-300 p-1 bg-white cursor-pointer">
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
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            날짜
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <span>가입일</span>
            <input
              type="date"
              className="border border-gray-300 p-1 bg-white cursor-pointer h-[32px]"
            />{" "}
            -
            <input
              type="date"
              className="border border-gray-300 p-1 bg-white cursor-pointer h-[32px]"
            />
            <div className="flex gap-1 ml-3">
              {["오늘", "1주", "15일", "1개월", "3개월", "6개월"].map(
                (label) => (
                  <button
                    key={label}
                    className="border border-gray-300 bg-white px-2 py-1 text-gray-700 cursor-pointer"
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* 등급 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            등급
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <select className="border border-gray-300 p-1 bg-white cursor-pointer">
              <option>관리자</option>
              <option>매니저</option>
              <option>일반</option>
            </select>
          </div>
        </div>

        {/* 결제 금액 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            결제 금액
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <input type="number" className="border border-gray-300 p-1 w-24" />{" "}
            ~
            <input type="number" className="border border-gray-300 p-1 w-24" />₩
          </div>
        </div>

        {/* 회원가입 방법 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            회원가입 방법
          </div>
          <div className="flex items-center flex-grow p-2 gap-4">
            {Object.keys(signupMethods).map((label) => (
              <label
                key={label}
                className="flex items-center gap-1 text-gray-700 select-none cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                  checked={signupMethods[label]}
                  onChange={(e) =>
                    label === "전체"
                      ? handleAllChange("signup", e.target.checked)
                      : handleChange("signup", label, e.target.checked)
                  }
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* SMS 수신 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            SMS 수신
          </div>
          <div className="flex items-center flex-grow p-2 gap-4">
            {Object.keys(sms).map((label) => (
              <label
                key={label}
                className="flex items-center gap-1 text-gray-700 select-none cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                  checked={sms[label]}
                  onChange={(e) =>
                    label === "전체"
                      ? handleAllChange("sms", e.target.checked)
                      : handleChange("sms", label, e.target.checked)
                  }
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* 이메일 수신 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center">
            이메일 수신
          </div>
          <div className="flex items-center flex-grow p-2 gap-4">
            {Object.keys(email).map((label) => (
              <label
                key={label}
                className="flex items-center gap-1 text-gray-700 select-none cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                  checked={email[label]}
                  onChange={(e) =>
                    label === "전체"
                      ? handleAllChange("email", e.target.checked)
                      : handleChange("email", label, e.target.checked)
                  }
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 검색 버튼 */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-blue-600 text-white px-5 py-2 cursor-pointer">
          검색
        </button>
        <button className="bg-gray-200 px-5 py-2 cursor-pointer">초기화</button>
      </div>

      {/* 결과 테이블 */}
      <UserInfoResultTable />
    </div>
  );
};

export default UserInfoMgr;
