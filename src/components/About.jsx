import React, { useState } from 'react'; 

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  const darkChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container my-3 ${darkMode ? 'bg-dark-custom text-light' : 'bg-light-custom text-dark'}`}>
      <div className="p-3 rounded">
        <h1>About This Project</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Project Overview
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <strong>This project is a UI Template for an e-commerce platform with an interactive chatbot.</strong> It allows users to browse products, manage their accounts, and interact with a chatbot for assistance. The design prioritizes usability, accessibility, and modern UI principles.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Features
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                <ul>
                  <li>Dark/Light Mode Toggle</li>
                  <li>Interactive Product List with Summation</li>
                  <li>Slide bar for User Assistance</li>
                  <li>Responsive Design with Bootstrap</li>
                  <li>Login and User Authentication</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Technology Stack
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
                <ul>
                  <li><strong>Frontend:</strong> React, Bootstrap, Vanilla CSS</li>
                  <li><strong>Deployment:</strong> Hosted on a local or cloud server</li>
                  <li><strong>Tools:</strong> Visual Studio Code, GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dark/Light Mode Button
        <button className="btn btn-primary mt-3" onClick={darkChange}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button> */}
      </div>
    </div>
  );
}

