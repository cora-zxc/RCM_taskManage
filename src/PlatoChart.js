import React, { useState, useEffect } from "react";
import { DualAxes } from "@ant-design/charts";

const PlatoChart = () => {
  var data = [
    {
      alerttype: "M",
      times: 75,
      count: 75
    },
    {
      alerttype: "K",
      times: 10,
      count: 85
    },
    {
      alerttype: "Q",
      times: 6,
      count: 91
    },
    {
      alerttype: "S",
      times: 3,
      count: 94
    },
    {
      alerttype: "R",
      times: 1,
      count: 95
    },
    {
      alerttype: "others",
      times: 5,
      count: 100
    }
  ];
  var config = {
    data: [data, data],
    xField: "alerttype",
    yField: ["times", "count"],
    yAxis: {
      value: {
        min: 0,
        label: {
          formatter: function formatter(val) {
            return "".concat(val, "次");
          }
        }
      },
      count: false
    },
    meta: {
      times: { min: 0, max: 100 },
      count: { min: 0, max: 100 }
    },
    geometryOptions: [
      {
        geometry: "column",
        color: "#5B8FF9",
        columnWidthRatio: 1,
        label: { position: "middle" }
      },
      {
        geometry: "line",
        smooth: false,
        color: "#5AD8A6",
        lineStyle: {
          lineWidth: 4,
          opacity: 0.7
        },
        label: {
          formatter: function formatter(datum) {
            return "".concat(datum.count, "次");
          }
        },
        point: {
          shape: "circle",
          size: 4,
          style: {
            opacity: 0.5,
            stroke: "#5AD8A6",
            fill: "#fff"
          }
        }
      }
    ],
    interactions: [{ type: "element-highlight" }, { type: "active-region" }]
  };
  return <DualAxes {...config} />;
};

export default PlatoChart;
