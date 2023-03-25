import { Bar } from "react-chartjs-2";
import { Statistics } from "./DashboardStats";

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: Statistics.title,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
export default BarChart;
