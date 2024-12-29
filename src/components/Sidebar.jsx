import React from 'react';

const Sidebar = ({ isOpen, darkMode, toggleSidebar, cart, totalPrice }) => {
  return (
    <div
      className={`sidebar ${isOpen ? 'open' : 'closed'} ${darkMode ? 'dark' : 'light'}`}
      style={{
        width: '250px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto',
        backgroundColor: darkMode ? '#333' : '#fff',
        padding: '20px',
        transition: 'transform 0.3s ease', // Ensures the sliding transition
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', // Moves the sidebar in/out
      }}
    >
      <button className="btn btn-primary" onClick={toggleSidebar}>Close</button>
      <br />
      <br />
      <h3>🛒 Cart</h3>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <br />
      <br />
      <h3>🔥 Deals</h3>
      <ul>
        <li>50% off on Electronics</li>
        <li>Buy 1 Get 1 Free</li>
        <li>Clearance Sale: Up to 70% Off</li>
      </ul>
      <br />
      <br />
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
