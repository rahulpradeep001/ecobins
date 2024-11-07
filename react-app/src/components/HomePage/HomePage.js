// src/components/HomePage/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <nav>
          <div className="logo">EcoBins</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/recycling-guide">Recycling Guide</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Discover the best recycling methods</h1>
            <p>Learn how to recycle various materials effectively</p>
            <Link to="/about" className="cta-button">Get started</Link>
          </div>
          <img src="/images/people-sorting-garbage-recycling.png" alt="Person recycling" className="hero-image" />
        </section>

        <section className="features">
          <h2>Find eco solutions for a sustainable future</h2>
          <div className="feature-grid">
            <div className="feature">Recycle</div>
            <div className="feature">Reuse</div>
            <div className="feature">Reduce</div>
          </div>
          <img src="/images/top-view-minimal-recycling-concept.png" alt="Recycling guide" className="features-image" />
        </section>

        <section className="about">
          <div className="about-content">
            <h2>Protecting the environment with us</h2>
            <p>We prioritize environmental conservation by providing comprehensive recycling information and sustainable disposal methods. Our database ensures easy access to eco-friendly practices.</p>
          </div>
          <img src="/images/globewitihrecycle.png" alt="Globe with recycling concept" className="about-image" />
        </section>

        <section className="how-it-works">
          <h2>Join our eco-friendly community</h2>
          <p>Follow 3 steps for sustainable waste management:</p>
            <ol>
            <li>Connect with our experts for personalized recycling advice</li>
            <li>Receive tailored eco solutions for your recycling needs</li>
            <li>Embrace green practices for a cleaner environment</li>
           </ol>
          
          <Link to="/sign-up" className="cta-button">Sign up</Link><br />
        
          <img src="/images/Bins_001.jpg" alt="Recycling bottle" className="steps-image"/>
        </section> 

        <section className="testimonials">
          <h2>EcoBins Reviews</h2>
          <div className="testimonial">
            <p>"EcoBins is a game-changer for sustainability."</p>
            <div className="author">Alex Green, Sustainability Advocate</div>
            <div className="rating">★★★★★</div>
          </div>
          <img src="/images/person recycling.png" alt="Person with recycling symbols" className="testimonial-image" />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 EcoBins. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;