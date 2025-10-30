import React, { useState } from "react";

const AdminSideBar = ({ activeTab, onTabClick }) => {
  const [expandedMenus, setExpandedMenus] = useState(["products"]); // 기본으로 상품 관리 메뉴 펼침

  const menuItems = [
    {
      id: "products",
      label: "상품 관리",
      subItems: [
        {
          id: "product-inquiry",
          label: "상품조회",
          href: "#/products/inquiry",
        },
        {
          id: "product-registration",
          label: "상품등록",
          href: "#/products/registration",
        },
        {
          id: "restock-notification",
          label: "재입고 알림",
          href: "#/products/restock",
        },
      ],
    },
    {
      id: "transactions",
      label: "거래내역 관리",
      subItems: [
        {
          id: "order-inquiry",
          label: "주문조회",
          href: "#/transactions/orders",
        },
      ],
    },
    {
      id: "statistics",
      label: "통계",
      subItems: [
        {
          id: "sales-statistics",
          label: "판매 통계",
          href: "#/statistics/sales",
        },
      ],
    },
    {
      id: "events",
      label: "이벤트 관리",
      subItems: [
        {
          id: "discount-events",
          label: "할인 이벤트",
          href: "#/events/discount",
        },
      ],
    },
    {
      id: "promotions",
      label: "프로모션 관리",
      subItems: [
        { id: "discount-codes", label: "할인코드", href: "#/promotions/codes" },
      ],
    },
    {
      id: "members",
      label: "회원 관리",
      subItems: [
        { id: "member-inquiry", label: "회원 조회", href: "#/members/inquiry" },
        {
          id: "dormant-members",
          label: "휴먼 회원 조회",
          href: "#/members/dormant",
        },
        {
          id: "withdrawn-members",
          label: "탈퇴 회원 조회",
          href: "#/members/withdrawn",
        },
      ],
    },
    {
      id: "email",
      label: "이메일 발송",
      subItems: [
        {
          id: "email-management",
          label: "이메일 발송 관리",
          href: "#/email/management",
        },
        { id: "bulk-email", label: "이메일 대량 발송", href: "#/email/bulk" },
      ],
    },
    {
      id: "message",
      label: "메시지 발송",
      subItems: [
        { id: "sms-management", label: "SMS 발송 관리", href: "#/message/sms" },
        { id: "bulk-sms", label: "SMS 대량 발송", href: "#/message/bulk-sms" },
      ],
    },
  ];

  const toggleMenu = (menuId) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  const handleMenuClick = (itemId, href, hasSubItems = false) => {
    if (hasSubItems) {
      toggleMenu(itemId);
    } else {
      onTabClick(itemId);
      // 실제 라우팅 처리 (선택사항)
      // navigate(href);
    }
  };

  const isMenuExpanded = (menuId) => expandedMenus.includes(menuId);

  return (
    <aside className="w-64 bg-gray-800 text-white overflow-y-auto">
      <nav className="sidebar-nav">
        <ul className="py-4">
          {menuItems.map((item) => (
            <li key={item.id} className="border-l-4 border-transparent">
              {/* 메인 메뉴 아이템 */}
              <div
                className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors duration-200 ${
                  activeTab === item.id && !item.subItems
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-200 hover:bg-gray-700 hover:text-white"
                } ${item.subItems ? "border-l-4 border-blue-400" : ""}`}
                onClick={() =>
                  handleMenuClick(item.id, item.href, !!item.subItems)
                }
              >
                <div className="flex items-center">{item.label}</div>
                {item.subItems && (
                  <span
                    className={`transform transition-transform duration-200 ${
                      isMenuExpanded(item.id) ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                )}
              </div>

              {/* 서브 메뉴 */}
              {item.subItems && isMenuExpanded(item.id) && (
                <ul className="bg-gray-900 border-l-4 border-blue-400">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id}>
                      <a
                        href={subItem.href}
                        className={`block py-2 px-10 text-sm transition-colors duration-200 ${
                          activeTab === subItem.id
                            ? "bg-blue-500 text-white font-medium"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          onTabClick(subItem.id);
                        }}
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
