import React, { useState } from "react";

const InputRow = ({ label, children }) => (
  <div className="flex border-b border-gray-200">
    <div className="w-1/6 p-3 bg-gray-50 flex items-center text-sm font-semibold text-gray-700 border-r border-gray-200">
      {label}
    </div>
    <div className="w-5/6 p-3 flex items-center space-x-2">{children}</div>
  </div>
);

const temp_categories = {
  스킨케어: {
    "스킨/토너": {
      "3차카테1": { "4차카테1": {}, "4차카테2": {} },
      "3차카테2": {},
    },
    "에센스/세럼": {},
    크림: {},
    로션: {},
    스킨케어세트: {},
  },
  메이크업: { 립: {}, 베이스메이크업: {}, 아이메이크업: {} },
  헤어케어: { "샴푸/린스": {}, "트리트먼트/팩": {}, "두피앰플/토닉": {} },
  바디케어: { 바디워시: {}, 바디로션: {}, 핸드크림: {} },
  "향수/디퓨저": { 향수: {}, "미니/고체향수": {}, 홈프래그런스: {} },
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

  const [searchConditions, setSearchConditions] = useState({
    ...initialCondition,
  });

  //로그

  //

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchConditions((prev) => {
      const temp = { ...prev, [name]: value };
      console.log("searchConditions", temp);
      return temp;
    });
  };

  const selectCategoryHandler = (e) => {
    const { name, value } = e.target;
    // 선택된 카테고리 searchConditions 에 저장
    const newSearchConditions = { ...searchConditions, [name]: value };
    console.log("newSearchConditions : ", newSearchConditions);
    setSearchConditions(newSearchConditions);

    if (name === "category1") {
      // 2차 카테고리 옵션 배열 만들기
      const nextCategories = temp_categories?.[value]
        ? Object.keys(temp_categories[value])
        : [];
      console.log("nextCategories", nextCategories);
      setCategories2(["2차 카테고리", ...nextCategories]);
      setCategories3(["3차 카테고리"]);
      setCategories4(["4차 카테고리"]);
    } else if (name === "category2") {
      // 3차 카테고리 옵션 배열 만들기
      const nextCategories = temp_categories?.[newSearchConditions.category1]?.[
        value
      ]
        ? Object.keys(temp_categories?.[newSearchConditions.category1]?.[value])
        : [];
      console.log("nextCategories", nextCategories);

      setCategories3(["3차 카테고리", ...nextCategories]);
      setCategories4(["4차 카테고리"]);
    } else if (name === "category3") {
      // 4차 카테고리 옵션 배열 만들기
      const nextCategories = temp_categories?.[newSearchConditions.category1]?.[
        newSearchConditions.category2
      ]?.[value]
        ? Object.keys(
            temp_categories?.[newSearchConditions.category1]?.[
              newSearchConditions.category2
            ]?.[value]
          )
        : [];
      console.log("nextCategories", nextCategories);

      setCategories4(["4차 카테고리", ...nextCategories]);
    }
  };

  // 체크박스_체인지_핸들러 : 판매상태만 사용하는 중
  const onCheckBoxChangeHandler = (e) => {
    const { name, value, checked } = e.target;

    setSearchConditions((prev) => {
      if (value === "전체") {
        return {
          ...prev,
          [name]: checked ? ["정상", "품절", "재고 확보 중", "판매 중지"] : [],
        };
      } else {
        if (checked) {
          const newStatus = [...prev.saleStatus, value];
          return { ...prev, [name]: newStatus };
        } else {
          const newStatus = prev.saleStatus.filter(
            (status) => status !== value
          );
          return { ...prev, [name]: newStatus };
        }
      }
    });
  };

  // 라디오버튼_체인지_핸들러 : 노출여부 체크가 사용중
  const onRadioChangeHandler = (e) => {
    const { name, value } = e.target;

    setSearchConditions((prev) => {
      const temp = { ...prev, [name]: value };
      console.log(temp);
      return temp;
    });
  };

  // 날짜_계산_함수
  const getDateRange = (period) => {
    const today = new Date();
    const toDate = today.toLocaleDateString("sv-SE");

    let fromDate = new Date(today);

    switch (period) {
      case "오늘":
        fromDate = today;
        break;
      case "3일간":
        fromDate.setDate(today.getDate() - 2); //오늘 포함 3일
        break;
      case "1주일":
        fromDate.setDate(today.getDate() - 6);
        break;
      case "1개월":
        fromDate.setMonth(today.getMonth() - 1);
        if (fromDate.getDate() !== today.getDate()) {
          fromDate.setDate(0); //이전 달의 마지막 날
        }

        break;
      case "3개월":
        fromDate.setMonth(today.getMonth() - 3);
        if (fromDate.getDate() !== today.getDate()) {
          fromDate.setDate(0); //이전 달의 마지막 날
        }
        break;
      default:
        return { fromDate: "", toDate: "" };
    }

    const fromDateStr = fromDate.toISOString().split("T")[0];
    return { fromDate: fromDateStr, toDate: toDate };
  };

  // 날짜 기간 버튼 누를시 동작 핸들러
  const onDatePeriodHandler = (period) => {
    const { fromDate, toDate } = getDateRange(period);

    setSearchConditions((prev) => {
      const temp = { ...prev, fromDate: fromDate, toDate: toDate };
      console.log(temp);
      return temp;
    });
  };

  // 검색조건을 초기화
  const initializeCondition = () => {
    setSearchConditions({ ...initialCondition });
    setCategories1(["1차 카테고리", ...Object.keys(temp_categories)]);
    setCategories2(["2차 카테고리"]);
    setCategories3(["3차 카테고리"]);
    setCategories4(["4차 카테고리"]);
  };

  return (
    <div className="border border-gray-300 bg-white mb-6 shadow-md rounded-lg">
      {/* 검색어 */}
      <InputRow label="검색어">
        <select
          name="searchType"
          value={searchConditions.searchType}
          onChange={onChangeHandler}
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="productName">상품명</option>
          <option value="keywords">검색어</option>
          <option value="brandName">브랜드</option>
        </select>
        <input
          type="text"
          name="searchKeyword"
          value={searchConditions.searchKeyword}
          className="flex-1 border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
          placeholder="검색어를 입력하세요"
          onChange={onChangeHandler}
        />
      </InputRow>

      {/* 카테고리 */}
      <InputRow label="카테고리">
        {/* 1차 카테 */}
        <select
          name="category1"
          value={searchConditions.category1}
          onChange={selectCategoryHandler}
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        >
          {categories1.map((category1) => (
            <option key={category1} value={category1}>
              {category1}
            </option>
          ))}
        </select>
        {/* 2차 카테 */}
        <select
          name="category2"
          value={searchConditions.category2}
          onChange={selectCategoryHandler}
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        >
          {categories2.map((category2) => (
            <option key={category2} value={category2}>
              {category2}
            </option>
          ))}
        </select>
        {/* 3차 카테 */}
        <select
          name="category3"
          value={searchConditions.category3}
          onChange={selectCategoryHandler}
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        >
          {categories3.map((category3) => (
            <option key={category3} value={category3}>
              {category3}
            </option>
          ))}
        </select>
        {/* 4차 카테 */}
        <select
          name="category4"
          value={searchConditions.category4}
          onChange={selectCategoryHandler}
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        >
          {categories4.map((category4) => (
            <option key={category4} value={category4}>
              {category4}
            </option>
          ))}
        </select>
      </InputRow>

      {/* 날짜 */}
      <InputRow label="날짜">
        <select
          name="dateType"
          value={searchConditions.dateType}
          onChange={onChangeHandler}
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="registerDate">등록일</option>
          <option value="updateDate">수정일</option>
        </select>
        <input
          type="date"
          name="fromDate"
          value={searchConditions.fromDate}
          onChange={onChangeHandler}
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="mx-1">-</span>
        <input
          type="date"
          name="toDate"
          value={searchConditions.toDate}
          onChange={onChangeHandler}
          className="border border-gray-300 p-1.5 text-sm rounded focus:ring-blue-500 focus:border-blue-500"
        />
        {/* 날짜 버튼 */}
        {["오늘", "3일간", "1주일", "1개월", "3개월"].map((period) => (
          <button
            type="button"
            key={period}
            onClick={() => onDatePeriodHandler(period)}
            className="px-3 py-1 text-xs border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-100"
          >
            {period}
          </button>
        ))}
        <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
          전체
        </button>
      </InputRow>

      {/* 판매 상태 */}
      <InputRow label="판매 상태">
        {["전체", "정상", "품절", "재고 확보 중", "판매 중지"].map((status) => (
          <label key={status} className="flex items-center text-sm mr-4">
            <input
              type="checkbox"
              name="saleStatus"
              value={status}
              onChange={onCheckBoxChangeHandler}
              className="mr-1 rounded text-blue-600 focus:ring-blue-500"
              checked={
                status === "전체"
                  ? searchConditions.saleStatus.length === 4
                  : searchConditions.saleStatus.includes(status)
              }
            />
            {status}
          </label>
        ))}
      </InputRow>

      {/* 노출 여부 */}
      <InputRow label="노출 여부">
        {["전체", "노출", "미노출", "노출 예약"].map((exposure) => (
          <label key={exposure} className="flex items-center text-sm mr-4">
            <input
              type="radio"
              name="exposureStatus"
              value={exposure}
              onChange={onRadioChangeHandler}
              className="mr-1 text-blue-600 focus:ring-blue-500"
              checked={searchConditions.exposureStatus === exposure}
            />
            {exposure}
          </label>
        ))}
      </InputRow>

      {/* 검색/초기화 버튼 영역 */}
      <div className="p-4 flex justify-between items-center bg-gray-100 border-t border-gray-200">
        <div className="space-x-2">
          <button className="px-8 py-2 text-base bg-blue-500 text-white rounded hover:bg-blue-600">
            검색
          </button>
          <button
            onClick={initializeCondition}
            className="px-8 py-2 text-base border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-100"
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchFilter;
