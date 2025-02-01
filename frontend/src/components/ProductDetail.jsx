import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';


const images = import.meta.glob('../assets/images/*.jpg', { eager: true });

const ProductDetail = () => {
  const { id } = useParams();
  const imagePath = `../assets/images/obra${id}.jpg`;


  const image = images[imagePath]?.default || images['../assets/images/default.jpg'].default;

  const product = {
    id,
    title: `Obra ${id}`,
    author: `Autor ${id}`,
    price: `$${id}00`,
    image: image,
    description: `Descripción detallada de la obra ${id}.`
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.author}</p>
      <p>{product.price}</p>
      <p className="description">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
