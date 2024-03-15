import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="left-section">
        
        <nav>
          <ul>
          <li><a href="#">HackerRank</a></li>
          <li><a href= "#">|</a></li>
            <li><a href="#">Prepare</a></li>
            <li><a href="#">Certify</a></li>
            <li><a href="#">Compete</a></li>
            <li><a href="#">Apply</a></li>
          </ul>
        </nav>
      </div>
      <div className="right-section">
        <input type="text" placeholder="Search" />
        <div className="auth-links">
          <a href="#" className="hiring-link">Hiring developers?</a>
          <a href="#" className="login-button">Log In</a>
          <a href="#" className="signup-button">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
