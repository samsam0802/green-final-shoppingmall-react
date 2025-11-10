import React, { useState } from "react";
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
    useDate: "제한 없음",
    type: "사용",
    usage: "전체",
    issueMethod: "관리자 수동 발급",
    issueTarget: "전체 회원",
    amount: "3,000",
    discountType: "정액할인(원)",
    status: "본사",
    issuePeriod: "2022-09-01 00:00:00 ~ 2023-03-01 23:56:59",
    validPeriod: "3",
  },
  {
    id: 2,
    name: "특판가입 쿠폰",
    code: "MSCP220901134244",
    useDate: "2022-09-01 00:00:00 ~ 2023-03-01 23:56:59",
    type: "사용",
    usage: "전체",
    issueMethod: "관리자 수동 발급",
    issueTarget: "전체 회원",
    amount: "2,000",
    discountType: "정액할인(원)",
    status: "본사",
    issuePeriod: "2022-09-01 00:00:00 ~ 2023-03-01 23:56:59",
    validPeriod: "3",
  },
];

export default function CouponSearchList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  return (
    <>
      {/* Results Count */}
      <div className="p-4 flex items-center justify-between">
        <div className="text-sm">
          목록<span className="text-green-500">(총 {coupons.length}개)</span>
        </div>
        {/* 몇개씩 조회할건지 */}
        {/* <select
          className="px-3 py-1 border rounded text-sm"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select> */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-t border-b">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                관리
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                쿠폰 이름
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                쿠폰 번호
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                쿠폰 설명
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                사용 기간
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                쿠폰 사용여부
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                쿠폰 사용범위
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                발급 방식
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                발급 대상
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                할인 정보
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                할인 타입
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                할인 부담
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                발급 기간
              </th>
              <th className="px-4 py-3 text-sm font-medium text-center border-b whitespace-nowrap">
                발급 인원
              </th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 text-center">
                  <div className="flex gap-1 justify-center">
                    <button
                      // onClick={() => onEdit(coupon.id)}
                      className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      수정
                    </button>
                    <button
                      // onClick={() => onDelete(coupon.id)}
                      className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      삭제
                    </button>
                    <button
                      // onClick={() => onIssue(coupon.id)}
                      className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      발급
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.name}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.code}
                </td>
                <td className="px-4 py-3 text-sm text-center"></td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.useDate}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.type}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.usage}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.issueMethod}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.issueTarget}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.amount}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.discountType}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.status}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.issuePeriod}
                </td>
                <td className="px-4 py-3 text-sm text-center whitespace-nowrap">
                  {coupon.validPeriod}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 p-6">
        <button className="p-2 border rounded hover:bg-gray-50">
          <ChevronsLeft size={16} />
        </button>
        <button className="p-2 border rounded hover:bg-gray-50">
          <ChevronLeft size={16} />
        </button>
        <button className="px-3 py-1 bg-green-500 text-white rounded">
          {currentPage}
        </button>
        <button className="p-2 border rounded hover:bg-gray-50">
          <ChevronRight size={16} />
        </button>
        <button className="p-2 border rounded hover:bg-gray-50">
          <ChevronsRight size={16} />
        </button>
      </div>
    </>
  );
}
