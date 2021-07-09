import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const RcmeffectivenessColumn = () => {
    var data = [
      {
        id: 'DX01',
        rate: 97,
      },
      {
        id: 'DX02',
        rate: 92,
      },
      {
        id: 'DX03',
        rate: 91,
      },
      {
        id: 'DX04',
        rate: 95,
      },
      {
        id: 'DX05',
        rate: 98,
      },
      {
        id: 'DX06',
        rate: 98,
      },
      {
        id: 'DX07',
        rate: 95,
      },
      {
        id: 'DX08',
        rate: 92,
      },
      {
        id: 'DX09',
        rate: 94,
      },
      {
        id: 'DX10',
        rate: 99,
      },
    ];
    var config = {
      data: data,
      xField: 'id',
      yField: 'rate',
      columnWidthRatio: 0.3,
      label: {
        position: 'middle',
        style: {
          fill: '#FFFFFF',
          opacity: 0.5,
        },
      },
      // xAxis: {
      //   label: {
      //     autoHide: true,
      //     autoRotate: false,
      //   },
      // },
      meta: {
        id: { alias: '機台編號' },
        rate: { alias: '產能利用率分析(%)' },
      },
    };
    return <Column {...config} />;
  };
  
  export default RcmeffectivenessColumn;