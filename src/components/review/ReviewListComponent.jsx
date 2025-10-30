import React from "react";

// 시뮬레이션용 댓글 데이터 (정적으로 유지)
const initialComments = [
  {
    id: 1,
    author: "판매자",
    content:
      "고객님, 소중한 후기 정말 감사합니다! 딥블루 체크 패턴이 고객님께 멋지게 잘 어울리셨다니 기쁩니다. 오래오래 만족하며 착용하시길 바랍니다. 😊",
    date: "1일 전",
    isSeller: true,
  },
  {
    id: 2,
    author: "쇼핑매니아",
    content:
      "저도 이거 샀는데 핏 진짜 좋아요! 특히 색깔이 흔하지 않아서 더 만족스러웠어요.",
    date: "1시간 전",
    isSeller: false,
  },
  {
    id: 3,
    author: "정보찾는사람",
    content:
      "L사이즈 상세 스펙 궁금했는데, 상세 리뷰 감사합니다! 덕분에 사이즈 결정했어요.",
    date: "30분 전",
    isSeller: false,
  },
  {
    id: 4,
    author: "지름신강림",
    content: "이거 때문에 장바구니에 담았습니다. 바로 결제하러 갑니다!",
    date: "10분 전",
    isSeller: false,
  },
  {
    id: 5,
    author: "구매대기자",
    content: "배송 진짜 빠르네요. 저도 방금 주문했어요. 기대됩니다.",
    date: "방금",
    isSeller: false,
  },
];

