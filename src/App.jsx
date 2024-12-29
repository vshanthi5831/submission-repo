import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import About from './components/About';
import Products from './components/products';
import Home from './components/Home';
import Sidebar from './components/Sidebar'; // Import Sidebar

const App = () => {
  const savedMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(savedMode);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
      document.body.classList.remove('bg-body-tertiary');
    } else {
      document.body.classList.add('bg-body-tertiary');
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
};


  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calculate total price (only once here)
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <Router>
      <div className="App">
        <Navbar darkMode={darkMode} handleMode={handleMode} toggleSidebar={toggleSidebar} />
        <Sidebar 
          isOpen={isSidebarOpen} 
          darkMode={darkMode} 
          toggleSidebar={toggleSidebar} 
          cart={cart} 
          totalPrice={totalPrice} 
        />
        
        <Routes>
          <Route path="/home" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/products" 
            element={<Products darkMode={darkMode} addToCart={addToCart} removeFromCart={removeFromCart} />} 
          />
          <Route
            path="/login"
            element={<Login darkMode={darkMode} setIsAuthenticated={() => {}} handleMode={handleMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
