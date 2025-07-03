import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Contactus from './Contactus';
import Genre from './Genre';
import About from './About';
import Footer from './Footer';
import './App.css'; // Import CSS

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Contactus' element={<Contactus />} />
            <Route path='/Genre' element={<Genre/>} />
            <Route path='/About' element={<About/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
