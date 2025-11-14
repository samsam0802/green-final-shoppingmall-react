import React, { useState } from "react";

import ProductDetailComponent from "../../components/product/detail/ProductDetailComponent";
import Header from "../../layouts/mainpage/Header";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <ProductDetailComponent />
    </>
  );
};

export default ProductDetailPage;
