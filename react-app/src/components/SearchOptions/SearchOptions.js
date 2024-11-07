// src/components/SearchOptions/SearchOptions.js
import React, { useState } from 'react';
import './SearchOptions.css';

const SearchOptions = () => {
  const [material, setMaterial] = useState({
    plastic: true,
    glass: true,
    metal: true,
  });

  const [showOnly, setShowOnly] = useState({
    curbsidePickup: true,
    dro: true,
    recycling: true,
    landfill: true,
  });

  const [typeOfWaste, setTypeOfWaste] = useState({
    plastic: true,
    paper: true,
    metal: true,
    glass: true,
  });

  const [disposal, setDisposal] = useState({
    recycling: true,
    composting: true,
    landfill: true,
  });

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search clicked');
  };

  const handleChange = (category, key) => {
    if (category === 'material') {
      setMaterial({ ...material, [key]: !material[key] });
    } else if (category === 'showOnly') {
      setShowOnly({ ...showOnly, [key]: !showOnly[key] });
    } else if (category === 'typeOfWaste') {
      setTypeOfWaste({ ...typeOfWaste, [key]: !typeOfWaste[key] });
    } else if (category === 'disposal') {
      setDisposal({ ...disposal, [key]: !disposal[key] });
    }
  };

  return (
    <div className="search-options-container">
      <h1>Search options for recycling</h1>
      <div className="search-option">
        <h2>Material</h2>
        <div className="option-group">
          <label>
            <input
              type="checkbox"
              checked={material.plastic}
              onChange={() => handleChange('material', 'plastic')}
            />
            Plastic (10,448)
          </label>
          <label>
            <input
              type="checkbox"
              checked={material.glass}
              onChange={() => handleChange('material', 'glass')}
            />
            Glass (4,208)
          </label>
          <label>
            <input
              type="checkbox"
              checked={material.metal}
              onChange={() => handleChange('material', 'metal')}
            />
            Metal (10,448)
          </label>
        </div>
      </div>
      <div className="search-option">
        <h2>Show only</h2>
        <div className="option-group">
          <label>
            <input
              type="checkbox"
              checked={showOnly.curbsidePickup}
              onChange={() => handleChange('showOnly', 'curbsidePickup')}
            />
            Curbside pickup
          </label>
          <label>
            <input
              type="checkbox"
              checked={showOnly.dro}
              onChange={() => handleChange('showOnly', 'dro')}
            />
            Dro (4,208)
          </label>
          <label>
            <input
              type="checkbox"
              checked={showOnly.recycling}
              onChange={() => handleChange('showOnly', 'recycling')}
            />
            Recycling (901)
          </label>
          <label>
            <input
              type="checkbox"
              checked={showOnly.landfill}
              onChange={() => handleChange('showOnly', 'landfill')}
            />
            Landfill (1,301)
          </label>
        </div>
      </div>
      <div className="search-option">
        <h2>Type of waste</h2>
        <div className="option-group">
          <label>
            <input
              type="checkbox"
              checked={typeOfWaste.plastic}
              onChange={() => handleChange('typeOfWaste', 'plastic')}
            />
            Plastic (6,412)
          </label>
          <label>
            <input
              type="checkbox"
              checked={typeOfWaste.paper}
              onChange={() => handleChange('typeOfWaste', 'paper')}
            />
            Paper (1,089)
          </label>
          <label>
            <input
              type="checkbox"
              checked={typeOfWaste.metal}
              onChange={() => handleChange('typeOfWaste', 'metal')}
            />
            Metal (131)
          </label>
          <label>
            <input
              type="checkbox"
              checked={typeOfWaste.glass}
              onChange={() => handleChange('typeOfWaste', 'glass')}
            />
            Glass (91)
          </label>
        </div>
      </div>
      <div className="search-option">
        <h2>Disposal</h2>
        <div className="option-group">
          <label>
            <input
              type="checkbox"
              checked={disposal.recycling}
              onChange={() => handleChange('disposal', 'recycling')}
            />
            Recycling (924)
          </label>
          <label>
            <input
              type="checkbox"
              checked={disposal.composting}
              onChange={() => handleChange('disposal', 'composting')}
            />
            Composting (1,768)
          </label>
          <label>
            <input
              type="checkbox"
              checked={disposal.landfill}
              onChange={() => handleChange('disposal', 'landfill')}
            />
            Landfill (37)
          </label>
        </div>
      </div>
      <button className="search-button" onClick={handleSearch}>Search</button>
      <footer className="footer-nav">
        <div className="nav-item">At-home</div>
        <div className="nav-item">Proper waste</div>
        <div className="nav-item">Understand</div>
        <div className="nav-item">Track disposal</div>
      </footer>
    </div>
  );
};

export default SearchOptions;
