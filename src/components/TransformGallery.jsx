import React from 'react';

const images = [
    {
        title: '傅里叶变换 - 时频对比',
        src: '/images/time_frequency_comparison.png',
        desc: '展示信号在时域与频域下的表现，频谱清晰显示主频分布。'
    },
    {
        title: '拉普拉斯变换 - 系统响应',
        src: '/images/system_response.png',
        desc: '展示线性系统在阶跃输入下的响应，用于分析系统稳定性与时间特性。'
    },
    {
        title: 'Z变换 - 极点图',
        src: '/images/pole_zero_plot.png',
        desc: '极点与零点位置揭示离散系统的稳定性与滤波特性。'
    },
    {
        title: '小波变换 - 去噪对比',
        src: '/images/denoising_comparison_2nd_pass.png',
        desc: '左为原始噪声信号，右为小波去噪后的结果，边缘与细节显著增强。'
    },
    {
        title: '分数傅里叶变换 - α=0.5',
        src: '/images/frft_alpha_0.5.png',
        desc: '展示分数阶傅里叶变换中信号在时频域之间的过渡变化。'
    },
    {
        title: '霍夫变换 - 圆检测',
        src: '/images/detected_circles.png',
        desc: '用于图像处理中的边缘检测与圆形识别，适用于结构识别。'
    }
];

export default function TransformGallery() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">📷 信号变换图像展示</h1>
            {images.map(({ title, src, desc }, i) => (
                <div key={i} className="bg-white border rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <img src={src} alt={title} className="w-full max-h-[400px] object-contain rounded border mb-2" />
                    <p className="text-gray-700 text-sm">{desc}</p>
                </div>
            ))}
        </div>
    );
}