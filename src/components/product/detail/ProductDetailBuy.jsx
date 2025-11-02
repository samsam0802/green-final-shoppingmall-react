import { useParams } from "react-router-dom";
import products from "../../../data/products";

export default function ProductDetailBuy() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const info = product.shippingInfo;

  return (
    <div className="py-12 space-y-8 text-sm text-gray-700 leading-relaxed">
      <div className="border p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-3">배송 안내</h3>
        {info.deliveryTime} / {info.shippingCost}
      </div>

      <div className="border p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-3">교환 / 반품 안내</h3>
        {info.returnPolicy}
      </div>

      <div className="border p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-3">제조 정보</h3>
        제조국: {info.madeIn} <br />
        제조사: {info.manufacturer}
      </div>
    </div>
  );
}
