import React, { useState } from "react";
import ProductList from "./ProductList";

const temp_categories = {
  스킨케어: {
    "스킨/토너": { "3차카테1": {}, "3차카테2": {} },
    에센스: {},
    크림: {},
  },
  메이크업: { 립: {}, 베이스: {}, 아이: {} },
};

const initialCondition = {
  searchType: "productName",
  searchKeyword: "",
  category1: "",
  category2: "",
  category3: "",
  category4: "",
  dateType: "registerDate",
  fromDate: "",
  toDate: "",
  saleStatus: ["정상", "품절", "재고 확보 중", "판매 중지"],
  exposureStatus: "전체",
};

const ProductSearchFilter = () => {
  const [categories1, setCategories1] = useState([
    "1차 카테고리",
    ...Object.keys(temp_categories),
  ]);
  const [categories2, setCategories2] = useState(["2차 카테고리"]);
  const [categories3, setCategories3] = useState(["3차 카테고리"]);
  const [categories4, setCategories4] = useState(["4차 카테고리"]);
  const [searchConditions, setSearchConditions] = useState(initialCondition);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchConditions((prev) => ({ ...prev, [name]: value }));
  };

  const selectCategoryHandler = (e) => {
    const { name, value } = e.target;
    const newConditions = { ...searchConditions, [name]: value };
    setSearchConditions(newConditions);

    if (name === "category1") {
      const next = temp_categories[value]
        ? Object.keys(temp_categories[value])
        : [];
      setCategories2(["2차 카테고리", ...next]);
      setCategories3(["3차 카테고리"]);
      setCategories4(["4차 카테고리"]);
    }
  };

  const onCheckBoxChangeHandler = (e) => {
    const { name, value, checked } = e.target;
    setSearchConditions((prev) => {
      if (value === "전체") {
        return {
          ...prev,
          [name]: checked ? ["정상", "품절", "재고 확보 중", "판매 중지"] : [],
        };
      } else {
        return {
          ...prev,
          [name]: checked
            ? [...prev.saleStatus, value]
            : prev.saleStatus.filter((s) => s !== value),
        };
      }
    });
  };

  const onRadioChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchConditions((prev) => ({ ...prev, [name]: value }));
  };

  const getDateRange = (period) => {
    const today = new Date();
    const toDate = today.toLocaleDateString("sv-SE");
    let fromDate = new Date(today);

    switch (period) {
      case "오늘":
        break;
      case "3일간":
        fromDate.setDate(today.getDate() - 2);
        break;
      case "1주일":
        fromDate.setDate(today.getDate() - 6);
        break;
      case "1개월":
        fromDate.setMonth(today.getMonth() - 1);
        break;
      case "3개월":
        fromDate.setMonth(today.getMonth() - 3);
        break;
      default:
        return { fromDate: "", toDate: "" };
    }

    return { fromDate: fromDate.toISOString().split("T")[0], toDate };
  };

  const onDatePeriodHandler = (period) => {
    const { fromDate, toDate } = getDateRange(period);
    setSearchConditions((prev) => ({ ...prev, fromDate, toDate }));
  };

  const initializeCondition = () => {
    setSearchConditions(initialCondition);
    setCategories2(["2차 카테고리"]);
    setCategories3(["3차 카테고리"]);
    setCategories4(["4차 카테고리"]);
  };

  return (
    <div className="w-full bg-white p-6 text-sm font-['Inter'] min-h-screen">
      {/* 헤더 */}
      <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-4 mb-6 flex justify-between items-center px-2">
        상품 조회
        <div className="space-x-2 text-sm">
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-gray-700 cursor-pointer hover:bg-gray-100 transition shadow-sm">
            엑셀 다운로드
          </button>
        </div>
      </h2>

      {/* 필터 전체 영역 */}
      <div className="border border-gray-300 mb-6 rounded-lg overflow-hidden shadow-lg">
        {/* 검색어 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            검색어
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <select
              name="searchType"
              value={searchConditions.searchType}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 bg-white cursor-pointer rounded-md"
            >
              <option value="productName">상품명</option>
              <option value="keywords">검색어</option>
              <option value="brandName">브랜드</option>
            </select>
            <input
              type="text"
              name="searchKeyword"
              value={searchConditions.searchKeyword}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 w-80 rounded-md"
              placeholder="검색어를 입력하세요"
            />
          </div>
        </div>

        {/* 카테고리 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            카테고리
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            {[categories1, categories2, categories3, categories4].map(
              (cats, i) => (
                <select
                  key={i}
                  name={`category${i + 1}`}
                  value={searchConditions[`category${i + 1}`]}
                  onChange={selectCategoryHandler}
                  className="border border-gray-300 p-1 bg-white cursor-pointer rounded-md"
                >
                  {cats.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              )
            )}
          </div>
        </div>

        {/* 날짜 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            날짜
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            <select
              name="dateType"
              value={searchConditions.dateType}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 bg-white cursor-pointer rounded-md"
            >
              <option value="registerDate">등록일</option>
              <option value="updateDate">수정일</option>
            </select>
            <input
              type="date"
              name="fromDate"
              value={searchConditions.fromDate}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 bg-white cursor-pointer rounded-md h-[32px]"
            />
            <span className="text-gray-500">~</span>
            <input
              type="date"
              name="toDate"
              value={searchConditions.toDate}
              onChange={onChangeHandler}
              className="border border-gray-300 p-1 bg-white cursor-pointer rounded-md h-[32px]"
            />
            <div className="flex gap-1 ml-3">
              {["오늘", "3일간", "1주일", "1개월", "3개월"].map((period) => (
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

        {/* 판매 상태 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            판매 상태
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            {["전체", "정상", "품절", "재고 확보 중", "판매 중지"].map(
              (status) => (
                <label
                  key={status}
                  className="flex items-center mr-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="saleStatus"
                    value={status}
                    onChange={onCheckBoxChangeHandler}
                    checked={
                      status === "전체"
                        ? searchConditions.saleStatus.length === 4
                        : searchConditions.saleStatus.includes(status)
                    }
                    className="mr-1 accent-blue-600 cursor-pointer"
                  />
                  {status}
                </label>
              )
            )}
          </div>
        </div>

        {/* 노출 여부 */}
        <div className="flex items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
            노출 여부
          </div>
          <div className="flex items-center flex-grow p-2 gap-2">
            {["전체", "노출", "미노출", "노출 예약"].map((exp) => (
              <label
                key={exp}
                className="flex items-center mr-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="exposureStatus"
                  value={exp}
                  checked={searchConditions.exposureStatus === exp}
                  onChange={onRadioChangeHandler}
                  className="mr-1 accent-blue-600 cursor-pointer"
                />
                {exp}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 검색 버튼 */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-blue-600 text-white px-8 py-2 cursor-pointer rounded-md shadow-md hover:bg-blue-700 transition font-semibold">
          검색
        </button>
        <button
          onClick={initializeCondition}
          className="border border-gray-300 bg-white px-8 py-2 text-gray-700 cursor-pointer rounded-md shadow-md hover:bg-gray-100 transition font-semibold"
        >
          초기화
        </button>
      </div>

      <ProductList />
    </div>
  );
};

export default ProductSearchFilter;
