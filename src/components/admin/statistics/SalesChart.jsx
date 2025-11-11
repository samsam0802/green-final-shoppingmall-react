import React, { useMemo, useState } from "react";
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

// ==========================================================
// ** 1. 백엔드 Mock 데이터 (API 응답 형태) **
// ==========================================================

const mockMonthlyStats = [
  { period: "2025-01", sales: 12000000, profit: 8000000 },
  { period: "2025-02", sales: 19000000, profit: 12000000 },
  { period: "2025-03", sales: 15000000, profit: 10000000 },
  { period: "2025-04", sales: 18000000, profit: 11000000 },
  { period: "2025-05", sales: 22000000, profit: 15000000 },
  { period: "2025-06", sales: 25000000, profit: 18000000 },
  { period: "2025-07", sales: 28000000, profit: 20000000 },
  { period: "2025-08", sales: 26000000, profit: 19000000 },
  { period: "2025-09", sales: 30000000, profit: 22000000 },
  { period: "2025-10", sales: 32000000, profit: 24000000 },
  { period: "2025-11", sales: 35000000, profit: 26000000 },
  { period: "2025-12", sales: 40000000, profit: 30000000 },
];

const mockWeeklyStats = [
  { period: "2025-W1", sales: 8500000, profit: 5500000 },
  { period: "2025-W2", sales: 9200000, profit: 6200000 },
  { period: "2025-W3", sales: 7800000, profit: 4800000 },
  { period: "2025-W4", sales: 9500000, profit: 6500000 },
];

const mockCategoryStats = [
  { categoryName: "메이크업", sales: 35000000 },
  { categoryName: "스킨케어", sales: 28000000 },
  { categoryName: "마스크팩", sales: 15000000 },
  { categoryName: "선케어", sales: 12000000 },
  { categoryName: "클렌징", sales: 8000000 },
  { categoryName: "바디케어", sales: 5000000 },
];

// 통계 요약 데이터 (단일 객체 형태)
const mockStatsSummary = {
  totalSales: 312500000,
  averageOrder: 125000,
  growthRate: 15.2,
  totalOrders: 2500,
};

// ==========================================================
// ** 2. 데이터 변환 함수 (핵심 로직) **
// ==========================================================

const transformChartData = (data, periodType) => {
  if (periodType === "category") {
    // 도넛 차트/파이 차트용 데이터 변환
    return {
      labels: data.map((item) => item.categoryName),
      datasets: [
        {
          label: "카테고리별 매출",
          data: data.map((item) => item.sales),
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
  }

  // 막대/선 차트용 기간별 데이터 변환
  const labels = data.map(
    (item) =>
      periodType === "monthly"
        ? `${item.period.split("-")[1]}월` // YYYY-MM -> MM월
        : `${item.period.split("W")[1]}주` // YYYY-Wn -> n주
  );

  return {
    labels: labels,
    datasets: [
      {
        label: "매출액",
        data: data.map((item) => item.sales),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
      {
        label: "순수익",
        data: data.map((item) => item.profit),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };
};

//////////////////////

const SalesChart = () => {
  const [chartType, setChartType] = useState("bar");
  const [period, setPeriod] = useState("monthly");

  // 백엔드 데이터에 따라 적절한 Mock 데이터를 선택합니다.
  const currentRawData = useMemo(() => {
    if (period === "category") return mockCategoryStats;
    return period === "monthly" ? mockMonthlyStats : mockWeeklyStats;
  }, [period]);

  // Chart.js 형식에 맞게 데이터를 변환합니다. (성능을 위해 useMemo 사용)
  const chartData = useMemo(() => {
    return transformChartData(currentRawData, period);
  }, [currentRawData, period]);

  // 차트 옵션
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // 비율 유지 비활성화 - 컨테이너 높이에 맞춤
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
            const value =
              context.parsed.y !== undefined
                ? context.parsed.y
                : context.parsed; // 도넛 차트 처리를 위해 수정
            if (value !== null) {
              label += new Intl.NumberFormat("ko-KR").format(value) + "원";
            }
            return label;
          },
        },
      },
    },
    scales:
      chartType === "doughnut"
        ? {} // 도넛 차트는 축(Scales) 불필요
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

  const renderChart = () => {
    const data = chartData;

    switch (chartType) {
      case "bar":
        return <Bar data={data} options={chartOptions} />;
      case "line":
        return <Line data={data} options={chartOptions} />;
      case "doughnut":
        // 도넛 차트 선택 시 카테고리 데이터만 사용하도록 강제하는 로직 추가 필요
        if (period !== "category")
          return (
            <p className="text-center text-red-500 mt-20">
              도넛 차트는 카테고리별 통계에서만 사용 가능합니다.
            </p>
          );
        return <Doughnut data={data} options={chartOptions} />;
      default:
        return <Bar data={data} options={chartOptions} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* 헤더 및 컨트롤 부분은 기존과 거의 동일 (Tailwind CSS) */}
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

      {/* 통계 요약 카드 (mockStatsSummary 사용) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="text-blue-600 text-sm font-medium">총 매출액</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">
            {new Intl.NumberFormat("ko-KR").format(mockStatsSummary.totalSales)}
            원
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <div className="text-green-600 text-sm font-medium">평균 주문액</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">
            {new Intl.NumberFormat("ko-KR").format(
              mockStatsSummary.averageOrder
            )}
            원
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
          <div className="text-purple-600 text-sm font-medium">성장률</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">
            +{mockStatsSummary.growthRate}%
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
          <div className="text-orange-600 text-sm font-medium">총 주문수</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">
            {new Intl.NumberFormat("ko-KR").format(
              mockStatsSummary.totalOrders
            )}
            건
          </div>
        </div>
      </div>

      {/* 차트 - 높이 제한 및 최대 높이 설정 */}
      <div className="h-80 max-h-96 mb-6">{renderChart()}</div>

      {/* 추가 정보 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-2">최고 매출 상품</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>페리페라 잉크 무드 글레이징 틴트</span>
              <span className="font-medium">12,450,000원</span>
            </li>
            <li className="flex justify-between">
              <span>이니스프리 노세범 미네랄 파우더</span>
              <span className="font-medium">8,750,000원</span>
            </li>
            <li className="flex justify-between">
              <span>시카 리페어 세럼</span>
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
