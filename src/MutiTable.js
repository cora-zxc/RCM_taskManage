import React from "react";
import { Table } from 'antd';
import './MutiTable.css';
//import Highlighter from "react-highlight-words";
//import { SearchOutlined } from "@ant-design/icons";


class MutiTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
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
          dataIndex: "deviceid",
          key: "deviceid",
          width: 95,
          // ...this.getColumnSearchProps("deviceid"),
          // sorter: (a, b) => a.deviceid.length - b.deviceid.length,
          // sortDirections: ["descend", "ascend"]
        },
        {
          title: '分析',
          dataIndex: "analysis",
          key: "analysis",
          width: 95,
          // ...this.getColumnSearchProps("analysis"),
          // sorter: (a, b) => a.analysis.length - b.analysis.length,
          // sortDirections: ["descend", "ascend"]
        },
      ]
      this.data = [
        {
          key: 1,
          deviceid: "DX01",
          analysis: "95%",
        },
        {
          key: 2,
          deviceid: "DX02",
          analysis: "95%",
        },
        {
          key: 3,
          deviceid: "DX03",
          analysis: "95%",
        },
        {
          key: 4,
          deviceid: "DX04",
          analysis: "95%",
        },
        {
          key: 5,
          deviceid: "DX05",
          analysis: "95%",
        },
        {
          key: 6,
          deviceid: "DX06",
          analysis: "95%",
        },
        {
          key: 7,
          deviceid: "DX07",
          analysis: "95%",
        },
        {
          key: 8,
          deviceid: "DX08",
          analysis: "95%",
        },
        {
          key: 9,
          deviceid: "DX09",
          analysis: "95%",
        },
        {
          key: 10,
          deviceid: "DX10",
          analysis: "95%",
        },
        {
            key: 11,
            deviceid: "DX11",
            analysis: "95%",
          },
          {
            key:12,
            deviceid: "DX12",
            analysis: "95%",
          },
          {
            key: 13,
            deviceid: "DX13",
            analysis: "95%",
          },
          {
            key: 14,
            deviceid: "DX14",
            analysis: "95%",
          },
          {
            key: 15,
            deviceid: "DX15",
            analysis: "95%",
          },
          {
            key: 16,
            deviceid: "DX16",
            analysis: "95%",
          },
          {
            key: 17,
            deviceid: "DX17",
            analysis: "95%",
          },
          {
            key: 18,
            deviceid: "DX18",
            analysis: "95%",
          },
          {
            key: 19,
            deviceid: "DX19",
            analysis: "95%",
          },
          {
            key: 20,
            deviceid: "DX20",
            analysis: "95%",
          },
          {
            key: 21,
            deviceid: "DX21",
            analysis: "95%",
          },
          {
            key:22,
            deviceid: "DX22",
            analysis: "95%",
          },
          {
            key: 23,
            deviceid: "DX23",
            analysis: "95%",
          },
          {
            key: 24,
            deviceid: "DX24",
            analysis: "95%",
          },
          {
            key: 25,
            deviceid: "DX25",
            analysis: "95%",
          },
          {
            key: 26,
            deviceid: "DX26",
            analysis: "95%",
          },
          {
            key: 27,
            deviceid: "DX27",
            analysis: "95%",
          },
          {
            key: 28,
            deviceid: "DX28",
            analysis: "95%",
          },
          {
            key: 29,
            deviceid: "DX29",
            analysis: "95%",
          },
          {
            key: 30,
            deviceid: "DX30",
            analysis: "95%",
          },
          {
            key: 31,
            deviceid: "DX31",
            analysis: "95%",
          },
          {
            key:32,
            deviceid: "DX32",
            analysis: "95%",
          },
          {
            key: 33,
            deviceid: "DX33",
            analysis: "95%",
          },
          {
            key: 34,
            deviceid: "DX34",
            analysis: "95%",
          },
          {
            key: 35,
            deviceid: "DX35",
            analysis: "95%",
          },
          {
            key: 36,
            deviceid: "DX36",
            analysis: "95%",
          },
          {
            key: 37,
            deviceid: "DX37",
            analysis: "95%",
          },
          {
            key: 38,
            deviceid: "DX38",
            analysis: "95%",
          },
          {
            key: 39,
            deviceid: "DX39",
            analysis: "95%",
          },
          {
            key: 40,
            deviceid: "DX40",
            analysis: "95%",
          },
          {
            key: 41,
            deviceid: "DX41",
            analysis: "95%",
          },
          {
            key:42,
            deviceid: "DX42",
            analysis: "95%",
          },
          {
            key: 43,
            deviceid: "DX43",
            analysis: "95%",
          },
          {
            key: 44,
            deviceid: "DX44",
            analysis: "95%",
          },
          {
            key: 45,
            deviceid: "DX45",
            analysis: "95%",
          },
          {
            key: 46,
            deviceid: "DX46",
            analysis: "95%",
          },
          {
            key: 47,
            deviceid: "DX47",
            analysis: "95%",
          },
          {
            key: 48,
            deviceid: "DX48",
            analysis: "95%",
          },
          {
            key: 49,
            deviceid: "DX49",
            analysis: "95%",
          },
          {
            key: 50,
            deviceid: "DX50",
            analysis: "95%",
          },
          {
            key: 51,
            deviceid: "DX51",
            analysis: "95%",
          },
          {
            key:52,
            deviceid: "DX52",
            analysis: "95%",
          },
          {
            key: 53,
            deviceid: "DX53",
            analysis: "95%",
          },
          {
            key: 54,
            deviceid: "DX54",
            analysis: "95%",
          },
          {
            key: 55,
            deviceid: "DX55",
            analysis: "95%",
          },
          {
            key: 56,
            deviceid: "DX56",
            analysis: "95%",
          },
          {
            key: 57,
            deviceid: "DX57",
            analysis: "95%",
          },
          {
            key: 58,
            deviceid: "DX58",
            analysis: "95%",
          },
          {
            key: 59,
            deviceid: "DX59",
            analysis: "95%",
          },
          {
            key: 60,
            deviceid: "DX60",
            analysis: "95%",
          },
          {
            key: 61,
            deviceid: "DX61",
            analysis: "95%",
          },
          {
            key:62,
            deviceid: "DX62",
            analysis: "95%",
          },
          {
            key: 63,
            deviceid: "DX63",
            analysis: "95%",
          },
          {
            key: 64,
            deviceid: "DX64",
            analysis: "95%",
          },
          {
            key: 65,
            deviceid: "DX65",
            analysis: "95%",
          },
          {
            key: 66,
            deviceid: "DX66",
            analysis: "95%",
          },
          {
            key: 67,
            deviceid: "DX67",
            analysis: "95%",
          },
          {
            key: 68,
            deviceid: "DX68",
            analysis: "95%",
          },
          {
            key: 69,
            deviceid: "DX69",
            analysis: "95%",
          },
          {
            key: 70,
            deviceid: "DX70",
            analysis: "95%",
          },
          {
            key: 71,
            deviceid: "DX71",
            analysis: "95%",
          },
          {
            key:72,
            deviceid: "DX72",
            analysis: "95%",
          },
          {
            key: 73,
            deviceid: "DX73",
            analysis: "95%",
          },
          {
            key: 74,
            deviceid: "DX74",
            analysis: "95%",
          },
          {
            key: 75,
            deviceid: "DX75",
            analysis: "95%",
          },
          {
            key: 76,
            deviceid: "DX76",
            analysis: "95%",
          },
          {
            key: 77,
            deviceid: "DX77",
            analysis: "95%",
          },
          {
            key: 78,
            deviceid: "DX78",
            analysis: "95%",
          },
          {
            key: 79,
            deviceid: "DX79",
            analysis: "95%",
          },
          {
            key: 80,
            deviceid: "DX80",
            analysis: "95%",
          },
          {
            key: 81,
            deviceid: "DX81",
            analysis: "95%",
          },
          {
            key:82,
            deviceid: "DX82",
            analysis: "95%",
          },
          {
            key: 83,
            deviceid: "DX83",
            analysis: "95%",
          },
          {
            key: 84,
            deviceid: "DX84",
            analysis: "95%",
          },
          {
            key: 85,
            deviceid: "DX85",
            analysis: "95%",
          },
          {
            key: 86,
            deviceid: "DX86",
            analysis: "95%",
          },
          {
            key: 87,
            deviceid: "DX87",
            analysis: "95%",
          },
          {
            key: 88,
            deviceid: "DX88",
            analysis: "95%",
          },
          {
            key: 89,
            deviceid: "DX89",
            analysis: "95%",
          },
          {
            key: 90,
            deviceid: "DX90",
            analysis: "95%",
          },
          {
            key: 91,
            deviceid: "DX91",
            analysis: "95%",
          },
          {
            key:92,
            deviceid: "DX92",
            analysis: "95%",
          },
          {
            key: 93,
            deviceid: "DX93",
            analysis: "95%",
          },
          {
            key: 94,
            deviceid: "DX94",
            analysis: "95%",
          },
          {
            key: 95,
            deviceid: "DX95",
            analysis: "95%",
          },
          {
            key: 96,
            deviceid: "DX96",
            analysis: "95%",
          },
          {
            key: 97,
            deviceid: "DX97",
            analysis: "95%",
          },
          {
            key: 98,
            deviceid: "DX98",
            analysis: "95%",
          },
          {
            key: 99,
            deviceid: "DX99",
            analysis: "95%",
          },
          {
            key: 100,
            deviceid: "DX100",
            analysis: "95%",
          },
          {
            key: 101,
            deviceid: "DX101",
            analysis: "95%",
          },
          {
            key:102,
            deviceid: "DX102",
            analysis: "95%",
          },
          {
            key: 103,
            deviceid: "DX103",
            analysis: "95%",
          },
          {
            key: 104,
            deviceid: "DX104",
            analysis: "95%",
          },
          {
            key: 105,
            deviceid: "DX105",
            analysis: "95%",
          },
          {
            key: 106,
            deviceid: "DX106",
            analysis: "95%",
          }
      ]
      return (
        <div>
            <div className='mutitable-content'>
                <Table bordered columns={this.columns} dataSource={this.data.slice(0,22)} pagination={false}/>
                <Table bordered columns={this.columns} dataSource={this.data.slice(22,44)} pagination={false}/>
                <Table bordered columns={this.columns} dataSource={this.data.slice(44,66)} pagination={false}/>
                <Table bordered columns={this.columns} dataSource={this.data.slice(66,88)} pagination={false}/>
                <Table bordered columns={this.columns} dataSource={this.data.slice(88,110)} pagination={false}/>
            </div>
        </div>
        
      )
    }
  }
  
  export default MutiTable;