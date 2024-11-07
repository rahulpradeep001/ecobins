// src/App.js
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecyclingGuide from './components/RecyclingGuide/RecyclingGuide';
import DisposalGuide from './components/DisposalGuide/DisposalGuide';
import SearchPage from './components/SearchPage/SearchPage';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import SearchOptions from './components/SearchOptions/SearchOptions';
import CarbonFootprintForm from './components/Form/CarbonFootprintForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/recycle" element={<RecyclingGuide />} />
          <Route path="/disposal" element={<DisposalGuide />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search-options" element={<SearchOptions />} />
          <Route path="/carbon-footprint" element={<CarbonFootprintForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
