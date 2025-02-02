import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const navigate = useNavigate(); // Hook para la navegación

  const product = {
    id,
    title: `Obra ${id}`,
    author: `Autor ${id}`,
    price: `$${id}00`,
    image: `/images/obra${id}.jpg`,
    description: `Descripción detallada de la obra ${id}.`,
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/cart'); // Redirigir al carrito
  };

  return (
    <div className="min-view-height d-flex justify-content-center align-items-center gap-5">
      <div>
        <img className="product-detail-img" src={product.image} alt={product.title} />
      </div>
      <div className="product-detail text-center">
        <h2>{product.title}</h2>
        <p>{product.author}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
