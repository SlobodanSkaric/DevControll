import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Page404 from './pages/Page404';
import OnHold from './components/onhold/OnHold';
import InProgess from './components/inprogess/InProgess';
import Finished from './components/finished/Finished';
import React from 'react';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/onhold' element={<OnHold/>}/>
          <Route path='/inprogress' element={<InProgess/>}/>
          <Route path='/finished' element={<Finished/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='*' element={<Page404/>}/>
      </Routes>
  );
}

export default App;
