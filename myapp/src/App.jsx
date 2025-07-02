import React from 'react'
import About from './About'
import {BrowserRouter,Route,Routes}from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App