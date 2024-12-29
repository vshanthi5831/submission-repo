import React from 'react';

const Sidebar = ({ isOpen, darkMode, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <button className="close-btn" onClick={toggleSidebar}>Close</button>
      <h3>🛒 Cart</h3>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
      
      <h3>🔥 Deals</h3>
      <ul>
        <li>50% off on Electronics</li>
        <li>Buy 1 Get 1 Free</li>
        <li>Clearance Sale: Up to 70% Off</li>
      </ul>

      <h3>📰 News</h3>
      <ul>
        <li>New Arrivals: Check out the latest products</li>
        <li>Seasonal Sale Starts Tomorrow!</li>
        <li>Exclusive Deals for Premium Members</li>
      </ul>
    </div>
  );
};

export default Sidebar;
