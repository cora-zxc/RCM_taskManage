import React from "react";
import 'antd/dist/antd.css';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { Table, Button, Popconfirm } from 'antd';
import arrayMove from 'array-move';
import { sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import ManuallyEdit from './ManuallyEdit';
import InputFiles from 'react-input-files';
import XLSX from 'xlsx';
import './index.css';

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);
const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

class SortableTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	getExcel = (excel) => {
        //8碼日期y+m+d
		let date = new Date();
		var y = date.getFullYear().toString();
		var m = (date.getMonth()+1).toString();
			if(m < 10){
				m = "0" + m;
			}
		var d = date.getDate().toString();
            if (d < 10){
                d = "0" + d ;
            }
        //欄位資料的建構式
        function MachineInfo(index,taskId,produceBatchNo,productModelNo,currentQuantity,machinePosition){
            return{
                index : index,
                taskId : taskId,
                produceBatchNo : produceBatchNo,
                productModelNo : productModelNo,
                currentQuantity : currentQuantity,
                machinePosition : machinePosition,
                key : '',
                action : '',
                currentStatus : '未派工',
                eRackPositionNotTested : '',
                eRackPositionTested : '',
                pv : '50'
            };
        }
        //迴圈取資料
        var data = [];
		var i = 0,j,k;
        var m_index = 0;
        var m_taskId,m_produceBatchNo,m_productModelNo,m_currentQuantity,m_machinePosition;
		for(;excel.length > i; ++i){
			if(excel[i].hasOwnProperty('矽格股份有限公司')){
				if(excel[i]['矽格股份有限公司'].hasOwnProperty('length')){  
					if(excel[i]['矽格股份有限公司'].indexOf('DX-') > -1){
						m_machinePosition = excel[i]['矽格股份有限公司'];
						for(j = i + 2,k = 0;4 > k && excel.length > j && excel[j].hasOwnProperty('__EMPTY_2');++j,++k){
							m_taskId =  y + m + d + excel[j].__EMPTY_2;
							m_produceBatchNo = excel[j].__EMPTY_2;
							m_productModelNo = excel[j].__EMPTY_4;
							m_currentQuantity = excel[j].__EMPTY_7;
							data[m_index] = MachineInfo(m_index,m_taskId,m_produceBatchNo,m_productModelNo,m_currentQuantity,m_machinePosition);
							++m_index;
						}
						if(excel[i].hasOwnProperty('__EMPTY_12')){
							m_machinePosition = excel[i].__EMPTY_12;
							for(j = i + 2,k = 0;4 > k && excel.length > j && excel[j].hasOwnProperty('__EMPTY_15');++j,++k){
								m_taskId =  y + m + d + excel[j].__EMPTY_15;
								m_produceBatchNo = excel[j].__EMPTY_15;
								m_productModelNo = excel[j].__EMPTY_17;
								m_currentQuantity = excel[j].__EMPTY_20;
								data[m_index] = MachineInfo(m_index,m_taskId,m_produceBatchNo,m_productModelNo,m_currentQuantity,m_machinePosition);
								++m_index;
							}
						}
					}
				}
			}
		}
		return data;
	}
    onImportExcel = files => {
        const fileReader = new FileReader();
        for (let index = 0; index < files.length; index++)
            fileReader.name = files[index].name;
        fileReader.onload = event => {
            try {
                const fileExt = event.target.name;
                if (fileExt == null)
                    throw RangeError("檔案為空值");
                const { result } = event.target;
                const workbook = XLSX.read(result, { type: "binary" });
                let excel = [];
                excel = excel.concat(
                    XLSX.utils.sheet_to_json(workbook.Sheets['DX'])
                );
				this.setState({data: this.getExcel(excel)});
            } catch (e) {
                alert(e);
                return;
            }
        };
        fileReader.readAsBinaryString(files[0]);
    };
	delete = () => {
		console.log("已刪除");
	  };
	onSortEnd = ({ oldIndex, newIndex }) => {
		const { data } = this.state;
	  	if (oldIndex !== newIndex){
			const newData = arrayMove([].concat(data), oldIndex, newIndex).filter(el => !!el);
			this.setState({data: newData});
	  	}
	}
	DraggableContainer = props => (
	  <SortableContainer
		useDragHandle
		disableAutoscroll
		helperClass="row-dragging"
		onSortEnd={this.onSortEnd}
		{...props}
	  />
	)
	DraggableBodyRow = ({ className, style, ...restProps }) => {
		const { data } = this.state;
		const index = data.findIndex(x => x.index === restProps['data-row-key']);
		return <SortableItem index={index} {...restProps} />;
	}
	render() {
		this.columns = [
			{
			  title: "拖拉",
			  dataIndex: "sort",
			  className: "drag-visible",
			  key: "sort",
			  render: () => <DragHandle />
			},
			{
			  title: "任務編號",
			  dataIndex: "taskId",
			  className: "drag-visible",
			  key: "taskId"
			},
			{
			  title: "生產批號",
			  dataIndex: "produceBatchNo",
			  key: "produceBatchNo"
			},
			{
				title: "產品型號",
				dataIndex: "productModelNo",
				key: "productModelNo"
			},
			{
				title: "現況數量",
				dataIndex: "currentQuantity",
				key: "currentQuantity"
			},
			{
				title: "機台位置",
				dataIndex: "machinePosition",
				key: "machinePosition"
			},
			{
			  title: "操作",
			  dataIndex: "action",
			  key: "action",
			  render: (text, record, index) => (
				<div>
					<Button
					className="ant-btn"
					type="button"
					>
					派
					</Button>
					<Popconfirm title="確定要刪除?" onConfirm={this.delete}>
						<Button
							className="ant-btn"
							type="button"
						>
							刪
						</Button>
					</Popconfirm>
					<ManuallyEdit />
				</div>
			  )
			},
			{
				title: "派工狀態",
				dataIndex: "currentStatus",
				key: "currentStatus"
			},
			{
				title: "e-Rack櫃位(待測)",
				dataIndex: "eRackPositionNotTested",
				key: "eRackPositionNotTested"
			},
			{
				title: "e-Rack櫃位(已測)",
				dataIndex: "eRackPositionTested",
				key: "eRackPositionTested"
			},
			{
				title: "優先序",
				dataIndex: "pv",
				key: "pv"
			}
		  ];
		return (
			<div>
				<span>
					<InputFiles accept=".xlsx, .xls" onChange={this.onImportExcel}>
						<Button className="extractButton" type="primary">
							匯入Excel
						</Button>
					</InputFiles>
				</span>
				<Table
					pagination={false}
					columns={this.columns}
					dataSource={this.state.data}
					rowKey="index"
					components={
						{
							body: {
								wrapper: this.DraggableContainer,
								row: this.DraggableBodyRow,
							},
						}
					}
				/>
			</div>
		);
	};
}

export default SortableTable