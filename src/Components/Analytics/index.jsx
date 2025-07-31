import React, { useMemo } from "react";
import Summary from "./Summary";
import { useSelector } from "react-redux";

const Analytics = () => {
  const { categories, expenses, selectedMonth } = useSelector((state) => {
    const {
      expenses: { expenses, selectedMonth },
      categories: { categories },
    } = state;

    return {
      expenses,
      categories,
      selectedMonth,
    };
  });
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
  return (
    <div>
      <Summary chartData={chartData} totalSpent={totalSpent} />
    </div>
  );
};

export default Analytics;
