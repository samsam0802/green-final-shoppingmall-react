import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const noticeDummy = [
  { id: 1, type: "일반", title: "시스템 점검 공지", date: "2025-12-01" },
  {
    id: 2,
    type: "배송공지",
    title: "연말연시 배송 지연 안내",
    date: "2025-11-20",
  },
  {
    id: 3,
    type: "고객센터",
    title: "자주 묻는 질문(FAQ) 업데이트",
    date: "2025-11-15",
  },
  {
    id: 4,
    type: "일반",
    title: "개인정보 처리방침 변경 예정 안내",
    date: "2025-11-10",
  },
];

const tabs = ["전체", "일반", "배송공지", "고객센터"];

export default function HelpNoticePage() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState("전체");
  const [keyword, setKeyword] = useState("");

  const filtered = useMemo(() => {
    const byTab =
      activeTab === "전체"
        ? noticeDummy
        : noticeDummy.filter((n) => n.type === activeTab);
    if (!keyword.trim()) return byTab;
    const q = keyword.trim().toLowerCase();
    return byTab.filter(
      (n) =>
        n.title.toLowerCase().includes(q) || n.type.toLowerCase().includes(q)
    );
  }, [activeTab, keyword]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">공지사항</h1>

        {isAdmin && (
          <button
            onClick={() => navigate("/helpcenter/notice/write")}
            className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg text-sm hover:bg-indigo-700 transition shadow-md cursor-pointer"
          >
            + 공지사항 작성
          </button>
        )}
      </div>

      {/* 탭 */}
      <div className="flex gap-6 text-sm mb-6 border-b border-gray-200 ">
        {tabs.map((tab) => {
          const on = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 -mb-[1px] border-b-2 transition duration-300 cursor-pointer ${
                on
                  ? "border-indigo-600 text-indigo-600 font-bold"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="mb-8 flex gap-3">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="공지사항 제목 또는 분류를 검색해 주세요."
        />
        <button className="px-6 bg-indigo-600 text-white rounded-xl text-base font-semibold hover:bg-indigo-700 transition shadow-md cursor-pointer">
          검색
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        총 {filtered.length}건의 공지사항이 있습니다.
      </p>
      {/* 리스트 */}
      <div className="border-t border-gray-300">
        {/* 헤더 */}
        <div
          className={`grid ${
            isAdmin
              ? "grid-cols-[80px_1fr_120px_150px]"
              : "grid-cols-[80px_1fr_120px]"
          } text-sm text-gray-600 font-semibold py-4 border-b border-gray-200 bg-gray-50`}
        >
          <div className="pl-4">번호</div>
          <div>제목</div>
          <div className="text-right pr-4">작성일</div>
          {isAdmin && <div className="text-center">관리</div>}
        </div>

        {/* 목록 아이템 */}
        {filtered.map((notice, idx) => (
          <div
            key={notice.id}
            className={`grid ${
              isAdmin
                ? "grid-cols-[80px_1fr_120px_150px]"
                : "grid-cols-[80px_1fr_120px]"
            } items-center py-4 border-b border-gray-100 text-base hover:bg-indigo-50 transition duration-150`}
          >
            <div className="pl-4 text-gray-500 text-sm">{idx + 1}</div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium">
                {notice.type}
              </span>
              <span className="text-gray-800 font-medium cursor-pointer ">
                {notice.title}
              </span>
            </div>
            <div className="text-right pr-4 text-sm text-gray-500">
              {notice.date}
            </div>

            {isAdmin && (
              <div className="flex gap-2 justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 부모 클릭 이벤트 방지
                    navigate(`/helpcenter/notice/edit/${notice.id}`);
                  }}
                  className="px-3 py-1 text-xs border border-gray-300 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                >
                  수정
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(
                      `⚠️ Notice ID ${notice.id} 삭제 시도: API 호출 필요`
                    );
                  }}
                  className="px-3 py-1 text-xs border border-red-400 text-red-600 rounded-lg hover:bg-red-50 transition cursor-pointer"
                >
                  삭제
                </button>
              </div>
            )}
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
