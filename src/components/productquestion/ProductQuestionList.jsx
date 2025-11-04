// src/components/productquestion/ProductQuestionList.jsx
import React from "react";
import { Trash2, Edit, Lock } from "lucide-react";

/**
 * 폭/여백은 부모를 따르게 하고, 각 행/버튼의 세로 높이 통일
 */
export default function ProductQuestionList({
  items = [],
  openId = null,
  onToggle = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) {
  return (
    <div className="divide-y divide-gray-200">
      {items.map((q) => {
        const isOpen = openId === q.id;
        const answered = q.status === "ANSWERED";

        return (
          <div key={q.id} className={isOpen ? "bg-gray-50" : ""}>
            {/* 행 헤더 */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-4 cursor-pointer transition-colors ${
                isOpen ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
              onClick={() => onToggle(q.id)}
            >
              {/* 좌측: 제목/작성자 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm">Q.</span>
                  <span className="text-gray-900 text-sm font-medium truncate">
                    {q.title}
                  </span>
                  {q.isPrivate && (
                    <Lock
                      className="w-3 h-3 text-gray-500 flex-shrink-0"
                      title="비밀글"
                    />
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {q.writerMasked} · {q.date}
                </div>
              </div>

              {/* 우측: 상태 + 액션 */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span
                  className={`inline-flex items-center h-7 px-3 rounded-full text-xs font-semibold whitespace-nowrap border ${
                    answered
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }`}
                >
                  {answered ? "답변완료" : "답변대기"}
                </span>

                <button
                  type="button"
                  className="inline-flex items-center gap-1 h-7 px-3 rounded-md text-xs border border-blue-300 text-blue-600 hover:bg-blue-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(q);
                  }}
                >
                  <Edit className="w-3 h-3" />
                  수정
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-1 h-7 px-3 rounded-md text-xs border border-red-300 text-red-600 hover:bg-red-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(q);
                  }}
                >
                  <Trash2 className="w-3 h-3" />
                  삭제
                </button>
              </div>
            </div>

            {/* 펼침 영역 */}
            {isOpen && (
              <div className="pb-4 -mt-1 border-t border-gray-100">
                <div className="mt-3 p-3 border border-gray-300 rounded-lg bg-gray-100">
                  <p className="font-semibold text-xs text-gray-600 mb-1">
                    문의 내용
                  </p>
                  <div className="text-sm text-gray-800 whitespace-pre-wrap">
                    {q.question}
                  </div>
                </div>

                {answered ? (
                  <div className="mt-2 p-3 border border-blue-300 rounded-lg bg-blue-50">
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
                  <div className="mt-2 p-3 border border-yellow-300 rounded-lg bg-yellow-50 text-yellow-800 text-sm font-medium">
                    답변 대기 중입니다.
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* 페이지네이션 */}
      <div className="mt-8 pt-4 border-t border-gray-200 flex justify-center gap-1 text-sm">
        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
          이전
        </button>
        <button className="px-3 py-1 bg-gray-900 text-white rounded-md font-bold shadow-md">
          1
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
          3
        </button>
        <span className="px-3 py-1 text-gray-400">...</span>
        <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
          10
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
          다음
        </button>
      </div>
    </div>
  );
}
