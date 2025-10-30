import React from "react";

const AdminOrderMgrComponent = () => {
  const FilterLabel = ({ children }) => (
    <div className="w-28 bg-gray-50 border-r border-gray-200 text-sm font-semibold text-gray-700 flex items-center justify-center">
      {children}
    </div>
  );

  const FilterContent = ({ children }) => (
    <div className="p-2 flex items-center flex-wrap flex-grow gap-x-3">
      {children}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md my-10 text-sm font-['Inter']">
      <h2 className="text-xl font-bold text-gray-800 border-b px-6 py-4 mb-4 flex justify-between items-center">
        전체 주문 조회
        <div className="space-x-2">
          <button className="bg-gray-100 px-3 py-1">엑셀 다운로드</button>
          <button className="bg-blue-600 text-white px-3 py-1">
            선택 출고 처리
          </button>
        </div>
      </h2>

      {/* 검색 필터 */}
      <div className="border border-gray-300 mb-6">
        <div className="flex border-b">
          <FilterLabel>검색어</FilterLabel>
          <FilterContent>
            <input
              type="text"
              placeholder="주문번호, 주문자명, 상품명 등"
              className="border p-1 w-80"
            />
            <label className="ml-2">
              <input type="checkbox" className="mr-1" /> 부분검색
            </label>
          </FilterContent>
        </div>

        <div className="flex border-b">
          <FilterLabel>날짜</FilterLabel>
          <FilterContent>
            <select className="border p-1 mr-2">
              <option>주문일</option>
              <option>결제일</option>
            </select>
            <input type="date" className="border p-1 mr-1" />-
            <input type="date" className="border p-1 ml-1" />
          </FilterContent>
        </div>

        <div className="flex border-b">
          <FilterLabel>주문상태</FilterLabel>
          <FilterContent>
            {[
              "주문접수",
              "결제확인",
              "상품준비",
              "출고완료",
              "배송중",
              "배송완료",
            ].map((s) => (
              <label key={s}>
                <input type="checkbox" className="mr-1" /> {s}
              </label>
            ))}
            <label className="ml-3">
              <input type="checkbox" className="mr-1" /> 전체
            </label>
          </FilterContent>
        </div>

        <div className="flex border-b">
          <FilterLabel>배송방법</FilterLabel>
          <FilterContent>
            {["대한통운", "우체국", "직접입력", "해외국가"].map((m) => (
              <label key={m}>
                <input type="checkbox" className="mr-1" /> {m}
              </label>
            ))}
          </FilterContent>
        </div>

        <div className="flex border-b">
          <FilterLabel>주문상품</FilterLabel>
          <FilterContent>
            {["청약철회불가", "패키지/묶음상품", "사은품"].map((i) => (
              <label key={i}>
                <input type="checkbox" className="mr-1" /> {i}
              </label>
            ))}
          </FilterContent>
        </div>

        {/* 주문유형 + 주문결제 같은 줄 */}
        <div className="flex border-b">
          <FilterLabel>주문유형</FilterLabel>
          <FilterContent className="justify-between w-full">
            <div className="flex gap-x-3">
              {["고객주문", "관리자주문"].map((t) => (
                <label key={t}>
                  <input type="checkbox" className="mr-1" /> {t}
                </label>
              ))}
            </div>

            <div className="flex items-center border-l border-gray-300 pl-4">
              <span className="font-semibold text-gray-700 mr-3">주문결제</span>
              {["무통장입금", "신용카드", "휴대폰결제"].map((m) => (
                <label key={m}>
                  <input type="checkbox" className="mr-1" /> {m}
                </label>
              ))}
            </div>
          </FilterContent>
        </div>

        <div className="flex">
          <FilterLabel>결제상태</FilterLabel>
          <FilterContent>
            {["무통장입금 대기", "카드결제완료", "소액결제완료"].map((p) => (
              <label key={p}>
                <input type="checkbox" className="mr-1" /> {p}
              </label>
            ))}
          </FilterContent>
        </div>
      </div>

      {/* 검색 버튼 */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-blue-600 text-white px-5 py-2">검색</button>
        <button className="bg-gray-200 px-5 py-2">초기화</button>
      </div>

      {/* 주문 리스트 */}
      <div className="border border-gray-300">
        <div className="bg-gray-50 p-3 border-b flex justify-between">
          <span>총 0건의 주문이 검색되었습니다.</span>
          <select className="border p-1">
            <option>100개씩 보기</option>
            <option>50개씩 보기</option>
          </select>
        </div>
        <table className="min-w-full text-center text-sm">
          <thead className="bg-gray-100">
            <tr>
              {[
                "선택",
                "번호",
                "주문날짜",
                "주문번호",
                "상품명",
                "수량",
                "받는분/주문자",
                "결제수단",
                "결제금액",
                "주문상태",
              ].map((h) => (
                <th key={h} className="py-2 border-b">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10" className="py-6 text-gray-500">
                검색된 주문이 없습니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderMgrComponent;
