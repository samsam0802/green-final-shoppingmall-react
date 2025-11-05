import React from "react";
import ProductCategory from "../../../components/admin/product/ProductCategory";
import ProductBrand from "../../../components/admin/product/ProductBrand";
import ProductBasicInfo from "../../../components/admin/product/ProductBasicInfo";
import ProductSaleInfo from "../../../components/admin/product/ProductSaleInfo";
import ProductImageRegister from "../../../components/admin/product/ProductImageRegister";
import DeliveryCharge from "../../../components/admin/product/DeliveryCharge";
import OptionRegistration from "../../../components/admin/product/OptionRegistration";

const ProductAddPage = () => {
  return (
    <div className="space-y-8">
      {/* 컴포넌트 간 간격 추가 */}
      <ProductCategory />
      <ProductBrand />
      <ProductBasicInfo />
      <ProductSaleInfo />
      <ProductImageRegister />
      <DeliveryCharge />
      {/* <ProductEventRegister /> */}
      <OptionRegistration />
    </div>
  );
};

export default ProductAddPage;
