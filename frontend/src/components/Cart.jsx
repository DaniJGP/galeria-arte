import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemove = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} style={{ width: '80px' }} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
              <button onClick={() => handleRemove(item)} className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
