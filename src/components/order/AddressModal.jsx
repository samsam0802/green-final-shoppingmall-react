import React from "react";

const AddressModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96 shadow">
        <h3 className="font-semibold text-lg mb-4">주소 검색</h3>

        <input
          className="border p-2 w-full rounded mb-2"
          placeholder="도로명 또는 건물명 입력"
        />

        <button className="w-full bg-black text-white py-2 rounded mt-2">
          검색
        </button>

        <button className="w-full mt-4 p-2 border rounded" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default AddressModal;
