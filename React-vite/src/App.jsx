import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'
import {GlobalStyles} from './Global.jsx'
import {Title, SubTitle, MainBotton, Field, TitleFieldOne, TitleFieldSecond} from './Styled.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalStyles/>
      <div className="login">
        <div className="text login__text">
          {/* <h1 className="title text__title">Welcome.</h1> */}
          <Title>Welcome.</Title>
          <SubTitle>Hello, nice to se you again!</SubTitle>
          {/* <span className="subtitle text__subtitle">Hello, nice to se you again!</span> */}
        </div>
        <form action="#" method='get' className="board login__board">
          <TitleFieldOne>email/username</TitleFieldOne>
          {/* <p className='title-field title-field__first'>email/username</p> */}
          <Field type="text" name='username' placeholder='@username'></Field>
          {/* <input className='field field__name' type="text" name='username' placeholder='@username'/> */}
          <TitleFieldSecond>password</TitleFieldSecond>
          {/* <p className='title-field title-field__second'>password</p> */}
          <Field type="password" name='userpass' placeholder='password'></Field>
          {/* <input className='field field__pass' type="password" name='userpass' placeholder='password'/> */}
          {/* <button type='submit' className='main-botton board__main-botton'>Login</button> */}
          <MainBotton>Login</MainBotton>
        </form>
      </div>
    </div>
  )
}

export default App
