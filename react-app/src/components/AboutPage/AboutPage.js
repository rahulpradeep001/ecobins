// src/components/AboutPage/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <nav className="navbar">
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/recycle">Recycling Guide</Link></li>
          <li><Link to="/disposal">Disposal Guide</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/search-options">Options</Link></li>
          
        </ul>
      </nav>
      <div className="about-content">
        <h1>About EcoBin</h1>
        <img
          className="recycle-image"
          src="/images/recycle.png"
          alt="Recycling"
        />
        <p>
          EcoBin aims for a better society with innovative features such as integrating AI systems to help in waste management and many other innovative features. Our mission is to create a sustainable environment by providing effective and efficient waste management solutions.
        </p>
        <p>
          We believe in the power of technology and innovation to transform waste management practices, making it easier for individuals and businesses to recycle and dispose of waste responsibly.
        </p>

        <p><li><Link to="/carbon-footprint">Calculate your Carbon Footprint</Link></li></p>
      </div>
    </div>
    
  );
};

export default AboutPage;
