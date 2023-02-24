import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    font-size: 20px;
    
    @media screen and ( max-width: 1200px ) {font-size: 16px;}
    @media screen and ( max-width: 570px ) {font-size: 14px;}
    @media screen and ( max-width: 440px ) {font-size: 12px;}
    @media screen and ( max-width: 370px ) {font-size: 10px;}
  }
  body{
    font-family: 'Hammersmith One', sans-serifz;
    margin: 0;
    width: 100%;
  }
  body a{
    font-family: 'Inter', sans-serif;
    text-decoration: none;
  }
  ul,li{
    list-style:none;
  }
  /* .App{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
  } */
  /* .login{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: calc( 100% - 32px );
    max-width: 601px;
  } */
  /* .text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */
  /* .board{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: calc( 100% - 40px );
    padding: 20px;
    height: 20.25rem;
    border: 3px solid #464655;
    border-radius: 30px;
  } */
  
  
`;