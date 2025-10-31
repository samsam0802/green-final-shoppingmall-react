import React from "react";

const SecessionMemberResultTable = ({ dataLength = 0 }) => {
  const headers = [
    "이름",
    "아이디",
    "이메일",
    "탈퇴사유분류명",
    "남긴말",
    "탈퇴일",
    "관리",
  ];

  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-gray-700 bg-gray-50 border-y border-gray-300 px-4 py-2 mb-4">
        탈퇴회원 검색결과 ({dataLength}개)
      </h3>

      <div className="border border-gray-300">
        {/* 테이블 헤더 */}
        <div className="grid grid-cols-7 bg-gray-100 text-gray-700 font-semibold border-b border-gray-300 text-center">
          {headers.map((header) => (
            <div
              key={header}
              className="p-2 border-r border-gray-300 last:border-r-0"
            >
              {header}
            </div>
          ))}
        </div>

        {/* 데이터 영역 */}
        {dataLength === 0 ? (
          <div className="flex flex-col items-center justify-center p-20 text-gray-500 bg-white">
            데이터가 없습니다.
          </div>
        ) : (
          <div className="text-center p-4">데이터 표시 영역</div>
        )}
      </div>
    </div>
  );
};

export default SecessionMemberResultTable;
