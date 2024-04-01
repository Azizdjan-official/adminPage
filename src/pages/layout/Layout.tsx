import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../layout/layout.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const LayoutPage: React.FC = () => { 
  const [collapsed, setCollapsed] = useState(false);
  const {token: { colorBgContainer, borderRadiusLG },} = theme.useToken();

  return (
    <div className="layoutdiv">
        <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu className='flex flex-col gap-4 px-4  text-lg' theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <NavLink to={'/app'}><UserOutlined /> Category List</NavLink>
          <NavLink to={'/app/subcategory'}><VideoCameraOutlined /> Sub Category List</NavLink>
          <NavLink to={'/'}><UploadOutlined /> Brand List</NavLink>
          <NavLink to={'/'}><UploadOutlined /> Product</NavLink>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button type="text"icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{fontSize: '16px', width: 64, height: 64,}}/>          
        </Header>
        <Content style={{margin: '24px 16px',padding: 24,minHeight: 625,
            background: colorBgContainer,borderRadius: borderRadiusLG,}}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    </div>
  );
};

export default LayoutPage;