import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import New from './components/new';
import Issues from './components/issues';
import PullRequest from './components/pullrequest';
import Notification from './notification';


function App() {
 
  return (
    <div className="App">
      {/* below code is will help easy navigation without whole page rendering only needed components will rendered */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/new' element={<New/>}/>
          <Route path='/issues' element={<Issues/>}/>
          <Route path='/pullrequest' element={<PullRequest/>}/>
          <Route path='/notification' element={<Notification/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
