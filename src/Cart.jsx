import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from './cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleChange = (id, qty) => {
    if (qty < 1) return;
    dispatch(updateQuantity({ id, quantity: qty }));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleChange(item.id, parseInt(e.target.value))}
              style={{ width: '50px', marginLeft: '5px', marginRight: '5px' }}
            />
            = ${item.price * item.quantity}{' '}
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <p><strong>Total: ${total}</strong></p>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;