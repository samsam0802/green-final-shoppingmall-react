import React from "react";
import SearchResultComponent from "../../components/search/SearchResultComponent";
import Header from "../../layouts/mainpage/Header";

const SearchResultPage = () => {
  return (
    <div>
      <Header />
      <div>
        <SearchResultComponent />
      </div>
    </div>
  );
};

export default SearchResultPage;
