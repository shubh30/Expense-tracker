export const getPieData = (chartData) => {
  return {
    labels: chartData.map((item) => item.name),
    datasets: [
      {
        data: chartData.map((item) => item.value),
        backgroundColor: chartData.map((item) => item.color),
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };
};

export const getChartOptions = (totalSpent) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed || context.raw;
            const percentage = ((value / totalSpent) * 100).toFixed(1);
            return `${context.label}: $${value.toFixed(2)} (${percentage}%)`;
          },
        },
      },
    },
  };
};
