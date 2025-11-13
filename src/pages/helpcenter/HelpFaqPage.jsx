// src/pages/help/HelpFaqPage.jsx
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const faqDummy = [
  {
    id: 1,
    type: "적립금/쿠폰",
    question: "포인트/쿠폰 사용 후 사은품을 못 받았어요.",
    answer:
      "쿠폰/포인트 사용으로 실결제금액이 사은품 지급 기준보다 낮아진 경우 사은품이 지급되지 않을 수 있습니다.",
  },
  {
    id: 2,
    type: "배송관련",
    question: "배송 출고 시간은 어떻게 되나요?",
    answer:
      "평일(월~금) 오후 2시 이전 결제 완료 건은 당일 출고되며, 이후 건은 익영업일 출고됩니다. 주말/공휴일은 출고가 없습니다.",
  },
  {
    id: 3,
    type: "주문/결제",
    question: "주문을 취소하고 싶어요.",
    answer:
      "마이페이지 > 주문내역에서 ‘상품 준비중’ 이전 단계일 때만 직접 취소가 가능합니다. 이미 출고가 진행된 경우 고객센터로 문의해 주세요.",
  },
  {
    id: 4,
    type: "반품/교환/취소",
    question: "단순 변심으로도 반품이 가능한가요?",
    answer:
      "상품 수령 후 7일 이내 미사용/미개봉 상태일 경우 반품이 가능합니다. 단, 이벤트 사은품이 포함된 경우 함께 반납해 주셔야 합니다.",
  },
  {
    id: 5,
    type: "회원관련",
    question: "비밀번호를 잊어버렸어요. 어떻게 하나요?",
    answer:
      "로그인 화면의 ‘비밀번호 찾기’에서 가입 시 등록한 이메일 또는 휴대폰 번호로 임시 비밀번호를 발급받을 수 있습니다.",
  },
  {
    id: 6,
    type: "제품관련",
    question: "품절된 상품은 다시 구매할 수 없나요?",
    answer:
      "일부 한정 상품은 재입고가 어려울 수 있습니다. 일반 상품의 경우 재입고 알림 신청을 해두시면 입고 시 알림을 드립니다.",
  },
  {
    id: 7,
    type: "배송관련",
    question: "배송지가 잘못됐는데 변경할 수 있나요?",
    answer:
      "상품이 ‘배송 준비중’ 단계일 경우 고객센터로 연락 주시면 변경 가능 여부를 확인해 드립니다. 출고 이후에는 변경이 어렵습니다.",
  },
  {
    id: 8,
    type: "적립금/쿠폰",
    question: "적립금은 언제 사용 가능한가요?",
    answer:
      "주문이 ‘구매확정’ 처리된 이후 사용 가능하며, 일부 프로모션 적립금은 유효기간이 있을 수 있으니 마이페이지에서 확인해 주세요.",
  },
  {
    id: 9,
    type: "주문/결제",
    question: "현금영수증 발급이 가능한가요?",
    answer:
      "무통장입금/계좌이체 결제 시 현금영수증 발급이 가능하며, 마이페이지 > 주문내역에서 직접 출력할 수 있습니다.",
  },
  {
    id: 10,
    type: "회원관련",
    question: "회원등급은 어떻게 올라가나요?",
    answer:
      "최근 3개월 또는 6개월 구매금액을 기준으로 매월 1일 자동 등업됩니다. 등급별 혜택은 공지사항을 참고해 주세요.",
  },
  {
    id: 11,
    type: "반품/교환/취소",
    question: "제품에 불량이 있어요. 어떻게 처리되나요?",
    answer:
      "사진과 함께 1:1 문의로 남겨주시면 확인 후 무상 교환 또는 환불을 도와드립니다.",
  },
  {
    id: 12,
    type: "기타문의",
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
  const { isAdmin } = useAuth();
  const [faqList, setFaqList] = useState(faqDummy);
  const [active, setActive] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const [isAdding, setIsAdding] = useState(false);
  const [newFaqData, setNewFaqData] = useState({
    type: "",
    question: "",
    answer: "",
  });

  const [selectedCategories, setSelectedCategories] = useState("전체");
  const [keyword, setKeyword] = useState("");

  // 카테고리 + 검색어 동시 필터
  const filtered = faqDummy.filter((item) => {
    const matchCate =
      selectedCategories === "전체" ? true : item.type === selectedCategories;
    const matchKeyword =
      keyword.trim() === ""
        ? true
        : item.question.toLowerCase().includes(keyword.toLowerCase());
    return matchCate && matchKeyword;
  });

  // 수정 시작 핸들러
  const handleEditStart = (faq) => {
    setEditingId(faq.id);
    setEditData({ question: faq.question, answer: faq.answer });
    setActive(faq.id);
    setIsAdding(false);
  };

  // 수정한거 저장하는 핸들러
  const handleSave = (id) => {
    setFaqList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, ...editData } : item))
    );
    setEditingId(null);
    setEditData({});
    console.log(`FAQ ID ${id} 수정완료!`, editData);
  };

  const handleAddSave = () => {
    if (!newFaqData.type || !newFaqData.question || newFaqData.answer) {
      alert("카테고리, 질문, 답변을 모두 입력해주세요");
      return;
    }

    const maxId =
      faqList.length > 0 ? Math.max(...faqList.map((f) => f.id)) : 0;
    const nextId = maxId + 1;
    const savedFaq = { ...newFaqData, id: nextId };

    setFaqList([savedFaq, ...faqList]);
    setIsAdding(false);
    setNewFaqData({ type: "", question: "", answer: "" });
    console.log("FAQ 새 항목 추가 완료", savedFaq);
  };

  return (
    <div>
      {/* 1) 카테고리 탭 */}
      <div className="flex gap-6 text-sm mb-4 border-b border-gray-200 ">
        {faqCategories.map((type) => {
          const on = type === selectedCategories;
          return (
            <button
              key={type}
              onClick={() => setSelectedCategories(type)}
              className={`pb-2 -mb-[1px] border-b-2 transition cursor-pointer ${
                on
                  ? "border-black text-black font-medium "
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* 2) 검색줄 + 작성 버튼 */}
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 border border-gray-200 rounded-sm px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="궁금하신 내용을 검색해주세요."
        />

        <button className="px-6 bg-black text-white rounded-sm text-sm hover:bg-black/80 cursor-pointer">
          검색
        </button>

        {/* 👇 관리자 전용 작성 버튼 */}
        {isAdmin && (
          <button
            onClick={() => {
              setIsAdding(true);
              setEditingId(null);
              setActive(null);
            }}
            disabled={isAdding}
            className="px-6 bg-green-600 text-white rounded-sm text-sm hover:bg-green-700 disabled:bg-gray-400 cursor-pointer"
          >
            FAQ 추가
          </button>
        )}
      </div>

      {/* 3) 개수 (위치 조정) */}
      <p className="text-sm text-gray-500 mb-3">총 {filtered.length}건</p>
      {/* 👇 새 FAQ 작성 영역 (여기를 리스트 위에 위치하도록 조정) */}
      {isAdding && isAdmin && (
        <div className="py-3 border-b-2 border-blue-400 mb-4 bg-blue-50/50 p-4 rounded-md">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3 w-full">
              <span className="w-7 h-7 rounded-full border border-blue-300 text-xs flex items-center justify-center text-blue-600 font-bold">
                Q
              </span>

              {/* 카테고리 선택 */}
              <select
                value={newFaqData.type}
                onChange={(e) =>
                  setNewFaqData({ ...newFaqData, type: e.target.value })
                }
                className="border border-gray-300 rounded-sm text-sm p-1"
              >
                <option value="">카테고리 선택</option>

                {faqCategories
                  .filter((c) => c !== "전체")
                  .map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
              </select>

              {/* 질문 입력 */}
              <input
                type="text"
                value={newFaqData.question}
                onChange={(e) =>
                  setNewFaqData({ ...newFaqData, question: e.target.value })
                }
                className="flex-2 text-sm text-gray-900 border border-gray-300 p-1.5 rounded-sm"
                placeholder="새 질문을 입력하세요."
              />
            </div>

            {/* 저장/취소 버튼 */}
            <div className="flex gap-2 ml-4">
              <button
                onClick={handleAddSave}
                className="w-12 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                저장
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="w-12 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-100 transition cursor-pointer"
              >
                취소
              </button>
            </div>
          </div>

          {/* 답변 입력 영역 */}
          <div className="pl-11 pr-4 mt-3 text-sm text-gray-600">
            <textarea
              value={newFaqData.answer}
              onChange={(e) =>
                setNewFaqData({ ...newFaqData, answer: e.target.value })
              }
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
              placeholder="새 답변 내용을 입력하세요."
            />
          </div>
        </div>
      )}

      {/* 4) 리스트 */}
      <div className="divide-y ">
        {filtered.map((faq) => (
          <div key={faq.id} className="py-3">
            {/* Q 영역: 수정 모드일 때와 아닐 때 분리 */}
            <div className="flex items-start justify-between">
              <button
                onClick={() =>
                  editingId !== faq.id &&
                  setActive((prev) => (prev === faq.id ? null : faq.id))
                }
                className="flex-1 flex items-center gap-3 text-left p-1 -m-1"
                disabled={editingId === faq.id}
              >
                <span className="w-7 h-7 rounded-full border border-gray-300 text-xs flex items-center justify-center text-gray-500">
                  <strong>Q</strong>
                </span>

                {editingId === faq.id ? (
                  // 수정 모드: 질문 입력 필드
                  <input
                    type="text"
                    value={editData.question}
                    onChange={(e) =>
                      setEditData({ ...editData, question: e.target.value })
                    }
                    className="flex-1 text-sm text-gray-900 border border-blue-400 p-1"
                  />
                ) : (
                  // 일반 모드: 질문 텍스트
                  <span className="text-sm text-gray-900 cursor-pointer">
                    [{faq.type}] {faq.question}
                  </span>
                )}
              </button>

              <div className="flex items-center gap-2 ml-4">
                <span className="text-xl text-gray-400">
                  {active === faq.id ? "˅" : "›"}
                </span>

                {/* 관리자 전용 버튼 */}
                {isAdmin && (
                  <>
                    {editingId === faq.id ? (
                      <>
                        <button
                          onClick={() => handleSave(faq.id)}
                          className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
                        >
                          저장
                        </button>
                        <button
                          onClick={() => {
                            setEditingId(null);
                            setEditData({});
                          }}
                          className="px-3 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-100 transition cursor-pointer"
                        >
                          취소
                        </button>
                        <button
                          onClick={() =>
                            console.log(
                              `🗑️ FAQ ID ${faq.id} 삭제 (API 호출 필요)`
                            )
                          }
                          className="px-3 py-1 text-xs border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition cursor-pointer"
                        >
                          삭제
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleEditStart(faq)}
                        className="px-3 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-100 transition cursor-pointer"
                      >
                        수정
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>

            {active === faq.id && (
              <div className="pl-11 pr-4 mt-3 text-sm text-gray-600 bg-gray-50 rounded-md py-3">
                {editingId === faq.id ? (
                  // 수정 모드: 답변 입력 필드 (Textarea 사용)
                  <textarea
                    value={editData.answer}
                    onChange={(e) =>
                      setEditData({ ...editData, answer: e.target.value })
                    }
                    rows={3}
                    className="w-full p-2 border border-blue-400 focus:outline-none"
                  />
                ) : (
                  // 일반 모드: 답변 텍스트
                  faq.answer
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="mt-6 mb-7 flex justify-center gap-2 text-sm">
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
