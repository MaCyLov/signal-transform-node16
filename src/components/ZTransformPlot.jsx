import React from "react";
import { Scatter } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

export default function ZTransformPlot() {
    // 🟦 模拟零点（单位圆上）
    const zeros = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
    ];

    // 🔴 模拟极点（靠近单位圆内部）
    const poles = [
        { x: 0.8, y: 0.6 },
        { x: 0.8, y: -0.6 },
    ];

    const data = {
        datasets: [
            {
                label: "Zeros",
                data: zeros,
                backgroundColor: "#3b82f6",
                pointRadius: 6,
                pointStyle: "circle",
            },
            {
                label: "Poles",
                data: poles,
                backgroundColor: "#ef4444",
                pointRadius: 7,
                pointStyle: "cross",
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: "Z变换极点/零点图",
            },
        },
        scales: {
            x: {
                min: -1.5,
                max: 1.5,
                title: { display: true, text: "Re(z)" },
            },
            y: {
                min: -1.5,
                max: 1.5,
                title: { display: true, text: "Im(z)" },
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <Scatter data={data} options={options} />
        </div>
    );
}