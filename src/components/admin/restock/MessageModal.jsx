import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMessage } from "../../../redux/slices/features/admin/message/sendMessageSlice";

/**
 * 재입고 알림 신청자들에게 메시지를 발송하는 모달 컴포넌트
 * @param {Array} selectedUsers - 발송 대상으로 선택된 사용자 객체 리스트
 * @param {string} productId - 재입고된 상품의 ID
 * @param {function} onClose - 모달을 닫는 함수
 */
const MessageModal = ({ selectedUsers, productId, onClose }) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.sendMessageSlice);

  // 1. 상태 관리
  const [messageForm, setMessageForm] = useState({
    sendType: "SMS",
    messageContent: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState(null); // 발송 결과 메시지

  const selectedCount = selectedUsers.length;

  // 로그 확인
  console.log("reduxState : ", reduxState);

  useEffect(() => {
    dispatch(
      updateMessage({
        data: messageForm,
      })
    );
  }, [messageForm, dispatch]);

  // 2. 메시지 입력 핸들러
  const handleMessageChange = (e) => {
    const { value } = e.target;
    setMessageForm((prev) => {
      const form = { ...prev, messageContent: value };
      console.log(form);
      return form;
    });
  };

  // 3. 발송 방식 변경 핸들러
  const sendTypeChangeHandler = (e) => {
    const { name, value } = e.target;
    setMessageForm((prev) => {
      const form = { [name]: value, messageContent: "" };
      console.log(form);
      return form;
    });
  };

  // 4. 메시지 발송 API 호출 (Spring Boot 백엔드 연동)
  // const handleSend = useCallback(async () => {
  //     if (!messageContent.trim()) {
  //         alert('메시지 내용을 입력해 주세요.');
  //         return;
  //     }

  //     if (selectedCount === 0) {
  //         alert('발송 대상자가 없습니다.');
  //         return;
  //     }

  //     setIsSending(true);
  //     setSendResult(null);

  //     const payload = {
  //         productId: productId,
  //         sendType: sendType,
  //         content: messageContent,
  //         userIds: selectedUsers.map(user => user.id),
  //     };

  //     try {
  //         // Spring Boot의 알림 발송 API 엔드포인트 호출 가정
  //         const response = await axios.post('/api/notifications/send', payload);

  //         if (response.status === 200) {
  //             setSendResult(`✅ ${selectedCount}명에게 ${sendType} 발송을 성공적으로 요청했습니다.`);
  //             // 성공적으로 요청 후 모달 닫기
  //             setTimeout(onClose, 2000);
  //         } else {
  //             setSendResult('⚠️ 발송 요청에 실패했습니다. (서버 응답 오류)');
  //         }
  //     } catch (error) {
  //         console.error('메시지 발송 오류:', error);
  //         setSendResult('❌ 메시지 발송 중 오류가 발생했습니다. 로그를 확인하세요.');
  //     } finally {
  //         setIsSending(false);
  //     }
  // }, [sendType, messageContent, selectedUsers, selectedCount, productId, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          📢 재입고 알림 메시지 발송
        </h2>
        <p className="mb-4 text-gray-700">
          선택된 발송 대상:{" "}
          <strong className="text-indigo-600">{selectedCount}명</strong>
        </p>

        <hr className="mb-4 border-gray-200" />

        {/* 발송 방식 선택 */}
        <div className="mb-4 space-x-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="sendType"
              value="SMS"
              checked={messageForm.sendType === "SMS"}
              onChange={sendTypeChangeHandler}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2 font-medium text-gray-800">SMS 발송</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="sendType"
              value="EMAIL"
              checked={messageForm.sendType === "EMAIL"}
              onChange={sendTypeChangeHandler}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2 font-medium text-gray-800">EMAIL 발송</span>
          </label>
        </div>

        {/* 메시지 입력 */}
        <div className="mb-6">
          <label
            htmlFor="messageInput"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {messageForm.sendType === "SMS"
              ? "SMS 메시지 내용"
              : "이메일 본문 (HTML 가능)"}
          </label>
          <textarea
            id="messageInput"
            className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out ${
              messageForm.sendType === "EMAIL" ? "min-h-48" : "min-h-24"
            }`}
            value={messageForm.messageContent}
            onChange={handleMessageChange}
            placeholder={
              messageForm.sendType === "SMS"
                ? "SMS 내용을 입력하세요. (장문 고려)\n[상품명]과 [상품링크]는 백엔드에서 자동 추가됩니다."
                : "이메일 내용을 입력하세요. (HTML 태그 사용 가능)\n제목은 백엔드에서 고정 템플릿으로 처리됩니다."
            }
          />
        </div>

        {/* 발송 결과 */}
        {sendResult && (
          <p
            className={`mb-4 font-semibold ${
              sendResult.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {sendResult}
          </p>
        )}

        {/* 버튼 */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => onClose(false)}
            disabled={isSending}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-150 ease-in-out disabled:opacity-50"
          >
            취소
          </button>
          <button
            // onClick={handleSend}
            disabled={
              isSending ||
              selectedCount === 0 ||
              !messageForm.messageContent.trim()
            }
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out disabled:opacity-50"
          >
            {isSending ? "발송 중..." : "메시지 발송"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
