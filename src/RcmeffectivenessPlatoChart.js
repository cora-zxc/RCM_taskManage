import React, { useState, useEffect } from "react";
import { DualAxes } from "@ant-design/charts";

const RcmeffectivenessPlatoChart = () => {
  var data = [
    {
      alerttype: "M",
      percent: 35,
      accumulation: 35
    },
    {
      alerttype: "K",
      percent: 30,
      accumulation: 65
    },
    {
      alerttype: "Q",
      percent: 18,
      accumulation: 83
    },
    {
      alerttype: "S",
      percent: 10,
      accumulation: 88
    },
    {
      alerttype: "R",
      percent: 4,
      accumulation: 92
    },
    {
      alerttype: "others",
      percent: 3,
      accumulation: 100
    }
  ];
  var config = {
    data: [data, data],
    xField: "alerttype",
    yField: ["percent", "accumulation"],
    yAxis: {
      value: {
        min: 0,
        label: {
          formatter: function formatter(val) {
            return "".concat(val, "％");
          }
        }
      },
      accumulation: false
    },
    legend: false,
    meta: {
      percent: { min: 0, max: 100 },
      accumulation: { min: 0, max: 100 }
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
            return "".concat(datum.accumulation, "％");
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

export default RcmeffectivenessPlatoChart;
