// components/SalesChart.jsx
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const SalesChart = () => {
    const data = {
        labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"],
        datasets: [
            {
                label: "Penjualan",
                data: [120000, 190000, 300000, 50000, 250000],
                borderColor: "#007bff",
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="chart-container">
            <Line data={data} />
        </div>
    );
};

export default SalesChart;
