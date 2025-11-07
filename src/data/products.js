const products = [
  // ---------- 메이크업 (main-level 대표 2개) ----------
  {
    id: 1,
    name: "클리오 킬커버 파운웨어 쿠션",
    brand: "CLIO",
    categoryMain: "메이크업",
    categorySub: "베이스",
    categoryDeep: "쿠션",
    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "21N 아이보리",
        price: 8000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 0,
      },
      {
        id: 2,
        option_name: "23N 베이지",
        price: 7000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 4,
      },
    ],
  },
  {
    id: 2,
    name: "에스쁘아 프로테일러 파운데이션 비실크",
    brand: "ESPOIR",
    categoryMain: "메이크업",
    categorySub: "베이스",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "21호 아이보리",
        price: 6000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 8,
      },
      {
        id: 2,
        option_name: "23호 내추럴",
        price: 5000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 6,
      },
    ],
  },

  // ---------- 베이스 (2개) ----------
  {
    id: 3,
    name: "더샘 커버 퍼펙션 팁 컨실러",
    brand: "THE SAEM",
    categoryMain: "메이크업",
    categorySub: "베이스",
    categoryDeep: "컨실러",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],

    options: [
      {
        id: 1,
        option_name: "1호 클리어 베이지",
        price: 6000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      },
      {
        id: 2,
        option_name: "1.5호 내추럴 베이지",
        price: 16900,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 9,
      },
    ],
  },
  {
    id: 4,
    name: "이니스프리 노세범 미네랄 파우더",
    brand: "INNISFREE",
    categoryMain: "메이크업",
    categorySub: "베이스",
    categoryDeep: "파우더",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "파우더 기획 1+1",
        price: 12000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 4,
      },
    ],
  },

  // ---------- 립 (2개) ----------
  {
    id: 5,
    name: "페리페라 잉크 무드 글레이징 틴트",
    brand: "PERIPERA",
    categoryMain: "메이크업",
    categorySub: "립",
    categoryDeep: "틴트",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "01 로지밀크티",
        price: 7000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 6,
      },
      {
        id: 2,
        option_name: "03 뉴트로코랄",
        price: 6000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 5,
      },
    ],
  },
  {
    id: 6,
    name: "헤라 센슈얼 파우더 매트 립스틱",
    brand: "HERA",
    categoryMain: "메이크업",
    categorySub: "립",
    categoryDeep: "립스틱",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "422 로지수",
        price: 7000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 3,
      },
      {
        id: 2,
        option_name: "465 어도러블",
        price: 7000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 4,
      },
    ],
  },

  // ---------- 아이 (2개) ----------
  {
    id: 7,
    name: "클리오 프로 아이 팔레트",
    brand: "CLIO",
    categoryMain: "메이크업",
    categorySub: "아이",
    categoryDeep: "아이섀도우/팔레트",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 1,
      },
    ],
  },
  {
    id: 8,
    name: "키스미 히로인 마스카라 롱앤컬",
    brand: "KISSME",
    categoryMain: "메이크업",
    categorySub: "아이",
    categoryDeep: "마스카라",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 1,
      },
    ],
  },

  // ---------- 치크/컨투어링 (2개) ----------
  {
    id: 9,
    name: "퓌 블러셔",
    brand: "Fwee",
    categoryMain: "메이크업",
    categorySub: "치크/컨투어링",
    categoryDeep: "블러셔",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "01 유리조각",
        price: 7000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 7,
      },
      {
        id: 2,
        option_name: "03 웜모먼트",
        price: 7000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 4,
      },
    ],
  },
  {
    id: 10,
    name: "투쿨포스쿨 바이로댕 쉐딩",
    brand: "TOO COOL FOR SCHOOL",
    categoryMain: "메이크업",
    categorySub: "치크/컨투어링",
    categoryDeep: "하이라이터/쉐딩",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",

        stock: 1,
      },
    ],
  },
  {
    id: 11,
    name: "[일주일특가][판테놀/속보습]아이디얼포맨 퍼펙트 보습 올인원 (단품/증정기획)",
    brand: "아이디얼포맨",
    categoryMain: "스킨케어",
    categorySub: "로션/크림",
    categoryDeep: "로션",
    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "150ml 단품",
        price: 9900,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 8,
      },
      {
        id: 2,
        option_name: "150ml 1+1 기획",
        price: 16900,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 9,
      },
      {
        id: 3,
        option_name: "+30ml 증정기획",
        price: 8000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 0,
      },
    ],
  },

  // === 스킨케어: 세럼/에센스 ===
  {
    id: 101,
    name: "비피다 퍼스트 에센스",
    brand: "미샤",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "에센스",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 102,
    name: "갈락토미세스 세럼",
    brand: "라운드랩",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",
    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },

  // === 스킨케어: 세럼/에센스 → 앰플 ===
  {
    id: 103,
    name: "시카 카밍 앰플",
    brand: "듀이트리",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "앰플",
    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 104,
    name: "히알루로닉 앰플",
    brand: "더랩바이블랑두",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "앰플",
    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },

  // === 스킨케어: 토너/미스트 ===
  {
    id: 105,
    name: "수분 진정 토너",
    brand: "라운드랩",
    categoryMain: "스킨케어",
    categorySub: "토너/미스트",
    categoryDeep: "토너",
    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 106,
    name: "그린티 워터 미스트",
    brand: "이니스프리",
    categoryMain: "스킨케어",
    categorySub: "토너/미스트",
    categoryDeep: "미스트",
    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },

  // === 스킨케어: 로션/크림 ===
  {
    id: 107,
    name: "세라마이드 수분 로션",
    brand: "아비브",
    categoryMain: "스킨케어",
    categorySub: "로션/크림",
    categoryDeep: "로션",
    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 108,
    name: "마일드 수분 진정 크림",
    brand: "닥터지",
    categoryMain: "스킨케어",
    categorySub: "로션/크림",
    categoryDeep: "크림",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },

  // === 스킨케어: 로션/크림 추가 1개씩 (총 12개 맞추기) ===
  {
    id: 109,
    name: "리얼 카밍 수딩 크림",
    brand: "베리떼",
    categoryMain: "스킨케어",
    categorySub: "로션/크림",
    categoryDeep: "크림",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 110,
    name: "무향 수분 로션",
    brand: "시드물",
    categoryMain: "스킨케어",
    categorySub: "로션/크림",
    categoryDeep: "로션",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },

  {
    id: 201,
    name: "갈락토미 세럼",
    brand: "라운드랩",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 202,
    name: "시카 리페어 세럼",
    brand: "이니스프리",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 203,
    name: "레드 블레미쉬 세럼",
    brand: "닥터지",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 204,
    name: "프로폴리스 에너지 세럼",
    brand: "코스알엑스",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 205,
    name: "히알루론 수분 세럼",
    brand: "더랩바이블랑두",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 206,
    name: "카렌듈라 카밍 세럼",
    brand: "아비브",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 207,
    name: "EGF 리프팅 세럼",
    brand: "메디큐브",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 208,
    name: "프리바이오틱스 세럼",
    brand: "믹순",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 209,
    name: "레티놀 콜라겐 세럼",
    brand: "JM솔루션",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },
  {
    id: 210,
    name: "트리플 비타민C 세럼",
    brand: "마녀공장",
    categoryMain: "스킨케어",
    categorySub: "세럼/에센스",
    categoryDeep: "세럼",

    images: {
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
      gallery: [
        "https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_640.jpg",
        "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg",
      ],
    },
    detailImages: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
      "https://cdn.pixabay.com/photo/2017/06/26/23/47/perfume-2445617_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/26/00/54/cosmetics-1063134_640.jpg",
    ],
    options: [
      {
        id: 1,
        option_name: "옵션",
        price: 10000,
        image_url:
          "https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg",
        stock: 1,
      },
    ],
  },

  // 같은 규칙으로 211 ~ 220까지 계속…
];

export default products;
