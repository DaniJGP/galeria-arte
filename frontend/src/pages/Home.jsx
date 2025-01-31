import React from 'react';
import ProductCard from '../components/ProductCard';
import '../App.css';
import obra1 from '../assets/images/obra1.jpg';
import obra2 from '../assets/images/obra2.jpg';
import obra3 from '../assets/images/obra3.jpg';

const Home = () => {
  const products = [
    { id: 1, title: "Obra 1", author: "Autor 1", price: "$100", image: obra1 },
    { id: 2, title: "Obra 2", author: "Autor 2", price: "$200", image: obra2 },
    { id: 3, title: "Obra 3", author: "Autor 3", price: "$300", image: obra3 }
  ];

  return (
    <div className="home">
      <h1>Bienvenido a la Galería de Arte</h1>
      <div className="gallery-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            author={product.author}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;