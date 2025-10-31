const products = [
  // ===== 뷰티 =====
  {
    id: 1,
    name: "진정 수분 토너",
    categoryMain: "뷰티",
    categorySub: "스킨/토너",
    brand: "ROUND LAB",
    price: 15000,
    sizes: [], // 사이즈 없음
    image: "/images/beauty1.jpg",
  },
  {
    id: 2,
    name: "보습 세럼",
    categoryMain: "뷰티",
    categorySub: "세럼",
    brand: "INNISFREE",
    price: 23000,
    sizes: [],
    image: "/images/beauty2.jpg",
  },

  // ===== 의류 - 상의 =====
  {
    id: 3,
    name: "오버핏 반팔티",
    categoryMain: "의류",
    categorySub: "반팔",
    brand: "Musinsa Standard",
    price: 19000,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/top1.jpg",
  },
  {
    id: 4,
    name: "스트라이프 셔츠",
    categoryMain: "의류",
    categorySub: "셔츠",
    brand: "Uniqlo",
    price: 29000,
    sizes: ["M", "L", "XL"],
    image: "/images/top2.jpg",
  },

  // ===== 의류 - 하의 =====
  {
    id: 5,
    name: "조거 팬츠",
    categoryMain: "의류",
    categorySub: "조거팬츠",
    brand: "Nike",
    price: 49000,
    sizes: ["28", "30", "32", "34"],
    image: "/images/pants1.jpg",
  },
  {
    id: 6,
    name: "와이드 데님 팬츠",
    categoryMain: "의류",
    categorySub: "청바지",
    brand: "Levi's",
    price: 69000,
    sizes: ["30", "32", "34", "36"],
    image: "/images/pants2.jpg",
  },

  // ===== 모자 =====
  {
    id: 7,
    name: "로고 볼캡",
    categoryMain: "모자",
    categorySub: "베이직 캡",
    brand: "New Era",
    price: 35000,
    sizes: ["FREE"],
    image: "/images/hat1.jpg",
  },

  // ===== 신발 =====
  {
    id: 8,
    name: "러닝화",
    categoryMain: "신발",
    categorySub: "러닝화",
    brand: "Adidas",
    price: 89000,
    sizes: ["240", "250", "260", "270"],
    image: "/images/shoes1.jpg",
  },
];

export default products;
