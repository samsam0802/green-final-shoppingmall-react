import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import products from "../../../data/products";

export default function ProductDetailInfo() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const details = product.detailImages || [product.image];

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-12">
      <div className="space-y-12">
        {/* 첫 번째 이미지 */}
        <img
          src={details[0]}
          className="w-full rounded-lg shadow-sm"
          alt="상품 상세 이미지 1"
        />

        {/* 간단 상품 특징 요약 */}
        <div className="border bg-gray-50 p-8 rounded-lg text-gray-700 leading-relaxed">
          <h3 className="text-xl font-bold mb-4">{product.name}</h3>
          <ul className="space-y-3 text-sm">
            <li>• 피부 자극 테스트 완료</li>
            <li>• 데일리 케어로 부담 없이 사용 가능</li>
            <li>• 촉촉하지만 끈적임 없는 산뜻 마무리</li>
          </ul>
        </div>
      </div>

      {/* 더보기 영역 (나머지 이미지가 있을 때만) */}
      {details.length > 1 && !isExpanded && (
        <div className="relative mt-12">
          {/* 그라데이션 오버레이 */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>

          {/* 미리보기 이미지 (흐릿하게) */}
          <div className="overflow-hidden max-h-48 relative">
            <img
              src={details[1]}
              className="w-full rounded-lg shadow-sm blur-sm"
              alt="상품 상세 이미지 미리보기"
            />
          </div>

          {/* 더보기 버튼 */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-32 py-4 bg-white border-2 border-gray-900 rounded-lg text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>더보기</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* 펼쳐진 상태 - 나머지 이미지들 */}
      {isExpanded && (
        <>
          <div className="mt-12 space-y-12">
            {details.slice(1).map((src, i) => (
              <img
                key={i + 1}
                src={src}
                className="w-full rounded-lg shadow-sm"
                alt={`상품 상세 이미지 ${i + 2}`}
              />
            ))}
          </div>

          {/* 접기 버튼 */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded(false)}
              className="px-32 py-4 bg-white border-2 border-gray-900 rounded-lg text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>접기</span>
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
