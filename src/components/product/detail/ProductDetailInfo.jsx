import { useParams } from "react-router-dom";
import products from "../../../data/products";

export default function ProductDetailInfo() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const details = product.detailImages || [product.image];

  return (
    <div className="py-12 space-y-12">
      {details.map((src, i) => (
        <img key={i} src={src} className="w-full rounded-lg shadow-sm" />
      ))}

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
  );
}
