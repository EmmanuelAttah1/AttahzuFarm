import './index.css';
import { Skeleton } from 'antd';
import { useState } from 'react';



function Product(props) {
  const [loading,setLoading] = useState(true)

    const {name,image} = props
  return (
    <div className='product'>
        <div className='product-image'>
          {loading&&<div className='product-image-loading'><Skeleton.Image active={true} /></div>}
          <img src={image} alt="product" onLoad={()=>{
            setTimeout(()=>{
              setLoading(false)
            },2000)
          }}/>
        </div>
        <div className='product-name'>{name}</div>
    </div>
  );
}

export default Product;
