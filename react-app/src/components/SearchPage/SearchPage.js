// SearchPage.js
import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const recentSearches = ['Plastic Bottles', 'Battery Disposal', 'Paper Recycling'];

  return (
    <div className="search-page">
      <header className="header">
        <button className="back-button">←</button>
        <h1>♻️ EcoGuide</h1>
      </header>
      
      <div className="search-container">
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for recycling or disposal info" 
          className="search-input"
        />
      </div>
      
      <div className="filter-buttons">
        <button className="filter-button">Recycling</button>
        <button className="filter-button">Disposal</button>
      </div>
      
      <div className="recent-searches">
        <h2>Recent Searches</h2>
        <ul>
          {recentSearches.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
      
      <footer className="footer">
        <button className="footer-button">🏠</button>
        <button className="footer-button active">🔍</button>
        <button className="footer-button">👤</button>
      </footer>
    </div>
  );
};

export default SearchPage;