import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CouponModal from "./CouponModal";
import AddressModal from "./AddressModal";

const OrderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const passedItems = location.state?.items || [];

  const [cartItems, setCartItems] = useState(
    passedItems.length > 0
      ? passedItems
      : [
          {
            id: 1,
            name: "진정 수분 토너",
            brand: "HYGEE",
            price: 18000,
            qty: 1,
            image: "/images/toner1.jpg",
          },
        ]
  );

  const [showCouponModal, setShowCouponModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const [addressName, setAddressName] = useState("")
  const [useOrdererInfo, setUseOrdererInfo] = useState(false)
  const [receiver, setReceiver] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [isDefaultAddress, setIsDefaultAddress] = useState(false);

  const [deliveryMemo, setDeliveryMemo] = useState("");
  const [customDeliveryMemo, setCustomDeliveryMemo] = useState("");

  const [pointBalance, setPointBalance] = useState(966); // 보유 포인트
  const [usePoint, setUsePoint] = useState(0); // 사용할 포인트

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

  const [agreeAll, setAgreeAll] = useState(false);
  const [agreePurchase, setAgreePurchase] = useState(false);
  const [agreePersonal, setAgreePersonal] = useState(false);
  const [agreeDelegate, setAgreeDelegate] = useState(false);

//   // 수량 변경 관련 함수는 이제 사용되지 않지만, 로직을 건드리지 않기 위해 유지합니다.
//   const increaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
//       )
//     );
//   };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );
  const shippingFee = totalPrice >= 20000 ? 0 : 2500;
  const couponDiscount = selectedCoupon ? selectedCoupon.amount : 0;
  const finalPrice = totalPrice + shippingFee - couponDiscount - usePoint;
  const couponName = selectedCoupon ? selectedCoupon.name : null;

  const handleOrderCompleteClick = () => {
    // ✅ 주문번호 생성 (예: 20250207-38492034)
    const orderNumber = `ORD-${Date.now()}`;

    navigate("/order/complete", {
      state: {
        items: cartItems,
        receiver,
        address,
        zipCode,
        detailAddress,
        phone,
        couponDiscount,
        shippingFee,
        couponName,
        paymentMethod,
        orderNumber, // ✅ 추가
        deliveryMemo:
          deliveryMemo === "직접입력" ? customDeliveryMemo : deliveryMemo,
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 text-sm text-[#111] space-y-12">
      <h2 className="text-3xl font-bold tracking-tight mb-6">주문 / 결제</h2>

      {/* ✅ 주문 상품 - 테이블 형태로 변경 */}
      <section className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
        
        <div className="border-t">
          <table className="w-full text-center">
            <colgroup>
              <col style={{ width: "auto" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "15%" }} />
            </colgroup>
            <thead>
              <tr className="h-12 border-b text-gray-600 font-normal">
                <th>상품정보</th>
                <th>수량</th>
                <th>판매금액</th>
                <th>포인트</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b last:border-b-0">
                  <td className="py-4 text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex justify-center items-center">
                        <img
                          src={item.image}
                          alt=""
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500">[{item.brand}]</p>
                        <p className="font-medium">{item.name}</p>
                        
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-center">{item.qty}</td>
                  <td className="py-4 text-center font-semibold">
                    {(Number(item.price) * Number(item.qty)).toLocaleString()}원
                  </td>
                  {/* 포인트는 가격의 1%를 임시로 가정하여 계산 */}
                  <td className="py-4 text-center text-[#ff5c00] font-medium">
                    {Math.floor((Number(item.price) * Number(item.qty)) * 0.01)} P
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ✅ 배송지 */}
      <section className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">배송지 정보</h3>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={isDefaultAddress}
              onChange={(e) => setIsDefaultAddress(e.target.checked)}
            />
            기본 배송지 설정
          </label>
        </div>
        
        <div className="flex gap-3">
          <button
            className="px-4 py-2 rounded border hover:bg-gray-100 transition"
            onClick={() => {
            setAddressName("집")  
            setReceiver("홍길동");
              setPhone("010-1234-5678");
              setZipCode("06236");
              setAddress("서울특별시 강남구 테헤란로 123");
              setDetailAddress("삼성타워빌딩 10층");
            }}
          >
            기존 배송지 사용
          </button>

          <button
            className="px-4 py-2 rounded border hover:bg-gray-100 transition"
            onClick={() => {
              setAddressName("")          
              setReceiver("");
              setPhone("");
              setZipCode("");
              setAddress("");
              setDetailAddress("");
            }}
          >
            신규 배송지 입력
          </button>
        </div>

        <input
          className="border p-2 w-full rounded"
          placeholder="배송지명"
          value={addressName}
          onChange={e=>setAddressName(e.target.value)}
        />
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={useOrdererInfo}
              onChange={(e) =>
              setUseOrdererInfo(e.target.checked)}
            />
            주문자 정보와 동일
          </label>
        <input
          className="border p-2 w-full rounded"
          placeholder="받는 사람"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="연락처 (010-0000-0000)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="flex gap-2">
          <input
            className="border p-2 flex-1 rounded"
            placeholder="우편번호"
            value={zipCode}
            readOnly
          />
          <button
            className="border px-4 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => setShowAddressModal(true)}
          >
            우편번호 찾기
          </button>
        </div>

        <input
          className="border p-2 w-full rounded"
          placeholder="도로명 주소"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="상세주소"
          value={detailAddress}
          onChange={(e) => setDetailAddress(e.target.value)}
        />
      </section>

      {/* ✅ 배송요청사항 */}
      <section className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
        <h3 className="font-semibold text-lg">배송 요청사항</h3>

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
            className="border p-2 w-full rounded"
            placeholder="예: 택배함에 넣어주세요"
            value={customDeliveryMemo}
            onChange={(e) => setCustomDeliveryMemo(e.target.value)}
          />
        )}
      </section>

      {/* ✅ 쿠폰 */}
      <section className="bg-white border rounded-lg shadow-sm p-6 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">할인 / 쿠폰</h3>
          <button
            className="underline"
            onClick={() => setShowCouponModal(true)}
          >
            보유 쿠폰 보기
          </button>
        </div>

        <div className="text-gray-600">
          {selectedCoupon ? (
            <span className="font-semibold text-[#111]">
              적용된 쿠폰: {couponName} (-{couponDiscount.toLocaleString()}원)
            </span>
          ) : (
            "사용 가능한 쿠폰 1개"
          )}
        </div>
      </section>

      {/* 포인트 */}
      <section className="bg-white border rounded-lg shadow-sm p-6 space-y-3">
        <h3 className="font-semibold text-lg">포인트</h3>

        <div className="flex items-center gap-2">
          <input
            type="number"
            className="border p-2 rounded w-32"
            placeholder="0"
            value={usePoint}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value <= pointBalance && value >= 0) {
                setUsePoint(value);
              }
            }}
          />
          <span className="text-sm text-gray-600">P / {pointBalance.toLocaleString()}P</span>

          <button
            className="px-3 py-1 border rounded text-sm hover:bg-gray-100 transition"
            onClick={() => setUsePoint(pointBalance)}
          >
            전액사용
          </button>
        </div>

        <p className="text-xs text-gray-500">
          사용 가능한 포인트: {pointBalance.toLocaleString()}P
        </p>
      </section>

      {/* ✅ 결제수단 */}
      <section className="bg-white border rounded-lg shadow-sm p-6 space-y-3">
        <h3 className="font-semibold text-lg">결제수단</h3>

        <div className="grid grid-cols-3 gap-3">
          {paymentMethods.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedPayment(m.id)}
              className={`border px-4 py-3 rounded transition text-center ${
                selectedPayment === m.id
                  ? "bg-[#111] text-white border-[#111]"
                  : "hover:bg-gray-100"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </section>

      {/* ✅ 약관 동의 */}
      <section className="bg-white border rounded-lg shadow-sm p-6 space-y-3">
        <h3 className="font-semibold text-lg">구매 이용약관 동의</h3>

        <label className="flex items-center gap-2 cursor-pointer font-medium">
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

        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            checked={agreePurchase}
            onChange={(e) => setAgreePurchase(e.target.checked)}
          />
          구매에 동의 (필수)
        </label>

        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            checked={agreePersonal}
            onChange={(e) => setAgreePersonal(e.target.checked)}
          />
          개인정보 수집 및 이용 동의 (필수)
        </label>

        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            checked={agreeDelegate}
            onChange={(e) => setAgreeDelegate(e.target.checked)}
          />
          개인정보 취급 위탁 동의 (필수)
        </label>
      </section>

      {/* ✅ 결제 요약 */}
      <section className="bg-gray-50 border rounded-lg p-6 shadow-sm space-y-3">
        <div className="flex justify-between py-1">
          <span>총 상품금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>

        <div className="flex justify-between py-1">
          <span>배송비</span>
          <span>{shippingFee.toLocaleString()}원</span>
        </div>

        {selectedCoupon && (
          <div className="flex justify-between py-1 text-[#ff5c00] font-medium">
            <span>쿠폰 할인</span>
            <span>- {couponDiscount.toLocaleString()}원</span>
          </div>
        )}

        {usePoint > 0 && (
          <div className="flex justify-between py-1 text-[#2e7dff] font-medium">
            <span>포인트 사용</span>
            <span>- {usePoint.toLocaleString()}원</span>
          </div>
        )}

        <div className="flex justify-between border-t pt-3 text-lg font-bold">
          <span>최종 결제금액</span>
          <span>{finalPrice.toLocaleString()}원</span>
        </div>

        <button
          className={`w-full py-3 rounded-lg mt-4 text-lg transition ${
            agreePurchase && agreePersonal && agreeDelegate
              ? "bg-[#111] text-white hover:bg-black"
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