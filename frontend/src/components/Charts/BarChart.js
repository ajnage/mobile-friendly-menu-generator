import { Bar, Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import { Statistics } from "../../routes/DashboardStats";

export const BarChart = ({ chartData }) => {
  const [dashboardStatistics, setDashboardStatistics] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3434/api/restaurants").then((data) => {
      setDashboardStatistics(data?.data[0]);
    });
  }, []);

  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}> {dashboardStatistics.title}</h2> */}
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
            description: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};
