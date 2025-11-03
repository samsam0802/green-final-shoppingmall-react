// src/pages/help/HelpNoticePage.jsx
import React, { useState } from "react";

// 1) 더미데이터에 type을 꼭 넣어야 탭 필터가 먹어요
const noticeDummy = [
  {
    id: 1,
    title: "추석 연휴 휴무로 인한 배송일정 안내 건",
    date: "2025.09.30",
    type: "배송공지",
  },
  {
    id: 2,
    title: "고객센터 운영시간 변경 안내 (9/9~)",
    date: "2025.09.08",
    type: "고객센터",
  },
  {
    id: 3,
    title: "휴무일(8/15)로 인한 배송지연 안내 건",
    date: "2025.08.11",
    type: "배송공지",
  },
  {
    id: 4,
    title: "개인정보처리방침 전부 개정 안내",
    date: "2025.07.29",
    type: "쇼핑몰공지",
  },
  {
    id: 5,
    title: "시스템 점검 안내 (7/20 02:00~04:00)",
    date: "2025.07.18",
    type: "쇼핑몰공지",
  },
  {
    id: 6,
    title: "여름 시즌 한시적 무료배송 프로모션 안내",
    date: "2025.06.30",
    type: "이벤트공지",
  },
  {
    id: 7,
    title: "택배사 물량 증가로 인한 일부 지역 배송지연 공지",
    date: "2025.06.12",
    type: "배송공지",
  },
  {
    id: 8,
    title: "회원정보 보호를 위한 비밀번호 변경 권장 안내",
    date: "2025.05.25",
    type: "고객센터",
  },
  {
    id: 9,
    title: "5월 가정의 달 이벤트 당첨자 발표",
    date: "2025.05.10",
    type: "이벤트공지",
  },
  {
    id: 10,
    title: "홈페이지 이용약관 개정 안내",
    date: "2025.04.28",
    type: "쇼핑몰공지",
  },
];

// 2) 위에 띄울 탭들
const tabs = [
  "전체",
  "고객센터",
  "매장공지",
  "배송공지",
  "쇼핑몰공지",
  "이벤트공지",
];

export default function HelpNoticePage() {
  const [activeTab, setActiveTab] = useState("전체");
  const [keyword, setKeyword] = useState("");

  // 탭 + 검색어 필터
  const filtered = noticeDummy.filter((n) => {
    const matchTab = activeTab === "전체" ? true : n.type === activeTab;
    const matchKeyword =
      keyword.trim() === ""
        ? true
        : n.title.toLowerCase().includes(keyword.toLowerCase());
    return matchTab && matchKeyword;
  });

  return (
    <div>
      {/* 🔽 키워드 탭 */}
      <div className="flex gap-6 text-sm mb-4 border-b border-gray-200">
        {tabs.map((tab) => {
          const on = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 -mb-[1px] border-b-2 transition ${
                on
                  ? "border-[#0FA66E] text-[#0FA66E] font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* 🔽 검색줄 */}
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 border border-gray-200 rounded-sm px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="검색어를 입력해 주세요."
        />
        <button className="px-6 bg-black text-white rounded-sm text-sm hover:bg-black/80">
          검색
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-3">총 {filtered.length}건</p>

      {/* 🔽 리스트 */}
      <div className="border-t border-gray-300">
        {/* 헤더 */}
        <div className="grid grid-cols-[80px_1fr_120px] text-xs text-gray-500 py-3 border-b border-gray-200">
          <div className="pl-3">번호</div>
          <div>제목</div>
          <div className="text-right pr-3">작성일</div>
        </div>

        {filtered.map((notice, idx) => (
          <div
            key={notice.id}
            className="grid grid-cols-[80px_1fr_120px] items-center py-3 border-b border-gray-100 text-sm hover:bg-gray-50 cursor-pointer"
          >
            <div className="pl-3 text-gray-500">{idx + 1}</div>
            <div className="flex items-center gap-2">
              {/* 타입 뱃지 */}
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-sm ${
                  notice.type === "이벤트공지"
                    ? "bg-[#E5F7EF] text-[#0FA66E]"
                    : "border border-orange-300 text-orange-400"
                }`}
              >
                {notice.type === "이벤트공지" ? "이벤트" : "공지"}
              </span>
              <span>{notice.title}</span>
            </div>
            <div className="text-right pr-3 text-xs text-gray-400">
              {notice.date}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2 text-sm">
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed"
          disabled
        >
          «
        </button>
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed"
          disabled
        >
          ‹
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          4
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          5
        </button>

        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
        >
          ›
        </button>
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
        >
          »
        </button>
      </div>
    </div>
  );
}
