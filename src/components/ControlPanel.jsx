// src/components/ControlPanel.jsx

import React, { useContext } from "react";
import { AppContext } from "./context";
import { signalTypes, transformTypes } from "./signals";

export default function ControlPanel() {
    const { signal, setSignal, transform, setTransform, param, setParam } = useContext(AppContext);

    return (
        <div className="grid md:grid-cols-3 gap-4">
            <div>
                <label className="block font-semibold mb-1">信号类型</label>
                <select
                    value={signal}
                    onChange={(e) => setSignal(e.target.value)}
                    className="w-full border rounded p-2"
                >
                    {signalTypes.map(sig => (
                        <option key={sig.key} value={sig.key}>{sig.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block font-semibold mb-1">变换方式</label>
                <select
                    value={transform}
                    onChange={(e) => setTransform(e.target.value)}
                    className="w-full border rounded p-2"
                >
                    {transformTypes.map(tf => (
                        <option key={tf.key} value={tf.key}>{tf.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block font-semibold mb-1">
                    可调参数（例如 α）：{param.toFixed(2)}
                </label>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={param}
                    onChange={(e) => setParam(parseFloat(e.target.value))}
                    className="w-full"
                />
            </div>
        </div>
    );
}