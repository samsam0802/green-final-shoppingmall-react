import React, { useState } from "react";
// lucide-react 아이콘 import 제거됨

const ReviewActionsComponent = () => {
  // 실제 모달 상태를 관리하기 위해 useState 사용
  const [activeModal, setActiveModal] = useState(null); // 'register', 'edit', 'delete' 중 하나

  // 별점 JSX 조각: 0점 (등록 시 초기 상태)
  const zeroStars = (
    <div className="flex space-x-1">
      <span className="text-xl text-gray-300 cursor-pointer transition-colors">
        ☆
      </span>
      <span className="text-xl text-gray-300 cursor-pointer transition-colors">
        ☆
      </span>
      <span className="text-xl text-gray-300 cursor-pointer transition-colors">
        ☆
      </span>
      <span className="text-xl text-gray-300 cursor-pointer transition-colors">
        ☆
      </span>
      <span className="text-xl text-gray-300 cursor-pointer transition-colors">
        ☆
      </span>
    </div>
  );

  // 별점 JSX 조각: 4점 (수정 시 기존 평점)
  const fourStars = (
    <div className="flex space-x-1">
      <span className="text-xl text-yellow-500 cursor-pointer transition-colors">
        ★
      </span>
      <span className="text-xl text-yellow-500 cursor-pointer transition-colors">
        ★
      </span>
      <span className="text-xl text-yellow-500 cursor-pointer transition-colors">
        ★
      </span>
      <span className="text-xl text-yellow-500 cursor-pointer transition-colors">
        ★
      </span>
      <span className="text-xl text-gray-300 cursor-pointer transition-colors">
        ☆
      </span>
    </div>
  );

  // 모달 오버레이 컴포넌트 (모달을 중앙에 띄우고 배경을 흐리게 처리)
  const ModalOverlay = ({ modalType, children }) => (
    <div
      // activeModal과 modalType이 일치할 때만 opacity: 100 및 pointer-events: auto 적용
      // 배경을 반투명 흰색(bg-white/80)으로 바꾸고 backdrop-blur-sm 적용
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300 ${
        activeModal === modalType
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      }`}
      style={{ pointerEvents: activeModal === modalType ? "auto" : "none" }}
    >
      {children}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-white min-h-screen font-sans">
      {/* -------------------- Main Review Page Content (모달이 뜰 때 희미하게 보임) -------------------- */}
      <div
        className={`transition-all duration-300 ${
          activeModal ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">상품 리뷰</h1>

        {/* 1. 리뷰 등록 버튼 (클릭 시 등록 모달이 떠야 함) */}
        <div className="flex justify-end mb-6">
          <button
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => setActiveModal("register")} // 등록 모달 열기
          >
            리뷰 등록
          </button>
        </div>

        {/* 2. 기존 리뷰 카드 (수정/삭제 액션 시뮬레이션용) */}
        <div className="bg-gray-50 p-4 rounded-xl shadow border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-semibold text-gray-800">사용자ID123</span>
              <div className="text-sm text-yellow-500 mt-1">★★★★☆ (4점)</div>
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
                className="text-yellow-600 hover:text-yellow-800 p-1 rounded hover:bg-yellow-100 transition"
                onClick={() => setActiveModal("edit")} // 수정 모달 열기
              >
                ✏️ 수정
              </button>
              <button
                className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-100 transition"
                onClick={() => setActiveModal("delete")} // 삭제 모달 열기
              >
                🗑️ 삭제
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- Modal Designs (모달 창) -------------------- */}

      {/* 1. 📝 리뷰 등록 (Registration) 모달 */}
      <ModalOverlay modalType="register">
        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full space-y-4 border-t-4 border-blue-500 transform scale-100">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 flex justify-between items-center">
            리뷰 등록
            {/* Close button - 모달 닫기 */}
            <button
              className="text-gray-400 hover:text-gray-600 text-3xl transition-colors"
              onClick={() => setActiveModal(null)}
            >
              ×
            </button>
          </h2>

          <div className="flex items-center space-x-2">
            <label className="text-gray-700 font-medium">평점 (별점):</label>
            {zeroStars}
          </div>

          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={4}
            placeholder="상품에 대한 솔직한 의견을 50자 이상 작성해주세요."
          />

          <div className="flex items-center justify-between pt-2">
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <span className="text-lg">📷</span>
              <span>사진 첨부 (0/5)</span>
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition">
              등록하기
            </button>
          </div>
        </div>
      </ModalOverlay>

      {/* 2. ✏️ 리뷰 수정 (Modification) 모달 */}
      <ModalOverlay modalType="edit">
        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full space-y-4 border-t-4 border-yellow-500 transform scale-100">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 flex justify-between items-center">
            리뷰 수정
            {/* Close button - 모달 닫기 */}
            <button
              className="text-gray-400 hover:text-gray-600 text-3xl transition-colors"
              onClick={() => setActiveModal(null)}
            >
              ×
            </button>
          </h2>

          <div className="text-sm text-gray-600 border-b pb-2 flex justify-between">
            <span>사용자ID123 | 2024.08.15</span>
            <span className="font-semibold text-yellow-700">*수정 중*</span>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-gray-700 font-medium">평점 (별점):</label>
            {fourStars}
          </div>

          <textarea
            className="w-full border border-yellow-400 bg-white rounded-lg p-3 text-sm focus:border-yellow-600 focus:ring-yellow-600 resize-none"
            rows={4}
            defaultValue={
              "구매한 상품이 기대 이상으로 만족스러워요. 포장 상태도 좋았고 배송도 빨랐습니다!"
            }
          />

          <div className="flex justify-end space-x-3 pt-2">
            <button
              className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              onClick={() => setActiveModal(null)} // 수정 취소 버튼
            >
              <span className="text-lg mr-1">❌</span>
              수정 취소
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition">
              <span className="text-lg mr-1">✏️</span>
              수정 완료
            </button>
          </div>
        </div>
      </ModalOverlay>

      {/* 3. 🗑️ 리뷰 삭제 (Deletion) 모달 */}
      <ModalOverlay modalType="delete">
        <div className="bg-white p-8 rounded-xl shadow-2xl space-y-6 max-w-sm w-full z-10 border-4 border-red-500 transform scale-100">
          <div className="flex items-center space-x-3 text-red-600 border-b pb-2">
            <span className="text-3xl">🗑️</span>
            <h3 className="text-xl font-bold">리뷰 삭제 확인</h3>
          </div>

          <p className="text-gray-700 text-sm">
            정말로 이 리뷰를 삭제하시겠습니까? 삭제된 내용은 복구할 수 없습니다.
          </p>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setActiveModal(null)} // 삭제 취소 버튼
            >
              취소
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition">
              삭제
            </button>
          </div>
        </div>
      </ModalOverlay>
    </div>
  );
};

export default ReviewActionsComponent;
