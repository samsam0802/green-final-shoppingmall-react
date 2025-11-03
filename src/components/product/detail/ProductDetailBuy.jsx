import React from "react";

export default function ProductDetailBuy({ product }) {
  return (
    <div className="mt-10 border-t pt-10 text-sm leading-relaxed text-[#111111]">
      {/* ✅ 화장품 정보 고시 테이블 */}
      <h3 className="text-lg font-semibold mb-4">상품 주요 정보</h3>

      <table className="w-full border-t border-b text-left text-sm">
        <tbody>
          <tr className="border-b">
            <th className="bg-gray-50 p-3 w-48 font-medium">용량 또는 중량</th>
            <td className="p-3">{product.volume || "상품 상세페이지 참고"}</td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">제조연월일</th>
            <td className="p-3">
              {product.mfgDate || "제조일로부터 36개월 이내 제품 순차 출고"}
            </td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">제품 주요 사양</th>
            <td className="p-3">
              {product.skinType || "모든 피부 타입 사용 가능"}
            </td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">
              사용기한 또는 개봉 후 사용기간
            </th>
            <td className="p-3">{product.expDate || "개봉 후 12개월"}</td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">사용방법</th>
            <td className="p-3">
              {product.howToUse ||
                "적당량을 취하여 얼굴에 고르게 펴 발라줍니다."}
            </td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">
              화장품책임판매업자 / 제조업자
            </th>
            <td className="p-3">
              {product.manufacturer || "㈜코스메스 / ㈜OO제조"}
            </td>
          </tr>

          <tr>
            <th className="bg-gray-50 p-3 font-medium">제조국</th>
            <td className="p-3">{product.origin || "대한민국"}</td>
          </tr>
        </tbody>
      </table>

      {/* ✅ 전성분 섹션 */}
      <h3 className="text-lg font-semibold mt-10 mb-4">전성분</h3>
      <p className="text-sm text-gray-700 whitespace-pre-line">
        {product.ingredients ||
          `정제수, 글리세린, 다이메티콘, 프로필렌글라이콜, 나이아신아마이드, 1,2-헥산다이올 ... (전성분 예시)`}
      </p>
    </div>
  );
}
