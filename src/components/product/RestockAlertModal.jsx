import React from "react";

const RestockAlertModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-[420px] rounded-2xl p-6 relative">
        {/* 닫기 버튼 */}
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-2">재입고 알림 신청</h2>
        <p className="text-sm text-gray-600 mb-4">
          상품이 입고되면 알림을 받으시겠어요? 알림은 30일 후 자동으로 해제돼요.
        </p>

        {/* 상품 정보 예시 */}
        <div className="flex items-center gap-3 border rounded-lg p-3 mb-5">
          <img
            src="https://via.placeholder.com/60"
            alt="상품 이미지"
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <p className="text-sm font-medium">[예시] 메디힐 마스크팩</p>
            <p className="text-xs text-gray-500">
              히알루론산 고밀도 수분 10+1매
            </p>
          </div>
        </div>

        {/* 알림 방법 선택 */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">알림 방법</p>
          <div className="flex flex-col gap-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="alertMethod" defaultChecked />
              카카오톡
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="alertMethod" />
              문자메시지
            </label>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            알림 받기
          </button>
          <button
            className="flex-1 py-2 border rounded-md hover:bg-gray-100"
            onClick={onClose}
          >
            취소
          </button>
        </div>

        {/* 안내 문구 */}
        <div className="mt-6 text-xs text-gray-500 space-y-1 border-t pt-4">
          <p>· 재입고 알림은 최대 30일 동안 유지돼요.</p>
          <p>· 상품이 입고되지 않으면 다시 신청해야 해요.</p>
          <p>· 인기 상품은 빠르게 품절될 수 있어요.</p>
          <p>· 알림은 최대 10개까지 신청할 수 있어요.</p>
        </div>
      </div>
    </div>
  );
};

export default RestockAlertModal;
