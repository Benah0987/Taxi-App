import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Services from './Services';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Landing from './Landing';
import Footer from './Footer';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import CurrentUser from './CurrentUser';
import Payment from './Payment';
import { RideProvider } from './RideContext'; // Import the RideProvider

function App() {
  return (
    <BrowserRouter>
      <AuthProvider> {/* Wrap your entire app with AuthProvider */}
        <RideProvider> {/* Wrap your app with RideProvider */}
          <div>
            <Navbar />
            <Routes>
              <Route index element={<Landing />} />
          
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<CurrentUser />} />
              <Route path="/payment" element={<Payment />} />
              {/* Add more routes here */}
            </Routes>
            <Footer />
          </div>
        </RideProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
