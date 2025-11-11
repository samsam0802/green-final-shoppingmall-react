import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setReviewRatingData } from "../../redux/slices/features/review/reviewRatingSlice";

const ReviewRatingComponent = () => {
  const dispatch = useDispatch();
  const { averageScore, positivePercentage, totalReviews, scoreData } =
    useSelector((state) => state.reviewRatingSlice);

  //setReviewRatingData, dispatch 현재 상태에선 미사용, 추후 사용할 예정

  return (
    <div className="p-6 border border-gray-200 rounded-lg mb-6 bg-white">
      <p className="text-center text-xs text-gray-500 mb-6">
        ※ 리뷰는 주문 개수 상관없이 주문 건당 상품별 1회 작성 가능합니다.
      </p>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* 평균 점수 */}
        <div className="flex flex-col items-center justify-center lg:w-1/3 py-4 border-b lg:border-b-0 lg:border-r border-gray-200 mb-6 lg:mb-0">
          <div className="flex items-center space-x-2 text-6xl font-extrabold text-gray-900 mb-2">
            <FaStar className="w-12 h-12 text-yellow-500" />
            <span className="text-5xl">{averageScore}</span>
          </div>
          <p className="text-sm text-gray-700 font-medium mt-3">
            <span className="font-bold text-blue-600">
              {positivePercentage}%
            </span>
            의 구매자가 이 상품을 좋아합니다.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            (총 {totalReviews}개 리뷰)
          </p>
        </div>

        {/* 별점 그래프 */}
        <div className="flex-1 lg:w-2/3 space-y-3 pt-4">
          {scoreData.map((data) => (
            <div key={data.score} className="flex items-center text-sm">
              <div className="w-30 text-gray-700 font-medium">{data.label}</div>
              <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-900 transition-all duration-700 ease-out rounded-full"
                  style={{
                    width:
                      data.score === 5
                        ? "100%"
                        : data.score === 4
                        ? "10%"
                        : "0%",
                  }}
                ></div>
              </div>

              <div className="w-10 text-right text-sm text-gray-600 font-semibold">
                {data.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewRatingComponent;
