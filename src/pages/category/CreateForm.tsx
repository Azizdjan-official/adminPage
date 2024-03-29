import React, { useState } from 'react';
import { Button, Form, type FormProps, Input } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import {  Upload } from 'antd';
import { usePostCreateForm } from './service/mutation/usePostCreateForm';
import { useNavigate } from 'react-router-dom';



const CreateForm: React.FC = () => {

  type FieldType = {
    title: string;
    image: {
      file:File;
    };
  };
  const navigate = useNavigate();
  const {mutate} = usePostCreateForm();
  
  const onFinish: FormProps<FieldType>["onFinish"] = (data:any) => {
    const formData = new FormData();
    formData.append("title", data.title)
    formData.append("image", data.image.file)
    mutate(formData, {
      onSuccess: () => {
        navigate("/app")
      }
  })
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   
  const [fileList, setFileList] = useState<UploadFile[]>([]);


    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);
    

    
    
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
      <Upload.Dragger
          beforeUpload={() => false}
          maxCount={1}
          fileList={fileList}
          onChange={handleChange}>
          {fileList.length >= 8 ? null : <button style={{ border: 0, background: 'none' }} type="button">
          
          <div style={{ marginTop: 8 }}>Image</div></button>}
      </Upload.Dragger>
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