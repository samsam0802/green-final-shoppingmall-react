import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function CouponManagement() {
  const [sections, setSections] = useState({
    basic: true,
    discount: true,
    issue: true,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-6xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">쿠폰 관리</h1>
          <button className="w-5 h-5 flex items-center justify-center border rounded text-xs">
            X
          </button>
        </div>
        <button className="px-6 py-2 bg-gray-800 text-white text-sm">
          저장
        </button>
      </div>

      <div className="p-6">
        {/* 기본 정보 Section */}
        <div className="border rounded-lg mb-4">
          <div
            className="flex items-center justify-between p-4 bg-gray-50 border-b cursor-pointer"
            onClick={() => toggleSection("basic")}
          >
            <h2 className="font-semibold">기본 정보</h2>
            {sections.basic ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>

          {sections.basic && (
            <div className="divide-y">
              {/* 쿠폰 이름 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">쿠폰 이름</span>
                </div>
                <div className="flex-1 p-4">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    placeholder="고객에게 노출되는 명칭입니다."
                  />
                </div>
              </div>

              {/* 쿠폰 설명 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">쿠폰 설명</span>
                </div>
                <div className="flex-1 p-4">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    placeholder="관리자에게만 노출되는 명칭입니다."
                  />
                </div>
              </div>

              {/* 쿠폰 종류 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">쿠폰 종류</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="couponType"
                      value="discount"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">상품쿠폰</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="couponType"
                      value="cart"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">장바구니 쿠폰</span>
                  </label>
                </div>
              </div>

              {/* 쿠폰 사용여부 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">쿠폰 사용여부</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="useStatus"
                      value="use"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">사용</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="useStatus"
                      value="preparing"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">사용(발급준비)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="useStatus"
                      value="stop"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">사용중지</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 혜택 설정 Section */}
        <div className="border rounded-lg mb-4">
          <div
            className="flex items-center justify-between p-4 bg-gray-50 border-b cursor-pointer"
            onClick={() => toggleSection("discount")}
          >
            <h2 className="font-semibold">혜택 설정</h2>
            {sections.discount ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>

          {sections.discount && (
            <div className="divide-y">
              {/* 할인 타입 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">할인 타입</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="discountType"
                      value="percent"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">정률할인(%)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="discountType"
                      value="amount"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">정액할인(원)</span>
                  </label>
                </div>
              </div>

              {/* 할인 설정 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">할인 설정</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-4">
                  <select className="px-3 py-2 border rounded">
                    <option>날짜단</option>
                  </select>
                  <select className="px-3 py-2 border rounded">
                    <option>비율단</option>
                  </select>
                </div>
              </div>

              {/* 최소 상품금액 설정 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">최소 상품금액 설정</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="minAmount"
                      value="none"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">제한 없음</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="minAmount"
                      value="limit"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">제한 있음</span>
                  </label>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-sm">최소 상품금액</span>
                    <input
                      type="text"
                      className="w-32 px-3 py-2 border rounded bg-gray-100"
                      disabled
                    />
                    <span className="text-sm">원 이상 상품에만 적용 가능</span>
                  </div>
                </div>
              </div>

              {/* 최대 할인금액 설정 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">최대 할인금액 설정</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="maxDiscount"
                      value="none"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">제한 없음</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="maxDiscount"
                      value="limit"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">제한 있음</span>
                  </label>
                  <div className="ml-auto flex items-center gap-2">
                    <input
                      type="text"
                      className="w-32 px-3 py-2 border rounded bg-gray-100"
                      disabled
                    />
                    <span className="text-sm">원까지 할인 가능</span>
                  </div>
                </div>
              </div>

              {/* 할인 적용가능금액 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">할인 적용가능금액</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="applicableAmount"
                      value="all"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">전체</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="applicableAmount"
                      value="brand"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">브랜드</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="applicableAmount"
                      value="category"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">카테고리</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="applicableAmount"
                      value="product"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">상품</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="applicableAmount"
                      value="package"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">상품</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 발급 설정 Section */}
        <div className="border rounded-lg mb-4">
          <div
            className="flex items-center justify-between p-4 bg-gray-50 border-b cursor-pointer"
            onClick={() => toggleSection("issue")}
          >
            <h2 className="font-semibold">발급 설정</h2>
            {sections.issue ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>

          {sections.issue && (
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
                      name="issueType"
                      value="download"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">관리자 수동 발급</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="issueType"
                      value="auto"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">특정 조건 자동 발급</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="issueType"
                      value="code"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">고객 다운로드</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="issueType"
                      value="promotion"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">프로모션 생성발급</span>
                  </label>
                </div>
              </div>

              {/* 발급 대상 */}
              <div className="flex">
                <div className="w-48 p-4 bg-gray-50 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  <span className="text-sm">발급 대상</span>
                </div>
                <div className="flex-1 p-4 flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="issueTarget"
                      value="all"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <span className="text-sm">전체 회원</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="issueTarget"
                      value="group"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">회원 그룹</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 기간 설정 Section */}
        <div className="border rounded-lg">
          <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
            <h2 className="font-semibold">기간 설정</h2>
            <ChevronUp size={20} />
          </div>

          <div className="divide-y">
            {/* 사용 기간 */}
            <div className="flex">
              <div className="w-48 p-4 bg-gray-50 flex items-center">
                <span className="text-red-500 mr-1">*</span>
                <span className="text-sm">사용 기간</span>
              </div>
              <div className="flex-1 p-4 flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="usePeriod"
                    value="unlimited"
                    defaultChecked
                    className="w-4 h-4"
                  />
                  <span className="text-sm">사용기간 제한</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="usePeriod"
                    value="limited"
                    className="w-4 h-4"
                  />
                  <span className="text-sm">발행일 기준</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="usePeriod"
                    value="issue"
                    className="w-4 h-4"
                  />
                  <span className="text-sm">발급일 기준</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="usePeriod"
                    value="download"
                    className="w-4 h-4"
                  />
                  <span className="text-sm">제한 없음(부기준)</span>
                </label>
              </div>
            </div>

            {/* 사용 기간 설정 */}
            <div className="flex">
              <div className="w-48 p-4 bg-gray-50 flex items-center">
                <span className="text-red-500 mr-1">*</span>
                <span className="text-sm">사용 기간 설정</span>
              </div>
              <div className="flex-1 p-4 flex items-center gap-2">
                <input type="text" className="w-40 px-3 py-2 border rounded" />
                <span>~</span>
                <input type="text" className="w-40 px-3 py-2 border rounded" />
                <div className="flex gap-1 ml-2">
                  <button className="px-3 py-1 border rounded text-sm">
                    1일
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    1주
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    15일
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    1개월
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    3개월
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    6개월
                  </button>
                </div>
              </div>
            </div>

            {/* 발급 기간 */}
            <div className="flex">
              <div className="w-48 p-4 bg-gray-50 flex items-center">
                <span className="text-red-500 mr-1">*</span>
                <span className="text-sm">발급 기간</span>
              </div>
              <div className="flex-1 p-4 flex items-center gap-2">
                <input type="text" className="w-40 px-3 py-2 border rounded" />
                <span>~</span>
                <input type="text" className="w-40 px-3 py-2 border rounded" />
                <div className="flex gap-1 ml-2">
                  <button className="px-3 py-1 border rounded text-sm">
                    1일
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    1주
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    15일
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    1개월
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    3개월
                  </button>
                  <button className="px-3 py-1 border rounded text-sm">
                    6개월
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
