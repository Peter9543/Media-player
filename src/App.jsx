import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer1 from './components/Footer1'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Header/>
    <h1>Media Player</h1>
    
     <Routes>
       
           <Route element={<Landing/> }path='/'/>
           <Route element={<Home/> }path='/home'/>
           <Route element={<History/> }path='/history'/>
           
     </Routes>
     <Footer1/>
     
     
     
    </>
  )
}

export default App

