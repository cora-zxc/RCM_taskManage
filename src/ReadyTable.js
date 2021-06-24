import React from "react";
import { Layout, Table, Popconfirm, Button, Col, Row, Card, PageHeader, Tooltip, Input, Space, Dropdown, Menu } from 'antd';
import './ScheduleManagement.css'
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import WaitTable from './WaitTable';

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

// const dataready = [
//   {
//     key: '1',
//     machineno: "DX02",
//     priority: "1",
//     Package: '12"WAFER',
//     customerid: "L022",
//     lotid: "HLxxxxxxxxxx",
//     station: "CP-0210 (CP1)",
//     modelno: "AZB10820CW",
//     qty: "25",
//     platform: "DX02",
//     location: "",
//     locationid: "",
//     status: "CP1,Run",
//     timein: "",
//     uph: "",
//     bodysize: "NA",
//     temp: "25",
//     remark: "",
//     index: 0,
//   },
//   {
//     key: '2',
//     machineno: "DX02",
//     priority: "2",
//     Package: '12"WAFER',
//     customerid: "L022",
//     lotid: "HLxxxxxxxxxx",
//     station: "CP-0210 (CP1)",
//     modelno: "AZB10820CW",
//     qty: "25",
//     platform: "",
//     location: "2F CP WCC",
//     locationid: "F51",
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
//     machineno: "DX02",
//     priority: "3",
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
//     index: 2,
//   }
// ];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

class ReadyTable extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            ready_data: props.ready_data,
            wait_data: props.wait_data
        }
        console.log(props.ready_data);
        this.columns=[];
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
      const { ready_data } = this.state;
      console.log(ready_data);
      if(oldIndex != 0 && newIndex != 0){
        if (oldIndex !== newIndex) {
          //調動順序 改priority
          var tmp = ready_data[oldIndex].priority;
          ready_data[oldIndex].priority = ready_data[newIndex].priority
          ready_data[newIndex].priority = tmp;
          //調動list
          const newData = arrayMove([].concat(ready_data), oldIndex, newIndex).filter(el => !!el);
          console.log('Sorted items: ', newData);
          this.setState({ ready_data: newData });
        }
      }else{
        alert("任務執行中,不可調動順序！");
      }
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
      const { ready_data } = this.state;
      console.log(ready_data);
      if(oldIndex != 0 && newIndex != 0){
        if (oldIndex !== newIndex) {
          //調動順序 改priority
          var tmp = ready_data[oldIndex].priority;
          ready_data[oldIndex].priority = ready_data[newIndex].priority
          ready_data[newIndex].priority = tmp;
          //調動list
          const newData = arrayMove([].concat(ready_data), oldIndex, newIndex).filter(el => !!el);
          console.log('Sorted items: ', newData);
          this.setState({ ready_data: newData });
        }
      }else{
        alert("任務執行中,不可調動順序！");
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
      const { ready_data } = this.state;
      // function findIndex base on Table rowKey props and should always be a right array index
      const index = ready_data.findIndex(x => x.index === restProps['data-row-key']);

      return <SortableItem index={index} {...restProps} />;
    };

    SubmitTask = (event) => {
      const data = this.props.send();
      console.log(data);
      this.setState({ ready_data: data });
    }
    render() {
        const { ready_data } = this.state;
        this.columns = [
            {
            title: '拖拉',
            dataIndex: 'sort',
            width:60,
            fixed: "left",
            className: 'drag-visible',
              render: () => {
                return <DragHandle />
              }
            },
            {
            title: "選擇",
            dataIndex: "option",
            width:60,
            fixed: "left",
            className: 'drag-visible',
            render: () => (
              <div className="option-btn-delete" onClick={this.SubmitTask}>刪</div>
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
        this.readydata=[];
        this.waitdata=[];
  
        return (
            <div>
            <div id="trigger" onClick={this.SubmitTask}   >asdasd</div>
            <Table
            pagination={false}
            dataSource={ready_data}
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
            </div>
        );
    }
  }

  export default ReadyTable