import React from "react";
import { Trash2, Edit, Lock } from "lucide-react";

/**
 * 목록/조회 뼈대 (접기/펼치기 + 상태 배지 + 관리버튼)
 */
export default function ProductQuestionList({
  items = [],
  openId = null,
  onToggle = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) {
  return (
    <div className="space-y-3 max-w-[820px] mx-auto px-3">
      {items.map((q) => {
        const isOpen = openId === q.id;
        const answered = q.status === "ANSWERED";
        return (
          // 리스트 항목 (개별 카드 스타일)
          <div
            key={q.id}
            className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
          >
            {/* 행 헤더 (클릭 가능한 영역) */}
            <div
              className={`flex flex-col sm:flex-row items-start justify-between gap-3 px-4 py-3 cursor-pointer ${
                isOpen ? "bg-gray-50" : "hover:bg-gray-50"
              } transition-colors duration-200`}
              onClick={() => onToggle(q.id)}
            >
              <div className="flex-1 w-full">
                {/* Q. 제목, 비밀글 아이콘 */}
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-gray-900 text-sm">Q.</span>
                  <span className="text-gray-900 text-sm font-medium">
                    {q.title}
                  </span>
                  {q.isPrivate && (
                    <Lock className="w-3 h-3 text-gray-500" title="비밀글" />
                  )}
                </div>

                {/* 작성자 및 날짜 */}
                <div className="text-xs text-gray-500 font-normal">
                  {q.writerMasked} - {q.date}
                </div>
              </div>

              {/* 상태 배지 및 관리 버튼 그룹 */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0 self-end sm:self-center">
                {/* 상태 배지 */}
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ${
                    answered
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                  }`}
                >
                  {answered ? "답변완료" : "답변대기"}
                </span>

                {/* 수정 버튼 */}
                <button
                  type="button"
                  className="text-[11px] text-blue-600 border border-blue-300 px-2 py-1 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(q);
                  }}
                >
                  <Edit className="w-3 h-3" /> 수정
                </button>

                {/* 삭제 버튼 */}
                <button
                  type="button"
                  className="text-[11px] text-red-600 border border-red-300 px-2 py-1 rounded-md hover:bg-red-50 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(q);
                  }}
                >
                  <Trash2 className="w-3 h-3" /> 삭제
                </button>
              </div>
            </div>

            {/* 펼침 영역: Q&A 박스 */}
            {isOpen && (
              <div className="px-4 pb-4 pt-2 border-t border-gray-200">
                {/* 문의 내용 (Question Box) */}
                <div className="mb-3 p-3 border border-gray-300 rounded-lg bg-gray-100">
                  <p className="font-semibold text-xs text-gray-600 mb-1">
                    문의 내용
                  </p>
                  <div className="text-sm text-gray-800 whitespace-pre-wrap">
                    {q.question}
                  </div>
                </div>

                {/* 답변 내용 (Answer Box) */}
                {answered ? (
                  <div className="p-3 border border-blue-300 rounded-lg bg-blue-50">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-700 text-sm">
                        A.
                      </span>
                      <p className="text-sm text-gray-800 whitespace-pre-wrap">
                        {q.answer}
                      </p>
                    </div>
                  </div>
                ) : (
                  // 답변 대기 중 메시지
                  <div className="p-3 border border-yellow-300 rounded-lg bg-yellow-50 text-yellow-800 text-sm font-medium">
                    답변 대기 중입니다.
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* 간단 페이지네이션 UI */}
      <div className="mt-6 flex justify-center gap-1 text-sm">
        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100 transition-colors">
          이전
        </button>
        {/* 현재 페이지 */}
        <button className="px-3 py-1 bg-gray-900 text-white rounded-md font-bold shadow-md">
          1
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
          2
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
          3
        </button>
        <span className="px-3 py-1 text-gray-400">...</span>
        <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
          10
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100 transition-colors">
          다음
        </button>
      </div>
    </div>
  );
}
