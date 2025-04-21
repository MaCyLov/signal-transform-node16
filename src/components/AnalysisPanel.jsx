import React, { useContext } from "react";
import { AppContext } from "./context";
import { getAnalysis } from "./signals";

export default function AnalysisPanel() {
  const { signal, transform, param } = useContext(AppContext);

  return (
    <div className="bg-white p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">📊 结果分析</h2>
      <pre className="whitespace-pre-wrap text-gray-700">{getAnalysis(signal, transform, param)}</pre>
    </div>
  );
}
