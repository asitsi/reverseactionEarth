import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Screen/signin/Login';
import Deshboard from './Screen/deshboard/Deshboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/login/deshboard' element={<Deshboard />}/>
        <Route path='*' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
