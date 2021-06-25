import React, {Component} from "react";
import { Layout, Table, Popconfirm, Button, Col, Row, Card, PageHeader, Tooltip, Input, Space, Dropdown, Menu } from 'antd';
import './ScheduleManagement.css'
// import Mynavbar from "../Global/Mynavbar.js"
// import translate from '../../lang/translate'
import { DownOutlined } from '@ant-design/icons'
import ReadyTable from "./ReadyTable"
import WaitTable from "./WaitTable"


const { Content } = Layout
const { Search } = Input
const onSearch = value => console.log(value)
const menu = (
  <Menu>
    <Menu.Item key="0">
      <li onClick={e => console.log(e.target.firstChild.data)}>DX01</li>
    </Menu.Item>
    <Menu.Item key="1">
      <li onClick={e => console.log(e.target.firstChild.data)}>DX02</li>
    </Menu.Item>
    <Menu.Item key="2">
      <li onClick={e => console.log(e.target.firstChild.data)}>DX03</li>
    </Menu.Item>
    <Menu.Item key="3">
      <li onClick={e => console.log(e.target.firstChild.data)}>DX04</li>
    </Menu.Item>
  </Menu>
);
const dataready = [
  {
    key: '1',
    machineno: "DX02",
    priority: "1",
    Package: '12"WAFER',
    customerid: "L022",
    lotid: "HLxxxxxxxxxx",
    station: "CP-0210 (CP1)",
    modelno: "AZB10820CW",
    qty: "25",
    platform: "DX02",
    location: "",
    locationid: "",
    status: "CP1,Run",
    timein: "",
    uph: "",
    bodysize: "NA",
    temp: "25",
    remark: "",
    index: 0,
  },
  {
    key: '2',
    machineno: "DX02",
    priority: "2",
    Package: '12"WAFER',
    customerid: "L023",
    lotid: "HLxxxxxxxxxx",
    station: "CP-0210 (CP1)",
    modelno: "AZB10820CW",
    qty: "25",
    platform: "",
    location: "2F CP WCC",
    locationid: "F51",
    status: "CP1,Wait",
    timein: "",
    uph: "0",
    bodysize: "NA",
    temp: "25",
    remark: "",
    index: 1,
  },
  {
    key: '3',
    machineno: "DX02",
    priority: "3",
    Package: '12"WAFER',
    customerid: "L024",
    lotid: "HLxxxxxxxxxx",
    station: "CP-0210 (CP1)",
    modelno: "AZB10820CW",
    qty: "25",
    platform: "",
    location: "2F CP WCC",
    locationid: "F52",
    status: "CP1,Wait",
    timein: "",
    uph: "0",
    bodysize: "NA",
    temp: "25",
    remark: "",
    index: 2,
  }
];
const datawait = [
  {
    key: '1',
    machineno: "",
    priority: "",
    Package: '12"WAFER',
    customerid: "M025",
    lotid: "HLxxxxxxxxxx",
    station: "CP-0210 (CP1)",
    modelno: "AZB10820CW",
    qty: "25",
    platform: "",
    location: "2F CP WCC",
    locationid: "F53",
    status: "CP1,Wait",
    timein: "",
    uph: "0",
    bodysize: "NA",
    temp: "25",
    remark: "",
    index: 0,
  },
  {
    key: '2',
    machineno: "",
    priority: "",
    Package: '12"WAFER',
    customerid: "M026",
    lotid: "HLxxxxxxxxxx",
    station: "CP-0210 (CP1)",
    modelno: "AZB10820CW",
    qty: "25",
    platform: "",
    location: "2F CP WCC",
    locationid: "F52",
    status: "CP1,Wait",
    timein: "",
    uph: "0",
    bodysize: "NA",
    temp: "25",
    remark: "",
    index: 1,
  },
  {
    key: '3',
    machineno: "",
    priority: "",
    Package: '12"WAFER',
    customerid: "M027",
    lotid: "HLxxxxxxxxxx",
    station: "CP-0210 (CP1)",
    modelno: "AZB10820CW",
    qty: "25",
    platform: "",
    location: "2F CP WCC",
    locationid: "F53",
    status: "CP1,Wait",
    timein: "",
    uph: "0",
    bodysize: "NA",
    temp: "25",
    remark: "",
    index: 2,
  },
];

