import React from "react";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const dummyCart = [
    { id: 1, name: "[NEW] 보디 바디스크럽 285g", price: 17900, qty: 1 },
    { id: 2, name: "수딩 알로에 진정 수분크림 120ml", price: 34900, qty: 1 },
    { id: 3, name: "수분 진정 토너 500ml", price: 36900, qty: 1 },
  ];

  const totalPrice = dummyCart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const discount = 77500; // 와이어프레임용 더미값
  const shipping = 0; // 20,000 이상 무료라고 가정

  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate({ pathname: "/order" });
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 text-sm">
      {/* 탭 영역 */}
      <div className="flex border-b">
        <button className="px-6 py-3 border-b-2 border-black font-semibold">
          일반 배송 ( {dummyCart.length} )
        </button>
        <button className="px-6 py-3 text-gray-500">오늘드림 픽업 (0)</button>
      </div>

      {/* 상품 리스트 테이블 */}
      <table className="w-full mt-6 border-t text-left">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="w-10 p-3">
              <input type="checkbox" />
            </th>
            <th className="p-3">상품정보</th>
            <th className="p-3 text-center">판매가</th>
            <th className="p-3 text-center">수량</th>
            <th className="p-3 text-center">구매가</th>
            <th className="p-3 text-center">배송정보</th>
            <th className="p-3 text-center">선택</th>
          </tr>
        </thead>

        <tbody>
          {dummyCart.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-3">
                <input type="checkbox" />
              </td>

              {/* 상품 이미지 + 이름 */}
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <div className="w-20 h-20 bg-gray-200 rounded text-gray-500 flex items-center justify-center">
                    IMG
                  </div>
                  <div>{item.name}</div>
                </div>
              </td>

              <td className="text-center p-3">
                {item.price.toLocaleString()}원
              </td>

              {/* 수량 */}
              <td className="text-center p-3">
                <div className="border inline-flex">
                  <button className="px-2">-</button>
                  <span className="px-4">{item.qty}</span>
                  <button className="px-2">+</button>
                </div>
              </td>

              <td className="text-center p-3 font-semibold">
                {(item.price * item.qty).toLocaleString()}원
              </td>

              <td className="text-center p-3">무료배송</td>

              {/* 선택 버튼 */}
              <td className="text-center p-3 space-y-1">
                <button className="block border rounded px-3 py-1 text-xs">
                  보관함
                </button>
                <button className="block border rounded px-3 py-1 text-xs">
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 금액 요약 박스 */}
      <div className="mt-8 border-t pt-6 bg-gray-50 p-6 rounded text-sm">
        <div className="flex justify-between py-2">
          <span>총 상품가</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between py-2">
          <span>총 할인금액</span>
          <span className="text-red-500">-{discount.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between py-2">
          <span>배송비</span>
          <span>
            {shipping === 0 ? "0원" : `${shipping.toLocaleString()}원`}
          </span>
        </div>

        <div className="flex justify-between py-4 text-lg font-bold border-t mt-4">
          <span>총 결제예상금액</span>
          <span className="text-red-600">
            {(totalPrice - discount + shipping).toLocaleString()}원
          </span>
        </div>

        {/* 버튼 */}
        <div className="flex gap-3 mt-6">
          <button
            className="flex-1 py-3 border rounded"
            onClick={handleOrderClick}
          >
            선택상품 주문
          </button>
          <button
            className="flex-1 py-3 bg-[#ff6c6c] text-white rounded"
            onClick={handleOrderClick}
          >
            전체상품 주문
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
