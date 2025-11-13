const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-10 space-x-1 sm:space-x-2">
      {/* 이전 페이지 버튼 (Prev) */}
      <button
        // 클럽클리오 스타일: 텍스트와 약간의 패딩, 둥근 모서리, 비활성화 시 투명도
        className="flex items-center px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
      >
        {/* 화살표 아이콘 (Tailwind CSS에서 직접 제공하지 않으므로 임시로 텍스트 사용, 실제로는 SVG 사용 권장) */}
        <span className="mr-1">&lt;</span>
        <span>Prev</span>
      </button>

      {/* 페이지 번호 버튼 */}
      <div className="flex space-x-1 sm:space-x-2 mx-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            // 클럽클리오 스타일: 직사각형 모양, 둥근 모서리, 넉넉한 패딩
            className={`
              w-10 h-10 flex justify-center items-center 
              text-sm font-medium border rounded-sm transition duration-150
              ${
                page === currentPage
                  ? "bg-black text-white border-black" // 활성 페이지: 검은색 배경/흰색 텍스트
                  : "text-gray-700 border-gray-300 hover:bg-gray-50" // 비활성 페이지: 흰색 배경/회색 텍스트, 호버 효과
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 다음 페이지 버튼 (Next) */}
      <button
        // 클럽클리오 스타일: 텍스트와 약간의 패딩, 둥근 모서리, 비활성화 시 투명도
        className="flex items-center px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        {/* 화살표 아이콘 */}
        <span className="ml-1">&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
