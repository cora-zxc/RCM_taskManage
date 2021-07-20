import React from "react";
import { Layout, Table, Button, Input, PageHeader, Card, Col, Row, Typography, Space, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";
import './Opmanualschedule.css';
// 下載excel
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const { RangePicker } = DatePicker;
const { Text } = Typography

class Opmanualschedule extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchText: "",
        searchedColumn: ""
      };
    }
    // 下載excel
    downloadxlsx(filename, sheetname, data) {
      //儲存xlsx檔

      //參數
      //filename為要下載儲存之xlsx檔名，，sheetname為資料表名，data為要下載之資料，需為二維陣列。以下為使用範例：
      //var filename = 'download.xlsx';
      //var sheetname = 'test';
      //var data = [
      //    ['name', 'number', 'date'],
      //    ['abc', 1, new Date().toLocaleString()],
      //    ['def', 123.456, new Date('2015-03-25T13:30:12Z')],
      //];
      //downloadxlsx(filename, sheetname, data);

      //說明
      //所使用函式可參考js-xlsx的GitHub文件[https://github.com/SheetJS/js-xlsx]


      //datenum
      function datenum(v, date1904) {
          if (date1904) v += 1462;
          var epoch = Date.parse(v);
          return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
      }


      //sheet_from_array_of_arrays
      function sheet_from_array_of_arrays(data, opts) {
          var ws = {};
          var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
          for (var R = 0; R != data.length; ++R) {
              for (var C = 0; C != data[R].length; ++C) {
                  if (range.s.r > R) range.s.r = R;
                  if (range.s.c > C) range.s.c = C;
                  if (range.e.r < R) range.e.r = R;
                  if (range.e.c < C) range.e.c = C;
                  var cell = { v: data[R][C] };
                  if (cell.v == null) continue;
                  var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

                  if (typeof cell.v === 'number') cell.t = 'n';
                  else if (typeof cell.v === 'boolean') cell.t = 'b';
                  else if (cell.v instanceof Date) {
                      cell.t = 'n'; cell.z = XLSX.SSF._table[14];
                      cell.v = datenum(cell.v);
                  }
                  else cell.t = 's';

                  ws[cell_ref] = cell;
              }
          }
          if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
          return ws;
      }


      //s2ab
      function s2ab(s) {
          var buf = new ArrayBuffer(s.length);
          var view = new Uint8Array(buf);
          for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
      }


      //Workbook
      function Workbook() {
          if (!(this instanceof Workbook)) return new Workbook();
          this.SheetNames = [];
          this.Sheets = {};
      }


      //write
      var wb = new Workbook();
      var ws = sheet_from_array_of_arrays(data);
      wb.SheetNames.push(sheetname);
      wb.Sheets[sheetname] = ws;
      var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });


      //saveAs
      saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), filename)


  }
    downloadAsExcel = () => {
      //檔名
      var filename = 'download.xlsx';
      //表名
      var sheetname = 'test';
      //測試資料
      var data = [
          ['name', 'number', 'date'],
          ['abc', 1, new Date().toLocaleString()],
          ['def', 123.456, new Date('2015-03-25T13:30:12Z')],
      ];
      //下載
      this.downloadxlsx(filename, sheetname, data);
    };
    // ---下載excel

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters
        }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={(node) => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() =>
                this.handleSearch(selectedKeys, confirm, dataIndex)
              }
              style={{ marginBottom: 8, display: "block" }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button
                onClick={() => this.handleReset(clearFilters)}
                size="small"
                style={{ width: 90 }}
              >
                Reset
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
            : "",
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => this.searchInput.select(), 100);
          }
        },
        render: (text) =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ""}
            />
          ) : (
            text
          )
    });
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex
        });
    };
    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: "" });
    };
    render() {
      this.columns = [
        {
            title: '更新時間',
            dataIndex: "updatetime",
            key: "updatetime",
            width: 200,
            ...this.getColumnSearchProps("updatetime"),
            // sorter: (a, b) => a.deviceid.length - b.deviceid.length,
            // sortDirections: ["descend", "ascend"]
        },
        {
            title: '使用者名稱',
            dataIndex: "username",
            key: "username",
            width: 120,
            ...this.getColumnSearchProps("username"),
            // sorter: (a, b) => a.analysis.length - b.analysis.length,
            // sortDirections: ["descend", "ascend"]
        },
        {
            title: '群組',
            dataIndex: "group",
            key: "group",
            width: 100,
            ...this.getColumnSearchProps("group"),
            // sorter: (a, b) => a.analysis.length - b.analysis.length,
            // sortDirections: ["descend", "ascend"]
        },
        {
            title: '機台編號',
            dataIndex: "machineid",
            key: "machineid",
            width: 120,
            ...this.getColumnSearchProps("machineid"),
            // sorter: (a, b) => a.analysis.length - b.analysis.length,
            // sortDirections: ["descend", "ascend"]
        },
        {
            title: '生產批號',
            dataIndex: "lotid",
            key: "lotid",
            width: 150,
            ...this.getColumnSearchProps("lotid"),
            // sorter: (a, b) => a.analysis.length - b.analysis.length,
            // sortDirections: ["descend", "ascend"]
        },
        {
            title: '項次',
            dataIndex: "item",
            key: "item",
            width: 100,
            ...this.getColumnSearchProps("item"),
            // sorter: (a, b) => a.analysis.length - b.analysis.length,
            // sortDirections: ["descend", "ascend"]
        },
        {
            title: '排程原因',
            dataIndex: "reason",
            key: "reason",
            width: 150,
            ...this.getColumnSearchProps("reason"),
            // sorter: (a, b) => a.analysis.length - b.analysis.length,
            // sortDirections: ["descend", "ascend"]
        },
        {
            title: '操作',
            dataIndex: "action",
            key: "action",
            width: 150,
            ...this.getColumnSearchProps("action"),
            // sorter: (a, b) => a.analysis.length - b.analysis.length,
            // sortDirections: ["descend", "ascend"]
        },
      ]
      this.data = [
        {
          key: 1,
          updatetime: "2021/07/06 10:20",
          username: "xxx",
          group: "op",
          machineid: "DX01",
          lotid: "HL1290106x",
          item: "1",
          reason: "工程用",
          action: "調動程序"
        },
        {
          key: 2,
          updatetime: "2021/07/06 11:20",
          username: "xxx",
          group: "op",
          machineid: "DX02",
          lotid: "HL1290106x",
          item: "1",
          reason: "共測",
          action: "新增"
        },
        {
          key: 3,
          updatetime: "2021/07/06 12:20",
          username: "xxx",
          group: "op",
          machineid: "DX03",
          lotid: "HL1290106x",
          item: "1",
          reason: "機台狀況",
          action: "刪除"
        },
        {
          key: 4,
          updatetime: "2021/07/06 13:20",
          username: "xxx",
          group: "op",
          machineid: "DX04",
          lotid: "HL1290106x",
          item: "1",
          reason: "機台保養",
          action: "刪除"
        }
      ]
      return (
        <div>
            <Card>
                <Row gutter={[24, 24]} justify="left">
                    <Col xs={24} sm={12} md={8} lg={8} xl={6}>
                        <Text>時間區間: </Text>
                        <RangePicker/>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={6}>
                        <Text>生產批號: </Text>
                        <Input placeholder="請輸入生產批號.." allowClear/>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={4}>
                        <br />
                        <Button type='primary' icon={<SearchOutlined />}>搜尋</Button>
                    </Col>
                </Row>
            </Card>
            <Card className="tableoverflow" >
                <Table 
                    bordered 
                    columns={this.columns} 
                    dataSource={this.data} 
                    pagination={true}
                    scroll={{x: 100 }}
                />
                <Button onClick={this.downloadAsExcel}>test下載excel</Button>
            </Card>
        </div>
        
      )
    }
  }
  
  export default Opmanualschedule;