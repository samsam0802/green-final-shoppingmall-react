import React from "react";
import ProductCategory from "../../../components/admin/product/ProductCategory";
import ProductBrand from "../../../components/admin/product/ProductBrand";
import BasicInfo from "../../../components/admin/product/BasicInfo";
import SalesInfo from "../../../components/admin/product/SalesInfo";
import ProductImageRegister from "../../../components/admin/product/ProductImageRegister";
import DeliveryCharge from "../../../components/admin/product/DeliveryCharge";
import ProductEventRegister from "../../../components/admin/product/ProductEventRegister";

const ProductAddPage = () => {
  return (
    <div className="space-y-8">
      {/* 컴포넌트 간 간격 추가 */}
      <ProductCategory />
      <ProductBrand />
      <BasicInfo />
      <SalesInfo />
      <ProductImageRegister />
      <DeliveryCharge />
      <ProductEventRegister />
    </div>
  );
};

export default ProductAddPage;
