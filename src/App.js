import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Page404 from './components/pages/Page404';
import OnHold from './components/onhold/OnHold';
import InProgess from './components/inprogess/InProgess';
import Finished from './components/finished/Finished';
import React from 'react';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';


export const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={""}>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/onhold' element={<OnHold/>}/>
          <Route path='/inprogress' element={<InProgess/>}/>
          <Route path='/finished' element={<Finished/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='*' element={<Page404/>}/>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
