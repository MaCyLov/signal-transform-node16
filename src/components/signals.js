// src/components/signals.js

export const signalTypes = [
  { name: "正弦波", key: "sine" },
  { name: "方波", key: "square" },
  { name: "实际数据", key: "real" },
];

export const transformTypes = [
  { key: "fourier", name: "傅里叶变换" },
  { key: "laplace", name: "拉普拉斯变换" },
  { key: "z", name: "Z变换" },
  { key: "hermite", name: "赫尔曼变换" },
  { key: "wavelet", name: "小波变换" },
  { key: "frac", name: "分数傅里叶变换" },
];

export function getAnalysis(signal, transform, param = 0.5) {
  const signalNames = {
    sine: "正弦波",
    square: "方波",
    real: "实际数据",
  };

  const transformDescriptions = {
    fourier: "频谱可视化展示主频能量分布。",
    laplace: "适用于线性系统响应建模。",
    z: "观察系统极点与零点图结构。",
    hermite: "检测信号中对称边缘。",
    wavelet: "信号多尺度分析与去噪。",
    frac: `以分数阶 ${param.toFixed(2)} 展示信号在不同频域下的形态变化。`,
  };

  const transformName = transformTypes.find(t => t.key === transform)?.name || transform;
  return `${signalNames[signal]} + ${transformName}：\n${transformDescriptions[transform] || ""}`;
}