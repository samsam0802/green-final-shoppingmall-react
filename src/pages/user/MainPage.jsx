import React from "react";
import Header from "../../layout/Header";
import NavBar from "../../layout/NavBar";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <NavBar />

      <main className="flex-1">
        <section className="relative h-[420px] bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba2"
            alt="배너"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
            <h2 className="text-4xl font-bold mb-2">TitleName COLLECTION</h2>
            <p className="text-sm opacity-90">설명(미정)</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-3/4 rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400"
              >
                카드(미정)
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-center text-gray-600 py-5 mt-auto">
        © 2025 신소라와 세남자 — 사이트 푸터(미정)
      </footer>
    </div>
  );
}
