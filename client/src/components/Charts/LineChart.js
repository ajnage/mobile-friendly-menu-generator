import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

export const LineChart = ({ chartData }) => {
	const [dashboardStatistics, setDashboardStatistics] = useState([]);

	// useEffect(() => {
	// 	axios.get(
	// 		"http://localhost:3434/api/order-stats/644e0c012321ce82bf9b167a"
	// 	).then((data) => {
	// 		setDashboardStatistics(data?.data[0]);
	// 	});
	// }, []);

	return (
		<div className="chart-container">
			{/* <h2 style={{ textAlign: "center" }}> {dashboardStatistics.title}</h2> */}
			<h2 style={{ textAlign: "center" }}> {"chartData.title"}</h2>
			<Line
				data={chartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: dashboardStatistics.title,
							// text: chartData.title,
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
