import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([
    {
      id: 1,
      brand: "HYGEE",
      name: "보디 바디스크럽 285g",
      price: 24000,
      qty: 1,
    },
    {
      id: 2,
      brand: "HYGEE",
      name: "수딩 알로에 진정 수분크림 120ml",
      price: 42000,
      qty: 1,
    },
    {
      id: 3,
      brand: "HYGEE",
      name: "수분 진정 토너 500ml",
      price: 45000,
      qty: 1,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState(
    cart.map((item) => item.id)
  );

  const toggleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((item) => item.id));
    }
  };

  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i))
    );
  };

  const selectedCartItems = cart.filter((item) =>
    selectedItems.includes(item.id)
  );

  const totalPrice = selectedCartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = totalPrice >= 20000 ? 0 : 2500;

  // ✅ 주문 페이지 이동 시 선택한 상품만 전달
  const handleOrderSelected = () => {
    navigate("/order", { state: { items: selectedCartItems } });
  };

  // ✅ 전체 주문 시 전체 장바구니 전달
  const handleOrderAll = () => {
    navigate("/order", { state: { items: cart } });
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 text-sm text-[#111111]">
      {/* ✅ 선택박스 */}
      <div className="flex items-center mb-3">
        <input
          type="checkbox"
          checked={selectedItems.length === cart.length}
          onChange={toggleSelectAll}
          className="mr-2"
        />
        <span className="text-sm">
          전체 선택 ({selectedItems.length}/{cart.length})
        </span>
      </div>

      {/* ✅ 상품 리스트 */}
      <div className="border-t bg-white rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-xs">
            <tr>
              <th className="w-10 p-3"></th>
              <th className="p-3">상품정보</th>
              <th className="p-3 text-center">판매가</th>
              <th className="p-3 text-center">수량</th>
              <th className="p-3 text-center">구매가</th>
              <th className="p-3 text-center">관리</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {cart.map((item) => {
              return (
                <tr key={item.id} className="border-b last:border-none">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectItem(item.id)}
                    />
                  </td>

                  {/* 상품 정보 */}
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-md text-gray-500 flex items-center justify-center text-xs">
                        IMG
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.brand}</p>
                        <p className="font-medium">{item.name}</p>
                      </div>
                    </div>
                  </td>

                  {/* 판매가 */}
                  <td className="text-center p-3">
                    <p className="text-[#111111] font-semibold">
                      {item.price.toLocaleString()}원
                    </p>
                  </td>

                  {/* 수량 */}
                  <td className="text-center p-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="w-6 h-6 border border-[#111111] rounded text-xs"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{item.qty}</span>
                      <button
                        className="w-6 h-6 border border-[#111111] rounded text-xs"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* 구매가 */}
                  <td className="text-center p-3 font-semibold">
                    {(item.price * item.qty).toLocaleString()}원
                  </td>

                  <td className="text-center p-3">
                    <button className="text-xs hover:underline">삭제</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ✅ 금액 요약 및 주문 버튼 */}
      <div className="mt-8 bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex justify-between py-2">
          <span>총 상품가</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between py-2">
          <span>배송비</span>
          <span>
            {shipping === 0 ? "0원" : `${shipping.toLocaleString()}원`}
          </span>
        </div>

        <div className="flex justify-between py-4 text-lg font-bold border-t mt-4">
          <span>총 결제예상금액</span>
          <span className="text-[#ff5c00]">
            {(totalPrice + shipping).toLocaleString()}원
          </span>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            className="flex-1 py-3 border border-[#111111] rounded-lg text-[#111111] hover:bg-gray-100 transition"
            onClick={handleOrderSelected}
          >
            선택상품 주문
          </button>

          <button
            className="flex-1 py-3 bg-[#111111] text-white rounded-lg hover:bg-black transition"
            onClick={handleOrderAll}
          >
            전체상품 주문
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
