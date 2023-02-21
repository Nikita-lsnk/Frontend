import styled from 'styled-components';

const Title = styled.h1 `
  margin: 0;
  text-transform: uppercase;
  color: #464655;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 0.8;
  letter-spacing: 0.01em;
`;

const SubTitle = styled.span `
  text-transform: uppercase; 
  color: #68A691;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 40px;
  letter-spacing: 0.01em;
`;

const MainBotton = styled.button `
  text-transform: uppercase;
  font-style: normal;
  width: 9.7rem;
  height: 2.65rem;
  background-color: #68A691;
  color: #464655;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.01em;
  border: none;
  border-radius: 5px;
  margin-top: 3.25rem;

  &:hover{
    cursor: pointer;
  }
`;

const Field = styled.input `
  width: calc( 100% - 20px );
  padding: 0 0 0 20px;
  height: 2.45rem;
  border: 1px solid #464655;
  border-radius: 3px;
  font-size: 0.9rem;
`;

const TitleField = styled.p `
  display: flex;
  color: #68A691;
  width: fit-content;
  text-transform: uppercase;
  margin: 0;
  align-self: flex-start;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 25px;
  
`;

const Wrap = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const Login = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: calc( 100% - 32px );
  max-width: 601px;
`;

const Text = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Board = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  width: calc( 100% - 40px );
  padding: 20px;
  padding-top: 63px;
  border: 3px solid #464655;
  border-radius: 30px;
  gap: 30px;
`;

const WrapBoard = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc( 100% - 40px );
`;

export {Title, SubTitle, MainBotton, Field, TitleField, Wrap, Login, Text, Board, WrapBoard};