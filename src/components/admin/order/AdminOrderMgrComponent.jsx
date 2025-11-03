import React, { useState } from "react";
import OrderSearchResultTable from "./OrderSearchResultTable";

const AdminOrderMgrComponent = () => {
  const [preShipStatus, setPreShipStatus] = useState({
    주문접수: false,
    결제확인: false,
    상품준비: false,
    출고준비: false,
    주문취소: false,
  });

  const [postShipStatus, setPostShipStatus] = useState({
    출고완료: false,
    배송중: false,
    배송완료: false,
    반품신청: false,
    반품완료: false,
  });

  return (
    <div className="max-w-6xl mx-auto bg-white my-10 text-sm font-['Inter']">
      {/* 헤더 */}
      <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 px-6 py-4 mb-4 flex justify-between items-center">
        전체 주문 조회
        <div className="space-x-2">
          <button className="border border-gray-300 bg-white px-3 py-1 text-gray-700 text-sm cursor-pointer">
            엑셀 다운로드
          </button>
          <button className="border border-gray-300 bg-white px-3 py-1 text-gray-700 text-sm cursor-pointer">
            프린트 설정
          </button>
        </div>
      </h2>

      {/* 검색 필터 전체 */}
      <div className="border border-gray-300 mb-6">
        {/* 검색어 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center">
            검색어
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            <input
              type="text"
              placeholder="주문번호, 주문자명, 상품명 등"
              className="border border-gray-300 p-1 w-80 bg-white"
            />
            <label className="ml-2 flex items-center select-none cursor-pointer">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mr-1 border border-gray-400"
              />
              부분검색
            </label>
          </div>
        </div>

        {/* 날짜 */}
        <div className="flex border-b border-gray-300 items-stretch">
          <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center">
            날짜
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            <select className="border border-gray-300 p-1 mr-2 bg-white cursor-pointer h-[32px]">
              <option>주문일</option>
              <option>결제일</option>
            </select>
            <div className="flex items-center gap-1">
              <input
                type="date"
                className="border border-gray-300 p-1 bg-white cursor-pointer h-[32px]"
              />
              <span>~</span>
              <input
                type="date"
                className="border border-gray-300 p-1 bg-white cursor-pointer h-[32px]"
              />
            </div>
            <div className="flex gap-1 ml-2">
              {["오늘", "1주", "15일", "1개월", "3개월", "6개월"].map(
                (label) => (
                  <button
                    key={label}
                    className="border border-gray-300 bg-white px-2 py-1 text-gray-700 text-xs cursor-pointer"
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* 주문상태(출고 전) */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center">
            주문상태(출고 전)
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            {Object.keys(preShipStatus).map((label) => (
              <label
                key={label}
                className="flex items-center select-none cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 mr-1 border border-gray-400"
                  checked={preShipStatus[label]}
                  onChange={(e) =>
                    setPreShipStatus({
                      ...preShipStatus,
                      [label]: e.target.checked,
                    })
                  }
                />
                {label}
              </label>
            ))}

            {/* 전체 체크 */}
            <label className="ml-3 flex items-center select-none cursor-pointer">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mr-1 border border-gray-400"
                checked={Object.values(preShipStatus).every(Boolean)}
                onChange={(e) =>
                  setPreShipStatus(
                    Object.fromEntries(
                      Object.keys(preShipStatus).map((k) => [
                        k,
                        e.target.checked,
                      ])
                    )
                  )
                }
              />
              전체
            </label>
          </div>
        </div>

        {/* 주문상태(출고 후) */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center">
            주문상태(출고 후)
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            {Object.keys(postShipStatus).map((label) => (
              <label
                key={label}
                className="flex items-center select-none cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 mr-1 border border-gray-400"
                  checked={postShipStatus[label]}
                  onChange={(e) =>
                    setPostShipStatus({
                      ...postShipStatus,
                      [label]: e.target.checked,
                    })
                  }
                />
                {label}
              </label>
            ))}

            {/* 전체 체크 */}
            <label className="ml-3 flex items-center select-none cursor-pointer">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 mr-1 border border-gray-400"
                checked={Object.values(postShipStatus).every(Boolean)}
                onChange={(e) =>
                  setPostShipStatus(
                    Object.fromEntries(
                      Object.keys(postShipStatus).map((k) => [
                        k,
                        e.target.checked,
                      ])
                    )
                  )
                }
              />
              전체
            </label>
          </div>
        </div>

        {/* 배송방법 */}
        <div className="flex border-b border-gray-300">
          <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center">
            배송방법
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            {["대한통운", "우체국", "직접입력", "해외국가"].map((label) => (
              <label
                key={label}
                className="flex items-center select-none cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 mr-1 border border-gray-400"
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* 주문결제 + 주문유형 */}
        <div className="flex border-b border-gray-300">
          <div className="flex flex-1 border-r border-gray-300">
            <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center">
              주문결제
            </div>
            <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
              {["무통장입금", "신용카드", "휴대폰결제"].map((label) => (
                <label
                  key={label}
                  className="flex items-center select-none cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 mr-1 border border-gray-400"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-1">
            <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center">
              주문유형
            </div>
            <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
              {["고객주문", "관리자주문"].map((label) => (
                <label
                  key={label}
                  className="flex items-center select-none cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 mr-1 border border-gray-400"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 결제상태 */}
        <div className="flex">
          <div className="w-40 bg-gray-50 border-r border-gray-300 font-semibold text-gray-700 flex items-center justify-center">
            결제상태
          </div>
          <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
            {["무통장입금 대기", "카드결제완료", "소액결제완료"].map(
              (label) => (
                <label
                  key={label}
                  className="flex items-center select-none cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 mr-1 border border-gray-400"
                  />
                  {label}
                </label>
              )
            )}
          </div>
        </div>
      </div>

      {/* 검색 버튼 */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-blue-600 text-white px-5 py-2 cursor-pointer">
          검색
        </button>
        <button className="border border-gray-300 bg-white px-5 py-2 text-gray-700 cursor-pointer">
          초기화
        </button>
      </div>

      <OrderSearchResultTable />
    </div>
  );
};

export default AdminOrderMgrComponent;
