import React, { useEffect, useRef } from "react";
import vegaEmbed from "vega-embed";
import { TopLevelSpec } from "vega-lite";

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spec: TopLevelSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "data": {
        "values": [
          { "category": "A", "value": 28 },
          { "category": "B", "value": 55 },
          { "category": "C", "value": 43 },
          { "category": "D", "value": 91 },
          { "category": "E", "value": 81 },
          { "category": "F", "value": 53 },
          { "category": "G", "value": 19 },
          { "category": "H", "value": 87 }
        ]
      },
      "mark": { "type": "bar" },
      "encoding": {
        "x": { "field": "category", "type": "ordinal", "axis": { "title": "Category" } },
        "y": { "field": "value", "type": "quantitative", "axis": { "title": "Value" } },
        "color": {
          "condition": {
            "param": "highlight",
            "empty": false,  // 确保默认状态不会有高亮
            "value": "red"   // 被选中的 bar 变红
          },
          "value": "steelblue"  // 默认颜色：蓝色
        },
        "tooltip": { "field": "value", "type": "quantitative" }
      },
      "params": [
        {
          "name": "highlight",
          "select": { "type": "point", "fields": ["category"], "toggle": true } // 允许切换
        }
      ]
    };

    if (chartRef.current) {
      vegaEmbed(chartRef.current, spec).catch(console.error);
    }
  }, []);

  return <div ref={chartRef} style={{ width: "100%", maxWidth: "600px", margin: "auto" }} />;
};

export default BarChart;
