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


class Metadata{
	constructor(title,dataIndex,className,render){
		this.title = title;
		this.dataIndex = dataIndex;
		this.className = className;
        this.render = render;
	}
}
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
		var data = [];
		data.push(new Metadata('拖拉','sort','drag-visible',() => <DragHandle />));
		data.push(new Metadata('任務編號','taskId','drag-visible'));
		data.push(new Metadata('生產批號','produceBatchNo'));
		data.push(new Metadata('產品型號','productModelNo'));
		data.push(new Metadata('現況數量','currentQuantity'));
		data.push(new Metadata('機台位置','machinePosition'));
		data.push(new Metadata('操作','action','',() => 
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
		data.push(new Metadata('派工狀態','currentStatus'));
		data.push(new Metadata('e-Rack櫃位(待測)','eRackPositionNotTested'));
		data.push(new Metadata('e-Rack櫃位(已測)','eRackPositionTested'));
		data.push(new Metadata('優先序','pv'));
		return data;
	}
	onSortEnd = ({ oldIndex, newIndex }) => {
		const { data } = this.state;
	  	if (oldIndex !== newIndex){
			const newData = arrayMove([].concat(data), oldIndex, newIndex).filter(el => !!el);
			this.setState({data: newData});
	  	}
	};
	DraggableContainer = props => (
	  <SortableContainer
		useDragHandle
		disableAutoscroll
		helperClass="row-dragging"
		onSortEnd={this.onSortEnd}
		{...props}
	  />
	);
	DraggableBodyRow = ({ className, style, ...restProps }) => {
		const { data } = this.state;
		const index = data.findIndex(x => x.index === restProps['data-row-key']);
		return <SortableItem index={index} {...restProps} />;
	};
	
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