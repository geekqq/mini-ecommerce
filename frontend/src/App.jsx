import Home from './components/Home'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import reactLogo from './assets/react.svg'
import Success from './components/Success'
import viteLogo from '/vite.svg'
import Cancel from './components/Cancel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/cancel' element={<Cancel/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
