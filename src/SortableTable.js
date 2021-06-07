import React from "react";
import 'antd/dist/antd.css';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { Table } from 'antd';
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
	changeOrderStatus = (event) => {
		event.target.parentNode.parentNode.nextSibling.textContent = "已派工";
		event.target.parentNode.parentNode.nextSibling.style.color = "blue";
	}
	changeToDeleteStatus = (event) => {
		var status = window.confirm("確定要刪除嗎？");
		if(status){
			event.target.parentNode.parentNode.nextSibling.textContent = "已刪除";
			event.target.parentNode.parentNode.nextSibling.style.color = "red";
			event.target.disabled=true;
			event.target.previousSibling.disabled=true;
			event.target.nextSibling.lastChild.disabled=true;
		}
		//console.log(event);
	}
	getMetadate = ()=> {
		//欄位項目的建構式
		function Metadata(title,dataIndex,className,render){
			return {
				title : title,
				dataIndex : dataIndex,
				className : className,
				render : render,
			};
		}
		//生成欄位項目
		var data = [];
		data.push(Metadata('拖拉','sort','drag-visible',() => <DragHandle />));
		data.push(Metadata('任務編號','taskId','drag-visible'));
		data.push(Metadata('生產批號','produceBatchNo'));
		data.push(Metadata('產品型號','productModelNo'));
		data.push(Metadata('現況數量','currentQuantity'));
		data.push(Metadata('機台位置','machinePosition'));
		data.push(Metadata('操作','action','',() => 
			<div>
				<button
					className="ant-btn"
					type="button"
					onClick={this.changeOrderStatus} >
					派
				</button> 
				<button
					className="ant-btn"
					type="button"
					onClick={this.changeToDeleteStatus} >
					刪
				</button>
				<ManuallyEdit />
			</div>
		));
		data.push(Metadata('派工狀態','currentStatus'));
		data.push(Metadata('e-Rack櫃位(待測)','eRackPositionNotTested'));
		data.push(Metadata('e-Rack櫃位(已測)','eRackPositionTested'));
		data.push(Metadata('優先序','pv'));
		return data;
	}
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
		var metadata = this.getMetadate()
		return (
			<Table
				pagination={false} //true -> 分頁
				columns={metadata}
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
	}
}

export default SortableTable