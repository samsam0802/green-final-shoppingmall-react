import React from "react";
import { X, Send } from "lucide-react";

/** 전역 알림 모달 */
export default function NotificationModal({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full space-y-4">
        <div className="flex items-center space-x-3 text-gray-800 border-b pb-2">
          <Send className="w-5 h-5 text-gray-500" />
          <h3 className="text-xl font-bold">{message.title || "알림"}</h3>
          <button
            className="text-gray-400 hover:text-gray-600 ml-auto"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-700 text-sm">{message.content}</p>

        <div className="flex justify-end pt-2">
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700"
            onClick={onClose}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
