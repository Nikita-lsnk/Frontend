import React, { useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/logo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav] = useState (false);
  return (
    <header className={style.header}>
      <div className={style.container}>

        <div className={style.box}>
          <div className={style.logo_image}>
            <img src={logo} alt="/" />
          </div>
          <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            
            
          </div>
        </div>

      </div>
      
    </header>
  )
}

export default Navbar