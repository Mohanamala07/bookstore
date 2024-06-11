import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({type,title,base,links,func}) => {

  let class_name
  if(type==="1"){
    class_name="nav-link"
  }else if(type==="2"){
    class_name="nav-link"
  }else if(type==="3"){
    class_name="nav-link link"
  }else if(type==="4"){
    class_name="nav-link login_button "
  }



  
  return (
    <div className="dropdown">
        <li className='nav-item'>
            <Link className={class_name} onClick={links.length===0? func:null} to={base} aria-current="page">{title}</Link>
        </li>
         <div className="dropdown-content">
            {links.map((item)=><Link onClick={func} key={item.link} to={item.path}>{item.link}</Link>)}
        </div>
    </div>
  )
}

export default Dropdown