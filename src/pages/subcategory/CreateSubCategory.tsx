import React from 'react';
import { Tabs, type TabsProps, type UploadFile } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePostCreateForm } from './../category/service/mutation/usePostCreateForm';
import CreateForm from './../category/CreateForm';


type FieldType = {
  id:number,
  title: string;
  image?: {
    file:File;
    fileList:UploadFile,
  };
  parent:{id:number,title:string}
};


const CreateSubCategory: React.FC = () => {

const onChange = (key: string) => {
  console.log(key);
};
const navigate = useNavigate();
const {mutate} = usePostCreateForm();

const onSubFinish = (data:FieldType) => {
  const formData = new FormData();
  formData.append("title", data.title)
  if(data.image)
  formData.append("image", data.image.file)
  
  mutate(formData, {
    onSuccess: () => {
      navigate("/app/subcategory")
    }
})
};

const items: TabsProps['items'] = [

{
  key: '1',
  label: 'Sub Category',
  children: <CreateForm onFinish={onSubFinish} isPending />,
},
];

return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
}
export default CreateSubCategory;