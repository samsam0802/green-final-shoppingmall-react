import React, { useState } from "react";
import ProductCategory from "../../../components/admin/product/ProductCategory";
import ProductBrand from "../../../components/admin/product/ProductBrand";
import ProductBasicInfo from "../../../components/admin/product/ProductBasicInfo";
import ProductSaleInfo from "../../../components/admin/product/ProductSaleInfo";
import ProductImageRegister from "../../../components/admin/product/ProductImageRegister";
import DeliveryCharge from "../../../components/admin/product/DeliveryCharge";
import OptionRegistration from "../../../components/admin/product/OptionRegistration";

const ProductAddPage = () => {
  const [productData, setProductData] = useState({
    category: {},
    brand: {},
    basicInfo: {},
    saleInfo: {},
    images: {},
    delivery: {},
    options: [],
  });

  const handleSubmit = async () => {
    try {
      console.log("상품 데이터:", productData);
      alert("상품이 등록되었습니다.");
    } catch (error) {
      console.error("등록 실패:", error);
      alert("상품 등록에 실패했습니다.");
    }
  };

  return (
    <div className="space-y-8 pb-24">
      {/* 컴포넌트들 */}
      <ProductCategory
        onDataChange={(data) =>
          setProductData((prev) => ({ ...prev, category: data }))
        }
      />
      <ProductBrand
        onDataChange={(data) =>
          setProductData((prev) => ({ ...prev, brand: data }))
        }
      />
      <ProductBasicInfo
        onDataChange={(data) =>
          setProductData((prev) => ({ ...prev, basicInfo: data }))
        }
      />
      <ProductSaleInfo
        onDataChange={(data) =>
          setProductData((prev) => ({ ...prev, saleInfo: data }))
        }
      />
      <ProductImageRegister
        onDataChange={(data) =>
          setProductData((prev) => ({ ...prev, images: data }))
        }
      />
      <DeliveryCharge
        onDataChange={(data) =>
          setProductData((prev) => ({ ...prev, delivery: data }))
        }
      />
      <OptionRegistration
        onDataChange={(data) =>
          setProductData((prev) => ({ ...prev, options: data }))
        }
      />
      {/* 등록 버튼 - 사이드바 너비 고려 */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-end space-x-3">
          <button
            type="button"
            className="px-6 py-3 bg-gray-500 text-white text-sm font-medium rounded-md hover:bg-gray-600 transition-colors"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            상품 등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAddPage;
