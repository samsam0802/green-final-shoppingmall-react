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
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold text-gray-800">탈퇴회원 검색결과</div>
      </div>

      <div className="border border-gray-300 mb-6">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr>
              <th className="px-2 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                선택
              </th>
              <th className="px-2 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                번호
              </th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                이름
              </th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                아이디
              </th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                이메일
              </th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                탈퇴사유분류명
              </th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                남긴말
              </th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                탈퇴일
              </th>
              <th className="px-4 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                관리
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {dummyData.length > 0 ? (
              dummyData.map((m, index) => (
                <tr key={m.id} className="border-t border-gray-200">
                  {/* 선택 */}
                  <td className="px-2 py-3 text-center border-r border-gray-200">
                    <input type="checkbox" className="cursor-pointer" />
                  </td>

                  {/* 번호 */}
                  <td className="px-2 py-3 text-center border-r border-gray-200">
                    {index + 1}
                  </td>

                  {/* 이름 */}
                  <td className="px-4 py-3 text-center text-sm text-gray-900 border-r border-gray-200">
                    {m.name}
                  </td>

                  {/* 아이디 */}
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                    {m.userId}
                  </td>

                  {/* 이메일 */}
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                    {m.email}
                  </td>

                  {/* 탈퇴사유 */}
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                    {m.reasonType}
                  </td>

                  {/* 남긴말 */}
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200 max-w-sm overflow-hidden text-ellipsis">
                    {m.detail}
                  </td>

                  {/* 탈퇴일 */}
                  <td className="px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                    {m.secessionDate}
                  </td>

                  {/* 관리 */}
                  <td className="px-4 py-3 text-center text-sm font-medium">
                    <button className="bg-green-500 text-white font-bold py-1 px-3 text-xs cursor-pointer">
                      복구하기
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-10 text-gray-500">
                  데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 페이네이션 */}
      <div className="flex justify-center mt-4">
        <nav className="inline-flex space-x-2">
          {["이전", "1", "2", "3", "다음"].map((p, idx) => (
            <span
              key={idx}
              className="px-3 py-1 border border-gray-300 text-sm cursor-pointer text-gray-700"
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
