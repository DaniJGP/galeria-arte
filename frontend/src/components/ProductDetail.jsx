import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = {
    id: id,
    title: `Obra ${id}`,
    author: `Autor ${id}`,
    price: `$${id}00`,
    image: `/images/obra${id}.jpg`,
    description: `Descripción detallada de la obra ${id}.`,
  };

  return (
    <div className="min-view-height d-flex flex-row justify-content-center align-items-center gap-5">
      <div>
        <img className="product-detail-img" src={product.image} alt={product.title} />
      </div>
      <div className="product-detail text-center">
        <h2>{product.title}</h2>
        <p>{product.author}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
