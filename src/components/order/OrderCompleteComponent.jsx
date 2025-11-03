import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderCompleteComponent = () => {
  const location = useLocation();

  // ✅ 주문 완료 페이지로 전달된 데이터 받기
  const orderData = location.state;

  // ✅ 전달됨 → 전달된 실제 주문 데이터 사용
  // ✅ 전달 안됨 → 기존 더미 데이터 사용
  const order = orderData || {
    orderNumber: "20250204-9876543",
    receiver: "홍길동",
    address: "서울특별시 강남구 테헤란로 123",
    phone: "010-1234-5678",
    items: [
      {
        id: 1,
        name: "진정 수분 토너",
        brand: "ROUND LAB",
        originalPrice: 18000,
        salePrice: 15000,
        qty: 1,
        image: "/images/toner1.jpg",
      },
      {
        id: 2,
        name: "고보습 세럼 앰플",
        brand: "COSRX",
        originalPrice: 18000,
        salePrice: 22000,
        qty: 2,
        image: "/images/serum1.jpg",
      },
      {
        id: 3,
        name: "저자극 크림",
        brand: "LA ROCHE-POSAY",
        originalPrice: 18000,
        salePrice: 28900,
        qty: 1,
        image: "/images/cream1.jpg",
      },
    ],
    couponDiscount: 3000,
    shippingFee: 2500,
    couponName: "신규회원 20% 할인쿠폰",
    paymentMethod: "신용/체크카드",
  };

  // ✅ 총 상품금액 계산
  const productsTotal = order.items.reduce(
    (sum, item) => sum + item.salePrice * item.qty,
    0
  );

  // ✅ 최종 결제 금액
  const finalPayPrice =
    productsTotal - (order.couponDiscount || 0) + (order.shippingFee || 0);

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 pb-24">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold">주문이 완료되었습니다</h2>
        <p className="text-gray-600 mt-2 text-sm">
          소중한 결제가 정상 처리되었습니다.
        </p>
      </div>

      {/* 배송 정보 */}
      <div className="border rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">배송 정보</h3>
        <p className="text-sm text-gray-700">받는 사람: {order.receiver}</p>
        <p className="text-sm text-gray-700 mt-1">주소: {order.address}</p>
        <p className="text-sm text-gray-700 mt-1">연락처: {order.phone}</p>
      </div>

      {/* 주문 상품 목록 */}
      <div className="border rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">주문 상품</h3>

        <div className="space-y-5">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 pb-4 border-b last:border-b-0"
            >
              <img
                src={item.image}
                className="w-20 h-20 object-cover rounded-md border"
                alt={item.name}
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.brand}</p>
                <p className="text-sm text-gray-600 mt-1">수량: {item.qty}개</p>
              </div>
              <p className="font-semibold whitespace-nowrap">
                {(item.salePrice * item.qty).toLocaleString()}원
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 결제 금액 */}
      <div className="border rounded-lg p-6 mb-10 bg-gray-50 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>상품 총금액</span>
          <span>{productsTotal.toLocaleString()}원</span>
        </div>

        {/* ✅ 쿠폰 할인 값 전달된 경우만 표시 */}
        {order.couponDiscount > 0 && (
          <div className="flex justify-between text-[#ff5c00]">
            <span>쿠폰 할인 {order.couponName && `(${order.couponName})`}</span>
            <span>- {order.couponDiscount.toLocaleString()}원</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>배송비</span>
          <span>+ {order.shippingFee.toLocaleString()}원</span>
        </div>

        {/* ✅ 선택한 결제수단 표시 */}
        {order.paymentMethod && (
          <div className="flex justify-between text-gray-600">
            <span>결제수단</span>
            <span>{order.paymentMethod}</span>
          </div>
        )}

        <div className="border-t pt-3 flex justify-between font-semibold text-lg">
          <span>최종 결제 금액</span>
          <span className="text-[#ff5c00] text-xl">
            {finalPayPrice.toLocaleString()}원
          </span>
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex gap-3 justify-center">
        <Link
          to="/mypage/orders"
          className="border px-6 py-3 rounded-md hover:bg-gray-100"
        >
          주문 내역 확인
        </Link>
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
        >
          쇼핑 계속하기
        </Link>
      </div>
    </div>
  );
};

export default OrderCompleteComponent;
