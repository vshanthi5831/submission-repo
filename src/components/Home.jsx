import React from 'react';

const Home = ({ darkMode }) => {
  return (
    <>
      <div className="container">
        <div className="home-container">
          <header className="home-header">
            <h1 style={{ textAlign: 'center', fontSize: '80px', paddingTop: '20px' }}>Hop-E-DON</h1>
            <p style={{ textAlign: 'center' }}>Welcome to your ultimate shopping destination!</p>
          </header>
          <br />
          <br />
          <br />
          <div
            style={{
              padding: '30px',
              backgroundColor: darkMode ? '#1e3a5a' : '#87d3ec', // Dark Blue for Dark Mode, Light Blue for Light Mode
              color: darkMode ? 'white' : 'black',
              borderRadius: '12px',
              marginTop: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
              🌟 Dive into a world of amazing deals and exclusive collections! 🌟
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Ready to explore the latest trends? We’ve got the freshest products, hand-picked just for you. Whether you're upgrading your style or indulging in the latest tech gadgets, we've got it all at <strong>Hop-E-DON</strong>.
            </p>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff9800' }}>
              🛒 Start shopping now and transform your experience with us! 🛒
            </p>
          </div>
          <h2><p style={{textAlign: 'center'}}>Our amazing collection of products awaits!</p></h2>
          <div
            style={{
              padding: '30px',
              backgroundColor: darkMode ? '#1e3a5a' : '#87d3ec', // Dark Blue for Dark Mode, Light Blue for Light Mode
              color: darkMode ? 'white' : 'black',
              borderRadius: '12px',
              marginTop: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Sure! Here's a paragraph for you:

"At Hop-E-DON, we believe that shopping should be more than just a transaction — it should be an experience. Whether you're on the hunt for the latest fashion trends, high-tech gadgets, or unique home decor, we’ve curated a collection that blends quality, style, and affordability. Our goal is to bring you not only exceptional products but also exceptional service, ensuring that every visit to our store is enjoyable and satisfying. With a user-friendly platform, secure payment options, and fast delivery, shopping at Hop-E-DON is not just about buying things, it’s about enjoying a seamless, personalized journey every time you explore our store."
            </p>
          </div>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </>
  );
};

export default Home;
