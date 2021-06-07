import React from 'react';
import ReactDOM from 'react-dom';
import InputFiles from 'react-input-files';
import XLSX from 'xlsx';
import SortableTable from './SortableTable';
import './index.css';
import ManuallyCreate from './ManuallyCreate';
import { Button } from 'antd';


class InputFile extends React.Component{
    getExcel = (excel) => {
        //8碼日期y+m+d
		let date = new Date();
		var y = date.getFullYear().toString();
		var m = (date.getMonth()+1).toString();
			if(m < 10){
				m = "0" + m;
			}
		var d = date.getDate().toString();
            if (d < 10){
                d = "0" + d ;
            }
        //欄位資料的建構式
        function MachineInfo(index,taskId,produceBatchNo,productModelNo,currentQuantity,machinePosition){
            return{
                index : index,
                taskId : taskId,
                produceBatchNo : produceBatchNo,
                productModelNo : productModelNo,
                currentQuantity : currentQuantity,
                machinePosition : machinePosition,
                key : '',
                action : '',
                currentStatus : '未派工',
                eRackPositionNotTested : '',
                eRackPositionTested : '',
                pv : '50'
            };
        }
        //迴圈取資料
        var data = [];
		var i = 0,j,k;
        var m_index = 0;
        var m_taskId,m_produceBatchNo,m_productModelNo,m_currentQuantity,m_machinePosition;
		for(;excel.length > i; ++i){
			if(excel[i].hasOwnProperty('矽格股份有限公司')){
				if(excel[i]['矽格股份有限公司'].hasOwnProperty('length')){  
					if(excel[i]['矽格股份有限公司'].indexOf('DX-') > -1){
						m_machinePosition = excel[i]['矽格股份有限公司'];
						for(j = i + 2,k = 0;4 > k && excel.length > j && excel[j].hasOwnProperty('__EMPTY_2');++j,++k){
							m_taskId =  y + m + d + excel[j].__EMPTY_2;
							m_produceBatchNo = excel[j].__EMPTY_2;
							m_productModelNo = excel[j].__EMPTY_4;
							m_currentQuantity = excel[j].__EMPTY_7;
							data[m_index] = MachineInfo(m_index,m_taskId,m_produceBatchNo,m_productModelNo,m_currentQuantity,m_machinePosition);
							++m_index;
						}
						if(excel[i].hasOwnProperty('__EMPTY_12')){
							m_machinePosition = excel[i].__EMPTY_12;
							for(j = i + 2,k = 0;4 > k && excel.length > j && excel[j].hasOwnProperty('__EMPTY_15');++j,++k){
								m_taskId =  y + m + d + excel[j].__EMPTY_15;
								m_produceBatchNo = excel[j].__EMPTY_15;
								m_productModelNo = excel[j].__EMPTY_17;
								m_currentQuantity = excel[j].__EMPTY_20;
								data[m_index] = MachineInfo(m_index,m_taskId,m_produceBatchNo,m_productModelNo,m_currentQuantity,m_machinePosition);
								++m_index;
							}
						}
					}
				}
			}
		}
		return data;
	}
    onImportExcel = files => {
        const fileReader = new FileReader();
        for (let index = 0; index < files.length; index++)
            fileReader.name = files[index].name;
        fileReader.onload = event => {
            try {
                const fileExt = event.target.name;
                if (fileExt == null)
                    throw RangeError("檔案為空值");
                const { result } = event.target;
                const workbook = XLSX.read(result, { type: "binary" });
                let excel = [];
                excel = excel.concat(
                    XLSX.utils.sheet_to_json(workbook.Sheets['DX'])
                );
                console.log(excel); //array 461筆
                //
                var exceldata = this.getExcel(excel);
                console.log(exceldata); //array 300筆
                ReactDOM.render(
                    <div></div>, 
                    document.getElementById('root'));
                ReactDOM.render(
                    <div>
                        <InputFiles accept={this.props.accept} onChange={this.onImportExcel}>
                            <Button className="extractButton" type="primary">{this.props.name}</Button>
                        </InputFiles>
                        <ManuallyCreate name="手動新增" />
                        <SortableTable data={exceldata} />
                    </div>, 
                    document.getElementById('root'));
            } catch (e) {
                alert(e);
                return;
            }
        };
        fileReader.readAsBinaryString(files[0]);
    };
    render(){
        return (
            <span>
                <InputFiles accept={this.props.accept} onChange={this.onImportExcel}>
                    <Button className="extractButton" type="primary">
                        {this.props.name}
                    </Button>
                </InputFiles>
            </span>
        );
    };
}
export default InputFile;