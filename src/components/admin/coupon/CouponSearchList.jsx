import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const coupons = [
  {
    id: 1,
    name: "브리스 특가 쿠폰",
    code: "MSCP220901250924",
    description: "신규 회원 환영 쿠폰",
    useDate: "제한 없음",
    availability: "사용",
    usage: "전체",
    issueMethod: "관리자 수동 발급",
    issueTarget: "전체 회원",
    amount: "3,000",
    discountType: "정액할인(원)",
    status: "본사",
    issuePeriod: "2022-09-01 00:00:00 ~ 2023-03-01 23:56:59",
    issuanceCount: "3",
  },
  {
    id: 2,
    name: "특판가입 쿠폰",
    code: "MSCP220901134244",
    description: "특별 할인 쿠폰",
    useDate: "2022-09-01 00:00:00 ~ 2023-03-01 23:56:59",
    availability: "사용",
    usage: "전체",
    issueMethod: "관리자 수동 발급",
    issueTarget: "전체 회원",
    amount: "2,000",
    discountType: "정액할인(원)",
    status: "본사",
    issuePeriod: "2022-09-01 00:00:00 ~ 2023-03-01 23:56:59",
    issuanceCount: "3",
  },
  {
    id: 3,
    name: "생일 축하 쿠폰",
    code: "MSCP220901134245",
    description: "생일 고객 전용",
    useDate: "발급일로부터 30일",
    availability: "사용(발급불가)",
    usage: "전체",
    issueMethod: "특정 조건 자동 발급",
    issueTarget: "생일 회원",
    amount: "10",
    discountType: "정률할인(%)",
    status: "본사",
    issuePeriod: "2022-09-01 00:00:00 ~ 2023-12-31 23:56:59",
    issuanceCount: "12",
  },
];

export default function CouponSearchList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [selectedCoupons, setSelectedCoupons] = useState([]);

  const handleSelectAll = (e) => {
    setSelectedCoupons(e.target.checked ? coupons.map((c) => c.id) : []);
  };

  const handleSelectCoupon = (id) => {
    setSelectedCoupons((prev) =>
      prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-white text-sm">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="text-sm font-semibold text-gray-700">
          목록 <span className="text-blue-600">(총 {coupons.length}개)</span>
        </div>
        <select
          className="border border-gray-300 px-3 py-1 rounded-md text-sm bg-white cursor-pointer"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={25}>25개씩 보기</option>
          <option value={50}>50개씩 보기</option>
          <option value={100}>100개씩 보기</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr className="text-gray-700 font-semibold text-sm">
              <th className="px-4 py-3 text-center border-r border-gray-300 w-12">
                <input
                  type="checkbox"
                  checked={selectedCoupons.length === coupons.length}
                  onChange={handleSelectAll}
                  className="cursor-pointer accent-blue-600"
                />
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                관리
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                쿠폰 이름
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                쿠폰 번호
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                쿠폰 설명
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                사용 기간
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                사용 가능 여부
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                사용 범위
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                발급 방식
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                발급 대상
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                할인 정보
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                할인 타입
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                할인 부담
              </th>
              <th className="px-4 py-3 text-center border-r border-gray-300 whitespace-nowrap">
                발급 기간
              </th>
              <th className="px-4 py-3 text-center whitespace-nowrap">
                발급 현황
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-center border-r border-gray-200">
                  <input
                    type="checkbox"
                    checked={selectedCoupons.includes(coupon.id)}
                    onChange={() => handleSelectCoupon(coupon.id)}
                    className="cursor-pointer accent-blue-600"
                  />
                </td>
                <td className="px-4 py-3 text-center border-r border-gray-200">
                  <div className="flex gap-1 justify-center">
                    <button className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-2 py-1 rounded-md border border-blue-200 cursor-pointer transition shadow-sm">
                      수정
                    </button>
                    <button className="bg-red-50 text-red-700 hover:bg-red-100 px-2 py-1 rounded-md border border-red-200 cursor-pointer transition shadow-sm">
                      삭제
                    </button>
                    <button className="bg-green-50 text-green-700 hover:bg-green-100 px-2 py-1 rounded-md border border-green-200 cursor-pointer transition shadow-sm">
                      발급
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  {coupon.name}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap text-gray-600">
                  {coupon.code}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  {coupon.description}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  {coupon.useDate}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      coupon.availability === "사용"
                        ? "bg-green-100 text-green-700"
                        : coupon.availability === "사용(발급불가)"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {coupon.availability}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  {coupon.usage}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  {coupon.issueMethod}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  {coupon.issueTarget}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap font-semibold text-blue-600">
                  {coupon.amount}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  {coupon.discountType}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap">
                  {coupon.status}
                </td>
                <td className="px-4 py-3 text-sm text-center border-r border-gray-200 whitespace-nowrap text-gray-600">
                  {coupon.issuePeriod}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.issuanceCount}개
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-2 py-6 border-t border-gray-200">
        <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition">
          <ChevronsLeft size={16} className="text-gray-600" />
        </button>
        <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition">
          <ChevronLeft size={16} className="text-gray-600" />
        </button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded font-semibold shadow-sm">
          {currentPage}
        </button>
        <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition">
          <ChevronRight size={16} className="text-gray-600" />
        </button>
        <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition">
          <ChevronsRight size={16} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
