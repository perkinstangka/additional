import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Detail from "./Pages/Detail";
import Description from "./components/Description";

import './Assets/item.css';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail" element={<Detail />}>
          <Route path=":Id" element={<Description />} />
      </Route>
    </Routes>
  );
}

export default App;
