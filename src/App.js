import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/Home';
import Land from './components/Home';
import { createContext } from 'react';

function App() {
 const  RightBarContext = createContext()
  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
