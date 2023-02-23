import React from 'react'
import style from './Foot.module.css'
import logo from '../../assets/logo.png'

const Foot = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>

        <div className={style.box}>
          <div className={style.logo_image}>
            <img src={logo} alt="/" />
          </div>
          <ul className={style.menu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>

      </div>
      
    </footer>
  )
}

export default Foot