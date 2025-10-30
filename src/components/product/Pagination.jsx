import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        Prev
      </button>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
        <div className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">
          {page}
        </div>
      ))}
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        Next
      </button>
    </div>
  );
};

export default Pagination;
