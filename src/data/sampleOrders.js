const sampleOrders = [
  // {
  //   id: 1,
  //   order_number: "20250205-123456",
  //   order_status: "pending",
  //   payment_status: "paid",
  //   delivery_status: "preparing",
  //   order_products: [
  //     {
  //       id: 1,
  //       product_id: 1,
  //       quantity: 5,
  //       purchased_price: 5000,
  //     },
  //     {
  //       id: 2,
  //       product_id: 2,
  //       quantity: 6,
  //       purchased_price: 6000,
  //     },
  //   ],
  // },

  {
    id: "20250205-123456",
    date: "2025.02.05",
    product: [
      {
        id: 1,
        image: "/images/toner.jpg",
        pname: "진정 수분 토너 - 21N 린넨",
        qty: 2,
        price: 30000,
        status: "결제완료",
      },
      {
        id: 2,
        image: "/images/ampoule.jpg",
        pname: "고보습 세럼 앰플 - 19C 라이트",
        qty: 1,
        price: 22000,
        status: "결제완료",
      },
    ],
  },
  {
    id: "20250204-654321",
    date: "2025.02.04",
    product: [
      {
        id: 3,
        image: "/images/ampoule.jpg",
        pname: "고보습 세럼 앰플 - 19C 라이트",
        qty: 1,
        price: 22000,
        status: "배송중",
      },
    ],
  },
  {
    id: "20250203-111111",
    date: "2025.02.03",
    product: [
      {
        id: 4,
        image: "/images/ampoule.jpg",
        pname: "고보습 세럼 앰플 - 19C 라이트",
        qty: 1,
        price: 22000,
        status: "배송완료",
      },
    ],
  },
];

export default sampleOrders;
