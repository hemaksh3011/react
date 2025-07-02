// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// ----------------------------------------------------------------------------------------------

// import { useState } from 'react';
// import About from './About';
// import './App.css';
// import Contactus from './Contactus';

// function App() {
//   const [count,setCount]=useState(0);

//   const inc =()=>{
//     setCount(count+1)
//   }

//   const dec =()=>{
//     setCount(count-1)
//   }


//   return (
//     <>
//       <div className="App" >
//         <h1>My react app</h1>
//         <button onClick={inc} > increment </button>
//         <button onClick={dec} > decrement </button>
//         Count={count}
//         <About name="hemaksh" address="udaipur"  ></About>
//       </div>
     
//     </>
//   );
// }

// export default App;



import React from 'react'
import basic_html from './basic_html';

function App() {
  return (
    <>
    <div>App</div>

    <basic_html></basic_html>

    </>
  )
}

export default App