import React, { useState } from 'react';

const Login = ({ setIsAuthenticated, darkMode, handleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`login-box ${darkMode ? 'bg-dark-custom text-light' : 'bg-light-custom text-dark'}`}>
    <h1 className={`text-center ${darkMode ? 'text-light' : 'text-dark'}`}>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
          className="form-control"
        />
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
          className="form-control"
        />
        <button type="submit" className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}>Login</button>
      </form>
    </div>
  );
};

export default Login;
