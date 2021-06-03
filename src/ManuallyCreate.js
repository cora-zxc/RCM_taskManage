import React from 'react';
import './index.css';
import { Modal, Form, Input, Radio, Select, InputNumber } from 'antd';
import { Button } from 'antd';
import { useState } from 'react';

const ManuallyCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="手動新增任務"
      okText="新增"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }
    }
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="package"
          label="Package"
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="customNo"
          label="客戶代碼"
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="produceBatchNo"
          label="生產批號"
          rules={[
            {
              required: true,
              message: '必填欄位',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="workPosition"
          label="作業站"
          rules={[
            {
              required: true,
              message: '必填欄位',
            },
          ]}
        >
          <Select>
            <Select.Option value="cp1">CP1</Select.Option>
            <Select.Option value="cp2">CP2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="productModelNo"
          label="產品型號"
          rules={[
            {
              required: true,
              message: '必填欄位',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="uph"
          label="UPH"
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name="remark" 
          label="Remark">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="currentQuantity"
          label="現況數量"
          rules={[
            {
              required: true,
              message: '必填欄位',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="productSituation"
          label="貨批狀況"
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ifIncludePb"
          label="有無鉛"
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="yes">Y</Radio>
            <Radio value="no">N</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="bodysize"
          label="Body Size"
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="temperature"
          label="溫度"
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="machinePosition"
          label="機台位置"
          rules={[
            {
              required: true,
              message: '必填欄位',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="priorityValue"
          label="優先序"
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
    
  );
};

const ManuallyCreate = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <span>
      <Button
        className="manuallyCreatButton"
        onClick={() => {
          setVisible(true);
        }}
      >
        手動新增
      </Button>
      <ManuallyCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </span>
  );
};

export default ManuallyCreate;