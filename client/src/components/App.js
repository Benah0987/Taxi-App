import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Services from './Services';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Landing from './Landing';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;