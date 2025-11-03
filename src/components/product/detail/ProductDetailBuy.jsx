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
            <td className="p-3">{product.volume || "40ml"}</td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">제품 주요 사양</th>
            <td className="p-3">{product.skinType || "모든 피부"}</td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">
              사용기한 또는 개봉 후 사용기간
            </th>
            <td className="p-3">
              {product.expDate || "개봉 전 36개월, 개봉 후 12개월"}
            </td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">사용방법</th>
            <td className="p-3">
              {product.howToUse ||
                "기초 케어의 마지막 단계에서 적당량을 얼굴 안쪽에서 바깥쪽으로 부드럽게 도포해줍니다."}
            </td>
          </tr>

          <tr className="border-b">
            <th className="bg-gray-50 p-3 font-medium">
              화장품책임판매업자 / 제조업자
            </th>
            <td className="p-3">
              {product.manufacturer || "㈜엘지생활건강 / ㈜엘지생활건강"}
            </td>
          </tr>

          <tr>
            <th className="bg-gray-50 p-3 font-medium">제조국</th>
            <td className="p-3">{product.origin || "대한민국"}</td>
          </tr>
        </tbody>
      </table>

      {/* ✅ 전성분 */}
      <h3 className="text-lg font-semibold mt-10 mb-4">전성분</h3>
      <p className="text-sm text-gray-700 whitespace-pre-line">
        {product.ingredients ||
          `정제수, 다이프로필렌글라이콜, 변성알코올, 나이아신아마이드, 글리세레스-26, 베타인, 1,2-헥산다이올, 글리세린, 폴리글리세릴-10스테아레이트, 부틸렌글라이콜, 판테놀, 폴리쿼터늄-51, 프로판다이올, 세테아릴알코올, 다마스크장미꽃추출물, 트로메타민, 카보머, 말토덱스트린, 피이지-40하이드로제네이티드캐스터오일, 다이소듐이디티에이, 소듐스테아로일글루타메이트, 스틸렌/아크릴레이트코폴리머, 시트릭애씨드, 다이소듐포스페이트, 소듐포스페이트, 시아노코발아민, 에틸헥실글리세린, 향료, 시트로넬올, 적색산화철`}
      </p>

      {/* ✅ 배송 / 교환 / 반품 안내 */}
      <h3 className="text-lg font-semibold mt-14 mb-4">
        배송 / 교환 / 반품 안내
      </h3>

      <div className="text-sm text-gray-700 space-y-6">
        <div>
          <h4 className="font-medium mb-2 text-[#111]">배송 안내</h4>
          <ul className="list-disc ml-5 leading-relaxed">
            <li>평균 배송기간은 주문일로부터 1~3일 소요됩니다.</li>
            <li>도서산간 / 제주 지역은 추가 배송비가 발생할 수 있습니다.</li>
            <li>택배사 사정에 따라 배송 지연이 발생할 수 있습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2 text-[#111]">교환 / 반품 안내</h4>
          <ul className="list-disc ml-5 leading-relaxed">
            <li>
              단순 변심에 의한 교환/반품은 상품 수령 후 7일 이내 가능합니다.
            </li>
            <li>
              상품 훼손, 개봉, 사용 흔적이 있을 경우 교환/반품이 불가능합니다.
            </li>
            <li>상품 불량 또는 오배송의 경우 배송비는 무료입니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2 text-[#111]">고객센터</h4>
          <p>평일 10:00 ~ 17:00 (점심시간 12:00 ~ 13:00)</p>
        </div>
      </div>
    </div>
  );
}
