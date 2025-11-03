// src/pages/help/HelpFaqPage.jsx
import React, { useState } from "react";

const faqDummy = [
  {
    id: 1,
    cate: "적립금/쿠폰",
    question: "포인트/쿠폰 사용 후 사은품을 못 받았어요.",
    answer:
      "쿠폰/포인트 사용으로 실결제금액이 사은품 지급 기준보다 낮아진 경우 사은품이 지급되지 않을 수 있습니다.",
  },
  {
    id: 2,
    cate: "배송관련",
    question: "배송 출고 시간은 어떻게 되나요?",
    answer:
      "평일(월~금) 오후 2시 이전 결제 완료 건은 당일 출고되며, 이후 건은 익영업일 출고됩니다. 주말/공휴일은 출고가 없습니다.",
  },
  {
    id: 3,
    cate: "주문/결제",
    question: "주문을 취소하고 싶어요.",
    answer:
      "마이페이지 > 주문내역에서 ‘상품 준비중’ 이전 단계일 때만 직접 취소가 가능합니다. 이미 출고가 진행된 경우 고객센터로 문의해 주세요.",
  },
  {
    id: 4,
    cate: "반품/교환/취소",
    question: "단순 변심으로도 반품이 가능한가요?",
    answer:
      "상품 수령 후 7일 이내 미사용/미개봉 상태일 경우 반품이 가능합니다. 단, 이벤트 사은품이 포함된 경우 함께 반납해 주셔야 합니다.",
  },
  {
    id: 5,
    cate: "회원관련",
    question: "비밀번호를 잊어버렸어요. 어떻게 하나요?",
    answer:
      "로그인 화면의 ‘비밀번호 찾기’에서 가입 시 등록한 이메일 또는 휴대폰 번호로 임시 비밀번호를 발급받을 수 있습니다.",
  },
  {
    id: 6,
    cate: "제품관련",
    question: "품절된 상품은 다시 구매할 수 없나요?",
    answer:
      "일부 한정 상품은 재입고가 어려울 수 있습니다. 일반 상품의 경우 재입고 알림 신청을 해두시면 입고 시 알림을 드립니다.",
  },
  {
    id: 7,
    cate: "배송관련",
    question: "배송지가 잘못됐는데 변경할 수 있나요?",
    answer:
      "상품이 ‘배송 준비중’ 단계일 경우 고객센터로 연락 주시면 변경 가능 여부를 확인해 드립니다. 출고 이후에는 변경이 어렵습니다.",
  },
  {
    id: 8,
    cate: "적립금/쿠폰",
    question: "적립금은 언제 사용 가능한가요?",
    answer:
      "주문이 ‘구매확정’ 처리된 이후 사용 가능하며, 일부 프로모션 적립금은 유효기간이 있을 수 있으니 마이페이지에서 확인해 주세요.",
  },
  {
    id: 9,
    cate: "주문/결제",
    question: "현금영수증 발급이 가능한가요?",
    answer:
      "무통장입금/계좌이체 결제 시 현금영수증 발급이 가능하며, 마이페이지 > 주문내역에서 직접 출력할 수 있습니다.",
  },
  {
    id: 10,
    cate: "회원관련",
    question: "회원등급은 어떻게 올라가나요?",
    answer:
      "최근 3개월 또는 6개월 구매금액을 기준으로 매월 1일 자동 등업됩니다. 등급별 혜택은 공지사항을 참고해 주세요.",
  },
  {
    id: 11,
    cate: "반품/교환/취소",
    question: "제품에 불량이 있어요. 어떻게 처리되나요?",
    answer:
      "사진과 함께 1:1 문의로 남겨주시면 확인 후 무상 교환 또는 환불을 도와드립니다.",
  },
  {
    id: 12,
    cate: "기타문의",
    question: "고객센터 운영시간이 어떻게 되나요?",
    answer: "평일 10:00~17:00 (점심 12:00~14:00) / 주말·공휴일 휴무입니다.",
  },
];

// 위에 보여줄 탭 이름
const faqCategories = [
  "전체",
  "회원관련",
  "제품관련",
  "주문/결제",
  "반품/교환/취소",
  "배송관련",
  "적립금/쿠폰",
];

export default function HelpFaqPage() {
  const [active, setActive] = useState(null);
  const [selectedCate, setSelectedCate] = useState("전체");
  const [keyword, setKeyword] = useState("");

  // 카테고리 + 검색어 동시 필터
  const filtered = faqDummy.filter((item) => {
    const matchCate =
      selectedCate === "전체" ? true : item.cate === selectedCate;
    const matchKeyword =
      keyword.trim() === ""
        ? true
        : item.question.toLowerCase().includes(keyword.toLowerCase());
    return matchCate && matchKeyword;
  });

  return (
    <div>
      {/* 1) 카테고리 탭 (위로 올림) */}
      <div className="flex gap-6 text-sm mb-4 border-b border-gray-200">
        {faqCategories.map((cat) => {
          const on = cat === selectedCate;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCate(cat)}
              className={`pb-2 -mb-[1px] border-b-2 transition ${
                on
                  ? "border-black text-black font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 2) 검색줄 */}
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 border border-gray-200 rounded-sm px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="궁금하신 내용을 검색해주세요."
        />
        <button className="px-6 bg-black text-white rounded-sm text-sm hover:bg-black/80">
          검색
        </button>
      </div>

      {/* 3) 개수 */}
      <p className="text-sm text-gray-500 mb-3">총 {filtered.length}건</p>

      {/* 4) 리스트 */}
      <div className="divide-y">
        {filtered.map((faq) => (
          <div key={faq.id} className="py-3">
            <button
              onClick={() =>
                setActive((prev) => (prev === faq.id ? null : faq.id))
              }
              className="w-full flex items-center justify-between gap-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border border-gray-300 text-xs flex items-center justify-center text-gray-500">
                  Q
                </span>
                <span className="text-sm text-gray-900">
                  [{faq.cate}] {faq.question}
                </span>
              </div>
              <span className="text-xl text-gray-400">
                {active === faq.id ? "˅" : "›"}
              </span>
            </button>

            {active === faq.id && (
              <div className="pl-11 pr-4 mt-3 text-sm text-gray-600 bg-gray-50 rounded-md py-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 5) 페이지네이션 스케치 */}
      <div className="mt-6 flex justify-center gap-2 text-sm">
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed"
          disabled
        >
          «
        </button>
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed"
          disabled
        >
          ‹
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          3
        </button>

        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
        >
          ›
        </button>
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
        >
          »
        </button>
      </div>
    </div>
  );
}
