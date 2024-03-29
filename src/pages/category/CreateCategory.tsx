import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CreateForm from './CreateForm';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Create',
    children: <CreateForm/>,
  },
  {
    key: '2',
    label: 'Sub Category',
    children: <CreateForm/>,
  },
];

const CreateCategory: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default CreateCategory;