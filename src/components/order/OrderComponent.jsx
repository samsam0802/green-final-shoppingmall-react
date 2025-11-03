import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CouponModal from "./CouponModal";
import AddressModal from "./AddressModal";

const OrderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ 장바구니에서 전달된 데이터
  const passedItems = location.state?.items || [];

  // ✅ cartItems는 전달된 값이 있으면 그것을 사용
  const [cartItems, setCartItems] = useState(
    passedItems.length > 0
      ? passedItems
      : [
          {
            id: 1,
            name: "진정 수분 토너",
            brand: "HYGEE",
            originalPrice: 18000,
            salePrice: 15000,
            qty: 1,
            image: "/images/toner1.jpg",
          },
        ]
  );

  const [showCouponModal, setShowCouponModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const [receiver, setReceiver] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // ✅ 배송 요청 사항
  const [deliveryMemo, setDeliveryMemo] = useState("");
  const [customDeliveryMemo, setCustomDeliveryMemo] = useState("");

  // ✅ 결제수단
  const paymentMethods = [
    { id: "card", label: "신용/체크카드" },
    { id: "kakao", label: "카카오페이" },
    { id: "naver", label: "네이버페이" },
    { id: "payco", label: "PAYCO" },
    { id: "phone", label: "휴대폰 결제" },
    { id: "bank", label: "계좌이체" },
  ];
  const [selectedPayment, setSelectedPayment] = useState("card");

  const paymentMethod = paymentMethods.find(
    (m) => m.id === selectedPayment
  ).label;

  // ✅ 약관 동의
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreePurchase, setAgreePurchase] = useState(false);
  const [agreePersonal, setAgreePersonal] = useState(false);
  const [agreeDelegate, setAgreeDelegate] = useState(false);

  // ✅ 수량 변경
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // ✅ 가격 계산
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.salePrice * item.qty,
    0
  );
  const shippingFee = totalPrice >= 30000 ? 0 : 3000;
  const couponDiscount = selectedCoupon ? selectedCoupon.amount : 0;
  const finalPrice = totalPrice + shippingFee - couponDiscount;
  const couponName = selectedCoupon ? selectedCoupon.name : null;

  // ✅ 결제 완료 페이지로 이동 + 모든 정보 전달
  const handleOrderCompleteClick = () => {
    navigate("/order/complete", {
      state: {
        items: cartItems,
        receiver,
        address,
        phone,
        couponDiscount,
        shippingFee,
        couponName,
        paymentMethod,
        deliveryMemo:
          deliveryMemo === "직접입력" ? customDeliveryMemo : deliveryMemo,
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 text-sm text-[#111111]">
      <h2 className="text-2xl font-semibold mb-10">주문 / 결제</h2>

      {/* ✅ 주문 상품 */}
      <section className="border-t pt-6">
        <h3 className="font-semibold text-lg mb-4">주문 상품</h3>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center py-4 border-b"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-md flex justify-center items-center text-xs text-gray-500">
                IMG
              </div>
              <div>
                <p className="text-xs text-gray-500">{item.brand}</p>
                <p className="font-semibold">{item.name}</p>
                <p className="line-through text-xs text-gray-400">
                  {item.originalPrice.toLocaleString()}원
                </p>
                <p className="font-bold text-[#ff5c00]">
                  {item.salePrice.toLocaleString()}원
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <button
                  className="w-6 h-6 border border-[#111111] rounded text-xs flex justify-center items-center"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <span className="w-6 text-center">{item.qty}</span>
                <button
                  className="w-6 h-6 border border-[#111111] rounded text-xs flex justify-center items-center"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              <p className="font-semibold whitespace-nowrap">
                {(item.salePrice * item.qty).toLocaleString()}원
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ✅ 배송지 */}
      <section className="mt-10 border-t pt-6">
        <h3 className="font-semibold text-lg mb-4">배송지 정보</h3>

        <div className="flex gap-3 mb-4">
          <button
            className="px-4 py-2 rounded border border-[#111111] hover:bg-[#111111] hover:text-white transition"
            onClick={() => {
              setReceiver("홍길동");
              setPhone("010-1234-5678");
              setAddress("서울특별시 강남구 테헤란로 123");
            }}
          >
            기존 배송지 사용
          </button>

          <button
            className="px-4 py-2 rounded border border-[#111111] hover:bg-[#111111] hover:text-white transition"
            onClick={() => {
              setReceiver("");
              setPhone("");
              setAddress("");
            }}
          >
            신규 배송지 입력
          </button>
        </div>

        <input
          className="border p-2 w-full rounded mb-2"
          placeholder="받는 사람"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded mb-2"
          placeholder="연락처 (010-0000-0000)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="flex gap-2 mb-3">
          <input
            className="border p-2 flex-1 rounded"
            placeholder="우편번호"
            readOnly
          />
          <button
            className="border px-4 py-2 rounded border-[#111111] hover:bg-[#f2f2f2]"
            onClick={() => setShowAddressModal(true)}
          >
            우편번호 찾기
          </button>
        </div>

        <input
          className="border p-2 w-full rounded mb-2"
          placeholder="도로명 주소"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded mb-2"
          placeholder="상세주소"
        />
      </section>

      {/* ✅ 배송요청사항 */}
      <section className="mt-10 border-t pt-6">
        <h3 className="font-semibold text-lg mb-4">배송 요청사항</h3>

        <select
          className="border p-2 w-full rounded"
          value={deliveryMemo}
          onChange={(e) => setDeliveryMemo(e.target.value)}
        >
          <option value="">배송요청사항 선택</option>
          <option value="문 앞에 놓아주세요.">문 앞에 놓아주세요.</option>
          <option value="배송 전에 미리 연락 바랍니다.">
            배송 전에 미리 연락 바랍니다.
          </option>
          <option value="부재 시 경비실에 맡겨주세요.">
            부재 시 경비실에 맡겨주세요.
          </option>
          <option value="부재 시 전화/문자 남겨 주세요.">
            부재 시 전화/문자 남겨 주세요.
          </option>
          <option value="직접입력">직접입력</option>
        </select>

        {deliveryMemo === "직접입력" && (
          <input
            className="border p-2 w-full rounded mt-2"
            placeholder="예: 택배함에 넣어주세요"
            value={customDeliveryMemo}
            onChange={(e) => setCustomDeliveryMemo(e.target.value)}
          />
        )}
      </section>

      {/* ✅ 쿠폰 */}
      <section className="mt-10 border-t pt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg">할인 / 쿠폰</h3>
          <button
            className="underline"
            onClick={() => setShowCouponModal(true)}
          >
            보유 쿠폰 보기
          </button>
        </div>

        <div className="text-gray-500">
          {selectedCoupon ? (
            <span className="font-semibold text-[#111111]">
              적용된 쿠폰: {couponName} (-{couponDiscount.toLocaleString()}원)
            </span>
          ) : (
            "사용 가능한 쿠폰 1개"
          )}
        </div>
      </section>

      {/* ✅ 결제수단 */}
      <section className="mt-10 border-t pt-6">
        <h3 className="font-semibold text-lg mb-3">결제수단</h3>

        <div className="grid grid-cols-3 gap-3">
          {paymentMethods.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedPayment(m.id)}
              className={`border px-4 py-3 rounded transition ${
                selectedPayment === m.id
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "border-[#111111] hover:bg-[#f2f2f2]"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </section>

      {/* ✅ 약관 동의 */}
      <section className="mt-10 border-t pt-6">
        <h3 className="font-semibold text-lg mb-4">구매 이용약관 동의</h3>

        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreeAll}
            onChange={(e) => {
              const checked = e.target.checked;
              setAgreeAll(checked);
              setAgreePurchase(checked);
              setAgreePersonal(checked);
              setAgreeDelegate(checked);
            }}
          />
          모두 동의합니다.
        </label>

        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={agreePurchase}
            onChange={(e) => setAgreePurchase(e.target.checked)}
          />{" "}
          구매에 동의 (필수)
        </label>

        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={agreePersonal}
            onChange={(e) => setAgreePersonal(e.target.checked)}
          />{" "}
          개인정보 수집 및 이용 동의 (필수)
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={agreeDelegate}
            onChange={(e) => setAgreeDelegate(e.target.checked)}
          />{" "}
          개인정보 취급 위탁 동의 (필수)
        </label>
      </section>

      {/* ✅ 결제 요약 */}
      <section className="mt-12 border-t pt-6 bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="flex justify-between py-2">
          <span>총 상품금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between py-2">
          <span>배송비</span>
          <span>{shippingFee.toLocaleString()}원</span>
        </div>

        {selectedCoupon && (
          <div className="flex justify-between py-2 text-[#ff5c00]">
            <span>쿠폰 할인</span>
            <span>- {couponDiscount.toLocaleString()}원</span>
          </div>
        )}

        <div className="flex justify-between py-3 border-t mt-3 text-lg font-bold">
          <span>최종 결제금액</span>
          <span className="text-[#111111]">
            {finalPrice.toLocaleString()}원
          </span>
        </div>

        <button
          className={`w-full py-3 rounded mt-4 text-lg transition ${
            agreePurchase && agreePersonal && agreeDelegate
              ? "bg-[#111111] text-white hover:bg-black"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!(agreePurchase && agreePersonal && agreeDelegate)}
          onClick={handleOrderCompleteClick}
        >
          결제하기
        </button>
      </section>

      {showCouponModal && (
        <CouponModal
          onClose={() => setShowCouponModal(false)}
          onSelect={(coupon) => {
            setSelectedCoupon(coupon);
            setShowCouponModal(false);
          }}
        />
      )}

      {showAddressModal && (
        <AddressModal onClose={() => setShowAddressModal(false)} />
      )}
    </div>
  );
};

export default OrderComponent;
