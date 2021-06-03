import { sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import ManuallyEdit from './ManuallyEdit';

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

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
class Metadata{
	constructor(title,dataIndex,className,render){
		this.title = title;
		this.dataIndex = dataIndex;
		this.className = className;
        this.render = render;
	}
}
function changeOrderStatus(event){
	event.target.parentNode.parentNode.nextSibling.textContent = "已派工";
	event.target.parentNode.parentNode.nextSibling.style.color = "blue";
}
export function getExcel(excel){
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
function changeToDeleteStatus (event){
    var status = window.confirm("確定要刪除嗎？");
    if(status){
        event.target.parentNode.parentNode.nextSibling.textContent = "已刪除";
        event.target.parentNode.parentNode.nextSibling.style.color = "red";
        event.target.disabled=true;
        event.target.previousSibling.disabled=true;
        event.target.nextSibling.lastChild.disabled=true;
    }
    //console.log(event);
}

export function getMetadate(){
	var data = [];
	data.push(new Metadata('拖拉','sort','drag-visible',() => <DragHandle />));
	data.push(new Metadata('任務編號','taskId','drag-visible'));
	data.push(new Metadata('生產批號','produceBatchNo'));
	data.push(new Metadata('產品型號','productModelNo'));
	data.push(new Metadata('現況數量','currentQuantity'));
	data.push(new Metadata('機台位置','machinePosition'));
	data.push(new Metadata('操作','action','',() => 
        <div>
            <button
                className="ant-btn"
                type="button"
                onClick={changeOrderStatus} >
                派
            </button> 
            <button
                className="ant-btn"
                type="button"
                onClick={changeToDeleteStatus} >
                刪
            </button>
            <ManuallyEdit />
        </div>
    ));
	data.push(new Metadata('派工狀態','currentStatus'));
	data.push(new Metadata('e-Rack櫃位(待測)','eRackPositionNotTested'));
	data.push(new Metadata('e-Rack櫃位(已測)','eRackPositionTested'));
	data.push(new Metadata('優先序','pv'));
	return data;
}