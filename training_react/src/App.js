import './App.css';
import Card from './components/Card'
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>} />
      <Route path='/Counter' element={<Counter/>} />
      <Route path='/Card' element={<Card/>} />
      <Route path='/MovieList' element={<MovieList/>} />
    </Routes>
    </BrowserRouter>
    </div>
      
      </>
  );
}
export default App;