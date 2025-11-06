import { ChevronDown, ChevronUp, Upload, X, Plus } from "lucide-react";
import React, { useRef, useState } from "react";

// 초기 이미지 구조
const initialImages = {
  thumbnailImage: null,
  galleryImages: [],
};

export default function ProductImageRegister() {
  const thumbnailRef = useRef(null);
  const galleryRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [images, setImages] = useState(initialImages);
  // 선택된 미리보기 이미지의 인덱스 (미리보기 상세 정보를 보여주기 위함)
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState(0);

  const thumbnailImgChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImages((prev) => ({ ...prev, thumbnailImage: file }));
      // 대표 이미지가 선택되면 자동으로 미리보기 상세 정보 표시 (인덱스 0)
      setSelectedPreviewIndex(0);
    }
  };

  const galleryImgChangeHandler = (e) => {
    if (!images?.thumbnailImage) {
      alert("썸네일 이미지를 먼저 등록해 주세요.");
    } else {
      const files = Array.from(e.target.files);
      if (files.length > 0) {
        setImages((prev) => ({
          ...prev,
          galleryImages: [...prev.galleryImages, ...files],
        }));
      }
      // 파일 선택 후 input 값 초기화 (같은 파일을 다시 선택해도 onChange 이벤트 발생시키기 위함)
      e.target.value = "";
    }
  };

  // 이미지 삭제 핸들러 (대표 이미지와 추가 이미지 모두 처리)
  const removeImageHandler = (index) => {
    if (index === 0) {
      // 대표 이미지 삭제
      setImages((prev) => ({ ...prev, thumbnailImage: null }));
    } else {
      // 추가 이미지 삭제 (인덱스는 1부터 시작)
      setImages((prev) => ({
        ...prev,
        galleryImages: prev.galleryImages.filter((_, i) => i !== index - 1),
      }));
    }

    // 미리보기 인덱스 재설정
    if (selectedPreviewIndex === index) {
      setSelectedPreviewIndex(0); // 삭제된 이미지가 현재 미리보기라면 대표 이미지로 포커스 이동
    } else if (selectedPreviewIndex > index) {
      setSelectedPreviewIndex((prev) => prev - 1); // 뒤쪽 이미지가 삭제되면 인덱스 조정
    }
  };

  // 미리보기 목록
  const previewList = [images.thumbnailImage, ...images.galleryImages].filter(
    (file) => Boolean(file)
  ); // 예상하지 못한 falsy 값 제거

  // 현재 선택된 미리보기 파일
  const currentPreviewFile = previewList[selectedPreviewIndex];

  // 현재 선택된 파일의 URL
  const currentPreviewUrl = currentPreviewFile
    ? URL.createObjectURL(currentPreviewFile)
    : undefined;
  //    : "https://via.placeholder.com/300?text=No+Image"; // 대체 이미지 URL

  // 현재 선택된 파일의 정보
  const currentPreviewInfo = {
    fileName: currentPreviewFile?.name || "-",
    fileSize: currentPreviewFile?.size
      ? `${(currentPreviewFile.size / 1024 / 1024).toFixed(2)} MB`
      : "-",
    fileType: currentPreviewFile?.type || "-",
  };

  return (
    <div className="max-w-7xl mx-auto border border-gray-200 bg-white shadow-lg mt-6">
      {/* 1. 상품 사진 섹션 헤더 */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-4 border-b bg-gray-50 cursor-pointer"
      >
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          상품 사진
          <span className="ml-4 text-sm font-normal text-blue-600">등록</span>
        </h2>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="p-4">
          {/* 2. 사진 상세 (테이블) 영역 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              상품 이미지 등록
            </h3>
            <div className="flex justify-start items-center mb-3">
              <p className="text-sm text-gray-500">- 대표 사진은 필수입니다.</p>
            </div>

            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-1/10">
                    순서
                  </th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-1/10">
                    이미지 파일명
                  </th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-4/10">
                    사진 수정
                  </th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-5/10">
                    상세보기
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* 0번 인덱스: 대표 이미지 */}
                <tr
                  className={selectedPreviewIndex === 0 ? "bg-blue-50/50" : ""}
                >
                  <td className="px-3 py-2 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                    1
                  </td>
                  <td>{images.thumbnailImage?.name}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-center text-sm">
                    <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded border transition-colors inline-block">
                      대표 이미지 선택
                      <input
                        type="file"
                        ref={thumbnailRef}
                        onChange={thumbnailImgChangeHandler}
                        multiple={false}
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-center text-sm">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 px-2 rounded transition-colors"
                      onClick={() => setSelectedPreviewIndex(0)}
                    >
                      보기
                    </button>
                  </td>
                </tr>
                {/* 1번 이후 인덱스: 추가 이미지 */}
                {images.galleryImages.map((file, index) => (
                  <tr
                    key={index}
                    className={
                      selectedPreviewIndex === index + 1 ? "bg-blue-50/50" : ""
                    }
                  >
                    <td className="px-3 py-2 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                      {index + 2}
                    </td>
                    <td>{file?.name}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-center text-sm">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white text-xs py-1 px-2 rounded transition-colors"
                        onClick={() => removeImageHandler(index + 1)}
                      >
                        파일 삭제
                      </button>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-center text-sm">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 px-2 rounded transition-colors"
                        onClick={() => setSelectedPreviewIndex(index + 1)}
                      >
                        보기
                      </button>
                    </td>
                  </tr>
                ))}
                {/* 파일 추가 버튼 행 */}
                <tr>
                  <td colSpan="2" className="py-2 text-center">
                    <label className="cursor-pointer bg-green-500 hover:bg-green-600 text-white text-sm py-1 px-3 rounded inline-flex items-center transition-colors">
                      <Plus size={16} className="mr-1" />
                      추가 파일 선택
                      <input
                        type="file"
                        ref={galleryRef}
                        onChange={galleryImgChangeHandler}
                        multiple={true}
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                  </td>
                  <td
                    colSpan="8"
                    className="px-3 py-2 text-left text-sm text-gray-500"
                  >
                    {images.galleryImages.length}개의 추가 이미지가
                    등록되었습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3. 미리보기 영역 */}
          <div className="">
            <h3 className="text-lg font-semibold text-gray-700 mb-3 w-1/6">
              미리보기
            </h3>
            <div className="flex w-5/6 border border-gray-200">
              {/* 선택된 이미지 미리보기 */}
              <div className="w-2/4 p-4 border-r border-gray-200 flex items-center justify-center">
                <div className="w-full max-w-xs aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  {currentPreviewUrl ? (
                    <img
                      src={currentPreviewUrl}
                      alt="미리보기 이미지"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span>미리보기</span>
                  )}
                </div>
              </div>
              {/* 이미지 상세 정보 */}
              <div className="w-2/4 p-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div className="font-medium text-gray-500">이미지 구분</div>
                  <div className="text-gray-800">
                    {selectedPreviewIndex === 0
                      ? "대표 사진"
                      : `추가 사진 (${selectedPreviewIndex}번째)`}
                  </div>

                  <div className="font-medium text-gray-500">파일명</div>
                  <div className="text-gray-800 truncate">
                    {currentPreviewInfo.fileName}
                  </div>

                  <div className="font-medium text-gray-500">파일 크기</div>
                  <div className="text-gray-800">
                    {currentPreviewInfo.fileSize}
                  </div>

                  <div className="font-medium text-gray-500">파일 형식</div>
                  <div className="text-gray-800">
                    {currentPreviewInfo.fileType}
                  </div>

                  <div className="font-medium text-gray-500">주소</div>
                  <div className="text-gray-800 truncate">
                    {currentPreviewFile
                      ? URL.createObjectURL(currentPreviewFile)
                      : "-"}
                  </div>

                  <div className="col-span-2 mt-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded shadow-md transition-colors mr-2"
                      onClick={() => removeImageHandler(selectedPreviewIndex)}
                    >
                      <X size={16} className="inline mr-1" />
                      선택 이미지 삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
