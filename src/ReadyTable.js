import React from "react";
import { Layout, Table, Popconfirm, Button, Col, Row, Card, PageHeader, Tooltip, Input, Space, Dropdown, Menu } from 'antd';
import './ScheduleManagement.css'
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import WaitTable from './WaitTable';

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

class ReadyTable extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          ready_data: props.ready_data,
          wait_data: props.wait_data
        }
        this.columns=[];
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
      const { ready_data } = this.state;
      const { wait_data } = this.state;
      if(oldIndex != 0 && newIndex != 0){
        if (oldIndex !== newIndex) {
          //調動list的key index priority
          const newData = arrayMove([].concat(ready_data), oldIndex, newIndex).filter(el => !!el);
          var top = oldIndex > newIndex ? newIndex : oldIndex;
          for(; newData.length > top; ++top){
            newData[top].key = (top + 1).toString();
            newData[top].index = top;
            newData[top].priority = (top + 1).toString();
          }
          //更新state
          this.setState({ ready_data: newData });
          this.props.change(newData,wait_data); //傳入父的function去set父的State
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

    //點"刪"後 傳遞資料
    MoveDownTask = (event) => {
      //設定變數給當前的表格data
      const wd = this.state.wait_data;
      const rd = this.state.ready_data;
      //設定變數給表格data 用於暫存變動
      const new_wd = wd.slice();
      const new_rd = rd.slice();
      //整理派出的readydata後面的key&index&priority
      const index = event.target.offsetParent.parentElement.attributes[0].nodeValue;
      if(index != 0){
        var i = parseInt(index) + 1; // i為點選到的下一筆資料
        for(; i<new_rd.length ; ++i){  //開始回圈處理
          new_rd[i].key = (parseInt(new_rd[i].key) - 1).toString();
          --new_rd[i].index;
          --new_rd[i].priority;
        }
        //整理派出的的data的key&index後再push到new_wd
        var temp = rd[event.target.offsetParent.parentElement.attributes[0].nodeValue];
        temp.index = new_wd.length;
        var num = new_wd.length+1;
        temp.key = num.toString();
        temp.machineno = "";
        temp.priority = "";
        new_wd.push(temp);

        //在new_rd移除選到的資料
        new_rd.splice(event.target.offsetParent.parentElement.attributes[0].nodeValue, 1);  
        //更新state
        this.props.change(new_rd,new_wd);  //傳入父的function去set父的State
        this.setState({
          ready_data: new_rd,
          wait_data: new_wd
        }); // 更新自己的State
      }else{
        alert("任務執行中,不可刪除！");
      }
    }



    ShowTask = () => {
      const state = this.props.send();
      this.setState({
        wait_data: state.DataWait,
        ready_data: state.DataReady
      });
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
              <div className="option-btn-delete" onClick={this.MoveDownTask}>刪</div>
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
              <div id="trigger" onClick={this.ShowTask}  style={{display:"none"}} >start</div>
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