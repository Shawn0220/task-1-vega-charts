import React, { useEffect, useRef } from "react";
import vegaEmbed from "vega-embed";
import { TopLevelSpec } from "vega-lite";

const ScatterPlot: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spec: TopLevelSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "data": {
        "values": [
          { "x": 10, "y": 20, "category": "A" },
          { "x": 20, "y": 30, "category": "B" },
          { "x": 30, "y": 25, "category": "C" },
          { "x": 40, "y": 40, "category": "D" },
          { "x": 50, "y": 35, "category": "E" },
          { "x": 60, "y": 50, "category": "F" },
          { "x": 70, "y": 45, "category": "G" },
          { "x": 80, "y": 60, "category": "H" }
        ]
      },
      "mark": { "type": "circle", "size": 100 },
      "encoding": {
        "x": { "field": "x", "type": "quantitative", "axis": { "title": "X Axis" } },
        "y": { "field": "y", "type": "quantitative", "axis": { "title": "Y Axis" } },
        "color": {
          "condition": {
            "param": "highlight",
            "empty": false,  // 确保默认状态不会高亮
            "value": "red"   // 选中的点变红
          },
          "value": "steelblue" // 默认颜色：蓝色
        },
        "tooltip": [
          { "field": "category", "type": "nominal", "title": "Category" },
          { "field": "x", "type": "quantitative", "title": "X Value" },
          { "field": "y", "type": "quantitative", "title": "Y Value" }
        ]
      },
      "params": [
        {
          "name": "highlight",
          "select": { "type": "point", "fields": ["category"], "toggle": true } // 允许点击切换
        }
      ]
    };

    if (chartRef.current) {
      vegaEmbed(chartRef.current, spec).catch(console.error);
    }
  }, []);

  return <div ref={chartRef} style={{ width: "100%", maxWidth: "600px", margin: "auto" }} />;
};

export default ScatterPlot;
