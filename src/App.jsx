import React from 'react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import DisplayPanel from './components/DisplayPanel';
import AnalysisPanel from './components/AnalysisPanel';
import { AppProvider } from './components/context';
import TransformGallery from './components/TransformGallery';
// 然后在 render() 中插入 <TransformGallery />
export default function App() {
  return (
    <AppProvider>
      <div className="max-w-6xl mx-auto space-y-6 p-6">
        <Header />
        <ControlPanel />
        <DisplayPanel />
        <AnalysisPanel />
          <TransformGallery />
      </div>
    </AppProvider>
  );
}
