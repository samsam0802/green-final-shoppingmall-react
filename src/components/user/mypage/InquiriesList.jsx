// src/components/mypage/InquiriesList.jsx
import React from "react";

export default function InquiriesList() {
  const items = [
    {
      id: 1,
      title: "[상품문의] 모바일 초대장 수정 가능한가요?",
      date: "2025-10-30",
      status: "답변대기",
    },
    {
      id: 2,
      title: "[결제] 결제 영수증 다시 받을 수 있나요?",
      date: "2025-10-25",
      status: "답변완료",
    },
  ];

  return (
    <div className="border rounded-lg divide-y">
      {items.map((q) => (
        <div key={q.id} className="p-4 flex justify-between items-center">
          <div>
            <p className="font-medium">{q.title}</p>
            <p className="text-xs text-zinc-500 mt-1">{q.date}</p>
          </div>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              q.status === "답변완료"
                ? "bg-green-100 text-green-700"
                : "bg-zinc-100"
            }`}
          >
            {q.status}
          </span>
        </div>
      ))}
    </div>
  );
}
