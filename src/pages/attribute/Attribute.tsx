import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useGetAttribute } from './service/query/useGetAttribute';

    
const Attribute: React.FC = () => {
    const { data } = useGetAttribute();
    const res = data?.results;
    console.log(res);
    const linkProps: LinkProps = {
      to: '/app/create-category', 
      children: 'Create',
      className: 'bg-cyan-400 text-white font-bold px-4 py-2 rounded-md my-2',
    };

    return (
      <div>
        <div className='mb-8'>
        <Link {...linkProps} />
        </div>
        <div className='grid grid-cols-9 px-4 bg-slate-100 py-4'>
          <div className='col-span-1 font-bold'>ID</div>
          {/* <div className='col-span-2 font-bold'>IMG</div> */}
          <div className='col-span-4 font-bold'>Name</div>
          <div className='col-span-2 font-bold'>Action</div>
        </div>
        {res?.map((item:any)=>
        <div key={item.id} className='grid grid-cols-9  my-3 px-4 py-3  items-center hover:shadow-lg hover:bg-slate-100'>
            <div className='col-span-1 font-bold text-lg'><h4>{item.id}</h4></div>
            {/* <div className='col-span-2 w-[100px] h-[100px]'><h4>{item.category_title[0]}</h4></div> */}
            <div className='col-span-4 font-bold'><h4>{item.title}</h4></div>
            <div className='flex gap-2 col-span-2'>
              <button className=' px-5 py-2 m-0 bg-red-500 text-white font-bold rounded'>Delete</button>
              <Link to={`edit-category/${item.id}`} className=' px-5 py-2 m-0  bg-green-500 text-white font-bold rounded'>Edit</Link>
            </div>
        </div>)}
      </div>
      )}

export default Attribute;