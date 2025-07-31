import React, { useMemo } from "react";
import Summary from "./Summary";
import Chart from "./Chart";
import Card from "../Card";

import { useSelector } from "react-redux";

import { emptyState } from "./style";

const Analytics = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const categories = useSelector((state) => state.categories.categories);
  const selectedMonth = useSelector((state) => state.expenses.selectedMonth);

  const chartData = useMemo(() => {
    const monthlyExpenses = expenses.filter((expense) =>
      expense.date.startsWith(selectedMonth)
    );

    const categoryTotals = monthlyExpenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});

    const data = Object.entries(categoryTotals)
      .map(([categoryName, total]) => {
        const category = categories.find((cat) => cat.name === categoryName);
        return {
          name: categoryName,
          value: Number(total.toFixed(2)),
          color: category?.color || "#6b7280",
        };
      })
      .sort((a, b) => b.value - a.value);

    return data;
  }, [expenses, categories, selectedMonth]);

  const totalSpent = chartData.reduce((sum, item) => sum + item.value, 0);

  if (chartData.length === 0) {
    return (
      <Card title="Category Breakdown">
        <div css={emptyState}>
          <p>
            No expenses found for this month. Add some expenses to see
            analytics!
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-2">
      <Chart chartData={chartData} totalSpent={totalSpent} />
      <Summary chartData={chartData} totalSpent={totalSpent} />
    </div>
  );
};

export default Analytics;
