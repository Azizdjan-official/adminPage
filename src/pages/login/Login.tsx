import React from 'react';
import '../login/login.scss'
import { Button, Form, type FormProps, Input } from 'antd';
import { useLogin } from './service/mutation/useLogin';
import { useNavigate } from 'react-router-dom';
import { saveState } from '../../storage/Storage';


const Register: React.FC = () => {
  const navigate = useNavigate();
  const { mutate } = useLogin();

  type FieldType = {
    phone_number?: string ;
    password?: string;
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (data:any) => {
    mutate(data, {
      onSuccess: (data) => {
        saveState("user", data.token)
        navigate("/app")
        
      }
  })
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return( 
    <div className='logincenter'>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 800 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Phone"
      name="phone_number"
      initialValue="+998977109944"
      rules={[{ required: true, message: 'Please input your phonenumber!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      initialValue="87654321"
      rules={[{ required: true, message: 'Please input your password!' }]}
      style={{width:500, flex: "flex", justifyContent:"space-between"}}

    >
      <Input.Password />
    </Form.Item>

    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button className='bg-cyan-400 text-white font-bold' htmlType="submit" style={{width:330}}>
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  )
};

export default Register;