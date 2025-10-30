import React, { useState } from "react";

const OrderHistoryComponent = () => {
  const [showEmpty] = useState(true); // 실제 기능 X, 와이어프레임용

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* 상단 고객 정보 / 포인트 (와이어프레임 간단 표시) */}
      <div className="bg-lime-200 p-4 rounded mb-6">
        <p className="font-semibold">BABYOLIVE 강*석님 반갑습니다.</p>
        <p className="text-sm mt-1">쿠폰 0 장</p>
      </div>

      <h1 className="text-xl font-bold mb-4">주문/배송 조회</h1>

      {/* 주문 상태 요약 */}
      <div className="grid grid-cols-5 text-center bg-gray-50 p-4 rounded-lg border mb-6">
        {["주문접수", "결제완료", "배송준비중", "배송중", "배송완료"].map(
          (label) => (
            <div key={label}>
              <p className="text-xl font-bold">0</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          )
        )}
      </div>

      {/* 검색 조건 영역 */}
      <div className="border rounded-lg p-6 mb-8 space-y-4 bg-white">
        {/* 구매기간 선택 */}
        <div>
          <p className="font-semibold mb-2 text-sm">구매기간</p>
          <div className="flex gap-3">
            {["1개월", "3개월", "6개월", "12개월"].map((m, i) => (
              <button
                key={m}
                className={`px-4 py-1.5 rounded border text-sm
                  ${
                    i === 0
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-600"
                  }
                `}
                disabled // 기능 없음
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* 날짜 선택 (동작 없음) */}
        <div className="flex items-center gap-2 text-sm">
          <select className="border p-1 rounded" disabled>
            <option>2025</option>
          </select>
          년
          <select className="border p-1 rounded" disabled>
            <option>09</option>
          </select>
          월
          <select className="border p-1 rounded" disabled>
            <option>29</option>
          </select>
          일 ~
          <select className="border p-1 rounded" disabled>
            <option>2025</option>
          </select>
          년
          <select className="border p-1 rounded" disabled>
            <option>10</option>
          </select>
          월
          <select className="border p-1 rounded" disabled>
            <option>29</option>
          </select>
          일
          <button className="ml-4 bg-green-500 text-white px-4 py-1.5 rounded">
            조회
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          ※ 최근 1년 내역 조회 가능 (와이어프레임 설명 텍스트)
        </p>
      </div>

      {/* 결과 테이블 */}
      <table className="w-full text-center border-t border-b text-sm">
        <thead className="bg-gray-100 h-10">
          <tr>
            <th>주문일자</th>
            <th>상품</th>
            <th>수량</th>
            <th>주문금액</th>
            <th>상태</th>
          </tr>
        </thead>
      </table>

      {/* 결과 없음 화면 */}
      {showEmpty && (
        <div className="text-center py-16 text-gray-500">
          <div className="text-3xl mb-3">⚠</div>
          <p>기간 내 주문내역이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryComponent;
