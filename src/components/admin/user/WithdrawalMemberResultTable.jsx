import React from "react";

const WithdrawalMemberResultTable = () => {
  const dummyData = [
    {
      id: 1,
      name: "홍길동",
      userId: "hong123",
      email: "hong@example.com",
      reasonType: "서비스 불만",
      detail: "UI가 불편했어요.",
      secessionDate: "2025-10-31",
    },
    {
      id: 2,
      name: "김철수",
      userId: "kimc",
      email: "kimc@example.com",
      reasonType: "기타",
      detail: "그동안 감사했습니다.",
      secessionDate: "2025-09-15",
    },
  ];

  return (
    <div>
      <div className="text-lg font-bold text-gray-800 mb-4">
        탈퇴회원 검색결과
      </div>
      <div className="border border-gray-300 mb-6">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr>
              {[
                "이름",
                "아이디",
                "이메일",
                "탈퇴사유분류명",
                "남긴말",
                "탈퇴일",
                "관리",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300 last:border-r-0"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {dummyData.length > 0 ? (
              dummyData.map((m) => (
                <tr key={m.id} className="border-t border-gray-200">
                  <td className="px-4 py-3 text-center text-sm text-gray-900 border-r border-gray-200">
                    {m.name}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                    {m.userId}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                    {m.email}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                    {m.reasonType}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200 max-w-sm overflow-hidden text-ellipsis">
                    {m.detail}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                    {m.secessionDate}
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-medium">
                    <button className="bg-green-500 text-white font-bold py-1 px-3 rounded text-xs">
                      복구하기
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 페이네이션 */}
      <div className="flex justify-center mt-4">
        <nav className="inline-flex -space-x-px">
          {["<", "1", "2", "3", ">", ">>"].map((p, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 border border-gray-300 text-sm ${
                p === "1" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
              }`}
            >
              {p}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default WithdrawalMemberResultTable;
