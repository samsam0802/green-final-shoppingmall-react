import React, { useState } from "react";
import ReviewModifyDelete from "../../review/ReviewModifyDelete";

const MyPageReviewList = () => {
  const [reviewModal, setReviewModal] = useState(false);

  const items = [
    {
      id: 1,
      title: "[만족] 생각보다 퀄리티 좋아요",
      date: "2025-11-03",
      nickname: "mint***",
    },
    {
      id: 2,
      title: "[사이즈] 170/63 기준 M 딱 맞아요",
      date: "2025-11-02",
      nickname: "green_cat",
    },
    {
      id: 3,
      title: "[색상] 화면이랑 거의 똑같아요",
      date: "2025-11-02",
      nickname: "sora_92",
    },
    {
      id: 4,
      title: "[배송] 하루만에 왔어요 감사합니다",
      date: "2025-11-01",
      nickname: "dev_jm",
    },
    {
      id: 5,
      title: "[불만] 포장이 살짝 찌그러져서 왔네요",
      date: "2025-11-01",
      nickname: "happy_boy",
    },
    {
      id: 6,
      title: "[재구매] 지난번에 사보고 또 샀어요",
      date: "2025-10-31",
      nickname: "okmall_user",
    },
    {
      id: 7,
      title: "[착용감] 무게감 없고 하루종일 편했어요",
      date: "2025-10-31",
      nickname: "sunnyday",
    },
    {
      id: 8,
      title: "[구성품] 사은품까지 다 왔습니다",
      date: "2025-10-30",
      nickname: "raccoon",
    },
    {
      id: 9,
      title: "[가격대비] 이 정도면 가성비 괜찮아요",
      date: "2025-10-29",
      nickname: "zero_one",
    },
    {
      id: 10,
      title: "[기타] 포토리뷰는 나중에 올릴게요",
      date: "2025-10-28",
      nickname: "pm_jm",
    },
  ];

  return (
    <div>
      {/* 리뷰 리스트 */}
      <div className="border rounded-lg divide-y">
        {items.map((q) => (
          <div key={q.id} className="p-4 flex justify-between items-center">
            <div>
              <p className="font-medium">{q.title}</p>
              <p className="text-xs text-zinc-500 mt-1">{q.date}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="text-xs px-2 py-1 border border-zinc-300 rounded hover:bg-zinc-50"
                onClick={() => setReviewModal(true)}
              >
                수정/삭제
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 연결 */}
      {reviewModal && (
        <ReviewModifyDelete closeModal={() => setReviewModal(false)} />
      )}
    </div>
  );
};

export default MyPageReviewList;
