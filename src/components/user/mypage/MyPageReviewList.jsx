// src/components/mypage/InquiriesList.jsx
import React from "react";

export default function MyPageReviewList() {
  const items = [
    {
      id: 1,
      title: "[만족] 생각보다 퀄리티 좋아요",
      date: "2025-11-03",
      status: "노출중",
      nickname: "mint***",
    },
    {
      id: 2,
      title: "[사이즈] 170/63 기준 M 딱 맞아요",
      date: "2025-11-02",
      status: "노출중",
      nickname: "green_cat",
    },
    {
      id: 3,
      title: "[색상] 화면이랑 거의 똑같아요",
      date: "2025-11-02",
      status: "노출중",
      nickname: "sora_92",
    },
    {
      id: 4,
      title: "[배송] 하루만에 왔어요 감사합니다",
      date: "2025-11-01",
      status: "노출중",
      nickname: "dev_jm",
    },
    {
      id: 5,
      title: "[불만] 포장이 살짝 찌그러져서 왔네요",
      date: "2025-11-01",
      status: "관리자답변",
      nickname: "happy_boy",
    },
    {
      id: 6,
      title: "[재구매] 지난번에 사보고 또 샀어요",
      date: "2025-10-31",
      status: "노출중",
      nickname: "okmall_user",
    },
    {
      id: 7,
      title: "[착용감] 무게감 없고 하루종일 편했어요",
      date: "2025-10-31",
      status: "노출중",
      nickname: "sunnyday",
    },
    {
      id: 8,
      title: "[구성품] 사은품까지 다 왔습니다",
      date: "2025-10-30",
      status: "노출중",
      nickname: "raccoon",
    },
    {
      id: 9,
      title: "[가격대비] 이 정도면 가성비 괜찮아요",
      date: "2025-10-29",
      status: "노출중",
      nickname: "zero_one",
    },
    {
      id: 10,
      title: "[기타] 포토리뷰는 나중에 올릴게요",
      date: "2025-10-28",
      status: "임시저장",
      nickname: "pm_jm",
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
