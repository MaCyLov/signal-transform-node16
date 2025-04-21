import React, { useEffect, useRef } from "react";
import { fft } from "fft-js";

export default function FourierSpectrum({ signalType, param }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const width = canvas.width = 600;
        const height = canvas.height = 200;

        // 1. 生成信号（正弦或方波）
        const N = 256;
        const t = Array.from({ length: N }, (_, i) => i / N);
        const freq = 1 + param * 9;
        const sine = t.map(x => Math.sin(2 * Math.PI * freq * x));
        const square = t.map(x => Math.sign(Math.sin(2 * Math.PI * freq * x)));
        const signal = signalType === "sine" ? sine : square;

        // 2. 傅里叶变换
        const phasors = fft(signal);
        const mags = phasors.map(c => Math.sqrt(c[0] ** 2 + c[1] ** 2));

        // 3. 绘制频谱
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        const maxMag = Math.max(...mags);
        const barWidth = width / N;

        for (let i = 0; i < N / 2; i++) {
            const x = i * barWidth;
            const y = (mags[i] / maxMag) * height;
            ctx.fillStyle = "#10b981"; // 绿色
            ctx.fillRect(x, height - y, barWidth - 1, y);
        }
    }, [signalType, param]);

    return (
        <div className="text-center">
            <canvas
                ref={canvasRef}
                className="border rounded bg-white mx-auto"
                width="600"
                height="200"
            />
            <p className="text-sm text-gray-500 mt-2">傅里叶变换频谱图</p>
        </div>
    );
}
