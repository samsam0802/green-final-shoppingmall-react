import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PeriodSetting() {
  const [isOpen, setIsOpen] = useState(true);
  const [usablePeriod, setUsablePeriod] = useState("LIMIT");

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
                  name="usePeriod"
                  value="unlimited"
                  onChange={() => setUsablePeriod("LIMIT")}
                  checked={usablePeriod === "LIMIT"}
                  className="w-4 h-4"
                />
                <span className="text-sm">사용기간 제한</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="usePeriod"
                  value="download"
                  onChange={() => setUsablePeriod("NO-LIMIT")}
                  checked={usablePeriod === "NO-LIMIT"}
                  className="w-4 h-4"
                />
                <span className="text-sm">제한 없음</span>
              </label>
            </div>
          </div>

          {/* 사용 기간 설정 */}
          {usablePeriod === "LIMIT" && (
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
          )}

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
                  1주
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
      )}
    </div>
  );
}
