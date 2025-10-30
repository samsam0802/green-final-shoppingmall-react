import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeBar({ title = "" }) {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-60 bg-white/90 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-black transition"
          aria-label="메인페이지로 가기"
        >
          <span className="text-lg leading-none">←</span>
          메인페이지로 가기
        </button>
        <span className="text-sm text-zinc-500">고객센터</span>
      </div>
    </div>
  );
}
