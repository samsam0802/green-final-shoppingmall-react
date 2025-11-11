import React, { useState, Fragment, useEffect } from "react";
import ReviewAddComponent from "../review/ReviewAddComponent";
import DeliveryModal from "./DeliveryModal";
import ReturnModal from "./ReturnModal";
import CancleModal from "./CancleModal";
import ExchangeModal from "./ExchangeModal";

export default function OrderHistoryComponent() {
  const [selectedPeriod, setSelectedPeriod] = useState("1개월");
  const [reviewModal, setReviewModal] = useState(false);
  const [countStatus, setCountStatus] = useState({
    주문접수: 0,
    결제완료: 0,
    배송준비중: 0,
    배송중: 0,
    배송완료: 0,
  });

  const [deliveryModal, setDeliveryModal] = useState(false);
  const [cancleModal, setCancleModal] = useState(false);
  const [returnModal, setReturnModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const sampleOrders = [
    {
      id: "20250205-123456",
      date: "2025.02.05",
      product: [
        {
          id: 1,
          image: "/images/toner.jpg",
          pname: "진정 수분 토너 - 21N 린넨",
          qty: 2,
          price: 30000,
          status: "결제완료",
        },
        {
          id: 2,
          image: "/images/ampoule.jpg",
          pname: "고보습 세럼 앰플 - 19C 라이트",
          qty: 1,
          price: 22000,
          status: "결제완료",
        },
      ],
    },
    {
      id: "20250204-654321",
      date: "2025.02.04",
      product: [
        {
          id: 3,
          image: "/images/ampoule.jpg",
          pname: "고보습 세럼 앰플 - 19C 라이트",
          qty: 1,
          price: 22000,
          status: "배송중",
        },
      ],
    },
    {
      id: "20250203-111111",
      date: "2025.02.03",
      product: [
        {
          id: 4,
          image: "/images/ampoule.jpg",
          pname: "고보습 세럼 앰플 - 19C 라이트",
          qty: 1,
          price: 22000,
          status: "배송완료",
        },
      ],
    },
  ];

  const statusClass = (s) =>
    s === "배송중"
      ? "text-blue-600"
      : s === "배송완료"
      ? "text-green-600"
      : "text-[#ff5c00]";

  useEffect(() => {
    const newCountState = {
      주문접수: 0,
      결제완료: 0,
      배송준비중: 0,
      배송중: 0,
      배송완료: 0,
    };

    sampleOrders
      .flatMap((o) => o.product)
      .forEach((p) => {
        newCountState[p.status] += 1;
      });

    setCountStatus(newCountState);
  }, [sampleOrders]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-[#333]">
      {/* 헤더 */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium mb-1">Order History</h1>
        <p className="text-sm text-gray-500">주문 / 배송 조회</p>
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-5 gap-3 mb-8">
        {["주문접수", "결제완료", "배송준비중", "배송중", "배송완료"].map(
          (label, idx) => (
            <div
              key={label}
              className="bg-white border border-gray-200 p-5 text-center"
            >
              <p className="text-3xl font-normal mb-2 text-[#333]">
                {countStatus[label]}
              </p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          )
        )}
      </div>

      {/* 구매기간 필터 */}
      <div className="bg-white border border-gray-200 p-6 mb-6">
        <p className="text-xs text-gray-600 mb-3 uppercase tracking-wide">
          PURCHASE PERIOD
        </p>
        <div className="flex gap-2 mb-4">
          {["1개월", "3개월", "6개월", "12개월"].map((m) => (
            <button
              key={m}
              onClick={() => setSelectedPeriod(m)}
              className={`px-5 py-2 text-sm transition-all ${
                selectedPeriod === m
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400">
          ※ 최근 1년 내 구매내역만 조회 가능합니다.
        </p>
      </div>

      {/* 주문 목록 테이블 */}
      <div className="bg-white border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-white border-b border-gray-200">
            <tr className="h-12">
              <th className="w-40 text-xs uppercase tracking-wide text-gray-500 font-normal">
                ORDER DATE
              </th>
              <th className="w-20"></th>
              <th className="text-left text-xs uppercase tracking-wide text-gray-500 font-normal">
                PRODUCT INFO
              </th>
              <th className="w-16 text-xs uppercase tracking-wide text-gray-500 font-normal">
                QTY
              </th>
              <th className="w-24 text-xs uppercase tracking-wide text-gray-500 font-normal">
                PRICE
              </th>
              <th className="w-24 text-xs uppercase tracking-wide text-gray-500 font-normal">
                STATUS
              </th>
              <th className="w-32 text-xs uppercase tracking-wide text-gray-500 font-normal">
                ACTION
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {sampleOrders &&
              sampleOrders.map((order) => (
                <Fragment key={order.id}>
                  {order.product.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {index === 0 && (
                        <td
                          rowSpan={order.product.length}
                          className="text-center align-top p-5 border-r border-gray-100 bg-white"
                        >
                          <div className="text-sm mb-1">{order.date}</div>
                          <div className="text-xs text-gray-400">
                            {order.id}
                          </div>
                        </td>
                      )}

                      <td className="py-5 px-3">
                        <div className="w-14 h-14 bg-gray-100 overflow-hidden">
                          <img
                            src={item.image}
                            className="w-full h-full object-cover"
                            alt={item.pname}
                          />
                        </div>
                      </td>
                      <td className="py-5 text-left">
                        <p className="text-sm text-gray-800">{item.pname}</p>
                      </td>
                      <td className="text-center text-gray-700">{item.qty}</td>
                      <td className="text-right pr-5 text-gray-800">
                        {item.price.toLocaleString()}원
                      </td>
                      <td className="text-center">
                        <div
                          className={`text-sm mb-2 ${statusClass(item.status)}`}
                        >
                          {item.status}
                        </div>
                        <div className="flex flex-col gap-1.5 items-center">
                          {(item.status === "배송중" ||
                            item.status === "배송완료") && (
                            <button
                              className="text-xs px-3 py-1 border border-gray-300 hover:bg-gray-50 transition-colors"
                              onClick={() => {
                                setDeliveryModal(!deliveryModal);
                                setSelectedItem(item);
                              }}
                            >
                              배송조회
                            </button>
                          )}
                          {item.status === "배송완료" && (
                            <button
                              className="text-xs px-3 py-1 bg-black text-white hover:bg-gray-800 transition-colors"
                              onClick={() => {
                                setReviewModal(true);
                              }}
                            >
                              리뷰작성
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="text-center px-3">
                        <div className="flex flex-col gap-1.5 items-center">
                          {item.status === "결제완료" && (
                            <button
                              className="text-xs px-3 py-1 border border-gray-300 hover:bg-gray-50 transition-colors w-full"
                              onClick={() => {
                                setCancleModal(!cancleModal);
                                setSelectedItem(item);
                              }}
                            >
                              취소신청
                            </button>
                          )}
                          {item.status !== "배송준비중" &&
                            item.status !== "배송중" && (
                              <button
                                className="text-xs px-3 py-1 border border-gray-300 hover:bg-gray-50 transition-colors w-full"
                                onClick={() => {
                                  setExchangeModal(!exchangeModal);
                                  setSelectedItem(item);
                                }}
                              >
                                교환신청
                              </button>
                            )}
                          {item.status === "배송완료" && (
                            <button
                              className="text-xs px-3 py-1 border border-gray-300 hover:bg-gray-50 transition-colors w-full"
                              onClick={() => {
                                setReturnModal(!returnModal);
                                setSelectedItem(item);
                              }}
                            >
                              반품신청
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
          </tbody>
        </table>
      </div>

      {/* 모달들 */}
      {reviewModal && (
        <ReviewAddComponent closeModal={() => setReviewModal(false)} />
      )}
      {deliveryModal && selectedItem && (
        <DeliveryModal
          item={selectedItem}
          closeModal={() => setDeliveryModal(false)}
        />
      )}
      {returnModal && selectedItem && (
        <ReturnModal
          item={selectedItem}
          closeModal={() => setReturnModal(false)}
        />
      )}
      {cancleModal && selectedItem && (
        <CancleModal
          item={selectedItem}
          closeModal={() => setCancleModal(false)}
        />
      )}
      {exchangeModal && selectedItem && (
        <ExchangeModal
          item={selectedItem}
          closeModal={() => setExchangeModal(false)}
        />
      )}
    </div>
  );
}
