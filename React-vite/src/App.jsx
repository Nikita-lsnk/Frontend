import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'
import {GlobalStyles} from './Global.jsx'
// import {Title, SubTitle, MainBotton, Field, TitleField, Wrap, Login, Text, Board, WrapBoard} from './Styled.jsx'
import Navbar from './components/navbar/Navbar'
import Foot from './components/foot/Foot'
import Log from './components/Log'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrap>
      <GlobalStyles/>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Log/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      {/* <Log/> */}
      
      <Foot/>

    </Wrap>
  )
}

export default App

const Wrap = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  margin: 0, auto;
`;