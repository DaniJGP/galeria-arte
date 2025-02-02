import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>NOSOTROS</h3>
        <ul>
          <li><a href="/about">Link 1</a></li>
          <li><a href="/team">Link 2</a></li>
          <li><a href="/history">Link 3</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>TÉRMINOS Y CONDICIONES.</h3>
        <ul>
          <li><a href="/terms">Link 1</a></li>
          <li><a href="/privacy">Link 2</a></li>
          <li><a href="/cookies">Link 3</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CONTACTO</h3>
        <p>Info: info@example.com</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;