// 1차(main) / 2차(name) / 3차(children) 구조
export const CATEGORY_DATA = [
  {
    main: "메이크업",
    subs: [
      {
        name: "베이스",
        children: ["쿠션", "파운데이션", "컨실러", "파우더", "프라이머/베이스"],
      },
      { name: "립", children: ["립스틱", "틴트", "립케어"] },
      {
        name: "아이",
        children: ["아이라이너", "아이섀도우/팔레트", "마스카라", "아이브로우"],
      },
      { name: "치크/컨투어링", children: ["블러셔", "하이라이터/쉐딩"] },
    ],
  },
  {
    main: "스킨케어",
    subs: [
      { name: "세럼/에센스", children: ["세럼", "에센스", "앰플"] },
      { name: "토너/미스트", children: ["토너", "미스트"] },
      { name: "로션/크림", children: ["로션", "크림"] },
    ],
  },
  {
    main: "마스크/팩",
    subs: [
      // 사이트 기준으로 필요 시 2차를 채워 넣으세요
    ],
  },
  {
    main: "선케어",
    subs: [
      { name: "선크림", children: [] },
      { name: "선스틱", children: [] },
      { name: "선세럼", children: [] },
    ],
  },
  {
    main: "클렌징",
    subs: [
      { name: "클렌징폼", children: [] }, // (오타 방지)
      { name: "오일/밤", children: [] },
      { name: "패드", children: [] },
    ],
  },
  {
    main: "헤어케어",
    subs: [
      { name: "샴푸/트리트먼트", children: [] },
      { name: "헤어오일", children: [] },
    ],
  },
  {
    main: "바디케어",
    subs: [
      { name: "핸드크림", children: [] },
      { name: "바디워시", children: [] },
      { name: "바디미스트", children: [] },
    ],
  },
];
