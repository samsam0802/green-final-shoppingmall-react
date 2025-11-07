import React, { useRef, useState } from "react";
import { reviewTemplates, categoryTemplateMapping } from "./ReviewTemplate";

const ReviewAddComponent = ({ closeModal }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [answers, setAnswers] = useState({});
  const uploadRef = useRef();
  const [images, setImages] = useState([]);

  const template = categoryTemplateMapping["세럼에센스"];

  const imageAddHandler = () => {
    const files = uploadRef.current.files;
    if (!files) return;

    for (let file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prev) => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageRemoveHandler = (idx) => {
    setImages((prev) => prev.filter((img, i) => i != idx));
  };

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

        <div className="pt-3">
          {template.map((q) => (
            <div key={q.id} className="mb-8">
              <p className="text-sm font-bold text-gray-700 mb-2">
                {q.question}
              </p>
              <div className="flex flex-wrap gap-x-4">
                {q.options.map((opt, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-1 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => setAnswers({ ...answers, [q.id]: opt })}
                    />
                    <span className="text-sm text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 리뷰 입력 */}
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-green-500 focus:ring-green-500 resize-none placeholder:text-gray-400 mt-4"
          rows={8}
          placeholder="상품에 대한 솔직한 의견을 작성해주세요."
        />

        {/* 버튼 */}
        <div className="flex justify-between items-center pt-2 border-t mt-4">
          <button
            type="button"
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-full cursor-pointer"
            onClick={() => {
              if (images.length >= 5) {
                alert("사진은 최대 5장까지 업로드할 수 있습니다.");
                return;
              }
              uploadRef.current.click();
            }}
          >
            📷 사진첨부 ({images.length}/5)
          </button>
          <input
            type="file"
            name="file"
            ref={uploadRef}
            multiple={true}
            onChange={imageAddHandler}
            className="hidden"
          />
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
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {images.map((img, idx) => {
            return (
              <div
                key={idx}
                className="relative w-16 h-16 rounded-md overflow-hidden border border-gray-300 flex-shrink-0"
              >
                <button
                  onClick={() => imageRemoveHandler(idx)}
                  className="absolute top-0 right-0 bg-black/70 text-white text-xs 
                   w-5 h-5 flex justify-center cursor-pointer"
                >
                  x
                </button>

                <img
                  src={img}
                  alt={`preview-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewAddComponent;
