import React from "react";
//import { connect } from 'react-redux'
//import PropTypes from "prop-types"
import { Layout, Table, Image, Form, Button, Cascader, Carousel, Input, Card, Col, Row, Typography, PageHeader, DatePicker, Select, Modal, Affix, Space, Descriptions } from 'antd';
//import Mynavbar from "../Global/Mynavbar.js"
import { CalendarOutlined, DatabaseOutlined, BranchesOutlined, FilterOutlined, AimOutlined } from '@ant-design/icons';
import './Rcmeffectiveness.css'
//import translate from '../../lang/translate'
import RcmeffectivenessDualAxes from './RcmeffectivenessDualAxes'
import RcmeffectivenessColumn from './RcmeffectivenessColumn'
import RcmeffectivenessPlatoChart from './RcmeffectivenessPlatoChart'


const { Option } = Select;

class Rcmeffectiveness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupstate0: 0, groupstate1: 0, groupstate2: 0,
      pickerstate0: '',pickerstate1: '',pickerstate2: '',
      formstate0: 'hide',formstate1: 'hide',formstate2: 'hide',
      type0: 0, type1: 0, type2: 0,
      boolean0: false, boolean1: false, boolean2: false,
      filtergroup: 0,
      filterstate: ''
    };
    this.tabListTitle=[];
    this.columns1=[];
    this.data1=[];
    this.columns2=[];
    this.data2=[];
    this.columns3=[];
    this.data3=[];
    this.formRef0 = React.createRef();
    this.formRef1 = React.createRef();
    this.formRef2 = React.createRef();
    this.handleReport0 = this.handleReport0.bind(this)
    this.handleReport1 = this.handleReport1.bind(this)
    this.handleReport2 = this.handleReport2.bind(this)
    this.OnTimeInterval0 = this.OnTimeInterval0.bind(this)
    this.OnTimeInterval1 = this.OnTimeInterval1.bind(this)
    this.OnTimeInterval2 = this.OnTimeInterval2.bind(this)
    this.OnFilter = this.OnFilter.bind(this)
    this.handleClear0 = this.handleClear0.bind(this)
    this.handleClear1 = this.handleClear1.bind(this)
    this.handleClear2 = this.handleClear2.bind(this)
    this.optionsperiod = [
      {
        value: 0,
        label: '全天',
        children: [
          {
            value: 'day',
            label: '日報',
          },
          {
            value: 'week',
            label: '週報',
          },
          {
            value: 'month',
            label: '月報',
          },
          {
            value: 'quarter',
            label: '季報',
          },
        ],
      },
      {
        value: 1,
        label: '日班',
        children: [
          {
            value: 'day',
            label: '日報',
          },
          {
            value: 'week',
            label: '週報',
          },
          {
            value: 'month',
            label: '月報',
          },
          {
            value: 'quarter',
            label: '季報',
          },
        ],
      },
      {
        value: 2,
        label: '夜班',
        children: [
          {
            value: 'day',
            label: '日報',
          },
          {
            value: 'week',
            label: '週報',
          },
          {
            value: 'month',
            label: '月報',
          },
          {
            value: 'quarter',
            label: '季報',
          },
        ],
      }
    ];
    this.optionsfilter = [
      {
        value: 0,
        label: "全部機台"
      },
      {
        value: 1,
        label: "部分機台",
        children: [
          {
            value: "UF3000",
            label: "UF3000"
          },
          {
            value: "OPUS",
            label: "OPUS"
          }
        ]
      },
      {
        value: 2,
        label: "單一機台",
        children: [
          {
            value: "DX01",
            label: "DX01"
          },
          {
            value: "DX02",
            label: "DX02"
          },
          {
            value: "DX03",
            label: "DX03"
          },
          {
            value: "DX04",
            label: "DX04"
          },
          {
            value: "DX05",
            label: "DX05"
          },
          {
            value: "DX06",
            label: "DX06"
          },
          {
            value: "DX07",
            label: "DX07"
          },
          {
            value: "DX08",
            label: "DX08"
          },
          {
            value: "DX09",
            label: "DX09"
          },
          {
            value: "DX10",
            label: "DX10"
          },
          {
            value: "DX11",
            label: "DX11"
          },
          {
            value: "DX12",
            label: "DX12"
          },
          {
            value: "DX13",
            label: "DX13"
          },
          {
            value: "DX14",
            label: "DX14"
          },
          {
            value: "DX15",
            label: "DX15"
          },
          {
            value: "DX16",
            label: "DX16"
          },
          {
            value: "DX17",
            label: "DX17"
          },
          {
            value: "DX18",
            label: "DX18"
          },
          {
            value: "DX19",
            label: "DX19"
          },
          {
            value: "DX20",
            label: "DX20"
          },
          {
            value: "DX21",
            label: "DX21"
          },
          {
            value: "DX22",
            label: "DX22"
          },
          {
            value: "DX23",
            label: "DX23"
          },
          {
            value: "DX24",
            label: "DX24"
          },
          {
            value: "DX25",
            label: "DX25"
          },
          {
            value: "DX26",
            label: "DX26"
          },
          {
            value: "DX27",
            label: "DX27"
          },
          {
            value: "DX28",
            label: "DX28"
          },
          {
            value: "DX29",
            label: "DX29"
          },
          {
            value: "DX30",
            label: "DX30"
          },
          {
            value: "DX31",
            label: "DX31"
          },
          {
            value: "DX32",
            label: "DX32"
          },
          {
            value: "DX33",
            label: "DX33"
          },
          {
            value: "DX34",
            label: "DX34"
          },
          {
            value: "DX35",
            label: "DX35"
          },
          {
            value: "DX36",
            label: "DX36"
          },
          {
            value: "DX37",
            label: "DX37"
          },
          {
            value: "DX38",
            label: "DX38"
          },
          {
            value: "DX39",
            label: "DX39"
          },
          {
            value: "DX40",
            label: "DX40"
          },
          {
            value: "DX41",
            label: "DX41"
          },
          {
            value: "DX42",
            label: "DX42"
          },
          {
            value: "DX43",
            label: "DX43"
          },
          {
            value: "DX44",
            label: "DX44"
          },
          {
            value: "DX45",
            label: "DX45"
          },
          {
            value: "DX46",
            label: "DX46"
          },
          {
            value: "DX47",
            label: "DX47"
          },
          {
            value: "DX48",
            label: "DX48"
          },
          {
            value: "DX49",
            label: "DX49"
          },
          {
            value: "DX50",
            label: "DX50"
          },
          {
            value: "DX51",
            label: "DX51"
          },
          {
            value: "DX52",
            label: "DX52"
          },
          {
            value: "DX53",
            label: "DX53"
          },
          {
            value: "DX54",
            label: "DX54"
          },
          {
            value: "DX55",
            label: "DX55"
          },
          {
            value: "DX56",
            label: "DX56"
          },
          {
            value: "DX57",
            label: "DX57"
          },
          {
            value: "DX58",
            label: "DX58"
          },
          {
            value: "DX59",
            label: "DX59"
          },
          {
            value: "DX60",
            label: "DX60"
          },
          {
            value: "DX61",
            label: "DX61"
          },
          {
            value: "DX62",
            label: "DX62"
          },
          {
            value: "DX63",
            label: "DX63"
          },
          {
            value: "DX64",
            label: "DX64"
          },
          {
            value: "DX65",
            label: "DX65"
          },
          {
            value: "DX66",
            label: "DX66"
          },
          {
            value: "DX67",
            label: "DX67"
          },
          {
            value: "DX68",
            label: "DX68"
          },
          {
            value: "DX69",
            label: "DX69"
          },
          {
            value: "DX70",
            label: "DX70"
          },
          {
            value: "DX71",
            label: "DX71"
          },
          {
            value: "DX72",
            label: "DX72"
          },
          {
            value: "DX73",
            label: "DX73"
          },
          {
            value: "DX74",
            label: "DX74"
          },
          {
            value: "DX75",
            label: "DX75"
          },
          {
            value: "DX76",
            label: "DX76"
          },
          {
            value: "DX77",
            label: "DX77"
          },
          {
            value: "DX78",
            label: "DX78"
          },
          {
            value: "DX79",
            label: "DX79"
          },
          {
            value: "DX80",
            label: "DX80"
          },
          {
            value: "DX81",
            label: "DX81"
          },
          {
            value: "DX82",
            label: "DX82"
          },
          {
            value: "DX83",
            label: "DX83"
          },
          {
            value: "DX84",
            label: "DX84"
          },
          {
            value: "DX85",
            label: "DX85"
          },
          {
            value: "DX86",
            label: "DX86"
          },
          {
            value: "DX87",
            label: "DX87"
          },
          {
            value: "DX88",
            label: "DX88"
          },
          {
            value: "DX89",
            label: "DX89"
          },
          {
            value: "DX90",
            label: "DX90"
          },
          {
            value: "DX91",
            label: "DX91"
          },
          {
            value: "DX92",
            label: "DX92"
          },
          {
            value: "DX93",
            label: "DX93"
          },
          {
            value: "DX94",
            label: "DX94"
          },
          {
            value: "DX95",
            label: "DX95"
          },
          {
            value: "DX96",
            label: "DX96"
          },
          {
            value: "DX97",
            label: "DX97"
          },
          {
            value: "DX98",
            label: "DX98"
          },
          {
            value: "DX99",
            label: "DX99"
          },
          {
            value: "DX100",
            label: "DX100"
          },
          {
            value: "DX101",
            label: "DX101"
          },
          {
            value: "DX102",
            label: "DX102"
          },
          {
            value: "DX103",
            label: "DX103"
          },{
            value: "DX104",
            label: "DX104"
          },{
            value: "DX105",
            label: "DX105"
          },{
            value: "DX106",
            label: "DX106"
          },
        ]
      }
    ];
  }
  handleReport0(value) {
    this.setState({ formstate0: 'show', type0: value.type, boolean0: true });
    //console.log(value);
  }
  handleReport1(value) {
    this.setState({ formstate1: 'show', type1: value.type, boolean1: true })
  }
  handleReport2(value) {
    this.setState({ formstate2: 'show', type2: value.type, boolean2: true })
    console.log(value.filter)
  }
  OnTimeInterval0(value) {
    this.setState({ groupstate0: value[0], pickerstate0: value[1] });
    //console.log(value)
  }
  OnTimeInterval1(value) {
    this.setState({ groupstate1: value[0], pickerstate1: value[1] });
    //console.log(value)
  }
  OnTimeInterval2(value) {
    this.setState({ groupstate2: value[0], pickerstate2: value[1] });
    //console.log(value)
  }
  OnFilter(value) {
    this.setState({ filtergroup: value[0], filterstate: value[1] });
    //console.log(value)
  }
  handleClear0() {
    this.setState({ formstate0: 'hide', boolean0: false })
    this.formRef0.current.resetFields();
  }
  handleClear1() {
    this.setState({ formstate1: 'hide', boolean1: false })
    this.formRef1.current.resetFields();
  }
  handleClear2() {
    this.setState({ formstate2: 'hide', boolean2: false })
    this.formRef2.current.resetFields();
  }
  onTabChange = (key) => {
    console.log(key);
    document.getElementById('trendAnalysis').style.display = "none";
    document.getElementById('rankAnalysis').style.display = "none";
    document.getElementById('periodAnalysis').style.display = "none";
    if(key == 'trendanalysis')
      document.getElementById('trendAnalysis').style.display = "block";
    else if(key == 'rankanalysis')
      document.getElementById('rankAnalysis').style.display = "block";
    else if(key == 'periodanalysis')
      document.getElementById('periodAnalysis').style.display = "block";
  };
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleCenter() {
  }
  handleRotation() {
  }
  render() {
    this.tabListTitle = [
      {
        key: "trendanalysis",
        tab: "趨勢分析"
      },
      {
        key: "rankanalysis",
        tab: "機台排行"
      },
      {
        key: "periodanalysis",
        tab: "時間分析"
      }
    ];
    this.columns1 = [
      {
        title: "",
        dataIndex: "rate",
        key: "rate",
      },
      {
        title: "day1",
        dataIndex: "day1",
        key: "day1",
      },
      {
        title: "day2",
        dataIndex: "day2",
        key: "day2",
      },
      {
        title: "day3",
        dataIndex: "day3",
        key: "day3",
      },
      {
        title: "day4",
        dataIndex: "day4",
        key: "day4",
      },
      {
        title: "day5",
        dataIndex: "day5",
        key: "day5",
      },
      {
        title: "day6",
        dataIndex: "day6",
        key: "day6",
      },
      {
        title: "day7",
        dataIndex: "day7",
        key: "day7",
      },
    ];
    this.data1 = [
      {
        key: 1,
        rate: "設備利用率",
        day1: "95%",
        day2: "97%",
        day3: "96%",
        day4: "97%",
        day5: "99%",
        day6: "94%",
        day7: "100%"
      },
      {
        key: 2,
        rate: "待機率",
        day1: "95%",
        day2: "97%",
        day3: "96%",
        day4: "97%",
        day5: "99%",
        day6: "94%",
        day7: "100%"
      },
      {
        key: 3,
        rate: "警報率",
        day1: "95%",
        day2: "97%",
        day3: "96%",
        day4: "97%",
        day5: "99%",
        day6: "94%",
        day7: "100%"
      },
      {
        key: 4,
        rate: "關機率",
        day1: "95%",
        day2: "97%",
        day3: "96%",
        day4: "97%",
        day5: "99%",
        day6: "94%",
        day7: "100%"
      },
    ];
    this.columns2=[
      {
        title: "",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "week1",
        dataIndex: "week1",
        key: "week1",
        sorter: (a, b) => parseInt(a.week1) - parseInt(b.week1),
        
      },
      {
        title: "week2",
        dataIndex: "week2",
        key: "week2",
        sorter: (a, b) => parseInt(a.week2) - parseInt(b.week2),
      },
      {
        title: "week3",
        dataIndex: "week3",
        key: "week3",
        sorter: (a, b) => parseInt(a.week3) - parseInt(b.week3),
      },
      {
        title: "week4",
        dataIndex: "week4",
        key: "week4",
        sorter: (a, b) => parseInt(a.week4) - parseInt(b.week4),
      },
      {
        title: "week5",
        dataIndex: "week5",
        key: "week5",
        sorter: (a, b) => parseInt(a.week5) - parseInt(b.week5),
      },
      {
        title: "week6",
        dataIndex: "week6",
        key: "week6",
        sorter: (a, b) => parseInt(a.week6) - parseInt(b.week6),
      },
      {
        title: "week7",
        dataIndex: "week7",
        key: "week7",
        sorter: (a, b) => parseInt(a.week7) - parseInt(b.week7),
      },
      {
        title: "week8",
        dataIndex: "week8",
        key: "week8",
        sorter: (a, b) => parseInt(a.week8) - parseInt(b.week8),
      }
    ];
    this.data2=[
      {
        key: 1,
        id: "DX01",
        week1: "95%",
        week2: "97%",
        week3: "91%",
        week4: "92%",
        week5: "93%",
        week6: "91%",
        week7: "92%",
        week8: "93%",
      },
      {
        key: 2,
        id: "DX02",
        week1: "95%",
        week2: "97%",
        week3: "91%",
        week4: "92%",
        week5: "93%",
        week6: "91%",
        week7: "92%",
        week8: "93%",
      },
      {
        key: 3,
        id: "DX03",
        week1: "98%",
        week2: "99%",
        week3: "91%",
        week4: "98%",
        week5: "93%",
        week6: "97%",
        week7: "96%",
        week8: "93%",
      },
      {
        key: 4,
        id: "DX04",
        week1: "99%",
        week2: "97%",
        week3: "90%",
        week4: "92%",
        week5: "89%",
        week6: "98%",
        week7: "92%",
        week8: "94%",
      },
      {
        key: 5,
        id: "DX05",
        week1: "99%",
        week2: "93%",
        week3: "97%",
        week4: "98%",
        week5: "90%",
        week6: "95%",
        week7: "96%",
        week8: "92%",
      },
    ];
    this.columns3=[
      {
        title: "",
        dataIndex: "frequency",
        key: "frequency",
      },
      {
        title: "S",
        dataIndex: "S",
        key: "S",
        sorter: (a, b) => parseInt(a.S) - parseInt(b.S),
        
      },
      {
        title: "M",
        dataIndex: "M",
        key: "M",
        sorter: (a, b) => parseInt(a.M) - parseInt(b.M),
      },
      {
        title: "Q",
        dataIndex: "Q",
        key: "Q",
        sorter: (a, b) => parseInt(a.Q) - parseInt(b.Q),
      },
      {
        title: "R",
        dataIndex: "R",
        key: "R",
        sorter: (a, b) => parseInt(a.R) - parseInt(b.R),
      },
      {
        title: "T",
        dataIndex: "T",
        key: "T",
        sorter: (a, b) => parseInt(a.T) - parseInt(b.T),
      },
      {
        title: "Y",
        dataIndex: "Y",
        key: "Y",
        sorter: (a, b) => a.Y - b.Y,
      }
    ];
    this.data3=[
      {
        key: 1,
        frequency: "DX50",
        S: "20mins",
        M: "10mins",
        Q: "60mins",
        R: "70mins",
        T: "100mins",
        Y: "40mins",
      },
      {
        key: 2,
        frequency: "DX51",
        S: "95mins",
        M: "35mins",
        Q: "15mins",
        R: "10mins",
        T: "10mins",
        Y: "45mins",
      },
      {
        key: 3,
        frequency: "DX52",
        S: "70mins",
        M: "10ins",
        Q: "60mins",
        R: "70mins",
        T: "40mins",
        Y: "100mins",
      },
      {
        key: 4,
        frequency: "DX53",
        S: "60mins",
        M: "70mins",
        Q: "20mins",
        R: "25mins",
        T: "40mins",
        Y: "80mins",
      },
      {
        key: 5,
        frequency: "DX54",
        S: "70mins",
        M: "200mins",
        Q: "300mins",
        R: "40mins",
        T: "20mins",
        Y: "60mins",
      },
    ];
    return (
      <div className="ant-content-children">
        <Card id="rcmeffectiveness-card-content"
          style={{ width: "100%"}}
          tabList={this.tabListTitle}
          onTabChange={(key) => {
            this.onTabChange(key);
          }}
        >
          <div id='trendAnalysis' style={{display: 'block'}}>
           <Form ref={this.formRef0} name="advanced_trendAnalysis" className="ant-advanced-search-form"
            onFinish={this.handleReport0} layout="vertical"
            >
            <Row gutter={[16, 16]} style={{ margin: '0 -8px' }}>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="type" label="分析類型0"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <Select disabled={this.state.boolean0} placeholder="選擇分析類型.." >
                    <Option value={0}>產能利用率</Option>
                    <Option value={1}>
                      <li>設備利用率</li>
                      <li>待機率</li>
                      <li>警報率</li>
                      <li>關機率</li>
                    </Option>
                    <Option value={2}>MTBA</Option>
                    <Option value={3}>MTTA</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="timeinterval" label="報表選項"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <Cascader disabled={this.state.boolean0} options={this.optionsperiod} onChange={this.OnTimeInterval0} placeholder="選擇報表選項.." />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="lasttime" label="報表截止日期"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <DatePicker disabled={this.state.boolean0} style={{width: '100%'}} picker={this.state.pickerstate0} placeholder="選擇截止日期.."/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: '0 6px', marginBottom: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button type="primary" htmlType="submit" >產生報表</Button>
                <Button style={{ margin: '0 8px' }} onClick={this.handleClear0} >重置</Button>
              </Col>
            </Row>
          </Form>
          {this.state.formstate0 === 'show' ? 
            <div style={{ width: "100%", border: "5px double #ccc" }}>
              <Descriptions bordered>
                <Descriptions.Item label="分析類別:">
                  {
                    this.state.type0 == 0 ? '產能利用率' : this.state.type0 == 1 ? '設備利用率/待機率/警報率/關機率' :
                    this.state.type0 == 2 ? 'MTBA' : this.state.type0 == 3 ? 'MTTA' : ''
                  }
                </Descriptions.Item>
                <Descriptions.Item label="報表類型:">
                  {this.optionsperiod[this.state.groupstate0].label}/
                  {
                    this.state.pickerstate0 == 'day' ? '日報'  : this.state.pickerstate0 == 'week' ? '週報' :
                    this.state.pickerstate0 == 'month' ? '月報' : this.state.pickerstate0 == 'quarter' ? '季報' : ''
                  }
                </Descriptions.Item>
                <Descriptions.Item label="時間區間:">2021/03/01 ~ 2021/03/07</Descriptions.Item>
              </Descriptions>
              <div>
                <Card className="rcmeffectiveness-table">
                  <RcmeffectivenessDualAxes />
                  <br />
                  <Button type="primary" style={{ float: 'right' }}>匯出圖檔</Button>
                </Card>
                <Card className="rcmeffectiveness-table">
                  <Table style={{ marginBottom: '10px' }}
                    bordered
                    columns={this.columns1}
                    dataSource={this.data1}
                    pagination={false}
                  />
                  <Button type="primary" style={{ float: 'right', marginLeft: '10px' }}>匯出Excel</Button>
                </Card>
              </div>
            </div> : ''}
        </div>
        <div id='rankAnalysis' style={{display: 'none'}}>
          <Form ref={this.formRef1} name="advanced_rankAnalysis" className="ant-advanced-search-form"
            onFinish={this.handleReport1} layout="vertical"
            >
            <Row gutter={[16, 16]} style={{ margin: '0 -8px' }}>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="type" label="分析類型1"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <Select disabled={this.state.boolean1} placeholder="選擇分析類型.." >
                    <Option value={0}>產能利用率分析</Option>
                    <Option value={1}>設備利用率分析</Option>
                    <Option value={2}>待機率分析</Option>
                    <Option value={3}>警報率分析</Option>
                    <Option value={4}>關機率分析</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="timeinterval" label="報表選項"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <Cascader disabled={this.state.boolean1} options={this.optionsperiod} onChange={this.OnTimeInterval1} placeholder="選擇報表選項.." />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="lasttime" label="報表截止日期"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <DatePicker disabled={this.state.boolean1} style={{width: '100%'}} picker={this.state.pickerstate1} placeholder="選擇截止日期.."/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: '0 6px', marginBottom: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button type="primary" htmlType="submit" >產生報表</Button>
                <Button style={{ margin: '0 8px' }} onClick={this.handleClear1} >重置</Button>
              </Col>
            </Row>
          </Form>
          {this.state.formstate1 === 'show' ? 
            <div style={{ width: "100%", border: "5px double #ccc" }}>
              <Descriptions bordered>
                <Descriptions.Item label="分析類別:">
                  {
                    this.state.type1 == 0 ? '產能利用率分析' : this.state.type1 == 1 ? '設備利用率分析' :
                    this.state.type1 == 2 ? '待機率分析' : this.state.type1 == 3 ? '警報率分析' : 
                    this.state.type1 == 4 ? '關機率分析' : ''
                  }
                </Descriptions.Item>
                <Descriptions.Item label="報表類型:">
                  {this.optionsperiod[this.state.groupstate1].label}/
                  {
                    this.state.pickerstate1 == 'day' ? '日報'  : this.state.pickerstate1 == 'week' ? '週報' :
                    this.state.pickerstate1 == 'month' ? '月報' : this.state.pickerstate1 == 'quarter' ? '季報' : ''
                  }
                </Descriptions.Item>
                <Descriptions.Item label="時間區間:">2021/03/01 ~ 2021/03/07</Descriptions.Item>
              </Descriptions>
              <div>
                <Card className="rcmeffectiveness-table">
                  <RcmeffectivenessColumn />
                  <br />
                  <Button type="primary" style={{ float: 'right' }}>匯出圖檔</Button>
                </Card>
                <Card className="rcmeffectiveness-table">
                  <Table style={{ marginBottom: '10px' }}
                    bordered
                    columns={this.columns2}
                    dataSource={this.data2}
                    pagination={false}
                  />
                  <Button type="primary" style={{ float: 'right', marginLeft: '10px' }}>匯出Excel</Button>
                </Card>
              </div>
            </div> : ''}
        </div>
        <div id='periodAnalysis' style={{display: 'none'}}>
          <Form ref={this.formRef2} name="advanced_periodAnalysis" className="ant-advanced-search-form"
            onFinish={this.handleReport2} layout="vertical"
            >
            <Row gutter={[16, 16]} style={{ margin: '0 -8px' }}>
              <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="type" label="分析類型2"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <Select disabled={this.state.boolean2} placeholder="選擇分析類型.." >
                    <Option value={0}>警報訊號分析</Option>
                    <Option value={1}>警報訊號MTBA</Option>
                    <Option value={2}>警報訊號MTTA</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="filter" label="設備篩選"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <Cascader disabled={this.state.boolean2} options={this.optionsfilter} onChange={this.OnFilter} placeholder="選擇設備篩選.." />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="timeinterval" label="報表選項"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <Cascader disabled={this.state.boolean2} options={this.optionsperiod} onChange={this.OnTimeInterval2} placeholder="選擇報表選項.." />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ padding: '0 6px', marginBottom: '12px' }}>
                <Form.Item name="lasttime" label="報表截止日期"
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <DatePicker disabled={this.state.boolean2} style={{width: '100%'}} picker={this.state.pickerstate2} placeholder="選擇截止日期.."/>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={6} lg={4} xl={4} style={{ padding: '0 6px', marginBottom: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button type="primary" htmlType="submit" >產生報表</Button>
                <Button style={{ margin: '0 8px' }} onClick={this.handleClear2} >重置</Button>
              </Col>
            </Row>
          </Form>
          {this.state.formstate2 === 'show' ? 
            <div style={{ width: "100%", border: "5px double #ccc" }}>
              <Descriptions bordered>
                <Descriptions.Item label="分析類別:">
                  {
                    this.state.type2 == 0 ? '警報訊號分析' : this.state.type2 == 1 ? '警報訊號MTBA' :
                    this.state.type2 == 2 ? '警報訊號MTTA' : ''
                  }
                </Descriptions.Item>
                <Descriptions.Item label="設備篩選:">
                  {this.optionsfilter[this.state.filtergroup].label}
                  {
                    this.state.filterstate == '' ? ''  : 
                    this.state.filterstate !== '' ? ' / ' + this.state.filterstate : ''
                  }
                </Descriptions.Item>
                <Descriptions.Item label="報表類型:">
                  {this.optionsperiod[this.state.groupstate2].label}/
                  {
                    this.state.pickerstate2 == 'day' ? '日報'  : this.state.pickerstate2 == 'week' ? '週報' :
                    this.state.pickerstate2 == 'month' ? '月報' : this.state.pickerstate2 == 'quarter' ? '季報' : ''
                  }
                </Descriptions.Item>
                <Descriptions.Item label="時間區間:">2021/03/01 ~ 2021/03/07</Descriptions.Item>
              </Descriptions>
              <div>
                <Card className="rcmeffectiveness-table">
                  <RcmeffectivenessPlatoChart />
                  <br />
                  <Button type="primary" style={{ float: 'right' }}>匯出圖檔</Button>
                </Card>
                <Card className="rcmeffectiveness-table">
                  <Table style={{ marginBottom: '10px' }}
                    bordered
                    columns={this.columns3}
                    dataSource={this.data3}
                    pagination={false}
                  />
                  <Button type="primary" style={{ float: 'right', marginLeft: '10px' }}>匯出Excel</Button>
                </Card>
              </div>
            </div> : ''}
        </div>
        </Card>
      </div>
    )
  }
}

export default Rcmeffectiveness;