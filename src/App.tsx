import React from 'react';

import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/navbar/Navbar";


function App() {

  return (
    <div className="App">
        <Navbar/>
        <AppRouter/>
    </div>
  );
}

export default App;
