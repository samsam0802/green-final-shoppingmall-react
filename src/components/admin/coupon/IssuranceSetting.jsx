import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function IssuranceSetting() {
  const [isOpen, setIsOpen] = useState(true);
  const [issueAutoType, setIssueAutoType] = useState(false);

  //{MANUAL,NEWUSER,BIRTHDAY,CODE}
  const [issuranceSetting, setIssuranceSetting] = useState({
    issuranceType: "MANUAL",
    couponCode: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setIssueAutoType(false);

    setIssuranceSetting((prev) => {
      const data = { ...prev, [name]: value };
      console.log(data);
      return data;
    });
  };

  return (
    <div className="border rounded-lg mb-4">
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold">발급 설정</h2>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && (
        <div className="divide-y">
          {/* 발급 방식 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">발급 방식</span>
            </div>
            <div className="flex-1 p-4 flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="issuranceType"
                  value="MANUAL"
                  checked={issuranceSetting.issuranceType === "MANUAL"}
                  onChange={onChangeHandler}
                  className="w-4 h-4"
                />
                <span className="text-sm">관리자 수동 발급</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="issuranceType"
                  // value="AUTO"
                  checked={issueAutoType}
                  onChange={(e) => setIssueAutoType(true)}
                  className="w-4 h-4"
                />
                <span className="text-sm">특정 조건 자동 발급</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="issuranceType"
                  value="CODE"
                  checked={issuranceSetting.issuranceType === "CODE"}
                  onChange={onChangeHandler}
                  className="w-4 h-4"
                />
                <span className="text-sm">쿠폰 코드 입력</span>
              </label>
            </div>
          </div>

          {/* 특정 조건 자동 발급 설정 - 조건부 표시 */}
          {issueAutoType && (
            <div className="flex">
              <div className="w-48 p-4 bg-gray-50 flex items-center">
                <span className="text-red-500 mr-1">*</span>
                <span className="text-sm">특정 조건 자동 발급 설정</span>
              </div>
              <div className="flex-1 p-4 flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="issuranceType"
                    value="NEWUSER"
                    onChange={onChangeHandler}
                    checked={issuranceSetting.issuranceType === "NEWUSER"}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">회원가입 완료시</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="issuranceType"
                    value="BIRTHDAY"
                    onChange={onChangeHandler}
                    checked={issuranceSetting.issuranceType === "BIRTHDAY"}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">생일</span>
                </label>
              </div>
            </div>
          )}

          {/* 쿠폰 코드 입력  설정 - 조건부 표시 */}
          {issuranceSetting.issuranceType === "CODE" && (
            <div className="flex">
              <div className="w-48 p-4 bg-gray-50 flex items-center">
                <span className="text-red-500 mr-1">*</span>
                <span className="text-sm">쿠폰 코드 입력</span>
              </div>

              <div className="flex-1 p-4 flex items-center gap-6">
                <input
                  type="text"
                  name="couponCode"
                  value={issuranceSetting.couponCode}
                  onChange={onChangeHandler}
                  className="w-100 px-3 py-2 border rounded bg-gray-100"
                />
                {/* <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="downloadExposure"
                    value="show"
                    defaultChecked
                    className="w-4 h-4"
                  />
                  <span className="text-sm">상품 상세에 쿠폰 노출</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="downloadExposure"
                    value="hide"
                    className="w-4 h-4"
                  />
                  <span className="text-sm">상품 상세에 쿠폰 미노출</span>
                </label> */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
