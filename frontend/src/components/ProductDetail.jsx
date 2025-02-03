import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';
import { useEffect, useState } from 'react';
import { getProductById } from '../helpers/productsAPI';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const navigate = useNavigate(); // Hook para la navegación
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/cart'); // Redirigir al carrito
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = getProductById(id);
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="min-view-height d-flex justify-content-center align-items-center gap-5">
      <div>
        <img className="product-detail-img" src={product.img_url} alt={product.title} />
      </div>
      <div className="product-detail text-center">
        <h2>{product.nombre}</h2>
        <p>{product.autor}</p>
        <p>{product.precio}</p>
        <p>{product.descripcion}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
