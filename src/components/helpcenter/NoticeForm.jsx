import React, { useState } from "react";

const noticeTypes = ["일반", "배송공지", "고객센터"];

export default function NoticeForm({ mode, initialData, onSave, onCancel }) {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      type: "일반",
      content: "",
    }
  );

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!formData.content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="space-y-6">
      {/* 분류 */}
      <div>
        <label className="block text-sm font-medium mb-2">분류</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full max-w-xs border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          {noticeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* 제목 */}
      <div>
        <label className="block text-sm font-medium mb-2">제목</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="제목을 입력하세요"
          className="w-full border border-gray-300 rounded-sm px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* 내용 */}
      <div>
        <label className="block text-sm font-medium mb-2">내용</label>
        <textarea
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          placeholder="내용을 입력하세요"
          rows={15}
          className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />
      </div>

      {/* 버튼 */}
      <div className="flex gap-3 pt-4 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-sm text-sm hover:bg-gray-50"
        >
          취소
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 bg-black text-white rounded-sm text-sm hover:bg-black/80"
        >
          {mode === "write" ? "작성 완료" : "수정 완료"}
        </button>
      </div>
    </div>
  );
}
