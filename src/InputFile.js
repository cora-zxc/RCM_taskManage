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
        class MachineInfo{
            constructor(index,taskId,produceBatchNo,productModelNo,currentQuantity,machinePosition){
              this.index = index;
              this.taskId = taskId;
              this.produceBatchNo = produceBatchNo;
              this.productModelNo = productModelNo;
              this.currentQuantity = currentQuantity;
              this.machinePosition = machinePosition;
            }
            key = '';
            action = '';
            currentStatus = '未派工';
            eRackPositionNotTested = '';
            eRackPositionTested = '';
            pv= '50';
        }
		var data = [];
		let date = new Date();
		var y = date.getFullYear().toString();
		var m = (date.getMonth()+1).toString();
			if( date.getMonth()+1 <10){
				m = "0" + m;
			}
		var d = date.getDate().toString();
		var i = 0,j,k,count = 0,task_id,batchNo,type,num,machine_position;
		for(;excel.length > i; ++i){
			if(excel[i].hasOwnProperty('矽格股份有限公司')){
				if(excel[i]['矽格股份有限公司'].hasOwnProperty('length')){  
					if(excel[i]['矽格股份有限公司'].indexOf('DX-') > -1){
						machine_position = excel[i]['矽格股份有限公司'];
						for(j = i + 2,k = 0;4 > k && excel.length > j && excel[j].hasOwnProperty('__EMPTY_2');++j,++k){
							task_id =  y + m + d + excel[j].__EMPTY_2;
							batchNo = excel[j].__EMPTY_2;
							type = excel[j].__EMPTY_4;
							num = excel[j].__EMPTY_7;
							data[count] = new MachineInfo(count,task_id,batchNo,type,num,machine_position);
							++count;
						}
						if(excel[i].hasOwnProperty('__EMPTY_12')){
							machine_position = excel[i].__EMPTY_12;
							for(j = i + 2,k = 0;4 > k && excel.length > j && excel[j].hasOwnProperty('__EMPTY_15');++j,++k){
								task_id =  y + m + d + excel[j].__EMPTY_15;
								batchNo = excel[j].__EMPTY_15;
								type = excel[j].__EMPTY_17;
								num = excel[j].__EMPTY_20;
								data[count] = new MachineInfo(count,task_id,batchNo,type,num,machine_position);
								++count;
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
                //
                var exceldata = this.getExcel(excel);
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
                    <Button className="extractButton" type="primary">{this.props.name}</Button>
                </InputFiles>
            </span>
        );
    };
}
export default InputFile;