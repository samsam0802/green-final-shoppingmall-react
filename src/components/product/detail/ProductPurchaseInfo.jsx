import React from "react";

export default function ProductPurchaseInfo() {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
        구매정보
      </h3>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* 데스크톱 테이블 뷰 */}
        <table className="hidden md:table w-full text-sm">
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 w-56 font-semibold text-gray-700 text-left align-top">
                용량 또는 중량
              </th>
              <td className="p-4 text-gray-600 align-top">
                상품 상세페이지 참조
              </td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                제조일자
              </th>
              <td className="p-4 text-gray-600 align-top">제조일자 별도표기</td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                제품 주요 사양
              </th>
              <td className="p-4 text-gray-600 align-top">모든 피부</td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                사용기한 또는 개봉 후 사용기간
              </th>
              <td className="p-4 text-gray-600 align-top">
                개봉 후 12개월 이내 사용 권장
              </td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                사용방법
              </th>
              <td className="p-4 text-gray-600 align-top">
                적당량을 취해 피부 결 방향에 따라 부드럽게 펴 발라줍니다.
              </td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                화장품책임판매업자 / 제조업자
              </th>
              <td className="p-4 text-gray-600 align-top">
                ㈜클리오 / ㈜코스맥스
              </td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                제조국
              </th>
              <td className="p-4 text-gray-600 align-top">대한민국</td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                화장품법에 따라 기재해야 하는 모든 성분
              </th>
              <td className="p-4 text-gray-600 leading-relaxed align-top">
                정제수, 티타늄디옥사이드(CI 77891), 부틸렌글라이콜,
                폴리글리세릴-10스테아레이트, 나이아신아마이드, 향료 등
                (상세페이지 참조)
              </td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                기능성 화장품 심사필유무
              </th>
              <td className="p-4 text-gray-600 align-top">
                해당 없음 / 자외선 차단 기능성 표시 시 별도 표기
              </td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                사용 시 주의사항
              </th>
              <td className="p-4 text-gray-600 leading-relaxed">
                <div className="space-y-2">
                  <p>
                    1) 화장품 사용 시 또는 사용 후 직사광선에 의하여 피부에 붉은
                    반점, 부어오름, 가려움증 등이 이상 증상이 나타날 경우 사용을
                    중지하고 전문의 등과 상담할 것
                  </p>
                  <p>2) 상처가 있는 부위 등에는 사용을 자제할 것</p>
                </div>
              </td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                품질보증기준
              </th>
              <td className="p-4 text-gray-600 align-top">
                본 제품에 이상이 있을 경우 공정거래위원회 고시에 의거
                보상해드립니다.
              </td>
            </tr>

            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                소비자 상담 관련 전화번호
              </th>
              <td className="p-4 text-gray-600 align-top">
                <a
                  href="tel:080-080-1510"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  080-080-1510
                </a>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors">
              <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 font-semibold text-gray-700 text-left align-top">
                배송 안내
              </th>
              <td className="p-4 text-gray-600 align-top">
                주문일로부터 평균 1~3일 소요 (택배사 사정에 따라 상이)
              </td>
            </tr>
          </tbody>
        </table>

        {/* 모바일 카드 뷰 */}
        <div className="md:hidden divide-y divide-gray-100">
          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              용량 또는 중량
            </div>
            <div className="text-gray-600 text-sm">상품 상세페이지 참조</div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              제조일자
            </div>
            <div className="text-gray-600 text-sm">제조일자 별도표기</div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              제품 주요 사양
            </div>
            <div className="text-gray-600 text-sm">모든 피부</div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              사용기한 또는 개봉 후 사용기간
            </div>
            <div className="text-gray-600 text-sm">
              개봉 후 12개월 이내 사용 권장
            </div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              사용방법
            </div>
            <div className="text-gray-600 text-sm">
              적당량을 취해 피부 결 방향에 따라 부드럽게 펴 발라줍니다.
            </div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              화장품책임판매업자 / 제조업자
            </div>
            <div className="text-gray-600 text-sm">㈜클리오 / ㈜코스맥스</div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              제조국
            </div>
            <div className="text-gray-600 text-sm">대한민국</div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              전성분
            </div>
            <div className="text-gray-600 text-sm leading-relaxed">
              정제수, 티타늄디옥사이드(CI 77891), 부틸렌글라이콜,
              폴리글리세릴-10스테아레이트, 나이아신아마이드, 향료 등 (상세페이지
              참조)
            </div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              기능성 화장품 심사필유무
            </div>
            <div className="text-gray-600 text-sm">
              해당 없음 / 자외선 차단 기능성 표시 시 별도 표기
            </div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              사용 시 주의사항
            </div>
            <div className="text-gray-600 text-sm leading-relaxed space-y-2">
              <p>
                1) 화장품 사용 시 또는 사용 후 직사광선에 의하여 피부에 붉은
                반점, 부어오름, 가려움증 등이 이상 증상이 나타날 경우 사용을
                중지하고 전문의 등과 상담할 것
              </p>
              <p>2) 상처가 있는 부위 등에는 사용을 자제할 것</p>
            </div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              품질보증기준
            </div>
            <div className="text-gray-600 text-sm">
              본 제품에 이상이 있을 경우 공정거래위원회 고시에 의거
              보상해드립니다.
            </div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              소비자 상담 관련 전화번호
            </div>
            <div className="text-gray-600 text-sm">
              <a
                href="tel:080-080-1510"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                080-080-1510
              </a>
            </div>
          </div>

          <div className="p-4 hover:bg-gray-50 transition-colors">
            <div className="font-semibold text-gray-700 text-sm mb-2">
              배송 안내
            </div>
            <div className="text-gray-600 text-sm">
              주문일로부터 평균 1~3일 소요 (택배사 사정에 따라 상이)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
