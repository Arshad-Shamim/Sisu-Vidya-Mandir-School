import { useState } from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';

import Home from './pages/Home.jsx'
import Aboutus from './pages/Aboutus.jsx';
import Academics from './pages/Academics.jsx';
import Admission from './pages/Admission.jsx';
import Infrastructure from './pages/Infrastructure.jsx';
import Event from './pages/Events.jsx';
import Announcements from './pages/Announcements .jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/infrastructure" element={<Infrastructure/>}/>
        <Route path="/events" element={<Event/>}/>
        <Route path="/announcements" element={<Announcements/>}/>
      </Routes>
    </>
  )
}

export default App
