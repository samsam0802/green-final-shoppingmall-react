import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function IssuanceSetting({ onChangeForm }) {
  const [isOpen, setIsOpen] = useState(true);
  const [issuanceSetting, setIssuanceSetting] = useState({
    issuanceType: "MANUAL",
    autoIssueTrigger: "NEWUSER",
    couponCode: "",
  });

  useEffect(() => {
    onChangeForm?.({ ...issuanceSetting });
  }, [issuanceSetting]);

  const onIssuanceTypeChangeHandler = (e) => {
    const { name, value } = e.target;

    setIssuanceSetting((prev) => {
      if (value === "MANUAL") {
        return { ...prev, autoIssueTrigger: "", couponCode: "", [name]: value };
      } else if (value === "AUTO") {
        return {
          ...prev,
          autoIssueTrigger: "NEWUSER",
          couponCode: "",
          [name]: value,
        };
      } else if (value === "CODE") {
        return { ...prev, autoIssueTrigger: "", [name]: value };
      }
      return prev;
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setIssuanceSetting((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white p-6 text-sm font-['Inter']">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-3 border-b"
      >
        <h2 className="text-lg font-semibold text-gray-800">발급 설정</h2>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isOpen && (
        <div>
          <div className="border border-gray-300 mb-6 mt-6 rounded-lg overflow-hidden shadow-lg">
            {/* 발급 방식 */}
            <div
              className={`flex ${
                issuanceSetting.issuanceType !== "MANUAL"
                  ? "border-b border-gray-300"
                  : ""
              } items-stretch`}
            >
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                발급 방식
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex items-center flex-grow p-2 gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="issuanceType"
                    value="MANUAL"
                    checked={issuanceSetting.issuanceType === "MANUAL"}
                    onChange={onIssuanceTypeChangeHandler}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>관리자 수동 발급</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="issuanceType"
                    value="AUTO"
                    checked={issuanceSetting.issuranceType === "AUTO"}
                    onChange={onIssuanceTypeChangeHandler}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>특정 조건 자동 발급</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="issuranceType"
                    value="CODE"
                    checked={issuanceSetting.issuanceType === "CODE"}
                    onChange={onIssuanceTypeChangeHandler}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>쿠폰 코드 입력</span>
                </label>
              </div>
            </div>

            {/* 특정 조건 자동 발급 설정 */}
            {issuanceSetting.issuanceType === "AUTO" && (
              <div className="flex items-stretch">
                <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                  자동 발급 조건
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <div className="flex items-center flex-grow p-2 gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="autoIssueTrigger"
                      value="NEWUSER"
                      onChange={onChangeHandler}
                      checked={issuanceSetting.autoIssueTrigger === "NEWUSER"}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>회원가입 완료시</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="autoIssueTrigger"
                      value="BIRTHDAY"
                      onChange={onChangeHandler}
                      checked={issuanceSetting.autoIssueTrigger === "BIRTHDAY"}
                      className="mr-2 accent-blue-600 cursor-pointer"
                    />
                    <span>생일</span>
                  </label>
                </div>
              </div>
            )}

            {/* 쿠폰 코드 입력 */}
            {issuanceSetting.issuanceType === "CODE" && (
              <div className="flex items-stretch">
                <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                  쿠폰 코드
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <div className="flex items-center flex-grow p-2 gap-2">
                  <input
                    type="text"
                    name="couponCode"
                    value={issuanceSetting.couponCode}
                    onChange={onChangeHandler}
                    className="border border-gray-300 p-1 w-full max-w-lg rounded-md"
                    placeholder="쿠폰 코드를 입력하세요"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
