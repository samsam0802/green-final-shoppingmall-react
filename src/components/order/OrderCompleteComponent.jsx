import React from "react";
import { useLocation, Link } from "react-router-dom";

const OrderCompleteComponent = () => {
  const location = useLocation();
  const order = location.state;

  // ✅ 만약 데이터 없이 직접 접근한 경우 → 홈으로 이동시키기
  if (!order) {
    return (
      <div className="max-w-4xl mx-auto text-center mt-20">
        <p className="text-lg">잘못된 접근입니다.</p>
        <Link to="/" className="text-blue-600 underline mt-4 block">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const {
    items,
    receiver,
    address,
    zipCode,
    detailAddress,
    phone,
    couponDiscount,
    shippingFee,
    couponName,
    paymentMethod,
    orderNumber,
    deliveryMemo,
  } = order;

  const totalPrice = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  const finalPrice = totalPrice + shippingFee - couponDiscount;

  return (
    <div className="max-w-4xl mx-auto p-6 text-[#111] mt-12">
      <h2 className="text-3xl font-bold mb-8">주문이 완료되었습니다 🎉</h2>

      <p className="text-gray-600 text-lg mb-6">
        주문번호:{" "}
        <span className="font-semibold text-[#111]">{orderNumber}</span>
      </p>

      <section className="bg-white border p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="font-semibold text-lg">주문 상품</h3>

        {items.map((item) => (
          <div
            key={item.id + item.name}
            className="flex justify-between items-center py-3 border-b last:border-0"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                className="w-16 h-16 rounded border object-cover"
              />
              <div>
                <p className="text-xs text-gray-500">{item.brand}</p>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-700">
                  {item.price.toLocaleString()}원 × {item.qty}개
                </p>
              </div>
            </div>

            <p className="font-semibold">
              {(Number(item.price) * Number(item.qty)).toLocaleString()}원
            </p>
          </div>
        ))}
      </section>

      <section className="bg-white border p-6 rounded-lg shadow-sm space-y-3 mt-8">
        <h3 className="font-semibold text-lg">배송 정보</h3>
        <p>받는 사람: {receiver}</p>
        <p>연락처: {phone}</p>
        <p>
          주소: ({zipCode}) {address} {detailAddress}
        </p>
        {deliveryMemo && <p>요청사항: {deliveryMemo}</p>}
      </section>

      <section className="bg-white border p-6 rounded-lg shadow-sm space-y-3 mt-8">
        <h3 className="font-semibold text-lg">결제 내역</h3>
        <div className="flex justify-between py-1">
          <span>결제수단</span>
          <span>{paymentMethod}</span>
        </div>
        <div className="flex justify-between">
          <span>총 상품금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between">
          <span>배송비</span>
          <span>{shippingFee.toLocaleString()}원</span>
        </div>

        {couponDiscount > 0 && (
          <div className="flex justify-between text-[#ff5c00] font-medium">
            <span>쿠폰 할인 ({couponName})</span>
            <span>- {couponDiscount.toLocaleString()}원</span>
          </div>
        )}

        <div className="flex justify-between border-t pt-3 text-lg font-bold">
          <span>최종 결제금액</span>
          <span>{finalPrice.toLocaleString()}원</span>
        </div>
      </section>

      <div className="flex justify-center mt-10">
        <Link
          to="/"
          className="px-6 py-3 bg-[#111] text-white rounded-md hover:bg-black transition"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default OrderCompleteComponent;
