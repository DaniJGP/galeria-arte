import React from 'react';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="image-section">
        <img src="" alt="Obra" />
      </div>
      <div className="details-section">
        <h2>Nombre de la obra</h2>
        <p>Autor</p>
        <p>Descripción</p>
        <p>Precio</p>
        <button>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;