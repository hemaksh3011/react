import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Contactus from './Contactus';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Contactus' element={<Contactus/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App