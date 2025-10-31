import React, { useState } from "react";

import ProductDetailComponent from "../../components/product/ProductDetailComponent";
import Header from "../../layouts/mainpage/Header";
import NavBar from "../../layouts/mainpage/NavBar";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ProductDetailComponent />
    </>
  );
};

export default ProductDetailPage;
