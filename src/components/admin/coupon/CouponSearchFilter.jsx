import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const initFilters = {
  searchType: "name",
  searchKeyword: "",
  createdFrom: "",
  createdTo: "",
  discountType: ["PERCENTAGE", "FIXED"],
  issuanceType: ["MANUAL", "AUTO", "CODE"],
  availability: ["USABLE", "USABLE_BUT_UNISSUABLE", "UNUSABLE"],
};

export default function CouponSearchFilter({ onSearch }) {
  const [filters, setFilters] = useState({ ...initFilters });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const onResetHandler = () => {
    setFilters({ ...initFilters });
  };

  const onCheckChangeHandler = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prev) => {
      let newArray;
      if (value === "전체") {
        if (name === "discountType") {
          newArray = checked ? ["PERCENTAGE", "FIXED"] : [];
        } else if (name === "issuanceType") {
          newArray = checked ? ["MANUAL", "AUTO", "CODE"] : [];
        } else if (name === "availability") {
          newArray = checked
            ? ["USABLE", "USABLE_BUT_UNISSUABLE", "UNUSABLE"]
            : [];
        }
      } else {
        if (checked) {
          newArray = [...prev[name], value];
        } else {
          newArray = prev[name].filter((i) => i !== value);
        }
      }
      return { ...prev, [name]: newArray };
    });
  };

  const onDatePeriodHandler = (period) => {
    const toDate = new Date();
    let fromDate = new Date(toDate);
    switch (period) {
      case "1주":
        fromDate.setDate(toDate.getDate() - 6);
        break;
      case "1개월":
        fromDate.setMonth(toDate.getMonth() - 1);
        if (fromDate.getDate() !== toDate.getDate()) fromDate.setDate(0);
        break;
      case "3개월":
        fromDate.setMonth(toDate.getMonth() - 3);
        if (fromDate.getDate() !== toDate.getDate()) fromDate.setDate(0);
        break;
      case "6개월":
        fromDate.setMonth(toDate.getMonth() - 6);
        if (fromDate.getDate() !== toDate.getDate()) fromDate.setDate(0);
        break;
      default:
        return;
    }
    const today = toDate.toLocaleDateString("sv-SE");
    const fromday = fromDate.toLocaleDateString("sv-SE");
    setFilters((prev) => ({ ...prev, createdFrom: fromday, createdTo: today }));
  };

  const searchHandler = () => {
    console.log("검색 조건:", filters);
    if (onSearch) onSearch(filters);
  };

  const isAllDiscountChecked = filters.discountType.length === 2;
  const isAllIssuranceChecked = filters.issuanceType.length === 3;
  const isAllAvailabilityChecked = filters.availability.length === 3;

  return (
    <div className="w-full bg-white p-6 text-sm">
      <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-4 mb-6 flex justify-between items-center px-2">
        쿠폰 조회
        <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition shadow-sm">
          엑셀 다운로드
        </button>
      </h2>

      <div className="border border-gray-300 mb-6 rounded-lg overflow-hidden shadow-lg">
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            검색어
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <select
              name="searchType"
              value={filters.searchType}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 bg-white cursor-pointer rounded-md"
            >
              <option value="name">쿠폰 이름</option>
              <option value="description">쿠폰 설명</option>
            </select>
            <input
              type="text"
              name="searchKeyword"
              value={filters.searchKeyword}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 w-80 rounded-md"
              placeholder="검색어를 입력하세요"
            />
          </div>
        </div>

        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            등록 기간
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <input
              type="date"
              name="createdFrom"
              value={filters.createdFrom}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 bg-white cursor-pointer rounded-md h-8"
            />
            <span className="text-gray-500">~</span>
            <input
              type="date"
              name="createdTo"
              value={filters.createdTo}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 bg-white cursor-pointer rounded-md h-8"
            />
            <div className="flex gap-1 ml-3">
              {["1주", "1개월", "3개월", "6개월"].map((period) => (
                <button
                  key={period}
                  onClick={() => onDatePeriodHandler(period)}
                  className="border border-gray-300 bg-white px-2 py-1 text-gray-700 text-xs cursor-pointer rounded-md hover:bg-blue-50 hover:border-blue-500 transition"
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            할인 타입
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="discountType"
                value="전체"
                onChange={onCheckChangeHandler}
                checked={isAllDiscountChecked}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              전체
            </label>
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="discountType"
                value="PERCENTAGE"
                checked={filters.discountType.includes("PERCENTAGE")}
                onChange={onCheckChangeHandler}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              정률할인(%)
            </label>
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="discountType"
                value="FIXED"
                checked={filters.discountType.includes("FIXED")}
                onChange={onCheckChangeHandler}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              정액할인(원)
            </label>
          </div>
        </div>

        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            발급 방식
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="issuanceType"
                value="전체"
                onChange={onCheckChangeHandler}
                checked={isAllIssuranceChecked}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              전체
            </label>
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="issuanceType"
                value="MANUAL"
                checked={filters.issuanceType.includes("MANUAL")}
                onChange={onCheckChangeHandler}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              관리자 수동 발급
            </label>
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="issuanceType"
                value="AUTO"
                checked={filters.issuanceType.includes("AUTO")}
                onChange={onCheckChangeHandler}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              특정 조건 자동 발급
            </label>
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="issuanceType"
                value="CODE"
                checked={filters.issuanceType.includes("CODE")}
                onChange={onCheckChangeHandler}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              쿠폰 코드 입력
            </label>
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            사용 가능 여부
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="availability"
                value="전체"
                onChange={onCheckChangeHandler}
                checked={isAllAvailabilityChecked}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              전체
            </label>
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="availability"
                value="USABLE"
                checked={filters.availability.includes("USABLE")}
                onChange={onCheckChangeHandler}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              사용
            </label>
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="availability"
                value="USABLE_BUT_UNISSUABLE"
                checked={filters.availability.includes("USABLE_BUT_UNISSUABLE")}
                onChange={onCheckChangeHandler}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              사용(발급불가)
            </label>
            <label className="flex items-center mr-3 cursor-pointer">
              <input
                type="checkbox"
                name="availability"
                value="UNUSABLE"
                checked={filters.availability.includes("UNUSABLE")}
                onChange={onCheckChangeHandler}
                className="mr-1 accent-blue-600 cursor-pointer"
              />
              사용불가
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={searchHandler}
          className="bg-blue-600 text-white px-8 py-2 cursor-pointer rounded-md shadow-md hover:bg-blue-700 transition font-semibold"
        >
          검색
        </button>
        <button
          onClick={onResetHandler}
          className="border border-gray-300 bg-white px-8 py-2 text-gray-700 cursor-pointer rounded-md shadow-md hover:bg-gray-100 transition font-semibold"
        >
          초기화
        </button>
      </div>
    </div>
  );
}
