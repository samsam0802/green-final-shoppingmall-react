import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateCouponRegisterForm } from "../../../redux/slices/features/admin/coupon/couponRegisterSlice";

export default function CouponBasicInfo() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [basicInfo, setBasicInfo] = useState({
    couponName: "",
    description: "",
    availability: "USABLE",
  });

  useEffect(() => {
    dispatch(
      updateCouponRegisterForm({
        section: "basicInfo",
        data: basicInfo,
      })
    );
  }, [basicInfo, dispatch]);

  const onChangeHandler = (e) => {
    const { name, value, type } = e.target;

    if (type === "text") {
      setBasicInfo((prev) => {
        const data = { ...prev, [name]: value };
        return data;
      });
    } else {
      setBasicInfo((prev) => {
        const data = { ...prev, [name]: value };
        return data;
      });
    }
  };

  return (
    <div className="border rounded-lg mb-4">
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold">기본 정보</h2>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && (
        <div className="divide-y">
          {/* 쿠폰 이름 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">쿠폰 이름</span>
            </div>
            <div className="flex-1 p-4">
              <input
                type="text"
                name="couponName"
                onChange={onChangeHandler}
                className="w-full px-3 py-2 border rounded"
                placeholder="고객에게 노출되는 명칭입니다."
              />
            </div>
          </div>

          {/* 쿠폰 설명 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">쿠폰 설명</span>
            </div>
            <div className="flex-1 p-4">
              <input
                type="text"
                name="description"
                onChange={onChangeHandler}
                className="w-full px-3 py-2 border rounded"
                placeholder="관리자에게만 노출되는 명칭입니다."
              />
            </div>
          </div>

          {/* 쿠폰 사용여부 */}
          <div className="flex">
            <div className="w-48 p-4 bg-gray-50 flex items-center">
              <span className="text-red-500 mr-1">*</span>
              <span className="text-sm">쿠폰 사용 가능 여부</span>
            </div>
            <div className="flex-1 p-4 flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availability"
                  value="USABLE"
                  onChange={onChangeHandler}
                  checked={basicInfo.availability === "USABLE"}
                  className="w-4 h-4"
                />
                <span className="text-sm">사용</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availability"
                  value="USABLE_BUT_UNISSUABLE"
                  onChange={onChangeHandler}
                  checked={basicInfo.availability === "USABLE_BUT_UNISSUABLE"}
                  className="w-4 h-4"
                />
                <span className="text-sm">사용(발급불가)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availability"
                  value="UNUSABLE"
                  onChange={onChangeHandler}
                  checked={basicInfo.availability === "UNUSABLE"}
                  className="w-4 h-4"
                />
                <span className="text-sm">사용불가</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
