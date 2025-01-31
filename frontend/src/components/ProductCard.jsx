import React from 'react';

const ProductCard = ({ title, author, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{price}</p>
      <button>Ver Detalles</button>
    </div>
  );
};

export default ProductCard;
