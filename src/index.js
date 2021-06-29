import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//手動排程管理
//import SortableTable from './SortableTable';
//import Schedulemanagement from './ScheduleManagement';
//import './ScheduleManagement.css';
//時間效率分析
//import MutiTable from './MutiTable';
//歷史警報分析
import Rcmalarmanalysis from './Rcmalarmanalysis';

ReactDOM.render(
  <div>
    <Rcmalarmanalysis />
  </div>,
  document.getElementById('root')
);

