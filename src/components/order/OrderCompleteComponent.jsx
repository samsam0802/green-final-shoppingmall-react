import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderCompleteComponent = () => {
  const location = useLocation();
  const orderData = location.state; // ✅ 결제 시 전달받은 주문 정보(임시)

  // 테스트용: orderData 없을 경우 더미 데이터 사용
  const order = orderData || {
    orderNumber: "20250204-1234567",
    receiver: "홍길동",
    address: "서울특별시 강남구 테헤란로 123",
    phone: "010-1234-5678",
    items: [
      {
        id: 1,
        name: "오버핏 반팔티",
        brand: "Musinsa Standard",
        price: 19000,
        qty: 1,
        image: "/images/top1.jpg",
      },
    ],
    totalPrice: 19000,
  };

  return (
    <div className="max-w-3xl mx-auto mt-14 p-6">
      {/* 상단 완료 메시지 */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">주문이 완료되었습니다 🎉</h2>
        <p className="text-gray-600 mt-2">주문 번호: {order.orderNumber}</p>
      </div>

      {/* 배송 정보 */}
      <div className="border rounded-lg p-5 mb-8 bg-gray-50">
        <h3 className="text-lg font-semibold mb-3">배송 정보</h3>
        <p className="text-sm text-gray-600">받는 사람: {order.receiver}</p>
        <p className="text-sm text-gray-600">주소: {order.address}</p>
        <p className="text-sm text-gray-600">연락처: {order.phone}</p>
      </div>

      {/* 상품 목록 */}
      <div className="border rounded-lg p-5 mb-8">
        <h3 className="text-lg font-semibold mb-4">주문 상품</h3>

        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <p className="text-sm text-gray-600 mt-1">{item.qty}개</p>
              </div>
              <p className="font-semibold">
                {(item.price * item.qty).toLocaleString()}원
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 결제 금액 */}
      <div className="border rounded-lg p-5 mb-8">
        <div className="flex justify-between text-lg font-semibold">
          <span>총 결제 금액</span>
          <span>{order.totalPrice.toLocaleString()}원</span>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="flex gap-4 justify-center">
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
