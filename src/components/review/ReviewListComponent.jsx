import React, { useState } from "react";

const ReviewListComponent = () => {
  const [showComments, setShowComments] = useState(false); // 댓글창 열림 상태
  // 댓글 더미데이터
  const initialComments = [
    {
      id: 1,
      author: "판매자",
      content: "고객님, 소중한 후기 정말 감사합니다!",
      date: "1일 전",
      isSeller: true,
    },
    {
      id: 2,
      author: "유저아이디A",
      content: "저도 이거 샀는데 핏 진짜 좋아요!",
      date: "1시간 전",
      isSeller: false,
    },
    {
      id: 3,
      author: "유저아이디B",
      content: "상세 리뷰 감사합니다!",
      date: "30분 전",
      isSeller: false,
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center py-10 text-sm text-gray-600">
          <div className="flex items-center space-x-2 text-gray-800 font-semibold text-base">
            <span>리뷰 103개</span>
            <span className="flex items-center space-x-1 text-sm">
              <span className="text-yellow-500 text-xl leading-none">★</span>
              <span className="text-gray-800">4.8점</span>
            </span>
          </div>
          <select className="px-2 py-1 text-xs bg-white text-gray-700 rounded-md focus:ring-0 focus:outline-none">
            <option>최신순</option>
            <option>좋아요순</option>
            <option>높은별점순</option>
            <option>낮은별점순</option>
          </select>
        </div>

        {/* 리뷰 1 */}
        <div className="bg-white pb-4 mb-4 border-b border-gray-500">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-3">
                <span className="text-gray-900 font-semibold text-base">
                  유저아이디1
                </span>
                <span className="text-xs text-gray-500">25.09.30</span>
              </div>
              <div className="text-yellow-500 text-sm">
                <span>★★★★★</span>
              </div>
            </div>

            <div className="mb-2 text-sm text-gray-500">
              <p>구매옵션</p>
            </div>

            {/* 이미지 + 텍스트 */}
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <div className="w-full sm:w-64 sm:flex-shrink-0">
                <div className="aspect-square bg-gray-300 flex items-center justify-center rounded">
                  <span className="text-gray-600 text-sm">
                    리뷰 이미지 (Placeholder)
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed sm:flex-1">
                첫 번째 리뷰 내용
              </p>
            </div>

            {/* 도움 / 댓글 버튼 */}
            <div className="flex items-center justify-end space-x-4 text-sm text-gray-500 pt-3">
              <button className="flex items-center space-x-1 cursor-pointer hover:text-gray-900 transition duration-150">
                <span>👍 도움이 돼요 1</span>
              </button>
              <button
                onClick={() => setShowComments(!showComments)}
                className={`flex items-center space-x-1 cursor-pointer transition duration-150 ${
                  showComments
                    ? "text-blue-600 font-semibold"
                    : "text-gray-900 hover:text-blue-600"
                }`}
              >
                <span>💬 댓글 3</span>
              </button>
            </div>

            {/* 댓글 목록 */}
            {showComments && (
              <div className="mt-4 border-t border-gray-100 pt-3">
                {initialComments.map((comment) => {
                  const nameColor = comment.isSeller
                    ? "text-blue-600"
                    : "text-gray-900";

                  return (
                    <div
                      key={comment.id}
                      className="py-3 border-b border-gray-200"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`${nameColor} font-semibold text-sm`}
                          >
                            {comment.author}
                          </span>
                          <span className="text-xs text-gray-500">
                            {comment.date}
                          </span>
                        </div>
                        <div className="flex space-x-2 text-xs text-gray-500">
                          <button className="cursor-pointer hover:text-gray-800 transition duration-150">
                            수정
                          </button>
                          <span className="text-gray-300">|</span>
                          <button className="cursor-pointer hover:text-red-500 transition duration-150">
                            삭제
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-normal">
                        {comment.content}
                      </p>
                    </div>
                  );
                })}

                {/* 댓글 페이지네이션 */}
                <div className="flex justify-center space-x-1 mt-5 text-sm">
                  <button className="px-2 py-1 text-gray-500 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100 transition duration-150">
                    이전
                  </button>
                  <button className="px-2 py-1 text-white bg-gray-600 rounded-md font-semibold cursor-pointer transition duration-150">
                    1
                  </button>
                  <button className="px-2 py-1 text-gray-700 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100 transition duration-150">
                    2
                  </button>
                  <button className="px-2 py-1 text-gray-500 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100 transition duration-150">
                    다음
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white pb-4 border-b border-gray-500">
          <div>
            <div className="flex justify-between items-center mb-2 pt-4">
              <div className="flex items-center space-x-3">
                <span className="text-gray-900 font-semibold">유저아이디2</span>
                <span className="text-xs text-gray-500">25.09.25</span>
              </div>
              <div className="text-yellow-500 text-sm">
                <span>★★★★★</span>
              </div>
            </div>

            <div className="mb-2 text-sm text-gray-500">
              <p>구매옵션</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <div className="w-full sm:w-64 sm:flex-shrink-0">
                <div className="aspect-square bg-gray-300 flex items-center justify-center rounded">
                  <span className="text-gray-600 text-sm">
                    리뷰 이미지 (Placeholder)
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed sm:flex-1">
                두 번째 리뷰 내용
              </p>
            </div>

            <div className="flex items-center justify-end space-x-4 text-sm text-gray-500 pt-3">
              <button className="flex items-center space-x-1 cursor-pointer hover:text-gray-900 transition duration-150">
                <span>👍 도움이 돼요 1</span>
              </button>
              <button className="flex items-center space-x-1 cursor-pointer hover:text-gray-900 transition duration-150">
                <span>💬 댓글</span>
              </button>
            </div>
          </div>
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center space-x-1 mt-8 pb-10 text-sm">
          <button className="px-3 py-2 text-gray-500 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-150">
            이전
          </button>
          <button className="px-3 py-2 text-white bg-gray-800 rounded-md font-semibold shadow-md cursor-pointer transition duration-150">
            1
          </button>
          <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-150">
            2
          </button>
          <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-150">
            3
          </button>
          <span className="px-3 py-2 text-gray-400">...</span>
          <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-150">
            10
          </button>
          <button className="px-3 py-2 text-gray-500 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-150">
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewListComponent;
