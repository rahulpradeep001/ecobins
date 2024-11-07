// RecyclingGuide.js
import React from 'react';
import './RecyclingGuide.css';

const RecyclingGuide = () => {
  return (
    <div className="recycling-guide">
      <div className="header">
        <h1>♻️ EcoGuide</h1>
        <button className="search-button">🔍</button>
      </div>
      
      <h2>Recycling Information</h2>
      
      <div className="recycling-items">
        <div className="recycling-item">
          <img src="https://placehold.co/100x100/orange/white/" alt="Paper" className="item-image" />
          <div className="item-info">
            <h3>Paper</h3>
            <p>Recycle paper by placing it in the blue bin. Ensure it's clean and dry.</p>
          </div>
        </div>
        
        <div className="recycling-item">
          <img src="https://placehold.co/100x100/orange/white/" alt="Plastic" className="item-image" />
          <div className="item-info">
            <h3>Plastic</h3>
            <p>Only recycle plastics labeled 1 and 2. Rinse containers before recycling.</p>
          </div>
        </div>
        
        <div className="recycling-item">
          <img src="https://placehold.co/100x100/orange/white/" alt="Glass" className="item-image" />
          <div className="item-info">
            <h3>Glass</h3>
            <p>Recycle glass bottles and jars. Rinse them and remove lids before recycling.</p>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <button className="footer-button">ℹ️</button>
        <button className="footer-button">🗑️</button>
        <button className="footer-button">🔍</button>
      </div>
    </div>
  );
};

export default RecyclingGuide;