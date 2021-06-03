import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputFile from './InputFile';
import SortableTable from './SortableTable';
import * as script from './Script.js';
import ManuallyCreate from './ManuallyCreate';

ReactDOM.render(
  <div>
    <InputFile accept=".xlsx, .xls" name ="匯入Excel" />
    <ManuallyCreate name="手動新增" />
    <SortableTable columns={script.getMetadate()} data={[]}/>
  </div>,
  document.getElementById('root')
);

