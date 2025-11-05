import React, { useState } from "react";

const ReviewAddComponent = ({ closeModal }) => {
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full space-y-4">
        {/* 헤더 */}
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 flex justify-between items-center">
          리뷰 작성
          <button
            className="text-gray-400 text-3xl cursor-pointer"
            onClick={closeModal}
          >
            ×
          </button>
        </h2>

        {/* 상품 + 별점 */}
        <div className="flex items-center space-x-4 border-b pb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
            이미지
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              고보습 세럼 앰플 - 19C 라이트
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-gray-600 text-sm">별점:</span>
              <div className="flex space-x-1 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => {
                  let starClass = "cursor-pointer transition text-gray-300";
                  if (currentRating >= star)
                    starClass = "cursor-pointer transition text-yellow-500";
                  return (
                    <span
                      key={star}
                      className={starClass}
                      onClick={() => setCurrentRating(star)}
                    >
                      {currentRating >= star ? "★" : "☆"}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 그룹 1 */}
        <div className="pt-3">
          <p className="text-sm font-bold text-gray-700 mb-2">
            상품은 어떠세요?
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {["만족스러워요", "보통이에요", "불만족스러워요"].map((opt, i) => (
              <label
                key={i}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name="satisfaction"
                  className="w-4 h-4 text-green-600 border-gray-300 cursor-pointer focus:ring-0"
                />
                <span className="text-sm text-gray-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 그룹 2 */}
        <div className="pt-3">
          <p className="text-sm font-bold text-gray-700 mb-2">
            평소 피부 타입은?
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {["건성", "복합성", "지성", "민감성"].map((opt, i) => (
              <label
                key={i}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name="skinType"
                  className="w-4 h-4 text-green-600 border-gray-300 cursor-pointer focus:ring-0"
                />
                <span className="text-sm text-gray-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 그룹 3 */}
        <div className="pt-3">
          <p className="text-sm font-bold text-gray-700 mb-2">
            사용 전/후 어떤 변화가 있나요?
          </p>
          <div className="flex gap-x-4">
            {["변화없음", "효과만족"].map((opt, i) => (
              <label
                key={i}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name="change"
                  className="w-4 h-4 text-green-600 border-gray-300 cursor-pointer focus:ring-0"
                />
                <span className="text-sm text-gray-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 리뷰 입력 */}
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-green-500 focus:ring-green-500 resize-none placeholder:text-gray-400 mt-4"
          rows={8}
          placeholder="상품에 대한 솔직한 의견을 작성해주세요. (50자 이상)"
        />

        {/* 버튼 */}
        <div className="flex justify-between items-center pt-2 border-t mt-4">
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-full cursor-pointer">
            <span className="text-lg">📷</span>
            <span>사진 첨부 (0/5)</span>
          </button>

          <button
            className="px-5 py-2 text-sm font-semibold text-white rounded-lg cursor-pointer"
            style={{ backgroundColor: "#111111" }}
            onClick={() => {
              alert("리뷰가 등록되었습니다");
              closeModal();
            }}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewAddComponent;
