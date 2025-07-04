import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contactus from './Contactus';
import Genre from './Genre';
import About from './About';
import TvShows from './TVShows';
import './App.css';
import bg from './images/Moody4_bg.jpg';

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <img src={bg} alt="" className='bg-image' />
        <div className="main-content">
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Contactus' element={<Contactus />} />
            <Route path='/Genre' element={<Genre />} />
            <Route path='/About' element={<About />} />
            <Route path='/tvshows' element={<TvShows />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
