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


import MainCarousel from "./components/Carousel/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainCarousel slides={5} Infinite={true}/>}/>
                <Route path="example1" element={<MainCarousel slides={1} Infinite={false}/>} />
                <Route path="example2" element={<MainCarousel slides={4} Infinite={true}/>} />
                <Route path="example3" element={<MainCarousel slides={10} Infinite={false}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App