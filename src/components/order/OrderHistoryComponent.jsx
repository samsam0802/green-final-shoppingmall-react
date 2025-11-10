import React, { useState, Fragment } from "react";
import ReviewAddComponent from "../review/ReviewAddComponent";

export default function OrderHistoryComponent() {
  const [selectedPeriod, setSelectedPeriod] = useState("1개월");
  const [reviewModal, setReviewModal] = useState(false);
  const [countStatus, setCountStatus] = useState({
    주문접수: 0,
    결제완료: 0,
    배송준비중: 0,
  });

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

  return (
    <div className="max-w-5xl mx-auto p-8 text-[#111]">
      <h1 className="text-2xl font-bold mb-8">주문 / 배송 조회</h1>
      {/* 요약 카드 */}
      <div className="grid grid-cols-5 text-center bg-white border rounded-lg py-5 mb-8">
        {["주문접수", "결제완료", "배송준비중", "배송중", "배송완료"].map(
          (label) => (
            <div key={label}>
              <p className="text-xl font-bold">0</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          )
        )}
      </div>
      {/* 구매기간 */}
      <div className="border rounded-lg p-6 mb-10 bg-white">
        <p className="font-semibold text-sm mb-3">구매기간</p>
        <div className="flex gap-3 mb-4">
          {["1개월", "3개월", "6개월", "12개월"].map((m) => (
            <button
              key={m}
              onClick={() => setSelectedPeriod(m)}
              className={`px-4 py-2 rounded text-sm border ${
                selectedPeriod === m
                  ? "bg-[#111] text-white border-[#111]"
                  : "bg-white text-gray-600 border-gray-300"
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
      {/* ✅ 메인 테이블 */}
      <table className="w-full text-sm border-t bg-white">
        <thead className="bg-gray-50 border-b">
          <tr className="h-12 text-gray-700">
            <th className="w-40">주문일자(주문번호)</th>
            <th className="w-20"></th>
            <th className="text-left">상품정보</th>
            <th className="w-16">수량</th>
            <th className="w-24">상품금액</th>
            <th className="w-24">진행상태</th>
            <th className="w-32">접수</th>
          </tr>
        </thead>

        <tbody>
          {sampleOrders &&
            sampleOrders.map((order) => (
              <Fragment key={order.id}>
                {order.product.map((item, index) => (
                  <tr key={item.id} className="border-b">
                    {index === 0 && (
                      <td
                        rowSpan={order.product.length}
                        className="text-center align-top p-4 border-r bg-gray-50"
                      >
                        <div className="font-semibold">{order.date}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {order.id}
                        </div>
                      </td>
                    )}

                    <td className="py-4 px-2">
                      <img
                        src={item.image}
                        className="w-14 h-14 object-cover border rounded"
                      />
                    </td>
                    <td className="py-4 text-left">{item.pname}</td>
                    <td className="text-center">{item.qty}</td>
                    <td className="text-right pr-4 font-semibold">
                      {item.price.toLocaleString()}원
                    </td>
                    <td
                      className={`text-center font-semibold ${statusClass(
                        item.status
                      )}`}
                    >
                      {item.status}
                      {/* ✅ 상태에 따른 버튼 표시 */}
                      <div className="flex flex-col gap-1 items-center">
                        {item.status === "배송중" ||
                        item.status === "배송완료" ? (
                          <button className="text-xs px-3 py-1 border rounded hover:bg-gray-50">
                            배송조회
                          </button>
                        ) : null}
                        {/* 리뷰작성 버튼 / 모달 열기 */}
                        {item.status === "배송완료" && (
                          <button
                            className="text-xs px-3 py-1 border rounded hover:bg-gray-50"
                            onClick={() => {
                              setReviewModal(true); //모달 열기
                            }}
                          >
                            리뷰작성
                          </button>
                        )}
                      </div>
                    </td>
                    {item.status === "결제완료" && (
                      <button className="text-xs px-3 py-1 border rounded hover:bg-gray-50">
                        취소신청
                      </button>
                    )}
                    {item.status !== "배송준비중" &&
                      item.status !== "배송중" && (
                        <button className="text-xs px-3 py-1 border rounded hover:bg-gray-50">
                          교환신청
                        </button>
                      )}
                    {item.status === "배송완료" && (
                      <button className="text-xs px-3 py-1 border rounded hover:bg-gray-50">
                        반품신청
                      </button>
                    )}

                    <td className="text-center"></td>
                  </tr>
                ))}
              </Fragment>
            ))}
        </tbody>
      </table>
      {/* 리뷰 작성 모달 띄우기 */}
      {reviewModal && (
        <ReviewAddComponent closeModal={() => setReviewModal(false)} />
      )}
    </div>
  );
}
