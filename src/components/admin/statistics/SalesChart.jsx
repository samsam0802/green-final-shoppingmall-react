// SalesChart.jsx
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";

// Chart.js 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const [chartType, setChartType] = useState("bar");
  const [period, setPeriod] = useState("monthly");

  // 샘플 데이터
  const monthlyData = {
    labels: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    datasets: [
      {
        label: "매출액",
        data: [
          12000000, 19000000, 15000000, 18000000, 22000000, 25000000, 28000000,
          26000000, 30000000, 32000000, 35000000, 40000000,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
      {
        label: "순수익",
        data: [
          8000000, 12000000, 10000000, 11000000, 15000000, 18000000, 20000000,
          19000000, 22000000, 24000000, 26000000, 30000000,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const weeklyData = {
    labels: ["1주", "2주", "3주", "4주"],
    datasets: [
      {
        label: "매출액",
        data: [8500000, 9200000, 7800000, 9500000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
      {
        label: "순수익",
        data: [5500000, 6200000, 4800000, 6500000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const categoryData = {
    labels: ["의류", "전자제품", "가구", "식품", "뷰티", "스포츠"],
    datasets: [
      {
        label: "카테고리별 매출",
        data: [35000000, 28000000, 15000000, 12000000, 8000000, 5000000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          period === "category"
            ? "카테고리별 매출 현황"
            : `${period === "monthly" ? "월별" : "주별"} 매출 현황`,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label +=
                new Intl.NumberFormat("ko-KR").format(context.parsed.y) + "원";
            }
            return label;
          },
        },
      },
    },
    scales:
      chartType === "doughnut"
        ? {}
        : {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return new Intl.NumberFormat("ko-KR", {
                    notation: "compact",
                    maximumFractionDigits: 1,
                  }).format(value);
                },
              },
            },
          },
  };

  const getChartData = () => {
    if (period === "category") {
      return categoryData;
    }
    return period === "monthly" ? monthlyData : weeklyData;
  };

  const renderChart = () => {
    const data = getChartData();

    switch (chartType) {
      case "bar":
        return <Bar data={data} options={chartOptions} />;
      case "line":
        return <Line data={data} options={chartOptions} />;
      case "doughnut":
        return <Doughnut data={data} options={chartOptions} />;
      default:
        return <Bar data={data} options={chartOptions} />;
    }
  };

  // 통계 요약 카드 데이터
  const stats = {
    totalSales: 312500000,
    averageOrder: 125000,
    growthRate: 15.2,
    totalOrders: 2500,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* 헤더 */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">매출 통계</h2>
          <p className="text-gray-600 text-sm mt-1">
            기간별 매출 현황을 확인하세요
          </p>
        </div>

        {/* 컨트롤 */}
        <div className="flex flex-wrap gap-4 mt-4 lg:mt-0">
          {/* 기간 선택 */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">기간:</label>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="weekly">주별</option>
              <option value="monthly">월별</option>
              <option value="category">카테고리별</option>
            </select>
          </div>

          {/* 차트 타입 선택 */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">차트:</label>
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="bar">막대 그래프</option>
              <option value="line">선 그래프</option>
              <option value="doughnut">도넛 차트</option>
            </select>
          </div>
        </div>
      </div>

      {/* 통계 요약 카드 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="text-blue-600 text-sm font-medium">총 매출액</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">
            {new Intl.NumberFormat("ko-KR").format(stats.totalSales)}원
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <div className="text-green-600 text-sm font-medium">평균 주문액</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">
            {new Intl.NumberFormat("ko-KR").format(stats.averageOrder)}원
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
          <div className="text-purple-600 text-sm font-medium">성장률</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">
            +{stats.growthRate}%
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
          <div className="text-orange-600 text-sm font-medium">총 주문수</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">
            {new Intl.NumberFormat("ko-KR").format(stats.totalOrders)}건
          </div>
        </div>
      </div>

      {/* 차트 */}
      <div className="h-80">{renderChart()}</div>

      {/* 추가 정보 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-2">최고 매출 상품</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>프리미엄 스마트워치</span>
              <span className="font-medium">12,450,000원</span>
            </li>
            <li className="flex justify-between">
              <span>디자이너 자켓</span>
              <span className="font-medium">8,750,000원</span>
            </li>
            <li className="flex justify-between">
              <span>무선 이어폰</span>
              <span className="font-medium">6,320,000원</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-2">최근 동향</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>이번 달 매출</span>
              <span className="text-green-600 font-medium">+8.5%</span>
            </li>
            <li className="flex justify-between">
              <span>신규 고객</span>
              <span className="text-green-600 font-medium">+12.3%</span>
            </li>
            <li className="flex justify-between">
              <span>재구매율</span>
              <span className="text-green-600 font-medium">+5.2%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
