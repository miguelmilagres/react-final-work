import { useCart } from '../contexts/CartContext';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
