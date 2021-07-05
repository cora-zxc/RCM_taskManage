import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import './App.css';

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    item: i+1,
    machinenumber: 'DX'+ (i+1),
    machinetype: 'UF3000',
    rcmip:`192.168.1. ${i}`,
    rcmport: '8001',
    lightip: `92.168.2. ${i}`,
    lightport: '8000',
  });
}


const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
};

const EditableTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
  
    const edit = (record) => {
      form.setFieldsValue({
        item: '',
        machinenumber: '',
        machinetype: '',
        rcmip: '',
        rcmport: '',
        lightip: '',
        lightport: '',
        ...record,
      });
      setEditingKey(record.key);
    };
  
    const cancel = () => {
      setEditingKey('');
    };
  
    const save = async (key) => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
  
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...row });
          setData(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    };
  
    const columns = [
        {
            title: '項次',
            dataIndex: 'item',
            width: '5%',
            editable: false,
        },
        {
            title: '機台編號',
            dataIndex: 'machinenumber',
            width: '10%',
            editable: true,
        },
        {
            title: '機台類型',
            dataIndex: 'machinetype',
            width: '10%',
            editable: true,
        },
        {
            title: 'RCM IP',
            dataIndex: 'rcmip',
            width: '20%',
            editable: true,
        },
        {
            title: 'RCM Port',
            dataIndex: 'rcmport',
            width: '10%',
            editable: true,
        },
        {
            title: '三色燈IP',
            dataIndex: 'lightip',
            width: '20%',
            editable: true,
        },
        {
            title: '三色燈Port',
            dataIndex: 'lightport',
            width: '10%',
            editable: true,
        },
        {
            title: '編輯',
            dataIndex: 'edit',
            width: '15%',
            render: (_, record) => {
            const editable = isEditing(record);
            return editable ? (
                <span>
                <a
                    // href="javascript:;"
                    onClick={() => save(record.key)}
                    style={{
                    marginRight: 8,
                    }}
                >
                    Save
                </a>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                    <a>Cancel</a>
                </Popconfirm>
                </span>
            ) : (
                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                Edit
                </Typography.Link>
            );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          // inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    return (
      <Form form={form} component={false}>
        <Table 
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered={true}
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
};


// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//       };
//     }
//     EditableCell = ({
//         editing,
//         dataIndex,
//         title,
//         inputType,
//         record,
//         index,
//         children,
//         ...restProps
//       }) => {
//         const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//         return (
//           <td {...restProps}>
//             {editing ? (
//               <Form.Item
//                 name={dataIndex}
//                 style={{
//                   margin: 0,
//                 }}
//                 rules={[
//                   {
//                     required: true,
//                     message: `Please Input ${title}!`,
//                   },
//                 ]}
//               >
//                 {inputNode}
//               </Form.Item>
//             ) : (
//               children
//             )}
//           </td>
//         );
//     };
//     render() {
//       return ( 
//         <div className="ant-content-children">
//             <Form form={form} component={false}>
//                 <Table
//                 components={{
//                     body: {
//                     cell: this.EditableCell,
//                     },
//                 }}
//                 bordered={true}
//                 dataSource={data}
//                 columns={mergedColumns}
//                 rowClassName="editable-row"
//                 pagination={{
//                     onChange: cancel,
//                 }}
//                 />
//             </Form>
//         </div>
//       )
//     }
//   }
  
export default EditableTable;
// export default App;