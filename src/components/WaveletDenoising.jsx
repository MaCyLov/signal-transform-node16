import React, { useMemo } from "react";
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

export default function WaveletDenoising({ signalType }) {
    const N = 200;
    const t = Array.from({ length: N }, (_, i) => i / N);

    const signal = useMemo(() => {
        const base = t.map((x) =>
            signalType === "sine"
                ? Math.sin(2 * Math.PI * 5 * x)
                : Math.sign(Math.sin(2 * Math.PI * 5 * x))
        );
        const noise = Array.from({ length: N }, () => Math.random() * 0.8 - 0.4);
        const noisy = base.map((v, i) => v + noise[i]);

        // 简单阈值滤波去噪（模拟小波处理）
        const threshold = 0.4;
        const denoised = noisy.map((x) => (Math.abs(x) < threshold ? 0 : x));

        return { t, noisy, denoised };
    }, [signalType]);

    const data = {
        labels: signal.t.map((x) => x.toFixed(2)),
        datasets: [
            {
                label: "带噪信号",
                data: signal.noisy,
                borderColor: "#ef4444",
                fill: false,
            },
            {
                label: "去噪后信号",
                data: signal.denoised,
                borderColor: "#10b981",
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: { display: true, text: "小波变换（近似） - 去噪前后对比图" },
            legend: { position: "top" },
        },
        scales: {
            x: { title: { display: true, text: "时间 t" } },
            y: { title: { display: true, text: "幅值" } },
        },
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <Line data={data} options={options} />
        </div>
    );
}