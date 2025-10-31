import React from "react";
import ProductListComponent from "../../components/product/ProductListComponent";
import Header from "../../layouts/mainpage/Header";
import NavBar from "../../layouts/mainpage/NavBar";

const ProductListPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ProductListComponent />
    </>
  );
};

export default ProductListPage;
