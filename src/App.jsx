import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Projects from './Pages/Projects'

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/projects' element={<Projects/>}/>
    
  </Routes>
  </BrowserRouter>
  )
}

export default App
