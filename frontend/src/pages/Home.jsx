import React from 'react';
import ProductCard from '../components/ProductCard';
import '../App.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a la Galería de Arte</h1>
      <div className="gallery-grid">
        <ProductCard title="Obra 1" author="Autor 1" price="$100" image="../assets/images/obra1.jpg" />
        <ProductCard title="Obra 2" author="Autor 2" price="$200" image="../assets/images/obra2.jpg" />
        <ProductCard title="Obra 3" author="Autor 3" price="$300" image="../assets/images/obra3.jpg" />
      </div>
    </div>
  );
};

export default Home;
