import { Bar } from "react-chartjs-2";
import { useState,  useEffect } from "react";
import axios from "axios";


export const BarChart = ({ chartData }) => {
  const [dashboardStatistics, setDashboardStatistics] = useState([]);

  useEffect(() => {
    axios.get("http://10.44.22.181:2121/api/v1/dasboardStats/").then((data) => {
      setDashboardStatistics(data?.data);
    });
  }, []);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}> {dashboardStatistics.title}</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: dashboardStatistics.title,
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};
export default BarChart;
