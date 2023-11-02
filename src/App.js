import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Navbar } from './components/navbar';
import { UserDetail } from './pages/userDetail';


function App() {
  //console.log(localStorage.getItem('theme'))
  const [mode, setMode] = useState('theme-light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setMode(storedTheme);
      //console.log(storedTheme);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'theme-light' ? 'theme-dark' : 'theme-light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
    //console.log(localStorage.getItem('theme'));
  };

  return (
    <div className={`App ${mode} body `}>
      <Navbar toggleMode={toggleMode} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<UserDetail />} path="user/:uuid" />
      </Routes>
    </div>
  );
}

export default App;
