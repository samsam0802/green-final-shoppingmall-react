import React, { useState } from "react";
import ReviewModifyDelete from "../../review/ReviewModifyDelete"; // ✅ 모달 컴포넌트 import
import ReviewSee from "../../review/ReviewSee";

const MyPageReviewList = () => {
  const [reviewModal, setReviewModal] = useState(false);
  const [seeReviewModal, setSeeReviewModal] = useState(false);

  // 더미 데이터
  const initialComments = [
    {
      id: 1,
      image:
        "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0018/A00000018761501ko.jpg",
      productName: "스트라이덱스",
      option: "[여드름/습성] 스트라이덱스 맥스플러스패...",
      date: "2025.07.07",
      writePeriod: "2025.09.02",
      review: "좋아요 잘 사용하고 있습니다 매일 사용하기엔 자극...",
    },
    {
      id: 2,
      image:
        "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0017/A00000017638510ko.jpg",
      productName: "토론숲",
      option: "[수분진정] 토론숲 로얄리 크라이먼 물라젠...",
      date: "2024.03.11",
      writePeriod: "2024.03.15",
      review: "솔트때 쓰고 좋아서 재구매하면서 마트팩도 궁금해...",
    },
    {
      id: 3,
      image:
        "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0015/A00000015241212ko.jpg",
      productName: "토론숲",
      option: "[원조오염스크럽] 토론숲 사우나진향 솔트...",
      date: "2024.03.11",
      writePeriod: "2024.03.15",
      review: "2월달에 궁금해서 사본 제품인데 써보니 효과 좋아...",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="px-8 pt-6 pb-8">
        {/* 누적 리뷰 건수 */}
        <h3 className="text-ml text-gray-800 font-semibold mb-6">
          누적 리뷰 건수 <span className="text-red-500">3</span> 건
        </h3>

        {/* 테이블 헤더 */}
        <div className="grid grid-cols-12 gap-4 py-3 border-b border-zinc-200 text-sm text-zinc-600">
          <div className="col-span-6 pl-2">상품</div>
          <div className="col-span-3">리뷰</div>
          <div className="col-span-3"></div>
        </div>

        {/* 리뷰 목록 */}
        <div className="divide-y divide-zinc-200">
          {initialComments.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-4 py-6 items-start hover:bg-zinc-50 transition"
            >
              {/* 상품 정보 */}
              <div className="col-span-6 flex gap-4">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-24 h-24 object-cover rounded border"
                  />
                  <span className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                    {item.id}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                    <span>구매일자</span>
                    <span>{item.date}</span>
                    <span>| 매장</span>
                  </div>
                  <p className="font-medium text-sm mb-1">{item.productName}</p>
                  <p className="text-xs text-zinc-500">{item.option}</p>
                </div>
              </div>

              {/* 리뷰 정보 */}
              <div className="col-span-3">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                  {item.badge && (
                    <span className="ml-2 px-2 py-0.5 bg-zinc-100 text-zinc-600 text-xs rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-700 line-clamp-2">
                  {item.review}
                </p>
              </div>

              {/* 작성일자 및 버튼 */}
              <div className="col-span-3 flex flex-col items-end gap-2">
                <div className="text-xs text-zinc-500 text-right">
                  <div>작성일자 {item.writePeriod}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setReviewModal(true)} // 모달 열기
                    className="px-4 py-1.5 text-xs border border-zinc-300 rounded hover:bg-zinc-50 cursor-pointer"
                  >
                    리뷰수정
                  </button>
                  <button
                    onClick={() => setSeeReviewModal(true)}
                    className="px-4 py-1.5 text-xs border border-zinc-300 rounded hover:bg-zinc-50 cursor-pointer"
                  >
                    리뷰보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 border border-zinc-300 rounded text-sm">
            1
          </button>
        </div>

        {/* ReviewModifyDelete 연결 */}
        {reviewModal && (
          <ReviewModifyDelete closeModal={() => setReviewModal(false)} />
        )}

        {/* ReviewSee 연결 */}
        {seeReviewModal && (
          <ReviewSee closeModal={() => setSeeReviewModal(false)} />
        )}
      </div>
    </div>
  );
};

export default MyPageReviewList;
