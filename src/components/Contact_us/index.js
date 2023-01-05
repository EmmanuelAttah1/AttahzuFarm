import './index.css';

import { useState } from 'react';

import {PhoneOutlined,MailOutlined,EnvironmentOutlined} from '@ant-design/icons';
import MyInput from '../MyInput';

import { Information } from '../../Information/data';

import { notification } from 'antd';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


function ContactUs(props) {
  const {myRef} = props
  const [formData,setFormData] = useState([
    {name:"First Name", placeholder:"John", id:"first_name", error:false, value:null},
    {name:"Last Name", placeholder:"Doe", id:"last_name", error:false, value:null},
    {name:"Email", placeholder:"JohnDoe@gmail.com", id:"email", error:false, value:null},
    {name:"Phone Number", placeholder:"+234 xxx xxx", id:"phone_number", error:false, value:null},
    {name:"Country", placeholder:"Nigeria", id:"country", error:false, value:null},
  ]
  )
  const [messageField,setMessageField] = useState({value:null,error:false})

  const clearForm =()=>{
    setFormData([
      {name:"First Name", placeholder:"John", id:"first_name", error:false, value:null},
      {name:"Last Name", placeholder:"Doe", id:"last_name", error:false, value:null},
      {name:"Email", placeholder:"JohnDoe@gmail.com", id:"email", error:false, value:null},
      {name:"Phone Number", placeholder:"+234 xxx xxx", id:"phone_number", error:false, value:null},
      {name:"Country", placeholder:"Nigeria", id:"country", error:false, value:null},
    ])

    setMessageField({value:null,error:false})
  }

  const messageFieldIsValid = () =>{

    const message = {...messageField}

    if(message.value === null){
      message.error = true
    }else{
      if(message.error){
        message.error = false
      }
    }

    setMessageField(message)

    return [message.error,message.value]
  }

  const messageOnChange=e=>{
    const value = e===""?null:e
    const message = {...messageField}
    message.value = value

    setMessageField(message)
  }

  const validateForm=()=>{
    const form = {}
    const form_data = [...formData]
    let hasError = false

    const message = messageFieldIsValid()

    if(!message[0]){
      form['message'] = message[1]
    }else{
      hasError = true
    }

    for(let i in form_data){
      if(form_data[i]['value'] === null){
        form_data[i]['error'] = true
        
        if (!hasError){
          hasError=true
        }

      }else{
        if(form_data[i]['error']){
          form_data[i]['error'] = false
        }

        form[form_data[i]['id']] = form_data[i]['value']
      }
    }
    setFormData(form_data)
    return [hasError,form]
  }

  const updateFormdata=(value,index)=>{
    const form = [...formData]
    form[index]['value'] = value
    setFormData(form)
  }

  const handleSubmit = e => {
    const formisValid = validateForm()

    if(!formisValid[0]){
      const form = formisValid[1]
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form })
      })
        .then(() => {
          clearForm()
          const placement = "top"
          notification.success({
            message: `Your message has been saved..`,
            placement,
          });
        })

      e.preventDefault();
      
    }else{
      const placement = "top"
      notification.error({
        message: `Please Fill all form fields to proceed`,
        placement,
      });
    }
  };


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
              {
                formData.map((field,index)=>(
                  <MyInput value={field.value} error={field.error} index={index} update={updateFormdata} label={field.name} placeholder={field.placeholder} id={field.id} key={field.id}/>
                ))
              }
            </div>
            <div className={messageField.error?'input-container input-error':'input-container'}>
              <div className='label'>Message</div>
              <textarea id="message-input" rows="3" placeholder='Write your message.....' onChange={e=>{
                messageOnChange(e.target.value)
              }} value={messageField.value==null?"":messageField.value}/>
            </div>

            <div className='top-section-btn submit-btn' onClick={handleSubmit}>Send message</div>
          </div>
        </div>
      </div>
  );
}

export default ContactUs;