class Schedulemanagement extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      DataReady : dataready,
      DataWait : datawait
    }
    this.backgroundColor = ['#02b050','#ffff02','#ff33cc','#02b0f0','#ff0001'];
  }
  //選取到的燈色有特別匡匡標示
  focus = (e)=>{
    console.log(e.target.id);
    var green = document.getElementById('btn-green');
    var yellow = document.getElementById('btn-yellow');
    var pink = document.getElementById('btn-pink');
    var blue = document.getElementById('btn-blue');
    var red = document.getElementById('btn-red');
    green.className='btn-type';
    yellow.className='btn-type';
    pink.className='btn-type';
    blue.className='btn-type';
    red.className='btn-type';
    if(e.target.id == 'btn-green'){
      green.className='btn-type-choose';
    }else if(e.target.id == 'btn-yellow'){
      yellow.className='btn-type-choose';
    }else if(e.target.id == 'btn-pink'){
      pink.className='btn-type-choose';
    }else if(e.target.id == 'btn-blue'){
      blue.className='btn-type-choose';
    }else{
      red.className='btn-type-choose';
    }
  }
  //派出
  onChange (data_ready,data_wait){
    this.setState({
      DataReady: data_ready,
      DataWait: data_wait
    })
    setTimeout(() => {document.getElementById('trigger').click()}, 5);
  }
  onSend(){
    return this.state;
  }
  //刪除
  _onChange (data_ready,data_wait){
    
    this.setState({
      DataReady: data_ready,
      DataWait: data_wait
    })
    
    setTimeout(() => {document.getElementById('_trigger').click()}, 5);
  }
  _onSend(){
    return this.state;
  }
  
  render() {
    const { DataReady } = this.state;
    const { DataWait } = this.state;
    return (
      <Layout className='homecol' style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <div className='components-layout'>
          {/* <Mynavbar /> */}
          <Content className="ant-basiclatout-content" style={{ margin: '0' }}>
            <div className='title'>
              <PageHeader ghost={false} title='手動排程管理' /> 
              {/* title={translate("schedulemanagement.title")} */}
            </div>
            <div className="ant-content-children">
              <Card className="tableoverflow" >
                <Row gutter={[24, 24]} justify="center">
                  <Col span={3}>
                    <Dropdown overlay={menu} trigger={['click']}>
                      <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        機台型號 <DownOutlined />
                      </Button>
                    </Dropdown>
                  </Col>
                  <Col>
                      <div onClick={this.focus} id='btn-green' className='btn-type' style={{backgroundColor:this.backgroundColor[0]}}></div>
                    </Col>
                    <Col>
                        <div onClick={this.focus} id='btn-yellow' className='btn-type' style={{backgroundColor:this.backgroundColor[1]}}></div>
                    </Col>
                    <Col>
                        <div onClick={this.focus} id='btn-pink' className='btn-type' style={{backgroundColor:this.backgroundColor[2]}}></div>
                    </Col>
                    <Col>
                        <div onClick={this.focus} id='btn-blue' className='btn-type' style={{backgroundColor:this.backgroundColor[3]}}></div>
                    </Col>
                    <Col>
                        <div onClick={this.focus} id='btn-red' className='btn-type' style={{backgroundColor:this.backgroundColor[4]}}></div>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} justify="end">
                  <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <Space>
                      <Search placeholder="型號搜尋" allowClear onSearch={onSearch} style={{ width: 250 }} />
                    </Space>
                  </Col>
                </Row>
                <ReadyTable change={this._onChange.bind(this)} send={this.onSend.bind(this)} ready_data={DataReady} wait_data={DataWait}/><br/>
                <WaitTable change={this.onChange.bind(this)} send={this._onSend.bind(this)} ready_data={DataReady} wait_data={DataWait}/>
              </Card>
            </div>
          </Content>
        </div>
      </Layout>
    )
  }
}

export default Schedulemanagement;