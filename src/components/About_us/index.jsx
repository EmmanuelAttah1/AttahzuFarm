import './index.css';
import img from '../../img/1.jpg';
import img2 from '../../img/14.jpg';
import cashew from '../../img/cashew.jpg';

import { Information } from '../../Information/data';

import {ArrowRightOutlined} from '@ant-design/icons';
import { Skeleton } from 'antd';
import { useState,useEffect } from 'react';


function AboutUs(props) {
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },20000)
  },[])

  const {scroll_to} = props
  const [loading,setLoading] = useState(true)
  
  let image_loaded = 0

  const handle_image_load=()=>{
    image_loaded++
    if(image_loaded===3){
      setTimeout(()=>{
        setLoading(false)
      },2000)
    }
  }

  return (
    <div id="top-section" ref={props.myRef}>
    <div id="info">
      <div id="top-section-heading">
        Natural Food <span>Agriculture </span>Grew
      </div>
      <div id="top-section-caption">
        {Information['about_us']}
        
      </div>
      <div id="top-section-btns">
          <div className='top-section-btn left contact-btn' onClick={()=>{scroll_to('contact-us')}}>Contact Us</div>
          <div className='top-section-btn our-product'>
            <span style={{marginRight:'5px'}} onClick={()=>{scroll_to('our-products')}}>Our Products</span> 
            <ArrowRightOutlined />
          </div>
      </div>
    </div>
    <div id="about-us-images">
      <div id="about-us-images-row">
        {loading&&<div id="image-loader">
          <Skeleton active loading={true} />
          <Skeleton active loading={true} />
        </div>}
        <img className='about-us-image' src={img2} onLoad={handle_image_load} alt="img"/>
        <img className='about-us-image' src={img} onLoad={handle_image_load} alt="img"/>
      </div>
      <img className='about-us-image main-image' src={cashew} onLoad={handle_image_load} alt="img"/>
    </div>
  </div>
  );
}

export default AboutUs;
