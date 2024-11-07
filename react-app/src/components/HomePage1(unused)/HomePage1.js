// src/HomePage.js
import React from 'react';
import './HomePage.css';
import { useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/about');
  };
  return (
    <div className="container">
      <header className="header">
        <h1>EcoBin</h1>
        <div className="logo">
          <img src="images/logo.png" alt="Logo" />
        </div>
      </header>
      <div className="content">
        <img
          className="recycle-image"
          src="/images/recycle.png"
          alt="Recycling"
        />
        <h2>Discover the best recycling methods.</h2>
        <p>Learn how to recycle various materials effectively.</p>
        <div className="buttons">
          <button className="get-started"onClick={handleGetStarted}>Get started</button>
          <button className="explore-now">Explore now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
