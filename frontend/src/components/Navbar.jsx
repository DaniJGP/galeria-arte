import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="../assets/images/logo.png" alt="Galería de Arte" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/gallery">Artistas</a></li>
        <li><a href="/cart">Carrito</a></li>
        <li><a href="/login">Iniciar sesión</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;