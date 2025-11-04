import React, { useState } from "react";
import { Edit } from "lucide-react";
import ProductQuestionList from "./ProductQuestionList";
import ProductQuestionAdd from "./ProductQuestionAdd";
import ProductQuestionModify from "./ProductQuestionModify";
import ProductQuestionDelete from "./ProductQuestionDelete";
import NotificationModal from "./NotificationModal";

/**
 * 부모 섹션: 더미데이터 + 모달 열고닫기 및 alert 대체 관리
 * [HINT] 나중에 여기서 서버 연동/상태관리(RTK, React Query 등)로 교체
 */

export default function ProductQuestion() {
  // 더미 데이터 4건
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

  // 펼침/접힘 한 개만
  // 수정: 초기값을 null로 변경하여 페이지 로드 시 모든 항목이 닫히도록 합니다.
  const [openId, setOpenId] = useState(null);

  // 모달 상태
  const [showAdd, setShowAdd] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  // 알림 모달 상태 (alert 대체)
  const [notification, setNotification] = useState(null);

  return (
    // 컨버스 디자인: 중앙 컨테이너 및 배경 스타일 적용
    <div className="min-h-screen pt-12 pb-24 bg-gray-100 font-sans">
      <div className="max-w-[820px] mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
        {/* 헤더 섹션 (Q&A 제목 및 문의 작성 버튼 - 컨버스 스타일 적용) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 border-b border-gray-200 pb-4 gap-3 px-3">
          <h3 className="text-2xl font-extrabold text-gray-900 whitespace-nowrap">
            상품 Q&A (총 {items.length}건)
          </h3>
          <button
            className="px-5 py-2 text-sm font-semibold text-white rounded-md cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-700 flex items-center gap-1 self-stretch sm:self-auto"
            style={{ backgroundColor: "#111111" }}
            onClick={() => setShowAdd(true)}
          >
            <Edit className="w-4 h-4" />
            문의 작성
          </button>
        </div>

        <ProductQuestionList
          items={items}
          openId={openId}
          onToggle={(id) => setOpenId((prev) => (prev === id ? null : id))}
          onEdit={(item) => setEditItem(item)}
          onDelete={(item) => setDeleteItem(item)}
        />

        {/* 등록 모달 */}
        {showAdd && (
          <ProductQuestionAdd
            onClose={() => setShowAdd(false)}
            onSubmit={(payload) => {
              // alert() 대신 NotificationModal 사용
              setNotification({
                title: "알림",
                content: "등록 기능은 아직 구현 중입니다.",
              });
              setShowAdd(false);
            }}
          />
        )}

        {/* 수정 모달 */}
        {editItem && (
          <ProductQuestionModify
            item={editItem}
            onClose={() => setEditItem(null)}
            onSubmit={(payload) => {
              // alert() 대신 NotificationModal 사용
              setNotification({
                title: "알림",
                content: `문의 #${editItem.id} 수정은 아직 구현 중입니다.`,
              });
              setEditItem(null);
            }}
          />
        )}

        {/* 삭제 모달 */}
        {deleteItem && (
          <ProductQuestionDelete
            item={deleteItem}
            onCancel={() => setDeleteItem(null)}
            onConfirm={() => {
              // alert() 대신 NotificationModal 사용
              setNotification({
                title: "알림",
                content: `문의 #${deleteItem.id} 삭제는 아직 구현 중입니다.`,
              });
              setDeleteItem(null);
            }}
          />
        )}
      </div>

      {/* 알림 모달 */}
      <NotificationModal
        message={notification}
        onClose={() => setNotification(null)}
      />
    </div>
  );
}
