import React, { useState } from "react";
import ProductCategory from "../../../components/admin/product/ProductCategory";
import ProductBrand from "../../../components/admin/product/ProductBrand";
import ProductBasicInfo from "../../../components/admin/product/ProductBasicInfo";
import ProductSaleInfo from "../../../components/admin/product/ProductSaleInfo";
import ProductImageRegister from "../../../components/admin/product/ProductImageRegister";
import DeliveryCharge from "../../../components/admin/product/DeliveryCharge";
import OptionRegistration from "../../../components/admin/product/OptionRegistration";
import { useSelector } from "react-redux";

const ProductAddPage = () => {
  const productRegisterForm = useSelector(
    (state) => state.productRegisterSlice
  );

  const submitHandler = async () => {
    try {
      console.log("상품 등록 폼:", productRegisterForm);
      alert("상품이 등록되었습니다.");
    } catch (error) {
      console.error("등록 실패:", error);
      alert("상품 등록에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="space-y-8 pb-40">
        {/* props 전달 없이 사용 */}
        <ProductCategory />
        <ProductBrand />
        <ProductBasicInfo />
        <ProductSaleInfo />
        <ProductImageRegister />
        <DeliveryCharge />
        <OptionRegistration />
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div className="flex space-x-3">
            <button
              type="button"
              // onClick={() => dispatch(resetProductForm())}
              className="px-6 py-2 bg-gray-500 text-white text-sm font-medium rounded-md hover:bg-gray-600 transition-colors"
            >
              초기화
            </button>
            <button
              type="button"
              onClick={submitHandler}
              // disabled={isLoading}
              className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
            >
              상품 등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAddPage;
