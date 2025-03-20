import React from "react";
import BarChart from "./components/BarChart"; // 确保路径正确
import ScatterPlot from "./components/ScatterPlot"; // 添加 ScatterPlot 组件

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Interactive Vega-Lite Charts</h1>
      
      <h2>Bar Chart</h2>
      <BarChart />

      <h2>Scatter Plot</h2>
      <ScatterPlot />

    </div>
  );
};

export default App;
