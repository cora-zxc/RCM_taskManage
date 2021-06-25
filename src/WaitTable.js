import React from "react";
import { Layout, Table, Popconfirm, Button, Col, Row, Card, PageHeader, Tooltip, Input, Space, Dropdown, Menu } from 'antd';
import './ScheduleManagement.css'
// import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
// import arrayMove from 'array-move';
import ReadyTable from './ReadyTable';

// const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

// const SortableItem = sortableElement(props => <tr {...props} />);
// const SortableContainer = sortableContainer(props => <tbody {...props} />);

class WaitTable extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          ready_data: props.ready_data,
          wait_data: props.wait_data
        }
        this.columns=[];
    } 
    // onSortEnd = ({ oldIndex, newIndex }) => {
    //   const { wait_data } = this.state;
    //   if (oldIndex !== newIndex) {
    //     const newData = arrayMove([].concat(wait_data), oldIndex, newIndex).filter(el => !!el);
    //     console.log('Sorted items: ', newData);
    //     this.setState({ wait_data: newData });
    //   }
    // };
  
    // DraggableContainer = props => (
    //   <SortableContainer
    //     useDragHandle
    //     disableAutoscroll
    //     helperClass="row-dragging"
    //     onSortEnd={this.onSortEnd}
    //     {...props}
    //   />
    // );
  
    // DraggableBodyRow = ({ className, style, ...restProps }) => {
    //   const { wait_data } = this.state;
    //   // function findIndex base on Table rowKey props and should always be a right array index
    //   const index = wait_data.findIndex(x => x.index === restProps['data-row-key']);
    //   return <SortableItem index={index} {...restProps} />;
    // };

    //點"派"後 傳遞資料
    SubmitTask = (event) => {
      //設定變數給當前的表格data
      const wd = this.state.wait_data;
      const rd = this.state.ready_data;
      //設定變數給表格data 用於暫存變動
      const new_wd = wd.slice();
      const new_rd = rd.slice();
      //整理派出的waitdata後面的key&index
      const index = event.target.offsetParent.parentElement.attributes[0].nodeValue;
      var i = parseInt(index) + 1; // i為點選到的下一筆資料
      for(; i<new_wd.length ; ++i){  //開始回圈處理
        new_wd[i].key = (parseInt(new_wd[i].key) - 1).toString();
        --new_wd[i].index;
      }
      //整理派上的的data的key&index後再push到new_rd
      var temp = wd[event.target.offsetParent.parentElement.attributes[0].nodeValue]
      temp.index = new_rd.length;
      var num = new_rd.length+1;
      temp.key = num.toString();
      temp.machineno = new_rd[0].machineno;
      temp.priority = new_rd.length+1;
      new_rd.push(temp);
      //在new_wd移除選到的資料
      new_wd.splice(event.target.offsetParent.parentElement.attributes[0].nodeValue, 1);  
      //更新state
      this.props.change(new_rd,new_wd);  //傳入父的function去set父的State
      this.setState({ ready_data: new_rd }); // 更新自己的State
      this.setState({ wait_data: new_wd });  // 更新自己的State
    }

    _ShowTask = () => {
      const state = this.props.send();
      this.setState({
        wait_data: state.DataWait,
        ready_data: state.DataReady
      });
    }

  
    render() {
        const { wait_data } = this.state;
        this.columns = [
            {
            title: '',
            dataIndex: '',
            width:60,
            // fixed: "left",
            // className: 'drag-visible',
            // render: () => <DragHandle />,
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
          <div>
              <div id="_trigger" onClick={this._ShowTask}  style={{display:"none"}} >start</div>
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
          </div>
        );
    }
  }

  export default WaitTable