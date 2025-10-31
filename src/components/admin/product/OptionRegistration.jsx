// OptionRegistration.jsx
import { useState } from "react";

const OptionRegistration = () => {
  const [isOptionEnabled, setIsOptionEnabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultView, setDefaultView] = useState("default");
  const [options, setOptions] = useState([
    {
      id: 1,
      standard: "-",
      color: "black",
      colorName: "블랙",
      size: "M",
      productCode: "0",
      stock: "0",
      price: "68,000",
      description: "미입력",
    },
    {
      id: 2,
      standard: "-",
      color: "gray",
      colorName: "그레이",
      size: "L",
      productCode: "0",
      stock: "0",
      price: "68,000",
      description: "미입력",
    },
    {
      id: 3,
      standard: "-",
      color: "white",
      colorName: "화이트",
      size: "XL",
      productCode: "0",
      stock: "0",
      price: "68,000",
      description: "미입력",
    },
  ]);

  const handleOptionChange = (id, field, value) => {
    setOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, [field]: value } : option
      )
    );
  };

  const ColorIndicator = ({ color }) => {
    const colorClasses = {
      black: "bg-black",
      gray: "bg-gray-400",
      white: "bg-white border border-gray-300",
    };

    return <div className={`w-6 h-6 rounded ${colorClasses[color]} mr-2`} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">상품 옵션 등록</h1>
        </div>

        {/* 옵션 카드 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          {/* 옵션 헤더 */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">필수 옵션</h2>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <span>옵션 생성/수정</span>
              </button>
            </div>
          </div>

          {/* 옵션 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-medium">기준</th>
                  <th className="px-4 py-3 font-medium">색상</th>
                  <th className="px-4 py-3 font-medium">사이즈</th>
                  <th className="px-4 py-3 font-medium">상품 코드</th>
                  <th className="px-4 py-3 font-medium">매입가(평균)</th>
                  <th className="px-4 py-3 font-medium">정가</th>
                  <th className="px-4 py-3 font-medium">설명</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {options.map((option) => (
                  <tr key={option.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{option.standard}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <ColorIndicator color={option.color} />
                        <span>{option.colorName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{option.size}</td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={option.productCode}
                        onChange={(e) =>
                          handleOptionChange(
                            option.id,
                            "productCode",
                            e.target.value
                          )
                        }
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </td>

                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={option.stock}
                        onChange={(e) =>
                          handleOptionChange(option.id, "stock", e.target.value)
                        }
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </td>

                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={option.price}
                        onChange={(e) =>
                          handleOptionChange(option.id, "price", e.target.value)
                        }
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {option.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionRegistration;
