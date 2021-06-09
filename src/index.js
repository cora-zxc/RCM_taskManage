import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ManuallyCreate from './ManuallyCreate';
import SortableTable from './SortableTable';

ReactDOM.render(
  <div>
    <ManuallyCreate name="手動新增" />
    <SortableTable />
  </div>,
  document.getElementById('root')
);

