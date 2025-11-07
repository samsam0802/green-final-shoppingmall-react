export const reviewTemplates = {
  //메이크업 베이스
  makeupBase: [
    {
      id: "baseCoverage",
      question: "상품의 커버력은 어떤가요?",
      options: ["커버가 잘돼요", "보통이에요", "커버가 약해요"],
    },
    {
      id: "baseAdhesion",
      question: "상품의 밀착력은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
    {
      id: "baseAdhesion",
      question: "상품의 밀착력은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
    {
      id: "baseLastingPower",
      question: "상품의 지속력은 어떤가요?",
      options: ["지속력이 좋아요", "보통이에요", "지속력이 아쉬워요"],
    },
    {
      id: "baseSkinType",
      question: "어떤 피부타입에 좋은가요?",
      options: ["건성에 좋아요", "복합성에 좋아요", "지성에 좋아요"],
    },
  ],

  //메이크업 베이스(파우더)
  makeupBasePowder: [
    {
      id: "powderLasting",
      question: "상품의 지속력은 어떤가요?",
      options: ["지속력이 좋아요", "보통이에요", "지속력이 아쉬워요"],
    },
    {
      id: "powderApplication",
      question: "상품의 발림성은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
    {
      id: "powderAdhesion",
      question: "상품의 밀착력은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
  ],

  //메이크업 립/아이/치크
  makeupColor: [
    {
      id: "colorPigment",
      question: "상품의 발색은 어떤가요?",
      options: ["아주 만족해요", "보통이에요", "아쉬워요"],
    },
    {
      id: "colorLasting",
      question: "상품의 지속력은 어떤가요?",
      options: ["지속력이 좋아요", "보통이에요", "지속력이 아쉬워요"],
    },
    {
      id: "colorApplication",
      question: "상품의 발림성은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
  ],

  //스킨케어
  skincare: [
    {
      id: "skinType",
      question: "상품이 어떤 피부타입에 좋은가요?",
      options: ["건성에 좋아요", "복합성에 좋아요", "지성에 좋아요"],
    },
    {
      id: "skinIrritation",
      question: "상품의 자극도는 어떤가요?",
      options: ["자극없이 순해요", "보통이에요", "자극이 있어요"],
    },
    {
      id: "skinStickiness",
      question: "상품의 끈적임은 어떤가요?",
      options: ["끈적임이 없어요", "보통이에요", "끈적임이 있어요"],
    },
  ],

  //마스크-팩
  mask: [
    {
      id: "maskSkinType",
      question: "상품이 어떤 피부타입에 좋은가요?",
      options: ["건성에 좋아요", "복합성에 좋아요", "지성에 좋아요"],
    },
    {
      id: "maskIrritation",
      question: "상품의 자극도는 어떤가요?",
      options: ["자극없이 순해요", "보통이에요", "자극이 있어요"],
    },
  ],

  //바디케어
  body: [
    {
      id: "bodyMoisture",
      question: "상품의 보습력이 어떤가요?",
      options: ["보습이 잘돼요", "보통이에요", "보습이 약해요"],
    },
    {
      id: "bodyStickiness",
      question: "상품의 끈적임은 어떤가요?",
      options: ["끈적임이 없어요", "보통이에요", "끈적임이 있어요"],
    },
    {
      id: "bodyScent",
      question: "상품의 향은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
  ],

  //선케어
  suncare: [
    {
      id: "sunApplication",
      question: "상품의 발림성은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
    {
      id: "sunIrritation",
      question: "상품의 자극도는 어떤가요?",
      options: ["자극없이 순해요", "보통이에요", "자극이 있어요"],
    },
  ],

  //클렌징
  cleansing: [
    {
      id: "cleanSkinType",
      question: "상품이 어떤 피부타입에 좋은가요?",
      options: ["건성에 좋아요", "복합성에 좋아요", "지성에 좋아요"],
    },
    {
      id: "cleanPower",
      question: "상품의 세정력은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
    {
      id: "cleanIrritation",
      question: "상품의 자극도는 어떤가요?",
      options: ["자극없이 순해요", "보통이에요", "자극이 있어요"],
    },
  ],

  //헤어케어
  haircare: [
    {
      id: "hairClean",
      question: "상품의 세정력이 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
    {
      id: "hairIrritation",
      question: "상품의 자극도는 어떤가요?",
      options: ["자극없이 순해요", "보통이에요", "자극이 있어요"],
    },
    {
      id: "hairScent",
      question: "상품의 향은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
  ],

  //헤어케어-헤어오일
  haircareOil: [
    {
      id: "hairOilTexture",
      question: "상품 사용후 머릿결이 어떤가요?",
      options: ["부드러워요", "보통이에요", "별로에요"],
    },
    {
      id: "hairOilScent",
      question: "상품의 향은 어떤가요?",
      options: ["아주 좋아요", "보통이에요", "아쉬워요"],
    },
  ],
};

export const categoryTemplateMapping = {
  //메이크업
  베이스: reviewTemplates.makeupBase,
  베이스파우더: reviewTemplates.makeupBasePowder,
  립: reviewTemplates.makeupColor,
  아이: reviewTemplates.makeupColor,
  치크컨투어링: reviewTemplates.makeupColor,

  //스킨케어
  세럼에센스: reviewTemplates.skincare,
  토너미스트: reviewTemplates.skincare,
  로션크림: reviewTemplates.skincare,

  //마스크-팩
  마스크팩: reviewTemplates.mask,

  //선케어
  선크림: reviewTemplates.suncare,
  선스틱: reviewTemplates.suncare,
  선세럼: reviewTemplates.suncare,

  //클렌징
  클렌징폼: reviewTemplates.cleansing,
  오일밤: reviewTemplates.cleansing,
  패드: reviewTemplates.cleansing,

  // 바디케어
  핸드크림: reviewTemplates.body,
  바디워시: reviewTemplates.body,
  바디미스트: reviewTemplates.body,

  // 헤어케어
  샴푸트리트먼트: reviewTemplates.haircare,
  헤어오일: reviewTemplates.haircareOil,
};
