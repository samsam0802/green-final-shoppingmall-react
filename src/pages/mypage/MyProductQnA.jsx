import ProductQnAList from "../../components/user/mypage/ProductQnAList";

export default function MyProductQnA() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h1 className="text-xl font-bold mb-6">상품 문의내역</h1>
      <p className="text-sm text-zinc-500 mb-6">상품 문의내역 페이지 입니다.</p>
      <ProductQnAList />
    </div>
  );
}
