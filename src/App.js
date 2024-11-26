// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import Header from './components/Header';  // Import the Header
import Footer from './components/Footer';  // Import the Footer

function App() {
  return (
    <Router>
      <Header /> {/* Display the Header at the top */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </main>
      <Footer /> {/* Display the Footer at the bottom */}
    </Router>
  );
}

export default App;
