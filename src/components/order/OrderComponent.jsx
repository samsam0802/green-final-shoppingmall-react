import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderComponent = () => {
  const [deliveryMemo, setDeliveryMemo] = useState("");

  const cartItems = [
    { id: 1, name: "진정 수분 토너", price: 15000, qty: 1 },
    { id: 2, name: "촉촉 진정 세럼", price: 22000, qty: 1 },
  ];

  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  const navigate = useNavigate();

  const handleOrderCompleteClick = () => {
    navigate({ pathname: "/order/complete" });
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 text-sm">
      <h2 className="text-2xl font-semibold mb-8">주문 / 결제</h2>

      {/* ✅ 주문 상품 목록 */}
      <section className="border-t pt-6">
        <h3 className="font-semibold text-lg mb-4">주문 상품</h3>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-3 border-b">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                IMG
              </div>
              <span>{item.name}</span>
            </div>
            <span>{item.qty}개</span>
            <span className="font-semibold">
              {item.price.toLocaleString()}원
            </span>
          </div>
        ))}
      </section>

      {/* ✅ 배송 정보 */}
      <section className="mt-10 border-t pt-6">
        <h3 className="font-semibold text-lg mb-3">배송지 정보</h3>

        <input className="border p-2 w-full rounded mb-2" placeholder="이름" />
        <input
          className="border p-2 w-full rounded mb-2"
          placeholder="연락처 (010-0000-0000)"
        />
        <input className="border p-2 w-full rounded mb-2" placeholder="주소" />

        <select
          className="border p-2 w-full rounded mt-2 text-gray-600"
          value={deliveryMemo}
          onChange={(e) => setDeliveryMemo(e.target.value)}
        >
          <option value="">배송 시 요청사항 선택</option>
          <option value="문 앞에 놓아주세요">문 앞에 놓아주세요</option>
          <option value="직접 받고 싶어요">직접 받고 싶어요</option>
        </select>
      </section>

      {/* ✅ 주문자 정보 */}
      <section className="mt-10 border-t pt-6">
        <h3 className="font-semibold text-lg mb-3">주문자 정보</h3>

        <div className="grid grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="이름" />
          <input className="border p-2 rounded" placeholder="연락처" />
        </div>
      </section>

      {/* ✅ 할인 / 쿠폰 */}
      <section className="mt-10 border-t pt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg">할인 / 쿠폰</h3>
          <button className="text-blue-500 underline">쿠폰 선택</button>
        </div>
        <div className="text-gray-500">사용 가능한 쿠폰 0개</div>
      </section>

      {/* ✅ 결제 수단 */}
      <section className="mt-10 border-t pt-6">
        <h3 className="font-semibold text-lg mb-3">결제수단</h3>

        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded">카드 결제</button>
          <button className="border px-4 py-2 rounded">간편결제</button>
          <button className="border px-4 py-2 rounded">계좌이체</button>
        </div>
      </section>

      {/* ✅ 결제 요약 */}
      <section className="mt-10 border-t pt-6 bg-gray-50 p-6 rounded">
        <div className="flex justify-between py-2">
          <span>총 상품가</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between py-2">
          <span>배송비</span>
          <span>0원</span>
        </div>

        <div className="flex justify-between py-3 border-t mt-3 text-lg font-bold">
          <span>최종 결제금액</span>
          <span className="text-red-600">{totalPrice.toLocaleString()}원</span>
        </div>

        <button
          className="w-full bg-[#ff6c6c] text-white py-3 rounded mt-4 text-lg"
          onClick={handleOrderCompleteClick}
        >
          결제하기
        </button>
      </section>
    </div>
  );
};

export default OrderComponent;
