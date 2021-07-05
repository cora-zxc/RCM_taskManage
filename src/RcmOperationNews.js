import React from "react";
import { Card, Col, Row} from 'antd';
import './RcmOperationNews.css';
//konva
import { Stage, Layer, Rect, Text, Line } from "react-konva";



class Rcmoperationnews extends React.Component {
  static propTypes = {
  }
  constructor(props) {
    super(props);
    this.data=[];
    this.state = {
    };
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    this.data =[
      {
        machinenumber:"DX01", 
        machinestatus:["running", "idle", "alarm", "shutdown"],
        sign:["green","yellow","red","grey"],
        starttime:["", "", "",""],
        endtime:["", "", "",""],
      },
      {
        machinenumber:"DX02", 
        machinestatus:["running", "idle", "alarm", "shutdown", "idle"],
        sign:["green","yellow","red","grey","yellow"],
        starttime:["", "", "","",""],
        endtime:["", "", "","",""],
      },
      {
        machinenumber:"DX03", 
        machinestatus:["running", "idle", "alarm", "shutdown", "idle"],
        sign:["green","yellow","red","grey","yellow"],
        starttime:["", "", "","",""],
        endtime:["", "", "","",""],
      }
    ];
    return ( 
      <div className="ant-content-children">
        {/* {this.test} */}
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text={this.data[0].machinenumber} fontSize={15} x={50} y={60} />
            <Rect x={100} width={210} y={50} height={30} fill={this.data[0].sign[0]} />
            <Rect x={310} width={270} y={50} height={30} fill={this.data[0].sign[1]} />
            <Rect x={580} width={40} y={50} height={30} fill={this.data[0].sign[2]} />
            <Rect x={620} width={280} y={50} height={30} fill={this.data[0].sign[3]} />
          </Layer>
          <Layer>
            <Text text={this.data[1].machinenumber} fontSize={15} x={50} y={110} />
            <Rect x={100} width={80} y={100} height={30} fill={this.data[1].sign[0]} />
            <Rect x={180} width={240} y={100} height={30} fill={this.data[1].sign[1]} />
            <Rect x={420} width={180} y={100} height={30} fill={this.data[1].sign[2]} />
            <Rect x={600} width={140} y={100} height={30} fill={this.data[1].sign[3]} />
            <Rect x={740} width={160} y={100} height={30} fill={this.data[1].sign[4]} />
          </Layer>
          <Layer>
            <Text text={this.data[2].machinenumber} fontSize={15} x={50} y={160} />
            <Rect x={100} width={100} y={150} height={30} fill={this.data[2].sign[0]} />
            <Rect x={200} width={150} y={150} height={30} fill={this.data[2].sign[1]} />
            <Rect x={350} width={200} y={150} height={30} fill={this.data[2].sign[2]} />
            <Rect x={550} width={300} y={150} height={30} fill={this.data[2].sign[3]} />
            <Rect x={850} width={50} y={150} height={30} fill={this.data[2].sign[4]} />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Rcmoperationnews;