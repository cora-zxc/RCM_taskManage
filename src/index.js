import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputFile from './InputFile';
import ManuallyCreate from './ManuallyCreate';
import SortableTable from './SortableTable';

ReactDOM.render(
  <div>
    <InputFile accept=".xlsx, .xls" name ="匯入Excel" />
    <ManuallyCreate name="手動新增" />
    <SortableTable data={[]}/>
  </div>,
  document.getElementById('root')
);

