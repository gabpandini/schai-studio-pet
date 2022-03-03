import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Blog from './components/blog/Blog';
import Sobre from './components/sobre/Sobre';
import Agendamentos from './components/agendamentos/Agendamentos';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
      <div className="App__header">
        <Header/>
      </div>
      <div className="App__body">
        <Routes>
          <Route path="/" element={ <Blog /> } />
          <Route path="/sobre" element={ <Sobre /> } />
          <Route path="/agendamentos" element={ <Agendamentos /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
