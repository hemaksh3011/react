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

import About from './About';
import './App.css';
import Contactus from './Contactus';

function app(){
  const abc=()=>{
    alert("welcone");
  }
  return(
    <>
    <div className="app" >
      <h1>My react app</h1>
      <button onClick={abc} > alert </button>
    </div>
    <About></About>
    <Contactus></Contactus>
    </>
  );
}

export default app;