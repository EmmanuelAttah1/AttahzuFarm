import './index.css';

import {PhoneOutlined,MailOutlined,EnvironmentOutlined} from '@ant-design/icons';
import MyInput from '../MyInput';

import { Information } from '../../Information/data';


function ContactUs(props) {
  const {myRef} = props
  return (
    <div id="contact-us" ref={myRef}>
        <div className="site-heading">Any questions or remarks, or you want to buy from us? just write us a message</div>
        <div className='heading-caption'/>
        <div className='about-us-container'>
          <div id="contact-info-container">
            <div id="contact-heading">Contact Information</div>
            <div id="contact-caption">
              Fill up this form 
              and our team will get back to you as soon as possible.
            </div>
            <div id="information-container">
              <div className='information'>
              <PhoneOutlined />
                <div>{Information['phoneNumber']}</div>
              </div>
              <div className='information'>
                <MailOutlined />
                <div>{Information['email']}</div>
              </div>
              <div className='information'>
                <EnvironmentOutlined />
                <div>{Information['address']}</div>
              </div>
            </div>
          </div>
          <div id="contact-form-container">
            <div id="contact-form">
              <MyInput label={"First name"} placeholder={"John"}/>

              <div className='input-container'>
                <div className='label'>Last name</div>
                <input type="text" name="first_name" placeholder='Doe'/>
              </div>
              <div className='input-container'>
                <div className='label'>Email</div>
                <input type="text" name="first_name" placeholder='name@email.com'/>
              </div>

              <div className='input-container'>
                <div className='label'>Phone number</div>
                <input type="text" name="first_name" placeholder='+234 5678 3456'/>
              </div>
            </div>
            <div className='input-container'>
              <div className='label'>Message</div>
              <textarea id="message-input" rows="3" placeholder='Write your message.....'/>
            </div>

            <div className='top-section-btn submit-btn'>Send message</div>
          </div>
        </div>
      </div>
  );
}

export default ContactUs;
