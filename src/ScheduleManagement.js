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
      <li>DX01</li>
    </Menu.Item>
    <Menu.Item key="1">
      <li>DX02</li>
    </Menu.Item>
    <Menu.Item key="2">
      <li>DX03</li>
    </Menu.Item>
    <Menu.Item key="3">
      <li>DX04</li>
    </Menu.Item>
  </Menu>
);


class Schedulemanagement extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      DataReady : props.data_ready,
      DataWait : props.data_wait
    }
    this.backgroundColor = ['#02b050','#ffff02','#ff33cc','#02b0f0','#ff0001'];
  }
  onGreet(data_ready,data_wait){
    this.setState({
      DataReady: data_ready,
      DataWait: data_wait
    })
    setTimeout(() => {document.getElementById('trigger').click()}, 5);
  }

  onSend(){
    const { DataReady } = this.state;
    return DataReady;
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
                  <Col span={4}>
                    <Dropdown overlay={menu} trigger={['click']}>
                      <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        機台型號 <DownOutlined />
                      </Button>
                    </Dropdown>
                  </Col>
                  <Col span={4}>
                      <div className='btn-type' style={{backgroundColor:this.backgroundColor[0]}}></div>
                  </Col>
                  <Col span={4}>
                      <div className='btn-type' style={{backgroundColor:this.backgroundColor[1]}}></div>
                  </Col>
                  <Col span={4}>
                      <div className='btn-type' style={{backgroundColor:this.backgroundColor[2]}}></div>
                  </Col>
                  <Col span={4}>
                      <div className='btn-type' style={{backgroundColor:this.backgroundColor[3]}}></div>
                  </Col>
                  <Col span={4}>
                      <div className='btn-type' style={{backgroundColor:this.backgroundColor[4]}}></div>
                  </Col>
                </Row>
                <Row gutter={[24, 24]} justify="end">
                  <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <Space>
                      <Search placeholder="型號搜尋" allowClear onSearch={onSearch} style={{ width: 250 }} />
                    </Space>
                  </Col>
                </Row>
                <ReadyTable send={this.onSend.bind(this)} ready_data={DataReady} wait_data={DataWait}/><br/>
                <WaitTable greet={this.onGreet.bind(this)} ready_data={DataReady} wait_data={DataWait}/>
              </Card>
            </div>
          </Content>
        </div>
      </Layout>
    )
  }
}

export default Schedulemanagement;