import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Foot = () => {
  return (
    <Footer>
      <Container>
          <LogoImage>
            <img src={logo} alt="/" />
          </LogoImage>
          <Menu>
            {/* <List> */}
              <Link to="/">Home</Link>
            {/* </List> */}
            {/* <List> */}
              <Link to="/about">About</Link>
            {/* </List> */}
          </Menu>
      </Container>
    </Footer>
  )
}

export default Foot

const Footer = styled.footer`
  width: 100%;
`;
const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction:column;
    
    
    
  }
`;

const LogoImage = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
  @media (max-width: 800px) {
    justify-content: flex-start;
    margin: 0;
    margin-bottom: 10px;
  
    
  }
`;
const Menu = styled.div`
  /* width: 100%; */
  padding-right: 50px;
  display: flex;
  align-items: center;
  font-size: 22px;
  gap: 40px;
  @media (max-width: 800px) {
    flex-direction:column;
    text-align: left; 
    align-items: center; 
    justify-content: flex-start; 
    padding: 0;
    margin: 0;
    gap: 10px;
  a{
    width: calc(100% - 38px);
    text-align: left;
  
  }

  }
`;

// const List = styled.div`
// display: flex;
//   @media (max-width: 800px) {
//     display: flex;
//     flex-direction: column;
//     margin-left: 38px;
//   }
// `;