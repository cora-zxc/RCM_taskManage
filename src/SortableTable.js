import React from "react";
import 'antd/dist/antd.css';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { Table } from 'antd';
import arrayMove from 'array-move';

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

class SortableTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		};
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
		
		return (
			<Table
			pagination={false} //true -> 分頁
			columns={this.props.columns}
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