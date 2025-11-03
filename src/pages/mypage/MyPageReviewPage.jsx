import React from "react";
import MyPageReviewList from "../../components/user/mypage/MyPageReviewList";

const MyPageReviewPage = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h1 className="text-xl font-bold mb-6">나의 리뷰</h1>
      <p className="text-sm text-zinc-500 mb-6">
        리뷰후기를 모아둔 목록입니다.
      </p>
      <MyPageReviewList />
    </div>
  );
};

export default MyPageReviewPage;
