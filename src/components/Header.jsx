// src/components/Header.jsx
import React, { useState } from "react";
import avatar1 from "../assets/p1.png";
import avatar2 from "../assets/p2.png";
import avatar3 from "../assets/p3.png";
import logo from "../assets/logo.jpg";
import "./Header.css";

export default function Header() {
    const [showTeam, setShowTeam] = useState(false);

    return (
        <div className="flex items-center justify-between py-3 px-4 bg-white shadow rounded relative">
            {/* 左上角 LOGO 与标题 */}
            <div className="flex items-center space-x-2">
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                    <span className="text-lg font-bold">信号可视化实验平台</span>
                    <span className="text-sm text-gray-500">Produced by 马瑞 郑欣宜 喻子曦</span>
                </div>
            </div>

            {/* 右上角点赞按钮 */}
            <button
                onClick={() => setShowTeam(!showTeam)}
                className="text-sm bg-yellow-300 hover:bg-yellow-400 px-3 py-1 rounded-full font-semibold shadow"
            >
                {showTeam ? "💫 再次点赞" : "🌟 喜欢这个网页"}
            </button>

            {/* 动态展示区域 */}
            {showTeam && (
                <div className="absolute right-4 top-20 bg-white p-4 rounded shadow grid grid-cols-3 gap-6 animate-fade-in">
                    {[avatar1, avatar2, avatar3].map((avatar, index) => (
                        <div className="flex flex-col items-center" key={index}>
                            <img src={avatar} alt={`p${index + 1}`} className="w-24 h-24 mb-2" />
                            <div className="w-24 h-4 bg-gray-300 rounded overflow-hidden">
                                <div
                                    className={`h-full bg-green-500 score-bar delay-${index}`}
                                    style={{ width: "0%" }}
                                    data-score="100"
                                ></div>
                            </div>
                            <p className="text-sm mt-1">概率论课程：100 分</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}