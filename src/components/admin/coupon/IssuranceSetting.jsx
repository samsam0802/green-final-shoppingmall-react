import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateCouponRegisterForm } from "../../../redux/slices/features/admin/coupon/couponRegisterSlice";

export default function IssuranceSetting() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  //issuranceType : {MANUAL,AUTO,CODE}
  //autoIssueTrigger: {NEWUSER, BIRTHDAY}
  const [issuranceSetting, setIssuranceSetting] = useState({
    issuranceType: "MANUAL",
    autoIssueTrigger: "NEWUSER",
    couponCode: "",
  });

  useEffect(() => {
    dispatch(
      updateCouponRegisterForm({
        section: "issueSetting",
        data: issuranceSetting,
      })
    );
  }, [issuranceSetting, dispatch]);

  const onIssuranceTypeChangeHandler = (e) => {
    const { name, value } = e.target;

    setIssuranceSetting((prev) => {
      let data;
      if (value === "MANUAL") {
        data = { ...prev, autoIssueTrigger: "", couponCode: "", [name]: value };
      } else if (value === "AUTO") {
        data = {
          ...prev,
          autoIssueTrigger: "NEWUSER",
          couponCode: "",
          [name]: value,
        };
      } else if (value === "CODE") {
        data = { ...prev, autoIssueTrigger: "", [name]: value };
      }

      console.log(data);
      return data;
    });
  };

  const onIssueTriggerChangeHandler = (e) => {
    const { name, value } = e.target;

    setIssuranceSetting((prev) => {
      const data = { ...prev, [name]: value };
      console.log(data);
      return data;
    });
  };

  const onCouponCodeChangeHandler = (e) => {
    const { name, value } = e.target;

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
                  onChange={onIssuranceTypeChangeHandler}
                  className="w-4 h-4"
                />
                <span className="text-sm">관리자 수동 발급</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="issuranceType"
                  value="AUTO"
                  checked={issuranceSetting.issuranceType === "AUTO"}
                  onChange={onIssuranceTypeChangeHandler}
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
                  onChange={onIssuranceTypeChangeHandler}
                  className="w-4 h-4"
                />
                <span className="text-sm">쿠폰 코드 입력</span>
              </label>
            </div>
          </div>

          {/* 특정 조건 자동 발급 설정 - 조건부 표시 */}
          {issuranceSetting.issuranceType === "AUTO" && (
            <div className="flex">
              <div className="w-48 p-4 bg-gray-50 flex items-center">
                <span className="text-red-500 mr-1">*</span>
                <span className="text-sm">특정 조건 자동 발급 설정</span>
              </div>
              <div className="flex-1 p-4 flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="autoIssueTrigger"
                    value="NEWUSER"
                    onChange={onIssueTriggerChangeHandler}
                    checked={issuranceSetting.autoIssueTrigger === "NEWUSER"}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">회원가입 완료시</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="autoIssueTrigger"
                    value="BIRTHDAY"
                    onChange={onIssueTriggerChangeHandler}
                    checked={issuranceSetting.autoIssueTrigger === "BIRTHDAY"}
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
                  onChange={onCouponCodeChangeHandler}
                  className="w-100 px-3 py-2 border rounded bg-gray-100"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
