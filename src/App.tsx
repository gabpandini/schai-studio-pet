import React from 'react';
import Header from './components/header';
import Blog from './components/blog';
import About from './components/about';
import Schedules from './components/schedules';
import { Div, DivHeader, DivBody } from './app-style'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Div >
      <DivHeader>
        <Header/>
      </DivHeader>
      <DivBody>
        <Routes>
          <Route path="/" element={ <Blog /> } />
          <Route path="/sobre" element={ <About /> } />
          <Route path="/agendamentos" element={ <Schedules /> } />
        </Routes>
      </DivBody>
    </Div>
  );
}

export default App;
