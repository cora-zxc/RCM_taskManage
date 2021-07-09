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
//import Rcmalarmanalysis from './Rcmalarmanalysis';
//近期機台運行資訊
//import Rcmoperationnews from './RcmOperationNews';
//RCM機台管理
//import App from './App';
//時間效率分析 updated
import Rcmeffectiveness from './Rcmeffectiveness';


ReactDOM.render(
  <div style={{padding:'3%'}}> 
    <Rcmeffectiveness />
    {/* <App /> */}
    {/* <Rcmoperationnews /> */}
  </div>,
  document.getElementById('root')
);

