import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateCouponRegisterForm } from "../../../redux/slices/features/admin/coupon/couponRegisterSlice";

export default function PeriodSetting() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  const [periodSetting, setPeriodSetting] = useState({
    isLimitUsagePeriod: true,
    validFrom: "",
    validTo: "",
    issuableFrom: "",
    issuableTo: "",
  });

  useEffect(() => {
    dispatch(
      updateCouponRegisterForm({
        section: "periodSetting",
        data: periodSetting,
      })
    );
  }, [periodSetting, dispatch]);

  const onRadioChangeHandler = (e) => {
    const { name, value } = e.target;
    const bool = value === "true" ? true : false;
    setPeriodSetting((prev) => {
      let form;
      if (!bool) {
        form = { ...prev, [name]: bool, validFrom: "", validTo: "" };
      } else {
        form = { ...prev, [name]: bool };
      }

      console.log(form);
      return form;
    });
  };

  const onPeriodChangeHandler = (e) => {
    const { name, value } = e.target;

    setPeriodSetting((prev) => {
      const form = { ...prev, [name]: value };
      console.log(form);
      return form;
    });
  };

  const getDateRange = (fromStr, toStr, period) => {
    const toDate = new Date();
    const today = toDate.toLocaleDateString("sv-SE");

    let fromDate = new Date(today);

    switch (period) {
      case "1주":
        fromDate.setDate(toDate.getDate() - 6);
        break;
      case "1개월":
        fromDate.setMonth(toDate.getMonth() - 1);
        if (toDate.getDate() !== fromDate.getDate()) {
          fromDate.setDate(0);
        }
        break;
      case "3개월":
        fromDate.setMonth(toDate.getMonth() - 3);
        if (toDate.getDate() !== fromDate.getDate()) {
          fromDate.setDate(0);
        }
        break;
      default:
        return;
    }

    const fromday = fromDate.toLocaleDateString("sv-SE");

    setPeriodSetting((prev) => {
      const form = { ...prev, [fromStr]: fromday, [toStr]: today };
      console.log(form);
      return form;
    });
  };

  return (
    <div className="border rounded-lg">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 bg-gray-50 border-b cursor-pointer"
      >
        <h2 className="font-semibold">기간 설정</h2>

        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && (
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
                  name="isLimitUsagePeriod"
                  value="true"
                  onChange={onRadioChangeHandler}
                  checked={periodSetting.isLimitUsagePeriod}
                  className="w-4 h-4"
                />
                <span className="text-sm">사용기간 제한</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isLimitUsagePeriod"
                  value="false"
                  onChange={onRadioChangeHandler}
                  checked={!periodSetting.isLimitUsagePeriod}
                  className="w-4 h-4"
                />
                <span className="text-sm">제한 없음</span>
              </label>
            </div>
          </div>

          {/* 사용 기간 설정 */}
          {periodSetting.isLimitUsagePeriod && (
            <div className="flex">
              <div className="w-48 p-4 bg-gray-50 flex items-center">
                <span className="text-red-500 mr-1">*</span>
                <span className="text-sm">사용 기간 설정</span>
              </div>
              <div className="flex-1 p-4 flex items-center gap-2">
                <input
                  type="date"
                  name="validFrom"
                  value={periodSetting.validFrom}
                  onChange={onPeriodChangeHandler}
                  className="w-40 px-3 py-2 border rounded"
                />
                <span>~</span>
                <input
                  type="date"
                  name="validTo"
                  value={periodSetting.validTo}
                  onChange={onPeriodChangeHandler}
                  className="w-40 px-3 py-2 border rounded"
                />
                <div className="flex gap-1 ml-2">
                  <button
                    onClick={() => getDateRange("validFrom", "validTo", "1주")}
                    className="px-3 py-1 border rounded text-sm"
                  >
                    1주
                  </button>
                  <button
                    onClick={() =>
                      getDateRange("validFrom", "validTo", "1개월")
                    }
                    className="px-3 py-1 border rounded text-sm"
                  >
                    1개월
                  </button>
                  <button
                    onClick={() =>
                      getDateRange("validFrom", "validTo", "3개월")
                    }
                    className="px-3 py-1 border rounded text-sm"
                  >
                    3개월
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 발급 기간 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">발급 기간</span>
            </div>
            <div className="flex-1 p-4 flex items-center gap-2">
              <input
                type="date"
                name="issuableFrom"
                value={periodSetting.issuableFrom}
                onChange={onPeriodChangeHandler}
                className="w-40 px-3 py-2 border rounded"
              />
              <span>~</span>
              <input
                type="date"
                name="issuableTo"
                value={periodSetting.issuableTo}
                onChange={onPeriodChangeHandler}
                className="w-40 px-3 py-2 border rounded"
              />
              <div className="flex gap-1 ml-2">
                <button
                  onClick={() =>
                    getDateRange("issuableFrom", "issuableTo", "1주")
                  }
                  className="px-3 py-1 border rounded text-sm"
                >
                  1주
                </button>
                <button
                  onClick={() =>
                    getDateRange("issuableFrom", "issuableTo", "1개월")
                  }
                  className="px-3 py-1 border rounded text-sm"
                >
                  1개월
                </button>
                <button
                  onClick={() =>
                    getDateRange("issuableFrom", "issuableTo", "3개월")
                  }
                  className="px-3 py-1 border rounded text-sm"
                >
                  3개월
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
