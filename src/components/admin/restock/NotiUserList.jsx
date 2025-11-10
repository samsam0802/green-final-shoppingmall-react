import React from "react";

// RestockNotification.jsx
import { useState } from "react";
import MessageModal from "./MessageModal";

const NotiUserList = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");
  const [onModal, setOnModal] = useState(false);

  // 더미 데이터
  const notifications = [
    {
      id: 1,
      date: "2025-03-10",
      customer: "김철수",
      phone: "010-1234-5678",
      option: "색상: GREEN, 크기: L",
      status: "대기",
      restockDate: "2025-06-08",
    },
    {
      id: 2,
      date: "2025-03-09",
      customer: "이영희",
      phone: "010-8765-4321",
      option: "색상: YELLOW, 크기: M",
      status: "발송완료",
      restockDate: "2025-06-05",
    },
    {
      id: 3,
      date: "2025-03-08",
      customer: "박민수",
      phone: "010-5555-6666",
      option: "색상: GREEN, 크기: S",
      status: "대기",
      restockDate: "2025-06-10",
    },
  ];

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(notifications.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (notification, checked) => {
    if (checked) {
      setSelectedItems((prev) => {
        const data = [...prev, notification];
        console.log(data);
        return data;
      });
    } else {
      setSelectedItems((prev) => {
        const data = prev.filter((prevnoti) => prevnoti.id !== notification.id);
        console.log(data);
        return data;
      });
    }
  };

  const sendCheckedNotiHandler = (notification) => {
    setSelectedItems((prev) => {
      const notis = prev.filter((noti) => noti.id !== notification.id);
      const data = [...notis, notification];
      return data;
    });
    setOnModal(true);
  };

  const sendAllNotifiHandler = () => {
    setSelectedItems([...notifications]);
    setOnModal(true);
  };

  const tabs = [
    { key: "all", label: "전체", count: 4 },
    { key: "waiting", label: "대기", count: 2 },
    { key: "sent", label: "발송완료", count: 1 },
    { key: "failed", label: "발송실패", count: 1 },
  ];
  // /{ selectedUsers, restockProductId, onClose }
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {onModal ? (
        <MessageModal
          selectedUsers={selectedItems}
          productId={"1"}
          onClose={setOnModal}
        ></MessageModal>
      ) : (
        <></>
      )}
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">재입고 알림</h1>
        </div>

        {/* 상품 정보 카드 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Imweb 맨투맨
              </h2>
              <div className="text-sm text-gray-600 mb-4">
                <span className="mr-4">색상: GREEN, YELLOW</span>
                <span>크기: S, M, L</span>
              </div>

              <div className="flex items-center space-x-6">
                <div>
                  <span className="text-sm text-gray-500">재고</span>
                  <div className="text-xl font-bold text-gray-800">494</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">상태</span>
                  <div className="text-sm text-gray-800">정상</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 알림 목록 섹션 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* 섹션 헤더 */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">신청 목록</h2>
          </div>

          {/* 탭 메뉴 */}
          <div className="px-6 border-b border-gray-200">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setCurrentTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    currentTab === tab.key
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* 액션 바 */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === notifications.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {selectedItems.length}개 선택됨
                  </span>
                </label>
                {selectedItems.length > 0 && (
                  <button className="text-sm text-gray-600 hover:text-gray-800">
                    선택 취소
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={sendAllNotifiHandler}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  알림 일괄 발송
                </button>
              </div>
            </div>
          </div>

          {/* 알림 목록 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    선택
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    신청일
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    고객정보
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    옵션
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    상태
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    재입고 예정일
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    액션
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <tr key={notification.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedItems
                          .map((noti) => noti.id)
                          .includes(notification.id)}
                        onChange={(e) =>
                          handleSelectItem(notification, e.target.checked)
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {notification.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {notification.customer}
                      </div>
                      <div className="text-sm text-gray-500">
                        {notification.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {notification.option}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          notification.status === "발송완료"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {notification.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {notification.restockDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => sendCheckedNotiHandler(notification)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        알림발송
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                총 <span className="font-medium">4</span>개의 알림신청
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                  이전
                </button>
                <button className="px-3 py-1 text-sm border border-blue-500 rounded-md bg-blue-50 text-blue-600">
                  1
                </button>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotiUserList;
