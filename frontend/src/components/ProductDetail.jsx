import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const product = {
    id: id,
    title: `Obra ${id}`,
    author: `Autor ${id}`,
    price: `$${id}00`,
    image: require(`../assets/images/obra${id}.jpg`).default,
    description: `Descripción detallada de la obra ${id}.`
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.author}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;