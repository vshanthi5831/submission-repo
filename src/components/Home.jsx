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
            <p style={{ fontSize: '18px', fontWeight: 'bold' }} >
              🌟 Dive into a world of amazing deals and exclusive collections! 🌟
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }} >
              Ready to explore the latest trends? We’ve got the freshest products, hand-picked just for you. Whether you're upgrading your style or indulging in the latest tech gadgets, we've got it all at <strong>Hop-E-DON</strong>.
            </p>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff9800' }} >
              🛒 Start shopping now and transform your experience with us! 🛒
            </p>
          </div>
          <h2><p style={{ textAlign: 'center' }}>Our amazing collection of products awaits!</p></h2>
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
              At Hop-E-DON, we believe that shopping should be more than just a transaction — it should be an experience. Whether you're on the hunt for the latest fashion trends, high-tech gadgets, or unique home decor, we’ve curated a collection that blends quality, style, and affordability. Our goal is to bring you not only exceptional products but also exceptional service, ensuring that every visit to our store is enjoyable and satisfying. With a user-friendly platform, secure payment options, and fast delivery, shopping at Hop-E-DON is not just about buying things, it’s about enjoying a seamless, personalized journey every time you explore our store.
            </p>
          </div>
          <br />
          <br />
          <br />

          {/* Accordion Section */}
          <div className="container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Product Details
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Here you can find detailed information about the product, including specifications, features, and user reviews. Ensure to check out the product ratings and images to get a better understanding before making a purchase.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Shipping Information
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    We offer multiple shipping options, including standard and expedited shipping. Delivery times and costs will vary based on your location. Track your order easily through our tracking system for real-time updates.
                  </div>
                </div>
              </div>
              {/* Accordion Item 3: Customer Support */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Customer Support
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Our customer support team is available 24/7 to assist you with any issues. You can reach out to us via live chat, email, or phone for any inquiries related to your orders, returns, or refunds. We are here to help you!
                  </div>
                </div>
              </div>
            </div>
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

