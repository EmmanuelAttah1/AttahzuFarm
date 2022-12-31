import './index.css';

import {MenuOutlined} from '@ant-design/icons';
import { useState } from 'react';


function NavBar(props) {
  const [navSmallOpen,settoggleNavSmall] = useState(false)

  const {position,scroll_to,navScrolled} = props
  const links = [
    {name:"About Us", id:"about-us"},
    {name:"Our Products", id:"our-products"},
    {name:"Contact Us", id:"contact-us"}
  ]

  const nav_class = navScrolled?"nav-fixed":"regular-nav"

  return (
    <div className={nav_class}>
      <div className='my-nav'>
        <div id="my-nav-heading">
          ATTAHZU FARM
        </div>
        <div id="my-nav-body">
          <div id="nav-menu" onClick={()=>{
            settoggleNavSmall(!navSmallOpen)
          }}>
            <MenuOutlined style={{fontSize:'20px'}}/>
          </div>
            <div id="nav-children-content">
              {
                links.map(e=>(
                  <div className={e.id === position?"nav-child nav-active":"nav-child"} key={e.id} onClick={()=>{scroll_to(e.id)}}>{e.name}</div>
                ))
              }
            </div>
        </div>
      </div>
      {navSmallOpen && 
      <div id="nav-children-small">
      {
        links.map(e=>(
          <div className={e.id === position?"nav-child nav-active-small":"nav-child"} key={e.id} onClick={()=>{scroll_to(e.id)}}>{e.name}</div>
        ))
      }
      </div>}
    </div>
  );
}

export default NavBar;
