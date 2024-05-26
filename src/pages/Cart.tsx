import { useCart } from '../contexts/CartContext';
import { useState, useEffect } from 'react';
import '../components/css/Cart.css';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  // Calcula o preço total do carrinho
  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  // Atualiza o preço total sempre que o carrinho for atualizado
  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <div className="cart-container">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price}</span>
                </div>
                <div className="item-actions">
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remover</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="quantity-input"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span className="total-label">Total:</span>
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="buy-button">Comprar</button>
        </div>
      )}
    </div>
  );
};
