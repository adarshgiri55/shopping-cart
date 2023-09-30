import axios from 'axios';

export const setProducts = products => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const fetchProducts = () => {
  return dispatch => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        dispatch(setProducts(response.data));
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };
};

export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const removeFromCart = itemId => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: itemId,
  };
};

export const resetCart = () => {
  return {
    type: 'RESET_CART',
  };
};
