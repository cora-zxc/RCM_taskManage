import React from 'react';
import ReactDOM from 'react-dom';
import InputFiles from 'react-input-files';
import XLSX from 'xlsx';
import SortableTable from './SortableTable';
import * as script from './Script.js';
import './index.css';
import ManuallyCreate from './ManuallyCreate';
import { Button } from 'antd';


class InputFile extends React.Component{
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
                var exceldata = script.getExcel(excel);
                var metadata = script.getMetadate();
                ReactDOM.render(
                    <div>
                    </div>, 
                    document.getElementById('root'));
                ReactDOM.render(
                    <div>
                        <InputFiles accept={this.props.accept} onChange={this.onImportExcel}>
                            <Button className="extractButton" type="primary">{this.props.name}</Button>
                        </InputFiles>
                        <ManuallyCreate name="手動新增" />
                        <SortableTable columns={metadata} data={exceldata} />
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