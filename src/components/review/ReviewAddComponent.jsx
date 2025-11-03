import React, { useState } from "react";
import ReviewModifyComponent from "./ReviewModifyComponent";
import ReviewDeleteComponent from "./ReviewDeleteComponent";

const ReviewAddComponent = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 min-h-screen font-sans">
      {/* -------------------- 메인 -------------------- */}
      <div
        className={
          "transition-all duration-300" +
          (activeModal ? " opacity-30 pointer-events-none" : " opacity-100")
        }
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          상품 리뷰 목록
        </h1>

        {/* 리뷰 등록 버튼 */}
        <div className="flex justify-end mb-6">
          <button
            className="px-5 py-2 text-sm font-semibold text-white rounded-lg cursor-pointer"
            style={{ backgroundColor: "#111111" }}
            onClick={() => {
              setCurrentRating(0);
              setActiveModal("register");
            }}
          >
            리뷰 등록하기
          </button>
        </div>

        {/* 리뷰 카드 */}
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-semibold text-gray-800">사용자ID123</span>
              <div className="mt-1 flex space-x-1 text-2xl text-yellow-500">
                {"★★★★☆".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                구매한 상품이 기대 이상으로 만족스러워요. 포장 상태도 좋았고
                배송도 빨랐습니다!
              </p>
              <span className="text-xs text-gray-400 mt-1 block">
                2024.08.15
              </span>
            </div>
            <div className="flex space-x-1 text-sm pt-1">
              <button
                className="text-yellow-600 p-2 rounded-full cursor-pointer"
                onClick={() => {
                  setCurrentRating(4);
                  setActiveModal("edit");
                }}
              >
                ✏️ 수정
              </button>
              <button
                className="text-red-600 p-2 rounded-full cursor-pointer"
                onClick={() => setActiveModal("delete")}
              >
                🗑️ 삭제
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- 모달 영역 -------------------- */}

      {/* 📝 등록 모달 */}
      {activeModal === "register" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 flex justify-between items-center">
              리뷰 작성
              <button
                className="text-gray-400 text-3xl cursor-pointer"
                onClick={() => setActiveModal(null)}
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
                  트리플 밸런싱 모이스처 어쩌고 크림 90g (120g 기획세트)
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
                {["만족스러워요", "보통이에요", "불만족스러워요"].map(
                  (opt, i) => (
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
                  )
                )}
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

            {/* 리뷰 작성란 */}
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
              >
                등록하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 수정 */}
      {activeModal === "edit" && (
        <ReviewModifyComponent
          currentRating={currentRating}
          setCurrentRating={setCurrentRating}
          closeModal={() => setActiveModal(null)}
        />
      )}

      {/* 삭제 */}
      {activeModal === "delete" && (
        <ReviewDeleteComponent closeModal={() => setActiveModal(null)} />
      )}
    </div>
  );
};

export default ReviewAddComponent;
