import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import trendingKeywords from "../../data/trendingKeywords";

const TrendingSearch = () => {
  return (
    <div className="bg-white border rounded-xl shadow p-5 w-[400px]">
      <h3 className="font-semibold mb-3">실시간 인기 검색어</h3>

      <ul className="space-y-2 text-sm">
        {trendingKeywords.map((item, index) => (
          <li key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-5 text-gray-500 text-xs">{index + 1}</span>
              <span>{item.keyword}</span>
            </div>

            {item.change === "up" && (
              <FaArrowUp className="text-red-500 text-xs" />
            )}
            {item.change === "down" && (
              <FaArrowDown className="text-blue-500 text-xs" />
            )}
            {item.change === "new" && (
              <span className="text-xs text-red-400 font-semibold">NEW</span>
            )}
          </li>
        ))}
      </ul>

      <p className="text-xs text-gray-400 mt-3 text-right">15:30 기준</p>
    </div>
  );
};

export default TrendingSearch;
