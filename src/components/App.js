import React from 'react';
import '../components/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import Home from './pages/Home';
import Authors from './pages/Authors';
import Collections from './pages/Collections';
import Demo from './pages/Demo';

function App() {
  return (
      <div className=''>
          
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/authors' exact element={<Authors />} />
              <Route path='/collections' exact element={<Collections />} />
              <Route path='/demo' exact element={<Demo />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
