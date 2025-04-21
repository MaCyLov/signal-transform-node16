import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

export default function LaplaceResponse() {
    // 模拟系统阶跃响应 y(t)
    const t = Array.from({ length: 100 }, (_, i) => i * 0.1);
    const y = t.map(
        (ti) => 1 - Math.exp(-ti) * (Math.cos(ti) + Math.sin(ti))
    );

    const data = {
        labels: t.map((v) => v.toFixed(1)),
        datasets: [
            {
                label: "系统响应 y(t)",
                data: y,
                borderColor: "#3b82f6",
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "拉普拉斯变换 - 系统单位阶跃响应" },
        },
        scales: {
            x: { title: { display: true, text: "时间 t (秒)" } },
            y: { title: { display: true, text: "输出 y(t)" } },
        },
    };

    return (
        <div className="bg-white rounded p-4 shadow">
            <Line data={data} options={options} />
        </div>
    );
}