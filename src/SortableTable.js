import React from "react";
import 'antd/dist/antd.css';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { Table, Button, Popconfirm } from 'antd';
import arrayMove from 'array-move';
import { sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import ManuallyEdit from './ManuallyEdit';

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);
const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

class SortableTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		};
	}
	delete = () => {
		console.log("已刪除");
	  };
	// changeOrderStatus = (event) => {
	// 	console.log(event);
	// 	event.target.parentNode.parentNode.nextSibling.textContent = "已派工";
	// 	event.target.parentNode.parentNode.nextSibling.style.color = "blue";
	// };
	// changeToDeleteStatus = (event) => {
	// 	var status = window.confirm("確定要刪除嗎？");
	// 	if(status){
	// 		console.log(event.target.parentNode.parentNode);
	// 		event.target.parentNode.parentNode.nextSibling.textContent = "已刪除";
	// 		event.target.parentNode.parentNode.nextSibling.style.color = "red";
	// 		event.target.disabled=true;
	// 		event.target.previousSibling.disabled=true;
	// 		event.target.nextSibling.lastChild.disabled=true;
	// 	}
	// 	//console.log(event);
	//}
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
		const { data } = this.state;
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
					// onClick={this.changeOrderStatus}
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
			<Table
				pagination={false} //true -> 分頁
				columns={this.columns}
				dataSource={data}
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
		);
	};
}

export default SortableTable