import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

const RcmeffectivenessDualAxes = () => {
  var uvData = [
    {
        time: '03/01',
        value: 95,
    },
    {
        time: '03/02',
        value: 99,
    },
    {
        time: '03/03',
        value: 97,
    },
    {
        time: '03/04',
        value: 98,
    },
    {
        time: '03/05',
        value: 97,
    },
    {
        time: '03/06',
        value: 95,
    },
    {
        time: '03/07',
        value: 99,
    },
  ];
  var transformData = [
    {
        time: '03/01',
        count: 2,
        name: '待機率(%)',
    },
    {
        time: '03/02',
        count: 1,
        name: '待機率(%)',
    },
    {
        time: '03/03',
        count: 1,
        name: '待機率(%)',
    },
    {
        time: '03/04',
        count: 1,
        name: '待機率(%)',
    },
    {
        time: '03/05',
        count: 0,
        name: '待機率(%)',
    },
    {
        time: '03/06',
        count: 0,
        name: '待機率(%)',
    },
    {
        time: '03/07',
        count: 1,
        name: '待機率(%)',
    },
    {
        time: '03/01',
        count: 5,
        name: '警報率(%)',
    },
    {
        time: '03/02',
        count: 4,
        name: '警報率(%)',
    },
    {
        time: '03/03',
        count: 3,
        name: '警報率(%)',
    },
    {
        time: '03/04',
        count: 10,
        name: '警報率(%)',
    },
    {
        time: '03/05',
        count: 6,
        name: '警報率(%)',
    },
    {
        time: '03/06',
        count: 5,
        name: '警報率(%)',
    },
    {
        time: '03/07',
        count: 4,
        name: '警報率(%)',
    },
    {
        time: '03/01',
        count: 1,
        name: '關機率(%)',
    },
    {
        time: '03/02',
        count: 2,
        name: '關機率(%)',
    },
    {
        time: '03/03',
        count: 0,
        name: '關機率(%)',
    },
    {
        time: '03/04',
        count: 0,
        name: '關機率(%)',
    },
    {
        time: '03/05',
        count: 2,
        name: '關機率(%)',
    },
    {
        time: '03/06',
        count: 0,
        name: '關機率(%)',
    },
    {
        time: '03/07',
        count: 1,
        name: '關機率(%)',
    },
  ];
  var config = {
    data: [uvData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    meta: {
        value: {
          alias: '設備利用率(%)',
          min: 0,
          max: 100,
        },
        count: {
          min: 0,
          max: 50,
        },
      },
    geometryOptions: [
      {
        geometry: 'column',
        columnWidthRatio: 0.4,
        label: { position: 'middle' },
      },
      {
        geometry: 'line',
        seriesField: 'name',
        color: ['#999', '#ff0', '#f00'],
        point: {
            shape: 'circle',
            size: 2,
            style: {
              opacity: 0.5,
              stroke: '#5AD8A6',
              fill: '#fff',
            },
          },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default RcmeffectivenessDualAxes;