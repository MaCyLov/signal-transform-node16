// src/components/DisplayPanel.jsx

import React, { useContext } from "react";
import { AppContext } from "./context";
import SignalCanvas from "./SignalCanvas";
import FourierSpectrum from "./FourierSpectrum";
import LaplaceResponse from "./LaplaceResponse";
import ZTransformPlot from "./ZTransformPlot";
import WaveletDenoising from "./WaveletDenoising";
// 可选扩展：HermiteTransform, FractionalFourier

export default function DisplayPanel() {
    const { signal, transform, param } = useContext(AppContext);

    let content;
    switch (transform) {
        case "fourier":
            content = <FourierSpectrum signalType={signal} param={param} />;
            break;
        case "laplace":
            content = <LaplaceResponse />;
            break;
        case "z":
            content = <ZTransformPlot />;
            break;
        case "wavelet":
            content = <WaveletDenoising signalType={signal} />;
            break;
        // case "hermite":
        //   content = <HermiteTransform signalType={signal} />;
        //   break;
        // case "frac":
        //   content = <FractionalFourier signalType={signal} param={param} />;
        //   break;
        default:
            content = <SignalCanvas signalType={signal} param={param} />;
    }

    return (
        <div className="bg-gray-100 rounded shadow p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">📈 信号图像展示</h2>
            {content}
        </div>
    );
}