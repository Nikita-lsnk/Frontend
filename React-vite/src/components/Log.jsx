import React from 'react'
import {Title, SubTitle, MainBotton, Field, TitleField, Wrapin, Login, Text, Board, WrapBoard} from '../Styled.jsx'
import {GlobalStyles} from '../Global.jsx'

const Log = () => {
  return (
    <Wrapin>
      <GlobalStyles/>
      <Login>
        <Text>
        <Title>Welcome.</Title>
          <SubTitle>Hello, nice to se you again!</SubTitle>
        </Text>
        <Board action="#" method='get'>
          <WrapBoard>
            <TitleField>email/username</TitleField>
            <Field type="text" name='username' placeholder='@username'></Field>
          </WrapBoard>
          <WrapBoard>
            <TitleField>password</TitleField>
            <Field type="password" name='userpass' placeholder='password'></Field>
          </WrapBoard>
          <MainBotton>Login</MainBotton>
        </Board>
      </Login>
    </Wrapin>
  )
}

export default Log