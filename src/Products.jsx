import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 },
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}{' '}
            <button onClick={() => dispatch(addItem(p))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;