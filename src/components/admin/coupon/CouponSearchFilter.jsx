import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Calendar,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateCouponSearchFilter } from "../../../redux/slices/features/admin/coupon/couponSearchSlice";

// discountType : {FIXED,PERCENTAGE}
// issuranceType : {MANUAL,NEWUSER,BIRTHDAY,CODE}
// availability : {USABLE, UNUSABLE, USABLE_BUT_UNISSUABLE}
const initFilters = {
  searchType: "name",
  searchKeyword: "",
  createdFrom: "",
  createdTo: "",
  discountType: ["PERCENTAGE"],
  issuranceType: ["MANUAL"],
  availability: ["USABLE"],
};

export default function CouponSearchFilter() {
  const dispatch = useDispatch();
  const filterForm = useSelector((state) => state.couponSearchSlice);
  const [filters, setFilters] = useState({ ...initFilters });

  useEffect(() => {
    dispatch(updateCouponSearchFilter(filters));
  }, [filters, dispatch]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => {
      const data = { ...prev, [name]: value };
      console.log(data);
      return data;
    });
  };

  const onResetHandler = () => {
    setFilters({ ...initFilters });
  };

  const onCheckChangeHandler = (e) => {
    const { name, value, checked } = e.target;

    if (checked) {
      setFilters((prev) => {
        const data = { ...prev, [name]: [...prev[name], value] };
        console.log(data);
        return data;
      });
    } else {
      setFilters((prev) => {
        const newCheckArr = prev[name].filter((i) => i !== value);
        const data = { ...prev, [name]: newCheckArr };
        console.log(data);
        return data;
      });
    }
  };

  const onDatePeriodHandler = (period) => {
    const toDate = new Date();
    let fromDate = new Date(toDate);
    fromDate.setHours(0, 0, 0, 0);

    switch (period) {
      case "1주":
        fromDate.setDate(toDate.getDate() - 6);
        break;
      case "1개월":
        fromDate.setMonth(toDate.getMonth() - 1);
        if (fromDate.getDate() !== toDate.getDate()) {
          fromDate.setDate(0);
        }
        break;
      case "3개월":
        fromDate.setMonth(toDate.getMonth() - 3);
        if (fromDate.getDate() !== toDate.getDate()) {
          fromDate.setDate(0);
        }
        break;
      case "6개월":
        fromDate.setMonth(toDate.getMonth() - 6);
        if (fromDate.getDate() !== toDate.getDate()) {
          fromDate.setDate(0);
        }
        break;
      default:
        return;
    }

    const today = toDate.toLocaleDateString("sv-SE");
    const fromday = fromDate.toLocaleDateString("sv-SE");

    setFilters((prev) => {
      const data = { ...prev, createdFrom: fromday, createdTo: today };
      console.log(data);
      return data;
    });
  };

  const searchHandler = () => {
    console.log(filterForm);
  };

  return (
    <div className="border-b">
      <div className="p-4">
        {/* 검색 */}
        <div className="flex items-center mb-3">
          <div className="w-32 text-sm">검색</div>
          <div className="flex-1 flex items-center gap-2">
            <select
              name="searchType"
              value={filters.searchType}
              onChange={onChangeHandler}
              className="px-3 py-2 border rounded w-48"
            >
              <option value="name">쿠폰 이름</option>
            </select>
            <input
              type="text"
              name="searchKeyword"
              value={filters.searchKeyword}
              onChange={onChangeHandler}
              className="flex-1 px-3 py-2 border rounded"
            />
          </div>
        </div>

        {/* 등록 기간 */}
        <div className="flex items-center mb-3">
          <div className="w-32 text-sm">등록 기간</div>
          <div className="flex-1 flex items-center gap-2">
            <div className="relative">
              <input
                type="date"
                name="createdFrom"
                value={filters.createdFrom}
                onChange={onChangeHandler}
                className="w-40 px-3 py-2 border rounded pr-8"
              />
              <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            <span>~</span>
            <div className="relative">
              <input
                type="date"
                name="createdTo"
                value={filters.createdTo}
                onChange={onChangeHandler}
                className="w-40 px-3 py-2 border rounded pr-8"
              />
              <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="flex gap-1 ml-2">
              <button
                onClick={() => onDatePeriodHandler("1주")}
                className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
              >
                1주
              </button>
              <button
                onClick={() => onDatePeriodHandler("1개월")}
                className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
              >
                1개월
              </button>
              <button
                onClick={() => onDatePeriodHandler("3개월")}
                className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
              >
                3개월
              </button>
              <button
                onClick={() => onDatePeriodHandler("6개월")}
                className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
              >
                6개월
              </button>
            </div>
          </div>
        </div>

        {/* 할인 타입  */}
        <div className="flex items-center mb-3">
          <div className="w-32 text-sm">할인 타입</div>
          <div className="flex-1 flex items-center gap-8">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  name="discountType"
                  value="PERCENTAGE"
                  checked={filters.discountType.includes("PERCENTAGE")}
                  onChange={onCheckChangeHandler}
                />
                <span className="text-sm">정률할인(%)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  name="discountType"
                  value="FIXED"
                  checked={filters.discountType.includes("FIXED")}
                  onChange={onCheckChangeHandler}
                />
                <span className="text-sm">정액할인(원)</span>
              </label>
            </div>
          </div>
        </div>

        {/* 발급방식 */}
        <div className="flex items-center mb-3">
          <span className="w-32 text-sm">발급 방식</span>
          <div className="flex-1 flex items-center gap-8">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  name="issuranceType"
                  value="MANUAL"
                  checked={filters.issuranceType.includes("MANUAL")}
                  onChange={onCheckChangeHandler}
                />
                <span className="text-sm">관리자 수동 발급</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  name="issuranceType"
                  value="AUTO"
                  checked={filters.issuranceType.includes("AUTO")}
                  onChange={onCheckChangeHandler}
                />
                <span className="text-sm">특정 조건 자동 발급</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  name="issuranceType"
                  value="CODE"
                  checked={filters.issuranceType.includes("CODE")}
                  onChange={onCheckChangeHandler}
                />
                <span className="text-sm">쿠폰 입력</span>
              </label>
            </div>
          </div>
        </div>

        {/* 쿠폰 사용여부 */}
        <div className="flex items-center mb-4">
          <span className="w-32 text-sm">쿠폰 사용여부</span>
          <div className="flex-1 flex items-center gap-8">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  name="availability"
                  value="USABLE"
                  checked={filters.availability.includes("USABLE")}
                  onChange={onCheckChangeHandler}
                />
                <span className="text-sm">사용</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  name="availability"
                  value="USABLE_BUT_UNISSUABLE"
                  checked={filters.availability.includes(
                    "USABLE_BUT_UNISSUABLE"
                  )}
                  onChange={onCheckChangeHandler}
                />
                <span className="text-sm">사용(발급불가)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  name="availability"
                  value="UNUSABLE"
                  checked={filters.availability.includes("UNUSABLE")}
                  onChange={onCheckChangeHandler}
                />
                <span className="text-sm">사용불가</span>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-2">
          <button
            onClick={searchHandler}
            className="px-8 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            검색
          </button>
          <button
            onClick={onResetHandler}
            className="px-8 py-2 border rounded hover:bg-gray-50"
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}
