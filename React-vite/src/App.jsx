import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'
import {GlobalStyles} from './Global.jsx'
import {Title, SubTitle, MainBotton, Field, TitleField, Wrap, Login, Text, Board, WrapBoard} from './Styled.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrap>
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
    </Wrap>
  )
}

export default App
