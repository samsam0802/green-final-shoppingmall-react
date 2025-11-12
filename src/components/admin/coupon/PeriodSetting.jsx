import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function PeriodSetting({ onChangeForm }) {
  const [isOpen, setIsOpen] = useState(true);
  const [periodSetting, setPeriodSetting] = useState({
    isLimitUsagePeriod: true,
    validFrom: "",
    validTo: "",
    issuableFrom: "",
    issuableTo: "",
  });

  useEffect(() => {
    onChangeForm?.({ ...periodSetting });
  }, [periodSetting]);

  const onRadioChangeHandler = (e) => {
    const { name, value } = e.target;
    const bool = value === "true";
    setPeriodSetting((prev) => {
      if (!bool) {
        return { ...prev, [name]: bool, validFrom: "", validTo: "" };
      }
      return { ...prev, [name]: bool };
    });
  };

  const onPeriodChangeHandler = (e) => {
    const { name, value } = e.target;
    setPeriodSetting((prev) => ({ ...prev, [name]: value }));
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
    setPeriodSetting((prev) => ({
      ...prev,
      [fromStr]: fromday,
      [toStr]: today,
    }));
  };

  return (
    <div className="w-full bg-white p-6 text-sm font-['Inter']">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-3 border-b"
      >
        <h2 className="text-lg font-semibold text-gray-800">기간 설정</h2>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isOpen && (
        <div>
          <div className="border border-gray-300 mb-6 mt-6 rounded-lg overflow-hidden shadow-lg">
            {/* 사용 기간 */}
            <div
              className={`flex ${
                periodSetting.isLimitUsagePeriod
                  ? "border-b border-gray-300"
                  : ""
              } items-stretch`}
            >
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                사용 기간
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex items-center flex-grow p-2 gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isLimitUsagePeriod"
                    value="true"
                    onChange={onRadioChangeHandler}
                    checked={periodSetting.isLimitUsagePeriod}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>사용기간 제한</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isLimitUsagePeriod"
                    value="false"
                    onChange={onRadioChangeHandler}
                    checked={!periodSetting.isLimitUsagePeriod}
                    className="mr-2 accent-blue-600 cursor-pointer"
                  />
                  <span>제한 없음</span>
                </label>
              </div>
            </div>

            {/* 사용 기간 설정 */}
            {periodSetting.isLimitUsagePeriod && (
              <div className="flex border-b border-gray-300 items-stretch">
                <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                  사용 기간 설정
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <div className="flex items-center flex-grow p-2 gap-2">
                  <input
                    type="date"
                    name="validFrom"
                    value={periodSetting.validFrom}
                    onChange={onPeriodChangeHandler}
                    className="border border-gray-300 p-1 rounded-md"
                  />
                  <span className="text-gray-500">~</span>
                  <input
                    type="date"
                    name="validTo"
                    value={periodSetting.validTo}
                    onChange={onPeriodChangeHandler}
                    className="border border-gray-300 p-1 rounded-md"
                  />
                  <div className="flex gap-1 ml-2">
                    <button
                      onClick={() =>
                        getDateRange("validFrom", "validTo", "1주")
                      }
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm transition"
                    >
                      1주
                    </button>
                    <button
                      onClick={() =>
                        getDateRange("validFrom", "validTo", "1개월")
                      }
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm transition"
                    >
                      1개월
                    </button>
                    <button
                      onClick={() =>
                        getDateRange("validFrom", "validTo", "3개월")
                      }
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm transition"
                    >
                      3개월
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 발급 기간 */}
            <div className="flex items-stretch">
              <div className="w-40 bg-gray-50 border-r border-gray-300 text-gray-700 font-semibold flex items-center justify-center p-2">
                발급 기간
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="flex items-center flex-grow p-2 gap-2">
                <input
                  type="date"
                  name="issuableFrom"
                  value={periodSetting.issuableFrom}
                  onChange={onPeriodChangeHandler}
                  className="border border-gray-300 p-1 rounded-md"
                />
                <span className="text-gray-500">~</span>
                <input
                  type="date"
                  name="issuableTo"
                  value={periodSetting.issuableTo}
                  onChange={onPeriodChangeHandler}
                  className="border border-gray-300 p-1 rounded-md"
                />
                <div className="flex gap-1 ml-2">
                  <button
                    onClick={() =>
                      getDateRange("issuableFrom", "issuableTo", "1주")
                    }
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm transition"
                  >
                    1주
                  </button>
                  <button
                    onClick={() =>
                      getDateRange("issuableFrom", "issuableTo", "1개월")
                    }
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm transition"
                  >
                    1개월
                  </button>
                  <button
                    onClick={() =>
                      getDateRange("issuableFrom", "issuableTo", "3개월")
                    }
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm transition"
                  >
                    3개월
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
