import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import About from './components/About';
import Products from './components/products';
import Home from './components/Home';
import Sidebar from './components/Sidebar'; // Import Sidebar

const App = () => {
  // Load dark mode preference from localStorage on page load
  const savedMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(savedMode);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  // Update dark mode in localStorage whenever it changes
  const handleMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); // Save the new dark mode preference
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

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar darkMode={darkMode} handleMode={handleMode} toggleSidebar={toggleSidebar} />
        
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} darkMode={darkMode} toggleSidebar={toggleSidebar} />
        
        <Routes>
          <Route path="/home" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products darkMode={darkMode} handleMode={handleMode} />} />
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
