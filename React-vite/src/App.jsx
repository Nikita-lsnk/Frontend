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
        <div className="board login__board">
          <form action="#" method='get'></form>
          <p className='title-field title-field__first'>email/username</p>
          <input className='field field__name' type="text" name='username' />
          <p className='title-field title-field__second'>password</p>
          <input className='field field__pass' type="password" name='userpass' />
          <button className='main-botton board__main-botton'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default App
