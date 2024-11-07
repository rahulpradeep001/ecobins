// DisposalGuide.js
import React from 'react';
import './DisposalGuide.css';

const DisposalGuide = () => {
  return (
    <div className="disposal-guide">
      <header className="header">
        <h1>♻️ EcoGuide</h1>
        <button className="sign-in-button">Sign In</button>
      </header>
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search for disposal methods..." 
          className="search-input"
        />
      </div>
      
      <h2>Disposal Guide</h2>
      
      <div className="waste-items">
        <div className="waste-item">
          <img src="https://placehold.co/100x100/orange/white/" alt="Hazardous Waste" className="item-image" />
          <div className="item-info">
            <h3>Hazardous Waste</h3>
            <p>Ensure to dispose of hazardous waste at designated facilities to prevent environmental damage.</p>
          </div>
        </div>
        
        <div className="waste-item">
          <img src="https://placehold.co/100x100/orange/white/" alt="Electronic Waste" className="item-image" />
          <div className="item-info">
            <h3>Electronic Waste</h3>
            <p>Recycle electronic waste at certified e-waste recycling centers to recover valuable materials.</p>
          </div>
        </div>
        
        <div className="waste-item">
          <img src="https://placehold.co/100x100/orange/white/" alt="Organic Waste" className="item-image" />
          <div className="item-info">
            <h3>Organic Waste</h3>
            <p>Compost organic waste to create nutrient-rich soil that can be used in gardening.</p>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <button className="footer-button">Recycling</button>
        <button className="footer-button active">Disposal</button>
        <button className="footer-button">Search</button>
      </footer>
    </div>
  );
};

export default DisposalGuide;