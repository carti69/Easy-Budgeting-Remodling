import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from "./pages/Services";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <header className="App-header">
        <h1>Easy Budgeting Remodeling</h1>
        <p>
          Your one-stop solution for finding the best remodeling workers.
        </p>
        <p>
          Our website is currently under construction. Stay tuned for our launch!
        </p>
      </header>
    </div>
  );
}

export default App;