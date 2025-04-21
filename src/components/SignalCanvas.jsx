import React, { useRef, useEffect, useContext } from "react";
import { AppContext } from "./context";

export default function SignalCanvas({ signalType, param }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const width = canvas.width = 600;
        const height = canvas.height = 200;

        let time = 0;
        const freq = 1 + param * 9; // 映射频率 1~10Hz
        const amplitude = 50;
        const speed = 2;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.moveTo(0, height / 2);

            for (let x = 0; x < width; x++) {
                let phase = ((time + x) * freq * 0.01) % (Math.PI * 2);
                let y = 0;

                if (signalType === "sine") {
                    y = Math.sin(phase);
                } else if (signalType === "square") {
                    y = Math.sign(Math.sin(phase));
                } else {
                    y = 0; // 其他信号占位
                }

                ctx.lineTo(x, height / 2 - y * amplitude);
            }

            ctx.strokeStyle = "#3b82f6"; // 蓝线
            ctx.lineWidth = 2;
            ctx.stroke();

            time += speed;
            requestAnimationFrame(draw);
        };

        draw();
    }, [signalType, param]);

    return (
        <div className="text-center">
            <canvas
                ref={canvasRef}
                className="border rounded bg-white mx-auto"
                width="600"
                height="200"
            />
            <p className="text-sm text-gray-500 mt-2">原始信号图像</p>
        </div>
    );
}