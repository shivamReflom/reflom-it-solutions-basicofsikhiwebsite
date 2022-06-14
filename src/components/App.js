import React from 'react';
import '../components/App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className='container'>
        <Routes>
          <Header />
          
        </Routes>
      </div>
  );
}

export default App;
