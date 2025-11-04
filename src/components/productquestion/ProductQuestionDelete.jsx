import React from "react";
import { X, Trash2 } from "lucide-react";

/**
 * 삭제 확인 모달
 */
export default function ProductQuestionDelete({
  item,
  onCancel = () => {},
  onConfirm = () => {},
}) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full space-y-6">
        <div className="flex items-center space-x-3 text-gray-800 border-b pb-2">
          <Trash2 className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-bold">문의 삭제 확인</h3>
          <button
            className="text-gray-400 text-3xl ml-auto cursor-pointer hover:text-gray-600 transition-colors"
            onClick={onCancel}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-700 text-sm">
          정말로 이 문의를 삭제하시겠습니까? 삭제된 내용은 복구할 수 없습니다.
        </p>
        <p className="text-xs text-gray-500 font-medium">제목: {item.title}</p>

        <div className="flex justify-end space-x-3 pt-2">
          <button
            className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg cursor-pointer hover:bg-red-700 transition-colors"
            onClick={onConfirm}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
