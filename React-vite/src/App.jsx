import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="login">
        <div className="text login__text">
          <h1 className="title text__title">Welcome.</h1>
          <span className="subtitle text__subtitle">Hello, nice to se you again!</span>
        </div>
        <form action="#" method='get' className="board login__board">
          <p className='title-field title-field__first'>email/username</p>
          <input className='field field__name' type="text" name='username' placeholder='@username'/>
          <p className='title-field title-field__second'>password</p>
          <input className='field field__pass' type="password" name='userpass' placeholder='password'/>
          <button type='submit' className='main-botton board__main-botton'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default App
