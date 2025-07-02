import React from 'react'
import About from './About'
import {BrowserRouter,Route,Routes}from 'react-router-dom';
import Home from './Home';
import Contactus from './Contactus';
import genre from './genre';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/contact' element={<Contactus/>} />
      <Route path='/genre' element={<genre/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App