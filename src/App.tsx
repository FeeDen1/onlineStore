import React from 'react';

import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <div className="App">
        <Navbar/>
        <AppRouter/>
        <Footer/>
    </div>
  );
}

export default App;
