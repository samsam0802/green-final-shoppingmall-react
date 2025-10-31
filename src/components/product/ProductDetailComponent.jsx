import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductDetailComponent() {
  const [tab, setTab] = useState("info"); // info | buy | review | qna

  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate({ pathname: "/order" });
  };

  return (
    <div className="max-w-7xl mx-auto px-8 mt-12">
      {/* ===== 상단 상품 요약 영역 (이미 구현된 부분 그대로) ===== */}
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <div className="w-full h-[480px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            상품 이미지
          </div>
          <div className="flex gap-3 mt-4">
            <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
            <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
            <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-sm text-gray-500">브랜드명</div>
          <h1 className="text-2xl font-bold leading-snug">상품명</h1>
          <div className="text-3xl font-bold text-red-500">10,900원</div>

          <div className="border rounded-md p-4 text-sm text-gray-600">
            <span className="font-semibold text-gray-800">배송정보</span>
            <br />
            일반배송 / 평균 2~3일 소요
          </div>

          <div className="flex items-center gap-3">
            <button className="border px-3 py-1 rounded">-</button>
            <span>1</span>
            <button className="border px-3 py-1 rounded">+</button>
          </div>

          <div className="flex gap-3 pt-4">
            <button className="flex-1 border py-3 rounded-md hover:bg-gray-100">
              장바구니
            </button>
            <button
              className="flex-1 py-3 rounded-md text-white"
              style={{ backgroundColor: "#FF4D59" }}
              onClick={handleOrderClick}
            >
              구매하기
            </button>
          </div>
        </div>
      </div>

      {/* ===== 탭 메뉴 ===== */}
      <div className="border-b flex gap-10 text-sm font-medium">
        <button
          className={
            tab === "info" ? "text-black border-b-2 pb-2" : "text-gray-500 pb-2"
          }
          onClick={() => setTab("info")}
        >
          상품설명
        </button>
        <button
          className={
            tab === "buy" ? "text-black border-b-2 pb-2" : "text-gray-500 pb-2"
          }
          onClick={() => setTab("buy")}
        >
          구매정보
        </button>
        <button
          className={
            tab === "review"
              ? "text-black border-b-2 pb-2"
              : "text-gray-500 pb-2"
          }
          onClick={() => setTab("review")}
        >
          리뷰
        </button>
        <button
          className={
            tab === "qna" ? "text-black border-b-2 pb-2" : "text-gray-500 pb-2"
          }
          onClick={() => setTab("qna")}
        >
          Q&A
        </button>
      </div>

      {/* ===== 상품설명 탭 ===== */}
      {tab === "info" && (
        <div className="py-10">
          <div className="w-full h-[800px] bg-gray-100 flex items-center justify-center text-gray-400">
            상품 상세설명 이미지 영역
          </div>
        </div>
      )}

      {/* ===== 구매정보 탭 ===== */}
      {tab === "buy" && (
        <div className="py-10 space-y-6 text-sm text-gray-600">
          <div className="border p-5 rounded">
            <h3 className="font-semibold text-gray-800 mb-2">배송안내</h3>
            일반배송 평균 2~3일 소요 / 2만원 이상 무료배송
          </div>

          <div className="border p-5 rounded">
            <h3 className="font-semibold text-gray-800 mb-2">
              교환 / 반품 안내
            </h3>
            단순 변심 시 배송비 발생할 수 있음
          </div>
        </div>
      )}

      {/* ===== 리뷰 탭 ===== */}
      {tab === "review" && (
        <div className="py-10">
          <h3 className="text-xl font-bold mb-6">고객 리뷰</h3>

          <div className="border p-4 rounded mb-6">
            <span className="text-red-500 text-2xl font-bold">4.8</span>
            <span className="text-gray-500 ml-2">(22,830)</span>
          </div>

          <div className="space-y-4">
            <div className="border p-4 rounded text-sm">
              ⭐⭐⭐⭐⭐ 매우 좋아요!
            </div>
            <div className="border p-4 rounded text-sm">⭐⭐⭐⭐ 무난해요.</div>
          </div>
        </div>
      )}

      {/* ===== Q&A 탭 ===== */}
      {tab === "qna" && (
        <div className="py-10 space-y-4 text-sm">
          <div className="border p-4 rounded">
            <div className="font-semibold">Q. 재입고 일정 있나요?</div>
            <div className="mt-2 text-gray-500">A. 다음주 예상입니다.</div>
          </div>

          <div className="border p-4 rounded">
            <div className="font-semibold">Q. 향이 강한 편인가요?</div>
            <div className="mt-2 text-gray-500">A. 은은한 편입니다.</div>
          </div>
        </div>
      )}
    </div>
  );
}