const ReviewListComponent = () => {
  // 시뮬레이션: 첫 3개의 댓글만 표시
  const visibleComments = initialComments.slice(0, 3);
  const totalComments = initialComments.length;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center py-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center space-x-2 text-gray-800 font-semibold text-base">
          <span>리뷰 708개</span>
          <span className="flex items-center space-x-1 text-sm">
            <span className="text-yellow-500 text-xl leading-none">★</span>
            <span className="text-gray-800">4.8점</span>
          </span>
        </div>
        {/* 정렬 옵션 (오른쪽) */}
        <select className="px-2 py-1 text-xs border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option>최신순</option>
          <option>좋아요순</option>
          <option>높은별점순</option>
          <option>낮은별점순</option>
        </select>
      </div>

      {/* 🌟 개별 리뷰 항목 (첫 번째 - 댓글 포함) */}
      <div className="bg-white border-t border-b border-gray-200 p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          {/* 프로필 이미지와 닉네임, 날짜 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-sm text-gray-600 font-medium">U</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-900 font-semibold text-base">
                나도스토시살레
              </span>
              <span className="text-xs text-gray-500">25.09.30</span>
            </div>
          </div>
          <div className="text-yellow-500">
            <span>★★★★★</span>
          </div>
        </div>

        <div className="bg-gray-100 p-3 rounded-md mb-3 text-sm">
          <p>구매옵션: **딥블루 - L(100)**</p>
        </div>

        {/* 이미지 및 텍스트 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="w-full sm:w-64 sm:flex-shrink-0">
            <div className="aspect-square bg-gray-300 flex items-center justify-center rounded">
              <span className="text-gray-600"></span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed sm:flex-1">
            체크 패턴이 선명하고 원단이 탄탄해서 오래 입을 수 있을 것 같아요.
            두께감 때문에 단독으로 입어도 좋고, 티셔츠 위에 가볍게 걸쳐도
            멋스럽습니다. 사이즈도 여유 있어서 활동하기 편합니다.
          </p>
        </div>
        {/* ----------------------------------------------------- */}

        <div className="flex items-center justify-end space-x-4 text-sm text-gray-500 border-t border-gray-100 pt-3">
          <button className="flex items-center space-x-1 hover:text-gray-900">
            <span>👍 도움이 돼요 1</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-gray-900 text-gray-900 font-semibold">
            <span>💬 댓글 {totalComments}</span> {/* 댓글 총 개수 표시 */}
          </button>
        </div>

        {/* ⭐⭐⭐ 댓글 목록 영역 시작 ⭐⭐⭐ */}
        <div className="mt-4 border-t border-gray-100 pt-3 pl-4 sm:pl-8">
          {/* 댓글 리스트 렌더링 (정적 표시) */}
          {visibleComments.map((comment) => {
            const userInitial = comment.isSeller
              ? "S"
              : comment.author.charAt(0);
            const bgColor = comment.isSeller ? "bg-blue-50" : "bg-gray-50";
            const nameColor = comment.isSeller
              ? "text-blue-600"
              : "text-gray-900";
            const initialBgColor = comment.isSeller
              ? "bg-blue-200"
              : "bg-gray-300";
            const initialTextColor = comment.isSeller
              ? "text-blue-600"
              : "text-gray-600";

            return (
              <div
                key={comment.id}
                className={`p-3 rounded-lg border border-gray-200 mb-2 ${bgColor}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center space-x-2">
                    {/* 프로필 이미지 (댓글은 w-6 h-6으로 작게) */}
                    <div
                      className={`w-6 h-6 ${initialBgColor} rounded-full flex items-center justify-center overflow-hidden flex-shrink-0`}
                    >
                      <span
                        className={`text-xs ${initialTextColor} font-medium`}
                      >
                        {userInitial}
                      </span>
                    </div>
                    {/* 닉네임과 날짜 */}
                    <div className="flex items-center space-x-2">
                      <span className={`${nameColor} font-semibold text-sm`}>
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        {comment.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-xs text-gray-500">
                    <button className="hover:text-gray-800">수정</button>
                    <span className="text-gray-300">|</span>
                    <button className="hover:text-red-500">삭제</button>
                  </div>
                  {/* ---------------------------------- */}
                </div>
                <p className="text-sm text-gray-700 leading-normal ml-8">
                  {comment.content}
                </p>{" "}
                {/* 닉네임 길이만큼 들여쓰기 */}
              </div>
            );
          })}

          {/* 댓글 페이지네이션*/}
          <div className="flex justify-center space-x-1 mt-4">
            <button
              className={`w-8 h-8 text-xs rounded-full transition-colors bg-gray-800 text-white font-semibold`}
            >
              1
            </button>
            <button
              className={`w-8 h-8 text-xs rounded-full transition-colors text-gray-700 hover:bg-gray-200`}
            >
              2
            </button>
          </div>
        </div>
        {/*  댓글 목록 영역 끝  */}
      </div>

      {/* 🌟 개별 리뷰 항목 (두 번째 - 댓글 없음) */}
      <div className="bg-white border-b border-gray-200 p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          {/* 프로필 이미지와 닉네임, 날짜 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-sm text-gray-600 font-medium">U</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-900 font-semibold">
                깊은아마딜스타일
              </span>
              <span className="text-xs text-gray-500">25.09.25</span>
            </div>
          </div>
          <div className="text-yellow-500">
            <span>★★★★★</span>
          </div>
        </div>

        <div className="bg-gray-100 p-3 rounded-md mb-3 text-sm">
          <p>구매옵션: **딥블루 - 2XL(110-115)**</p>
        </div>

        {/* 이미지 및 텍스트 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="w-full sm:w-64 sm:flex-shrink-0">
            <div className="aspect-square bg-gray-300 flex items-center justify-center rounded">
              <span className="text-gray-600"></span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed sm:flex-1">
            두 번째 리뷰 내용도 첫 번째와 동일하게 여기에 표시됩니다. 상품에
            대한 만족도와 의견을 자유롭게 작성할 수 있습니다.
          </p>
        </div>
        {/* ----------------------------------------------------- */}

        {/* 두 번째 리뷰에도 도움이 돼요/댓글 버튼 추가 */}
        <div className="flex items-center justify-end space-x-4 text-sm text-gray-500 border-t border-gray-100 pt-3">
          <button className="flex items-center space-x-1 hover:text-gray-900">
            <span>👍 도움이 돼요 1</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-gray-900">
            <span>💬 댓글</span>
          </button>
        </div>
      </div>
      {/* 📄 페이지네이션 영역 추가 (메인 리뷰) */}
      <div className="flex justify-center space-x-1 mt-8 text-sm">
        <button className="px-3 py-2 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100">
          이전
        </button>
        <button className="px-3 py-2 text-white bg-gray-800 rounded-md font-semibold shadow-md">
          1
        </button>
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
          3
        </button>
        <span className="px-3 py-2 text-gray-400">...</span>
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
          10
        </button>
        <button className="px-3 py-2 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100">
          다음
        </button>
      </div>
    </div>
  );
};

export default ReviewListComponent;
