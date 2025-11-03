import React from "react";

const ReviewDeleteComponent = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full space-y-6">
        <div className="flex items-center space-x-3 text-red-600 border-b pb-2">
          <span className="text-3xl">🗑️</span>
          <h3 className="text-xl font-bold">리뷰 삭제 확인</h3>
          <button
            className="text-gray-400 text-3xl ml-auto cursor-pointer"
            onClick={closeModal}
          >
            ×
          </button>
        </div>

        <p className="text-gray-700 text-sm">
          정말로 이 리뷰를 삭제하시겠습니까? 삭제된 내용은 복구할 수 없습니다.
        </p>

        <div className="flex justify-end space-x-3 pt-2">
          <button
            className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg cursor-pointer"
            onClick={closeModal}
          >
            취소
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg cursor-pointer">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDeleteComponent;
