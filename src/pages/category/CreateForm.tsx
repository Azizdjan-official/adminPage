import React, { useState } from 'react';
import { Button, Form, type FormProps, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import {  Upload } from 'antd';
import { usePostCreateForm } from './service/mutation/usePostCreateForm';
import { useNavigate } from 'react-router-dom';



const CreateForm: React.FC = () => {

  type FieldType = {
    title: string;
    image: any;
  };
  const navigate = useNavigate();
  const {mutate} = usePostCreateForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (data:any) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/app")
        
      }
  })
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   const [fileList, setFileList] = useState<UploadFile[]>();
  const handleChange: UploadProps['onChange'] = (info) => {
      let newFileList = [...info.fileList];
  
      newFileList = newFileList.slice(-2);
  
      newFileList = newFileList.map((file) => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });
  
      setFileList(newFileList);
    };
  
    const props = {
      action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
      onChange: handleChange,
      multiple: false,
    };

    
    
    return (
      <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }}
    initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
    <Form.Item<FieldType> label="Title" name="title"
    rules={[{ required: true, message: 'Please input your username!'}]}>
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="image"
      name="image"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Upload {...props} fileList={fileList}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
    </Form.Item>

    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button className='border bg-cyan-400 text-white '  htmlType="submit">
        Send
      </Button>
    </Form.Item>
  </Form>
    )
}
  


export default CreateForm;