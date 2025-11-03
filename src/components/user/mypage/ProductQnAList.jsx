// src/components/mypage/InquiriesList.jsx
import React from "react";

export default function ProductQnAList() {
  const items = [
    {
      id: 1,
      title: "[재입고] 블랙 색상은 언제 다시 들어오나요?",
      date: "2025-11-03",
      status: "답변대기",
    },
    {
      id: 2,
      title: "[옵션변경] 주문 후에 사이즈를 L에서 M으로 바꿀 수 있나요?",
      date: "2025-11-02",
      status: "답변대기",
    },
    {
      id: 3,
      title: "[상품정보] 상세페이지에 적힌 소재가 맞는지 확인 가능할까요?",
      date: "2025-11-02",
      status: "답변완료",
    },
    {
      id: 4,
      title: "[구성품] 사진에 있는 파우치도 같이 오는 건가요?",
      date: "2025-11-01",
      status: "답변완료",
    },
    {
      id: 5,
      title: "[사이즈] 165cm 기준으로 어떤 사이즈가 맞을까요?",
      date: "2025-11-01",
      status: "답변완료",
    },
    {
      id: 6,
      title: "[색상] 실제 색상이 사진보다 더 어두운지 궁금합니다.",
      date: "2025-10-31",
      status: "답변완료",
    },
    {
      id: 7,
      title: "[원산지] 이 제품 원산지가 어디인가요?",
      date: "2025-10-31",
      status: "답변완료",
    },
    {
      id: 8,
      title: "[유통기한] 지금 주문하면 유통기한 어느 정도 남아 있나요?",
      date: "2025-10-30",
      status: "답변완료",
    },
    {
      id: 9,
      title: "[A/S] 사용 중 고장 나면 A/S 가능한 제품인가요?",
      date: "2025-10-29",
      status: "답변완료",
    },
    {
      id: 10,
      title: "[기타] 선물용으로 보낼 건데 가격표 제거 가능할까요?",
      date: "2025-10-28",
      status: "답변대기",
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
