import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function OptionRegistration() {
  const [isOpen, setIsOpen] = useState(true);
  const [options, setOptions] = useState([
    {
      optionName: "",
      purchasePrice: "",
      sellingPrice: "",
      currentStock: "",
      initialStock: "",
      safetyStock: "",
      image: null,
    },
  ]);

  const addOptionHandler = () => {
    setOptions((prev) => [
      ...prev,
      {
        optionName: "",
        purchasePrice: "",
        sellingPrice: "",
        currentStock: "",
        initialStock: "",
        safetyStock: "",
        image: null,
      },
    ]);
  };

  const removeOptionHandler = (index) => {
    if (options.length > 1) {
      setOptions((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const inputChangeHandler = (index, field, value) => {
    setOptions((prev) => {
      const temp = prev.map((option, i) =>
        // 수정한 옵션의 값만 바뀌도록
        i === index ? { ...option, [field]: value } : option
      );
      console.log(temp);
      return temp;
    });
  };

  return (
    <div className="max-w-7xl mx-auto border border-gray-200 bg-white shadow-lg mt-6">
      {/* 섹션 헤더 */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-lg font-semibold text-gray-800">상품 옵션 등록</h2>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="p-4">
          {/* 옵션 추가 버튼 */}
          <div className="flex justify-end mb-4">
            <button
              onClick={addOptionHandler}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              + 옵션 추가
            </button>
          </div>

          {/* 테이블 형식 */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-3 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-16">
                    No.
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider min-w-[180px]">
                    옵션명
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-24">
                    매입가
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-24">
                    판매가
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-24">
                    현재재고
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-24">
                    초기재고
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-24">
                    안전재고
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider min-w-[280px]">
                    이미지
                  </th>
                  <th className="px-3 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-20">
                    작업
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {options.map((option, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 py-3 text-center text-sm font-medium text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-3 py-3">
                      <input
                        type="text"
                        value={option.optionName}
                        onChange={(e) =>
                          inputChangeHandler(
                            index,
                            "optionName",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="옵션 이름"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <input
                        type="number"
                        value={option.purchasePrice}
                        onChange={(e) =>
                          inputChangeHandler(
                            index,
                            "purchasePrice",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <input
                        type="number"
                        value={option.sellingPrice}
                        onChange={(e) =>
                          inputChangeHandler(
                            index,
                            "sellingPrice",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <input
                        type="number"
                        value={option.currentStock}
                        onChange={(e) =>
                          inputChangeHandler(
                            index,
                            "currentStock",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <input
                        type="number"
                        value={option.initialStock}
                        onChange={(e) =>
                          inputChangeHandler(
                            index,
                            "initialStock",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <input
                        type="number"
                        value={option.safetyStock}
                        onChange={(e) =>
                          inputChangeHandler(
                            index,
                            "safetyStock",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              inputChangeHandler(
                                index,
                                "image",
                                e.target.files[0]
                              )
                            }
                            className="hidden"
                            id={`file-input-${index}`}
                          />
                          <label
                            htmlFor={`file-input-${index}`}
                            className="cursor-pointer inline-block px-3 py-1.5 bg-gray-500 text-white text-xs rounded hover:bg-gray-600 transition-colors"
                          >
                            파일 선택
                          </label>
                          {option.image && (
                            <div
                              className="mt-1 text-xs text-gray-600 truncate max-w-[120px]"
                              title={option.image.name}
                            >
                              {option.image.name}
                            </div>
                          )}
                        </div>
                        <div className="w-16 h-16 border border-gray-300 rounded bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
                          {option.image ? (
                            <img
                              src={URL.createObjectURL(option.image)}
                              alt="미리보기"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-xs text-gray-400 text-center px-1">
                              미리보기
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center">
                      {options.length > 1 && (
                        <button
                          onClick={() => removeOptionHandler(index)}
                          className="px-3 py-1.5 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
                        >
                          삭제
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 도움말 */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              * 옵션은 여러 개 추가할 수 있습니다. 각 옵션별로 가격과 재고를
              설정해주세요.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              * 안전재고는 재고 부족 알림을 받을 최소 수량입니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
