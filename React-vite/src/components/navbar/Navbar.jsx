import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import "./Navbar.css"

const Navbar = () => {
  const [nav,setNav] = useState (false);
  return (

    


    <Header>
      <Container>
        <Box>

          <LogoImage>
            <img src={logo} alt="/" />
          </LogoImage>
          
          <Menu className={nav? "active":"" }>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </Menu>
          <MobileBtn onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
          </MobileBtn>
        </Box>
      </Container>
    </Header>
  
  )
}

export default Navbar

const Header = styled.header `
  width: 100%;
`;
const Container = styled.div`
  height: 80px;
`;
const Box = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
`;
const LogoImage = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
`;
const Menu = styled.div`
  padding-right: 50px;
  display: flex;
  align-items: center;
  font-size: 22px;
  gap: 40px;
  @media (max-width: 800px) {
    display: none;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    margin: 0;
    top: 0;
    bottom: 0;
    right: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    z-index: 10;
    transition: all 1s;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    opacity: 0;
  }

`;
const MobileBtn = styled.div`
  display: none; 

  @media (max-width: 800px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    cursor: pointer;
    z-index: 10;
  }

`;



