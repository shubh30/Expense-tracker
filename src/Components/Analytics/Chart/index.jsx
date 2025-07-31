import React from "react";
import Card from "../../Card";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

import { chartContainer } from "./style";
import { getChartOptions, getPieData } from "./util";

const Chart = ({ chartData, totalSpent }) => {
  const pieData = getPieData(chartData);
  const chartOptions = getChartOptions(totalSpent);
  return (
    <Card title="Category Distribution">
      <div css={chartContainer}>
        <Pie data={pieData} options={chartOptions} />
      </div>
    </Card>
  );
};

export default Chart;
