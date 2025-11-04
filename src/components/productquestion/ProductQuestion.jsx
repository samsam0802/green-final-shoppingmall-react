// src/components/productquestion/ProductQuestion.jsx
import React, { useState } from "react";
import { Edit } from "lucide-react";
import ProductQuestionList from "./ProductQuestionList.jsx";
import ProductQuestionAdd from "./ProductQuestionAdd.jsx";
import ProductQuestionModify from "./ProductQuestionModify.jsx";
import ProductQuestionDelete from "./ProductQuestionDelete.jsx";
import NotificationModal from "./NotificationModal.jsx";

/**
 * 탭 콘텐츠 폭을 그대로 따르도록 w-full만 사용
 * 필요시 className으로 바깥 여백/패딩만 조절하세요.
 */
export default function ProductQuestion({ className = "" }) {
  const [items] = useState([
    {
      id: 1,
      title: "재입고 언제 되나요?",
      question: "해당 옵션 재입고 일정이 궁금합니다.",
      answer: "다음 주 입고 예정입니다.",
      status: "ANSWERED",
      isPrivate: false,
      writerMasked: "ehf***",
      date: "25.11.03",
    },
    {
      id: 2,
      title: "향이 강한가요?",
      question: "향이 강하면 못 쓰는데 사용감이 어떤지 궁금합니다.",
      answer: "",
      status: "PENDING",
      isPrivate: false,
      writerMasked: "kim***",
      date: "25.11.02",
    },
    {
      id: 3,
      title: "유통기한 문의",
      question: "현재 출고분 유통기한 알려주세요.",
      answer: "2027년 3월까지입니다.",
      status: "ANSWERED",
      isPrivate: true,
      writerMasked: "lee***",
      date: "25.11.01",
    },
    {
      id: 4,
      title: "지성 피부에 괜찮나요?",
      question: "번들거림 심한데 흡수감 어떤가요?",
      answer: "",
      status: "PENDING",
      isPrivate: false,
      writerMasked: "yuj***",
      date: "25.10.30",
    },
  ]);

  const [openId, setOpenId] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [notification, setNotification] = useState(null);

  return (
    <section className={`w-full  mt-6 sm:mt-6 ${className}`}>
      {/* 헤더 */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-2">
        <h3 className="text-[22px] font-extrabold text-gray-900">
          상품 Q&A
          <span className="text-gray-400 text-sm">(총 {items.length}건)</span>
        </h3>

        <button
          type="button"
          className="inline-flex items-center gap-1 h-9 px-4 rounded-md text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors"
          onClick={() => setShowAdd(true)}
        >
          <Edit className="w-4 h-4" />
          문의 작성
        </button>
      </div>

      {/* 목록 */}
      <ProductQuestionList
        items={items}
        openId={openId}
        onToggle={(id) => setOpenId((prev) => (prev === id ? null : id))}
        onEdit={(item) => setEditItem(item)}
        onDelete={(item) => setDeleteItem(item)}
      />

      {/* 모달들 */}
      {showAdd && (
        <ProductQuestionAdd
          onClose={() => setShowAdd(false)}
          onSubmit={() => {
            setNotification({
              title: "알림",
              content: "등록 기능은 아직 구현 중입니다.",
            });
            setShowAdd(false);
          }}
        />
      )}

      {editItem && (
        <ProductQuestionModify
          item={editItem}
          onClose={() => setEditItem(null)}
          onSubmit={() => {
            setNotification({
              title: "알림",
              content: `문의 #${editItem.id} 수정은 아직 구현 중입니다.`,
            });
            setEditItem(null);
          }}
        />
      )}

      {deleteItem && (
        <ProductQuestionDelete
          item={deleteItem}
          onCancel={() => setDeleteItem(null)}
          onConfirm={() => {
            setNotification({
              title: "알림",
              content: `문의 #${deleteItem.id} 삭제는 아직 구현 중입니다.`,
            });
            setDeleteItem(null);
          }}
        />
      )}

      <NotificationModal
        message={notification}
        onClose={() => setNotification(null)}
      />
    </section>
  );
}
