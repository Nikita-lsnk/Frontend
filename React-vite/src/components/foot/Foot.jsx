import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Foot = () => {
  return (
    <Footer>
      <Container>
        <Box>
          <LogoImage>
            <img src={logo} alt="/" />
          </LogoImage>
          <Menu>
            <List>
              <Link to="/">Home</Link>
            </List>
            <List>
              <Link to="/about">About</Link>
            </List>
          </Menu>
        </Box>
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
`;
const Box = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
`;
const LogoImage = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;
  @media (max-width: 800px) {
    padding: 0;
  }
`;
const Menu = styled.div`
  padding-right: 50px;
  display: flex;
  align-items: center;
  font-size: 22px;
  gap: 40px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 0;
  }
`;
const List = styled.div`
  
`;