import { useState } from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';

import Home from './pages/Home.jsx'
import Aboutus from './pages/Aboutus.jsx';
import Academics from './pages/Academics.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/academics" element={<Academics/>}/>
      </Routes>
    </>
  )
}

export default App
