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
const columns1 = [
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
const data1 = [
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
const columns2=[
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
const data2=[
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
const columns3=[
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
const data3=[
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

class Rcmeffectiveness extends React.Component {
  constructor(props) {
    super(props);
    this.tabListTitle=[];
    this.flag = 0;
    this.page = 'trendanalysis';
    this.state = {
    };
  }
  reset0= () => {
    document.getElementById('trendanalysis-content-table').style.display = "none";
  }
  reset1= () => {
    document.getElementById('rankanalysis-content-table').style.display = "none";
  }
  reset2= () => {
    document.getElementById('periodanalysis-content-table').style.display = "none";
  }
  checkOption = (e) => {
    console.log(this.flag);
    if(this.page == 'trendanalysis'){
      if((this.flag & 7) != 7){
        alert("有項目未選擇")
      }else{
        console.log(e);
        document.getElementById('trendanalysis-content-table').style.display = "block";
      };
    }else if(this.page == 'rankanalysis'){
      if((this.flag & 56) != 56){
        alert("有項目未選擇")
      }else{
        console.log(e);
        document.getElementById('rankanalysis-content-table').style.display = "block";
      };
    }else if(this.page == 'periodanalysis'){
      if((this.flag & 1984) != 1984){
        alert("有項目未選擇")
      }else{
        console.log(e);
        document.getElementById('periodanalysis-content-table').style.display = "block";
      };
    }
  }
  handleChange = (value) => {
    if(this.page == 'trendanalysis')
      this.flag = this.flag | 1;
    else if(this.page == 'rankanalysis')
      this.flag = this.flag | 8;
    else if(this.page == 'periodanalysis')
      this.flag = this.flag | 64;
    console.log(`selected ${value}`);
  }
  onTabChange = (key) => {
    console.log(key);
    this.page = key;
    document.getElementById('rankanalysis').style.display = "none";
    document.getElementById('trendanalysis').style.display = "none";
    document.getElementById('periodanalysis').style.display = "none";
    if(key == 'rankanalysis')
      document.getElementById('rankanalysis').style.display = "inline-block";
    else if(key == 'trendanalysis')
      document.getElementById('trendanalysis').style.display = "inline-block";
    else if(key == 'periodanalysis')
      document.getElementById('periodanalysis').style.display = "inline-block";
  };
  onChange = (date, dateString) => {
    if(this.page == 'trendanalysis')
      this.flag = this.flag | 4;
    else if(this.page == 'rankanalysis')
      this.flag = this.flag | 32;
    else if(this.page == 'periodanalysis')
      this.flag = this.flag | 1024;
    console.log(date, dateString);
  }
  nextStep = (value) => {
    this.flag |= 128;
    this.flag |= 256;
    // this.flag |= 128;
    // if(this.flag & 256)
    //   this.flag ^= 256;
    // if(value == 0)
    //   this.flag |= 256;
    // else if(value == 1 && this.level3_sub_part_flag == 1){
    //   this.flag |= 256;
    // }else if(value == 2 && this.level3_sub_single_flag == 1){
    //   this.flag |= 256;
    // }
    console.log(value);
    // var level3sub = [
    //   document.getElementById('level3-sub-all'),
    //   document.getElementById('level3-sub-part'),
    //   document.getElementById('level3-sub-single')
    // ];
    // level3sub[0].style.display = "none";
    // level3sub[1].style.display = "none";
    // level3sub[2].style.display = "none";
    // level3sub[value].style.display = "inline-block";
  }
  level1relatedperiod = (value) => {
    //console.log(value);
    //console.log(value[1]);
    this.flag = this.flag | 2;
    if(this.flag & 4)
      this.flag ^= 4;
    var periodtype
    if (value[1]=="day"){
      periodtype = 1
    }else if(value[1]=="week"){
      periodtype = 2
    }else if(value[1]=="month"){
      periodtype = 3
    }else if(value[1]=="quarter"){
      periodtype = 4
    };
    var level1period = [
      document.getElementById('level1-period-default'),
      document.getElementById('level1-period-day'),
      document.getElementById('level1-period-week'),
      document.getElementById('level1-period-month'),
      document.getElementById('level1-period-quarter')
    ];
    level1period[0].style.display = "none";
    level1period[1].style.display = "none";
    level1period[2].style.display = "none";
    level1period[3].style.display = "none";
    level1period[4].style.display = "none";
    level1period[periodtype].style.display = "inline-block";
  }
  level2relatedperiod = (value) => {
    console.log(value);
    this.flag = this.flag | 16;
    if(this.flag & 32)
      this.flag ^= 32;
    var periodtype
    if (value[1]=="day"){
      periodtype = 1
    }else if(value[1]=="week"){
      periodtype = 2
    }else if(value[1]=="month"){
      periodtype = 3
    }else if(value[1]=="quarter"){
      periodtype = 4
    };
    var level2period = [
      document.getElementById('level2-period-default'),
      document.getElementById('level2-period-day'),
      document.getElementById('level2-period-week'),
      document.getElementById('level2-period-month'),
      document.getElementById('level2-period-quarter')
    ];
    level2period[0].style.display = "none";
    level2period[1].style.display = "none";
    level2period[2].style.display = "none";
    level2period[3].style.display = "none";
    level2period[4].style.display = "none";
    level2period[periodtype].style.display = "inline-block";
  }
  level3relatedperiod = (value) => {
    this.flag |= 512;
    this.flag ^= 1024;
    var periodtype
    if (value[1]=="day"){
      periodtype = 1
    }else if(value[1]=="week"){
      periodtype = 2
    }else if(value[1]=="month"){
      periodtype = 3
    }else if(value[1]=="quarter"){
      periodtype = 4
    };
    var level3period = [
      document.getElementById('level3-period-default'),
      document.getElementById('level3-period-day'),
      document.getElementById('level3-period-week'),
      document.getElementById('level3-period-month'),
      document.getElementById('level3-period-quarter')
    ];
    level3period[0].style.display = "none";
    level3period[1].style.display = "none";
    level3period[2].style.display = "none";
    level3period[3].style.display = "none";
    level3period[4].style.display = "none";
    level3period[periodtype].style.display = "inline-block";
  }
  optionsperiod = [
    {
      value: 'allgroup',
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
      value: 'daygroup',
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
      value: 'nightgroup',
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
  optionsfilter = [
    {
      value: "allmachines",
      label: "全天機台"
    },
    {
      value: "partmachines",
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
      value: "singlemachine",
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
      ]
    }
  ];
  contentListTitle = {
    trendanalysis: (
      <div id="trendanalysis" style={{display: 'inline-block', width: '100%'}}>
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><AimOutlined /> 分析類型</div>
          <Select onChange={this.handleChange} placeholder="選擇分析類型.." allowClear style={{ width: '150px', textAlign: 'center'}}>
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
        </div>
        &emsp;
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><DatabaseOutlined /> 報表選項</div>
          {/*  */}
          <Cascader options={this.optionsperiod} onChange={this.level1relatedperiod} placeholder="選擇報表選項.." style={{ width: '150px', textAlign: 'center' }} allowClear={false} />
          {/* <Select placeholder="選擇報表選項.." onChange={this.level1relatedperiod}  style={{ width: '150px', textAlign: 'center' }}>
            <Option value={0}>班</Option>
            <Option value={1}>日</Option>
            <Option value={2}>週</Option>
            <Option value={3}>月</Option>
            <Option value={4}>季</Option>
          </Select> */}
          {/*  */}
        </div>
        &emsp;
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><CalendarOutlined /> 報表截止日期</div>
          <div id="level1-period-default" style={{display: 'inline-block', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level1-period-day" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level1-period-week" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="week" placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level1-period-month" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="month" placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level1-period-quarter" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="quarter" placeholder="選擇截止日期.."/>
            </Space>
          </div>
        </div>
        &emsp;
        <Button type="primary" onClick={this.checkOption}>產生報表</Button>
        <Button style={{marginLeft: '10px'}} onClick={this.reset0}>重置</Button>
        <br /><br />
        {/*  */}
        <div id="trendanalysis-content-table" style={{display: 'none',width: "100%", border: "5px double #ccc"}}>
          <Descriptions bordered>
            <Descriptions.Item label="分析類別:">設備利用率/待機率/警報率/關機率</Descriptions.Item>
            <Descriptions.Item label="報表類型:">日報</Descriptions.Item>
            <Descriptions.Item label="時間區間:">2021/03/01 ~ 2021/03/07</Descriptions.Item>
          </Descriptions>
          <div>
            <Card className="rcmeffectiveness-table">
                <Table style={{marginBottom: '10px'}}
                  bordered 
                  columns={columns1} 
                  dataSource={data1} 
                  pagination={false}
                />
                <Button type="primary" style={{float: 'right', marginLeft: '10px'}}>匯出Excel</Button>
            </Card>
            <Card>
              <RcmeffectivenessDualAxes />
              <br />
              <Button type="primary" style={{float: 'right'}}>匯出圖檔</Button>
            </Card>
          </div>
        </div>

      </div>
      ),
    rankanalysis: (
      <div id="rankanalysis" style={{display: 'none', width: '100%'}}>
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><AimOutlined /> 分析類型</div>
          <Select onChange={this.handleChange} placeholder="選擇分析類型.." style={{ width: '150px', textAlign: 'center'}}>
            <Option value={0}>產能利用率分析</Option>
            <Option value={1}>設備利用率分析</Option>
            <Option value={2}>待機率分析</Option>
            <Option value={3}>警報率分析</Option>
            <Option value={4}>關機率分析</Option>
          </Select>
        </div>
        &emsp;
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><DatabaseOutlined /> 報表選項</div>
          <Cascader options={this.optionsperiod} onChange={this.level2relatedperiod} placeholder="選擇報表選項.." style={{ width: '150px', textAlign: 'center' }} allowClear={false} />
          {/* <Select placeholder="選擇報表選項.." onChange={this.level2relatedperiod} style={{ width: '150px', textAlign: 'center' }}>
            <Option value={0}>班</Option>
            <Option value={1}>日</Option>
            <Option value={2}>週</Option>
            <Option value={3}>月</Option>
            <Option value={4}>季</Option>
          </Select> */}
        </div>
        &emsp;
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><CalendarOutlined /> 報表截止日期</div>
          <div id="level2-period-default" style={{display: 'inline-block', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level2-period-day" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level2-period-week" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="week" placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level2-period-month" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="month" placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level2-period-quarter" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="quarter" placeholder="選擇截止日期.."/>
            </Space>
          </div>
        </div>
        &emsp;
        <Button type="primary" onClick={this.checkOption} >產生報表</Button>
        <Button style={{marginLeft: '10px'}} onClick={this.reset1}>重置</Button>
        <br /><br />
        {/*  */}
        <div id="rankanalysis-content-table" style={{display: "none", width: "100%", border: "5px double #ccc"}}>
          <Descriptions bordered>
            <Descriptions.Item label="分析類別:">產能利用率分析</Descriptions.Item>
            <Descriptions.Item label="報表類型:">週報</Descriptions.Item>
            <Descriptions.Item label="時間區間:">2021-20th ~ 2021-27th</Descriptions.Item>
          </Descriptions>
          <div>
            <Card className="rcmeffectiveness-table">
                <Table style={{marginBottom: '10px'}}
                  bordered 
                  columns={columns2} 
                  dataSource={data2} 
                  pagination={false}
                />
                <Button type="primary" style={{float: 'right', marginLeft: '10px'}}>匯出Excel</Button>
            </Card>
            <Card>
              <RcmeffectivenessColumn />
              <br />
              <Button type="primary" style={{float: 'right'}}>匯出圖檔</Button>
            </Card>
          </div>
        </div>
      </div>
    ),
    periodanalysis: (
      <div id="periodanalysis" style={{display: 'none', width: '100%'}}>
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><AimOutlined /> 分析類型</div>
          <Select placeholder="選擇分析類型.." onChange={()=>{this.flag |= 64}} style={{ width: '150px', textAlign: 'center'}}>
            <Option value={0}>警報訊號分析</Option>
            <Option value={1}>警報訊號MTBA</Option>
            <Option value={2}>警報訊號MTTA</Option>
          </Select>
        </div>
        &emsp;
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><FilterOutlined /> 設備篩選</div>
          <Cascader options={this.optionsfilter} onChange={this.nextStep} placeholder="選擇設備篩選.." style={{ width: '150px', textAlign: 'center'}} />
          {/* <Select placeholder="選擇設備篩選.." onChange={this.nextStep} style={{ width: '150px', textAlign: 'center' }}>
            <Option value={0}>全部機台</Option>
            <Option value={1}>部分機台</Option>
            <Option value={2}>單一機台</Option>
          </Select> */}
        </div>
        &emsp;
        {/* <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><BranchesOutlined /> 輔助選項</div> */}
          {/* 預設 全部機台 */}
          {/* <div id="level3-sub-all" style={{display: 'inline-block', width: '150px'}}>
            <Select placeholder="選擇輔助選項.." style={{ width: '150px', textAlign: 'center'}}>
              <Option></Option>
            </Select>
          </div> */}
          {/* 部分機台 */}
          {/* <div id="level3-sub-part" style={{display: 'none', width: '150px'}}>
            <Select placeholder="選擇輔助選項.." onChange={()=>{this.flag |= 256;this.level3_sub_part_flag = 1;}} style={{ width: '150px', textAlign: 'center' }}>
              <Option value={0}>UF3000</Option>
              <Option value={1}>OPUS</Option>
            </Select>
          </div> */}
          {/* 單一機台 */}
          {/* <div id="level3-sub-single" style={{display: 'none', width: '150px'}}>
            <Select placeholder="選擇輔助選項.." onChange={()=>{this.flag |= 256;this.level3_sub_single_flag = 1;}} style={{ width: '150px', textAlign: 'center' }}>
              <Option value={0}>DX01</Option>
              <Option value={1}>DX02</Option>
              <Option value={2}>DX03</Option>
              <Option value={3}>DX04</Option>
              <Option value={4}>DX05</Option>
              <Option value={5}>DX06</Option>
              <Option value={6}>DX07</Option>
              <Option value={7}>DX08</Option>
              <Option value={8}>DX09</Option>
              <Option value={9}>DX10</Option>
              <Option value={10}>DX11</Option>
              <Option value={11}>DX12</Option>
              <Option value={12}>DX13</Option>
              <Option value={13}>DX14</Option>
              <Option value={14}>DX15</Option>
              <Option value={15}>DX16</Option>
              <Option value={16}>DX17</Option>
              <Option value={17}>DX18</Option>
              <Option value={18}>DX19</Option>
              <Option value={19}>DX20</Option>
              <Option value={20}>DX21</Option>
              <Option value={21}>DX22</Option>
              <Option value={22}>DX23</Option>
              <Option value={23}>DX24</Option>
              <Option value={24}>DX25</Option>
              <Option value={25}>DX26</Option>
              <Option value={26}>DX27</Option>
              <Option value={27}>DX28</Option>
              <Option value={28}>DX29</Option>
              <Option value={29}>DX30</Option>
              <Option value={30}>DX31</Option>
              <Option value={31}>DX32</Option>
              <Option value={32}>DX33</Option>
              <Option value={33}>DX34</Option>
              <Option value={34}>DX35</Option>
              <Option value={35}>DX36</Option>
              <Option value={36}>DX37</Option>
              <Option value={37}>DX38</Option>
              <Option value={38}>DX39</Option>
              <Option value={39}>DX40</Option>
              <Option value={40}>DX41</Option>
              <Option value={41}>DX42</Option>
              <Option value={42}>DX43</Option>
              <Option value={43}>DX44</Option>
              <Option value={44}>DX45</Option>
              <Option value={45}>DX46</Option>
              <Option value={46}>DX47</Option>
              <Option value={47}>DX48</Option>
              <Option value={48}>DX49</Option>
              <Option value={49}>DX50</Option>
              <Option value={50}>DX51</Option>
              <Option value={51}>DX52</Option>
              <Option value={52}>DX53</Option>
              <Option value={53}>DX54</Option>
              <Option value={54}>DX55</Option>
              <Option value={55}>DX56</Option>
              <Option value={56}>DX57</Option>
              <Option value={57}>DX58</Option>
              <Option value={58}>DX59</Option>
              <Option value={59}>DX60</Option>
              <Option value={60}>DX61</Option>
              <Option value={61}>DX62</Option>
              <Option value={62}>DX63</Option>
              <Option value={63}>DX64</Option>
              <Option value={64}>DX65</Option>
              <Option value={65}>DX66</Option>
              <Option value={66}>DX67</Option>
              <Option value={67}>DX68</Option>
              <Option value={68}>DX69</Option>
              <Option value={69}>DX70</Option>
              <Option value={70}>DX71</Option>
              <Option value={71}>DX72</Option>
              <Option value={72}>DX73</Option>
              <Option value={73}>DX74</Option>
              <Option value={74}>DX75</Option>
              <Option value={75}>DX76</Option>
              <Option value={76}>DX77</Option>
              <Option value={77}>DX78</Option>
              <Option value={78}>DX79</Option>
              <Option value={79}>DX80</Option>
              <Option value={80}>DX81</Option>
              <Option value={81}>DX82</Option>
              <Option value={82}>DX83</Option>
              <Option value={83}>DX84</Option>
              <Option value={84}>DX85</Option>
              <Option value={85}>DX86</Option>
              <Option value={86}>DX87</Option>
              <Option value={87}>DX88</Option>
              <Option value={88}>DX89</Option>
              <Option value={89}>DX90</Option>
              <Option value={90}>DX91</Option>
              <Option value={91}>DX92</Option>
              <Option value={92}>DX93</Option>
              <Option value={93}>DX94</Option>
              <Option value={94}>DX95</Option>
              <Option value={95}>DX96</Option>
              <Option value={96}>DX97</Option>
              <Option value={97}>DX98</Option>
              <Option value={98}>DX99</Option>
              <Option value={99}>DX100</Option>
              <Option value={100}>DX101</Option>
              <Option value={101}>DX102</Option>
              <Option value={102}>DX103</Option>
              <Option value={103}>DX104</Option>
              <Option value={104}>DX105</Option>
              <Option value={105}>DX106</Option>
            </Select>
          </div> */}
        {/* </div> */}
        &emsp;
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><DatabaseOutlined /> 報表選項</div>
          <Cascader options={this.optionsperiod} onChange={this.level3relatedperiod} placeholder="選擇報表選項.." style={{ width: '150px', textAlign: 'center' }} allowClear={false} />
          {/*  */}
          {/* <Select placeholder="選擇報表選項.." onChange={this.level3relatedperiod} style={{ width: '150px', textAlign: 'center' }}>
            <Option value={0}>班</Option>
            <Option value={1}>日</Option>
            <Option value={2}>週</Option>
            <Option value={3}>月</Option>
            <Option value={4}>季</Option>
          </Select> */}
        </div>
        &emsp;
        <div style={{display: 'inline-block'}}>
          <div className="contentListTitle-title"><CalendarOutlined /> 報表截止日期</div>
          <div id="level3-period-default" style={{display: 'inline-block', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level3-period-day" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level3-period-week" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="week" placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level3-period-month" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="month" placeholder="選擇截止日期.."/>
            </Space>
          </div>
          <div id="level3-period-quarter" style={{display: 'none', width: '150px'}}>
            <Space>
              <DatePicker onChange={this.onChange} picker="quarter" placeholder="選擇截止日期.."/>
            </Space>
          </div>
        </div>
        &emsp;
        <Button type="primary" onClick={this.checkOption}>產生報表</Button>
        <Button style={{marginLeft: '10px'}} onClick={this.reset2}>重置</Button>
        <br /><br />
        {/*  */}
        <div id="periodanalysis-content-table" style={{display: "none", width: "100%", border: "5px double #ccc"}}>
          <Descriptions bordered>
            <Descriptions.Item label="分析類別:">警報訊號MTTA</Descriptions.Item>
            <Descriptions.Item label="設備篩選:">部分機台/OPUS</Descriptions.Item>
            <Descriptions.Item label="報表類型:">月報</Descriptions.Item>
            <Descriptions.Item label="時間區間:">2021-Jan ~ 2021-Jun</Descriptions.Item>
          </Descriptions>
          <div>
            <Card className="rcmeffectiveness-table">
                <Table style={{marginBottom: '10px'}}
                  bordered 
                  columns={columns3} 
                  dataSource={data3} 
                  pagination={false}
                />
                <Button type="primary" style={{float: 'right', marginLeft: '10px'}}>匯出Excel</Button>
            </Card>
            <Card>
              <RcmeffectivenessPlatoChart />
              <br />
              <Button type="primary" style={{float: 'right'}}>匯出圖檔</Button>
            </Card>
          </div>
        </div>
      </div>
    )
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
    return (
      <div className="ant-content-children">
        <Card id="rcmeffectiveness-card-content"
          style={{ width: "100%", backgroundColor: ''}}
          tabList={this.tabListTitle}
          // activeTabKey={this.state.TitleKey}
          // tabBarExtraContent={<Button>重置</Button>}
          onTabChange={(key) => {
            this.onTabChange(key);
          }}
        >
          {this.contentListTitle.trendanalysis}
          {this.contentListTitle.rankanalysis}
          {this.contentListTitle.periodanalysis}
        </Card>
        <br />
        {/* <div>
          <Descriptions bordered>
            <Descriptions.Item label="分析類別:">設備利用率/待機率/警報率/關機率</Descriptions.Item>
            <Descriptions.Item label="報表類型:">日報</Descriptions.Item>
            <Descriptions.Item label="時間區間:">2021/03/01 ~ 2021/03/07</Descriptions.Item>
          </Descriptions>
          <div id="">
            <Card className="rcmeffectiveness-table">
                <Table style={{marginBottom: '10px'}}
                  bordered 
                  columns={this.columns} 
                  dataSource={this.data} 
                  pagination={false}
                />
                <Button type="primary" style={{float: 'right', marginLeft: '10px'}}>匯出Excel</Button>
            </Card>
            <Card>
              <RcmeffectivenessDualAxes />
              <Button type="primary" style={{float: 'right'}}>匯出圖檔</Button>
            </Card>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Rcmeffectiveness;