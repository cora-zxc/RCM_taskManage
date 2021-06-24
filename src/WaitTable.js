import React from "react";
import { Layout, Table, Popconfirm, Button, Col, Row, Card, PageHeader, Tooltip, Input, Space, Dropdown, Menu } from 'antd';
import './ScheduleManagement.css'
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import ReadyTable from './ReadyTable';

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

// const datawait = [
//   {
//     key: '1',
//     machineno: "",
//     priority: "",
//     Package: '12"WAFER',
//     customerid: "L022",
//     lotid: "HLxxxxxxxxxx",
//     station: "CP-0210 (CP1)",
//     modelno: "AZB10820CW",
//     qty: "25",
//     platform: "",
//     location: "2F CP WCC",
//     locationid: "F53",
//     status: "CP1,Wait",
//     timein: "",
//     uph: "0",
//     bodysize: "NA",
//     temp: "25",
//     remark: "",
//     index: 0,
//   },
//   {
//     key: '2',
//     machineno: "",
//     priority: "",
//     Package: '12"WAFER',
//     customerid: "L022",
//     lotid: "HLxxxxxxxxxx",
//     station: "CP-0210 (CP1)",
//     modelno: "AZB10820CW",
//     qty: "25",
//     platform: "",
//     location: "2F CP WCC",
//     locationid: "F52",
//     status: "CP1,Wait",
//     timein: "",
//     uph: "0",
//     bodysize: "NA",
//     temp: "25",
//     remark: "",
//     index: 1,
//   },
//   {
//     key: '3',
//     machineno: "",
//     priority: "",
//     Package: '12"WAFER',
//     customerid: "L022",
//     lotid: "HLxxxxxxxxxx",
//     station: "CP-0210 (CP1)",
//     modelno: "AZB10820CW",
//     qty: "25",
//     platform: "",
//     location: "2F CP WCC",
//     locationid: "F53",
//     status: "CP1,Wait",
//     timein: "",
//     uph: "0",
//     bodysize: "NA",
//     temp: "25",
//     remark: "",
//     index: 2,
//   },
// ];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

class WaitTable extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            ready_data: props.ready_data,
            wait_data: props.wait_data
        }
        this.columns=[];
    } 
    onSortEnd = ({ oldIndex, newIndex }) => {
      const { wait_data } = this.state;
      if (oldIndex !== newIndex) {
        const newData = arrayMove([].concat(wait_data), oldIndex, newIndex).filter(el => !!el);
        console.log('Sorted items: ', newData);
        this.setState({ wait_data: newData });
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
      const { wait_data } = this.state;
      // function findIndex base on Table rowKey props and should always be a right array index
      const index = wait_data.findIndex(x => x.index === restProps['data-row-key']);
      return <SortableItem index={index} {...restProps} />;
    };

    SubmitTask = (event) => {
      
      const { wait_data } = this.state;
      const { ready_data } = this.state;
      const new_wait_data = wait_data.slice();
      const new_ready_data = ready_data.slice();
      new_ready_data.push(wait_data[event.target.offsetParent.parentElement.attributes[0].nodeValue]);
      new_wait_data.splice(event.target.offsetParent.parentElement.attributes[0].nodeValue, 1);
      this.props.greet(new_ready_data,new_wait_data);
      this.setState({ ready_data: new_ready_data });
      this.setState({ wait_data: new_wait_data });
    }
  
    render() {
        const { wait_data } = this.state;
        this.columns = [
            {
            title: '拖拉',
            dataIndex: 'sort',
            width:60,
            fixed: "left",
            className: 'drag-visible',
            render: () => <DragHandle />,
            },
            {
            title: "選擇",
            dataIndex: "option",
            width:60,
            fixed: "left",
            className: 'drag-visible',
            render: () => (
                <div className="option-btn-submit" onClick={this.SubmitTask}>派</div>
            )
            },
            {
            title: "機台號碼",
            dataIndex: "machineno",
            width:100,
            },
            {
            title: "項次(排序)",
            dataIndex: "priority",
            width:100,
            },
            {
            title: "Package",
            dataIndex: "Package",
            width:120,
            },
            {
            title: "客戶代碼",
            dataIndex: "customerid",
            width:100,
            },
            {
            title: "生產批號",
            dataIndex: "lotid",
            width:150,
            },
            {
            title: "作業站",
            dataIndex: "station"
            },
            {
            title: "產品型號",
            dataIndex: "modelno"
            },
            {
            title: "現況數量",
            dataIndex: "qty",
            width:100,
            },
            {
            title: "機台",
            dataIndex: "platform",
            width:100,
            },
            {
            title: "儲區",
            dataIndex: "location"
            },
            {
            title: "儲位編號",
            dataIndex: "locationid",
            width:100,
            },
            {
            title: "貨批狀況",
            dataIndex: "status"
            },
            {
            title: "入站時間",
            dataIndex: "timein"
            },
            {
            title: "UPH",
            dataIndex: "uph",
            width:70,
            },
            {
            title: "BodySize",
            dataIndex: "bodysize",
            width:100,
            },
            {
            title: "溫度",
            dataIndex: "temp",
            width:60,
            },
            {
            title: "備註",
            dataIndex: "remark"
            }
        ];
        this.readydata=[]
        this.waitdata=[]
  
        return (
            <Table
            pagination={false}
            dataSource={wait_data}
            columns={this.columns}
            rowKey="index"
            scroll={{ x: 2200, y:300 }}
            components={{
                body: {
                wrapper: this.DraggableContainer,
                row: this.DraggableBodyRow,
                },
            }}
            />
        );
    }
  }

  export default WaitTable