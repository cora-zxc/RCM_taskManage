import React from "react";
//import { connect } from 'react-redux'
//import PropTypes from "prop-types"
import { Layout, Table, Space, DatePicker, Button, Select, Input, Descriptions, Card, Col, Row, Typography, Modal } from 'antd';
//import Mynavbar from "../Global/Mynavbar.js"
//import JSMpeg from 'jsmpeg-player'
import './Rcmalarmanalysis.css'
//import translate from '../../lang/translate'
import { SearchOutlined, FileExcelOutlined, BarChartOutlined } from '@ant-design/icons';
import PlatoChart from './PlatoChart';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Text } = Typography

class Rcmalarmanalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  handleCenter() {

  }
  handleRotation() {

  }
  render() {
    this.columns = [
      {
        title: '機台編號',
        dataIndex: "machineid",
        key: "machineid"
      },
      {
        title: '警報類型',
        dataIndex: "alarmtype",
        key: "alarmtype"
      },
      {
        title: '警報次數',
        dataIndex: "alerttimes",
        key: "alerttimes",
        sorter: (a, b) => a.alerttimes.length - b.alerttimes.length,
        sortDirections: ["descend", "ascend"],
        filterDropdown: true,
        filterIcon: () => {
        return (
          <Button onClick={() => this.setModalVisible(true)} style={{padding:'2px 5px'}}>
            <BarChartOutlined style={{ fontSize: '24px' }} />
          </Button>
          );
        }
      },
      {
        title: '累計時間',
        dataIndex: "totaltime",
        key: "totaltime",
        sorter: (a, b) => a.totaltime.length - b.totaltime.length,
        sortDirections: ["descend", "ascend"],
        filterDropdown: true,
        filterIcon: () => {
        return (
          <Button onClick={() => this.setModalVisible(true)} style={{padding:'2px 5px'}}>
            <BarChartOutlined style={{ fontSize: '24px' }} />
          </Button>
          );
        }
      }
    ]
    this.data = [
      {
        key: 1,
        machineid: "DX13",
        alarmtype: "S",
        alerttimes: 5,
        totaltime: 15
      },
      {
        key: 2,
        machineid: "DX13",
        alarmtype: "A",
        alerttimes: 2,
        totaltime: 30
      },
      {
        key: 3,
        machineid: "DX13",
        alarmtype: "K",
        alerttimes: 30,
        totaltime: 100
      },
      {
        key: 4,
        machineid: "DX13",
        alarmtype: "Q",
        alerttimes: 18,
        totaltime: 77
      },
      {
        key: 5,
        machineid: "DX13",
        alarmtype: "R",
        alerttimes: 4,
        totaltime: 20
      },
      {
        key: 6,
        machineid: "DX13",
        alarmtype: "M",
        alerttimes: 35,
        totaltime: 69
      },
      {
        key: 7,
        machineid: "DX13",
        alarmtype: "G",
        alerttimes: 1,
        totaltime: 5
      }
    ]
    return (
      <div className="ant-content-children">
        <Card>
          <Row gutter={[24, 24]} justify="end">
            <Col className="" xs={24} sm={9} md={9} lg={9} xl={9}>
              <Text>時間區間：</Text>
              <RangePicker className="" />
            </Col>
            <Col className="" xs={5} sm={5} md={5} lg={4} xl={4}>
              <Select placeholder="選擇調查事項" style={{ width: '150px', textAlign: 'center' }}>
                <Option value={0}>機台類型</Option>
                <Option value={1}>機台編號</Option>
                <Option value={2}>警報類型</Option>
                <Option value={3}>警報號碼</Option>
              </Select>
            </Col>
            <Col className="" xs={5} sm={5} md={5} lg={4} xl={4}>
              <Select placeholder="輔助選項" style={{ width: '150px', textAlign: 'center' }}>
                <Option value={0}>UF3000</Option>
                <Option value={1}>OPUS3</Option>
              </Select>
            </Col>
            <Col className="" xs={5} sm={5} md={5} lg={5} xl={5}>
              <Select placeholder="選擇分類項目(Ｘ軸)" style={{ width: '180px', textAlign: 'center' }}>
                <Option value={0}>警報類型</Option>
                <Option value={1}>警報號碼</Option>
                <Option value={2}>機台類型</Option>
                <Option value={3}>機台編號</Option>
              </Select>
            </Col>
            <Col className="" xs={3} sm={3} md={3} lg={3} xl={2}>
              <Button type='primary' icon={<SearchOutlined />}>搜尋</Button>
            </Col>
          </Row>
        </Card>
        <Card>
          <span className="rcmalarmanalysis-table-headremarks">資料區間：2021/5/1 ~ 2021/5/30</span>
          <Button className="rcmalarmanalysis-btn-exportexcel" type='primary' icon={<FileExcelOutlined />}>匯出Excel</Button>
          <Table className="rcmalarmanalysis-table" bordered columns={this.columns} dataSource={this.data}/>
        </Card>
        <Modal
          title="調查事項：機台編號"
          width={1000}
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
          okText="匯出圖檔"
          cancelText="關閉"
        >
          <p>時間區間：2021/5/1 ~ 2021/5/30</p>
          <div><PlatoChart /></div>
        </Modal>
      </div>
    )
  }
}

export default Rcmalarmanalysis;