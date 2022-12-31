import './index.css';
import img from '../../img/1.jpg';
import img2 from '../../img/14.jpg';
import cashew from '../../img/cashew.jpg';

import { Information } from '../../Information/data';

import {ArrowRightOutlined} from '@ant-design/icons';

function AboutUs(props) {
  const {scroll_to,incrementImageCount} = props
  

  return (
    <div id="top-section" ref={props.myRef}>
    <div id="info">
      <div id="top-section-heading">
        {/* Finest Products, Finest Agriculture */}
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
        <img className='about-us-image' src={img2} onLoad={incrementImageCount} alt="img"/>
        <img className='about-us-image' src={img} onLoad={incrementImageCount} alt="img"/>
      </div>
      <img className='about-us-image main-image' src={cashew} onLoad={incrementImageCount} alt="img"/>
    </div>
  </div>
  );
}

export default AboutUs;
