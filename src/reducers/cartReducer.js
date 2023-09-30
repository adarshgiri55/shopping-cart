const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const itemToAdd = action.payload;
        const isAlreadyInCart = state.items.some(item => item.id === itemToAdd.id);
        if (isAlreadyInCart) {
          return state;
        }
        return { ...state, items: [...state.items, itemToAdd] };
        
      case 'REMOVE_FROM_CART':
        const itemIdToRemove = action.payload;
        const updatedItems = state.items.filter(item => item.id !== itemIdToRemove);
        return { ...state, items: updatedItems };
        
      case 'RESET_CART':
        return { ...state, items: [] };
        
      default:
        return state;
    }
  };
  
  export default cartReducer;
  