import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';


function App() {
 
  return (
    <div className="App">
      {/* below code is will help easy navigation without whole page rendering only needed components will rendered */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
