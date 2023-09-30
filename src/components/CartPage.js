import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, resetCart } from '../actions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveFromCart = itemId => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    dispatch(resetCart());
    alert('Items have been checked out!');
  };

  return (
    <div>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
