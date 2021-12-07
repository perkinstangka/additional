import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './Pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
